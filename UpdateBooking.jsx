import React, { useState } from "react";
import "./UpdateBooking.css";
import { useNavigate } from "react-router-dom";

function UpdateBooking() {
  console.log("UpdateBooking component rendered");
  const [searchName, setSearchName] = useState("");
  const [booking, setBooking] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    timeSlot: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [step, setStep] = useState("search");
  const navigate = useNavigate();

  const timeSlots = [
    "11:00 AM",
    "12:30 PM",
    "2:00 PM",
    "5:30 PM",
    "7:00 PM",
    "8:30 PM",
  ];

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
        setFormData({
          fullName: data.booking.fullName,
          email: data.booking.email,
          subject: data.booking.subject,
          message: data.booking.message,
          timeSlot: data.booking.timeSlot,
        });
        setStep("form");
      } else {
        setError(data.message || "No booking found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Server error. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    console.log("Form submitted, proceeding to time selection");
    setStep("time");
  };

  const handleTimeSelect = async (e) => {
    const timeSlot = e.target.value;
    setFormData({ ...formData, timeSlot });
    console.log("Selected time slot:", timeSlot);

    try {
      const response = await fetch(`http://localhost:5000/bookings/${booking._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, timeSlot }),
      });

      const data = await response.json();
      console.log("Update response:", data);

      if (response.ok) {
        setSuccess(`Booking successfully updated for ${timeSlot}!`);
        setStep("success");
      } else {
        setError(data.message || "Error updating booking");
        setStep("form");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("Server error. Please try again later.");
      setStep("form");
    }
  };

  return (
    <div className="update-booking-page">
      <div className="update-booking-bg">
        <img
          className="update-booking-img"
          src="/images/update.jpg"
          alt="Restaurant Background"
        />
      </div>
      <div className="update-booking-overlay"></div>
      <div className="update-booking-cursor"></div>

      <div className="update-booking-wrapper">
        <div className="update-booking-left">
          <h1 className="update-booking-title">Update Booking</h1>
          <p className="update-booking-desc">
            Modify your reservation details seamlessly.
          </p>
        </div>
        <div className="update-booking-right">
          {step === "search" && (
            <form onSubmit={handleSearch} className="update-booking-form">
              <input
                type="text"
                placeholder="Enter Full Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                required
                className="update-booking-input"
              />
              {error && <p className="update-booking-error">{error}</p>}
              <button type="submit" className="update-booking-btn">Search Booking</button>
            </form>
          )}

          {step === "form" && (
            <form onSubmit={handleFormSubmit} className="update-booking-form">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="update-booking-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="update-booking-input"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="update-booking-input"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Message or Booking Details"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="update-booking-input"
              />
              {error && <p className="update-booking-error">{error}</p>}
              <button type="submit" className="update-booking-btn">Proceed to Time Selection</button>
            </form>
          )}

          {step === "time" && (
            <div className="update-booking-time-select">
              <p className="update-booking-time-label">Please select a new time slot:</p>
              <select onChange={handleTimeSelect} defaultValue="" className="update-booking-input">
                <option value="" disabled>Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          )}

          {step === "success" && (
            <div className="update-booking-success">
              <p className="update-booking-success-msg"> {success}</p>
              <button onClick={() => navigate("/reservation")} className="update-booking-btn">
                Back to Reservations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateBooking;