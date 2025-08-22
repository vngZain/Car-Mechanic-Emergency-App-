import React from 'react';
import './Location.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Location = () => {
    return (
        <div className="location-container">
            <div className="location-content">
                <h1>Our Location</h1>
                <p className="location-description">
                    Visit Baby Land Furniture at our showroom or get in touch for premium baby furniture. 
                    We are always happy to assist parents in creating the perfect nursery.
                </p>

                <div className="location-details">
                    <div className="info-box">
                        <FaMapMarkerAlt className="icon" />
                        <p><strong>Address:</strong> Baby Land Furniture Showroom, Liberty Plaza, Main Boulevard, Lahore, Pakistan</p>
                    </div>

                    <div className="info-box">
                        <FaPhoneAlt className="icon" />
                        <p><strong>Phone:</strong> +92 300 4567890</p>
                    </div>

                    <div className="info-box">
                        <FaClock className="icon" />
                        <p><strong>Hours:</strong> Mon - Sat: 10:00 AM – 8:00 PM | Sun: 12:00 PM – 6:00 PM</p>
                    </div>
                </div>

                <div className="map-frame">
                    <iframe
                        title="babyland-furniture-location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.320472256055!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd3c3b9d6f%3A0x8c083f5bd34625d5!2sLiberty%20Plaza%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
