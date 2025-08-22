
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB Error:', err));

// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// Booking Schema
const Booking = require('./models/Booking');

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// SignUp Route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Forgot Password Route
app.post('/ForgotPassword', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: 'Password Reset Request',
            text: `Click here to reset your password: ${resetUrl}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email' });
            }
            res.status(200).json({ message: 'Password reset link sent successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request' });
    }
});

// Reset Password Route
app.post('/ResetPassword', async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.findByIdAndUpdate(decoded.userId, { password: hashedPassword });
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token' });
    }
});

// Booking Route
app.post('/book', async (req, res) => {
    const { fullName, email, subject, message, timeSlot } = req.body;
    try {
        const newBooking = new Booking({
            fullName,
            email,
            subject,
            message,
            timeSlot,
        });
        await newBooking.save();

        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: 'Booking Confirmation',
            text: `Dear ${fullName},\n\nYour booking at ${timeSlot} has been confirmed.\n\nDetails:\nSubject: ${subject}\nMessage: ${message}\n\nThank you for choosing Delightful Bites!`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            }
        });

        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking' });
    }
});

// Fetch Booking by Name
app.get('/bookings', async (req, res) => {
    const { name } = req.query;
    try {
        const booking = await Booking.findOne({ fullName: name });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ booking });
    } catch (error) {
        console.error('Error fetching booking:', error);
        res.status(500).json({ message: 'Error fetching booking' });
    }
});

// Update Booking
app.put('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const { fullName, email, subject, message, timeSlot } = req.body;
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { fullName, email, subject, message, timeSlot },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const mailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: 'Booking Update Confirmation',
            text: `Dear ${fullName},\n\nYour booking at ${timeSlot} has been updated.\n\nDetails:\nSubject: ${subject}\nMessage: ${message}\n\nThank you for choosing Delightful Bites!`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            }
        });

        res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: 'Error updating booking' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
