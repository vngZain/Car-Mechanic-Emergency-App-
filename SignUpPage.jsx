import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
      });
      alert(' ' + response.data.message);
    } catch (error) {
      if (error.response) {
        alert(' ' + error.response.data.message);
      } else {
        alert(' Sign up failed!');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter 6 characters or more"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#e11d48', fontWeight: 500, textDecoration: 'none' }}>
            Login
          </Link>
        </p>
        <button onClick={handleSignUp}>Sign Up</button>


        <div className="social-buttons">
          <button className="google">
            <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="facebook">
            <img src="https://img.icons8.com/ios-filled/20/3b5998/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
