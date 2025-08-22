import React, { useState } from "react";
import "./ReadBooking.css";
import { useNavigate } from "react-router-dom";

function ReadBooking() {
  console.log("ReadBooking component rendered");
  const [searchName, setSearchName] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [step, setStep] = useState("search");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Searching for booking with name:", searchName);

    try {
      const response = await fetch(`http://localhost:5000/bookings?name=${searchName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Search response:", data);

      if (response.ok && data.booking) {
        setBooking(data.booking);
        setStep("details");
      } else {
        setError(data.message || "No booking found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="read-booking-page">
      <div className="read-booking-bg">
        <img
          className="read-booking-img"
          src="/images/update.jpg"
          alt="Restaurant Background"
        />
      </div>
      <div className="read-booking-overlay"></div>
      <div className="read-booking-cursor"></div>
      
      <div className="read-booking-wrapper">
        <div className="read-booking-left">
          <h1 className="read-booking-title">View Your Booking</h1>
          <p className="read-booking-desc">
            Search to view the details of your reservation.
          </p>
        </div>
        <div className="read-booking-right">
          {step === "search" && (
            <form onSubmit={handleSearch} className="read-booking-form">
              <input
                type="text"
                placeholder="Enter Full Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                required
                className="read-booking-input"
              />
              {error && <p className="read-booking-error">{error}</p>}
              <button type="submit" className="read-booking-btn">Search Booking</button>
            </form>
          )}

          {step === "details" && (
            <div className="read-booking-details">
              <h2 className="read-booking-details-title">Booking Details</h2>
              <p className="read-booking-detail">
                <strong>Full Name:</strong> {booking.fullName}
              </p>
              <p className="read-booking-detail">
                <strong>Email:</strong> {booking.email}
              </p>
              <p className="read-booking-detail">
                <strong>Subject:</strong> {booking.subject}
              </p>
              <p className="read-booking-detail">
                <strong>Message:</strong> {booking.message}
              </p>
              <p className="read-booking-detail">
                <strong>Time Slot:</strong> {booking.timeSlot}
              </p>
              <button
                onClick={() => navigate("/reservation")}
                className="read-booking-btn"
              >
                Back to Reservations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReadBooking;