import React from "react";
import "./Ambience.css";
import { Link } from "react-router-dom";

const ambienceImages = [
  "/images/furniture1.jpg",
  "/images/furniture2.jpg",
  "/images/furniture3.jpg",
  "/images/furniture4.jpg",
  "/images/furniture5.jpg",
  "/images/furniture6.jpg",
  "/images/furniture7.jpg",
  "/images/furniture8.jpg",
];

function Ambience() {
  return (
    <div className="ambience">
      <div className="ambience-section">
        <div className="ambience-overlay" />
        <h1 className="ambience-title">Baby Land Showroom</h1>
        <p className="ambience-description">
          Step into our world of comfort, safety, and style. Explore our charming
          Baby Land furniture showroom designed for your little one’s happy space.
        </p>

        <div className="ambience-gallery">
          {ambienceImages.map((src, index) => (
            <div
              key={index}
              className="ambience-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={src} alt={`Furniture ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Baby Land Furniture</h2>
          <p>
            Safe, cozy, and beautiful furniture made for your little ones to grow, play, and dream.
          </p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/OurCollection">Our Collection</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Baby Land Furniture. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Ambience;
