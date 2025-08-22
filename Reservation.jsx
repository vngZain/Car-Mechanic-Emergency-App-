import React from "react";
import "./Reservation.css";
import bgImage from "./assets/image1.png";
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay" />
      <div className="hero-content">
        <p className="hero-label">Welcome to Delightful Bites</p>
        <h1 className="hero-title">
          Taste the Flavors <br /> of Authentic Cuisine
        </h1>
        <p className="hero-subtext">
          At Delightful Bites, we believe in making every meal a celebration.
          From cozy dinners to unforgettable moments, our chefs craft dishes that
          ignite your senses and satisfy your soul.
        </p>
        <div className="hero-buttons">
          <button className="rev" onClick={() => navigate('/Bookingtable')}>
            Book Table
          </button>
          <button className="rev" onClick={() => navigate('/update-booking')}>
            Change Booking
          </button>
          <button className="rev" onClick={() => navigate('/delete-booking')}>
            Cancel Booking
          </button>
          <button className="rev" onClick={() => navigate('/read-booking')}>
            View Booking
          </button>
        </div>
        <p className="footer-note">
          Open Daily | 11 AM – 11 PM | Fine Dining · Family Friendly · Outdoor Seating
        </p>
      </div>
    </div>
  );
};

export default Reservation;