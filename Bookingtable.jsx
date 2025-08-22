import React, { useState } from "react";
import styles from "./Bookingtable.module.css";

function Bookingtable() {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    setStep("time");
  };

  const handleTimeSelect = async (e) => {
    const timeSlot = e.target.value;
    setSelectedTime(timeSlot);

    try {
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timeSlot }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep("success");
      } else {
        setError(data.message || "Error creating booking");
        setStep("form");
      }
    } catch {
      setError("Server error. Please try again later.");
      setStep("form");
    }
  };

  const timeSlots = [
    "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "7:30 PM"
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Book a Visit</h1>
        <p className={styles.description}>
          Schedule a consultation or showroom visit with our <strong>Babyland</strong> experts.
        </p>

        <div className={styles.info}>
          <p><strong>Email:</strong><br /><a href="mailto:support@babylandfurniture.com">support@babylandfurniture.com</a></p>
          <p><strong>Phone:</strong><br /><a href="tel:+15552349876">+1 555-234-9876</a></p>
          <p><strong>Store Address:</strong><br />123 Nursery Lane, Chicago, IL 60601</p>
          <p><strong>Opening Hours:</strong><br />Mon - Sat: 10AM – 7PM<br />Sunday: Closed</p>
        </div>
      </div>

      <div className={styles.right}>
        {step === "form" && (
          <form onSubmit={handleFormSubmit} className={styles.form}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (e.g., Consultation, Product Inquiry)"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Message or details of your visit request"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={styles.textarea}
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button type="submit" className={styles.button}>Next</button>
          </form>
        )}

        {step === "time" && (
          <div className={styles.timeSelectContainer}>
            <p className={styles.selectLabel}>Choose a time for your appointment:</p>
            <select onChange={handleTimeSelect} defaultValue="" className={styles.select}>
              <option value="" disabled>Select a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        )}

        {step === "success" && (
          <p className={styles.successMessage}>
            🎉 Booking confirmed at <strong>{selectedTime}</strong>!  
            We look forward to welcoming you at Babyland.
          </p>
        )}
      </div>
    </div>
  );
}

export default Bookingtable;
