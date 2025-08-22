import React, { useState } from "react";
import "./DeleteBooking.css";
import { useNavigate } from "react-router-dom";

function DeleteBooking() {
  console.log("DeleteBooking component rendered");
  const [searchName, setSearchName] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [step, setStep] = useState("search");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
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
        setStep("confirm");
      } else {
        setError(data.message || "No booking found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Server error. Please try again later.");
    }
  };

  const handleDelete = async () => {
    setError("");
    setSuccess("");
    console.log("Deleting booking with ID:", booking._id);

    try {
      const response = await fetch(`http://localhost:5000/bookings/${booking._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Delete response:", data);

      if (response.ok) {
        setSuccess("Booking successfully deleted!");
        setStep("success");
      } else {
        setError(data.message || "Error deleting booking");
        setStep("confirm");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setError("Server error. Please try again later.");
      setStep("confirm");
    }
  };

  return (
    <div className="delete-booking-page">
      <div className="delete-booking-bg">
        <img
          className="delete-booking-img"
          src="/images/update.jpg"
          alt="Restaurant Background"
        />
      </div>
      <div className="delete-booking-overlay"></div>
      <div className="delete-booking-cursor"></div>

      <div className="delete-booking-wrapper">
        <div className="delete-booking-left">
          <h1 className="delete-booking-title">Delete Your Booking</h1>
          <p className="delete-booking-desc">
            Search and cancel your existing reservation.
          </p>
        </div>
        <div className="delete-booking-right">
          {step === "search" && (
            <form onSubmit={handleSearch} className="delete-booking-form">
              <input
                type="text"
                placeholder="Enter Full Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                required
                className="delete-booking-input"
              />
              {error && <p className="delete-booking-error">{error}</p>}
              <button type="submit" className="delete-booking-btn">Search Booking</button>
            </form>
          )}

          {step === "confirm" && (
            <div className="delete-booking-confirm">
              <p className="delete-booking-confirm-text">
                Are you sure you want to delete the booking for <strong>{booking.fullName}</strong> at <strong>{booking.timeSlot}</strong>?
              </p>
              {error && <p className="delete-booking-error">{error}</p>}
              <div className="delete-booking-confirm-buttons">
                <button onClick={handleDelete} className="delete-booking-btn delete">
                  Confirm Delete
                </button>
                <button
                  onClick={() => navigate("/reservation")}
                  className="delete-booking-btn cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="delete-booking-success">
              <p className="delete-booking-success-msg"> {success}</p>
              <button onClick={() => navigate("/reservation")} className="delete-booking-btn">
                Back to Reservations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeleteBooking;