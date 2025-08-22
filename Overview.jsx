import React from "react";
import "./Overview.css";

function Overview() {
  return (
    <div className="overview-section">
      <div className="overview-bg"></div>
      <div className="overview-overlay"></div>
      <div className="overview-content">
        <h1>Welcome to Baby Land Furniture</h1>
        <p>
          Discover a world of comfort, safety, and style for your little one.
          At Baby Land Furniture, we bring together quality craftsmanship and
          thoughtful designs to make every nursery special.
        </p>
        <div className="overview-cards">
          <div className="overview-card">
            <h3>Safe & Certified Products</h3>
            <p>
              All our furniture meets the highest safety standards to ensure your
              baby’s well-being.
            </p>
          </div>
          <div className="overview-card">
            <h3>Stylish & Functional Designs</h3>
            <p>
              From cribs to dressers, our pieces combine beauty and practicality
              to fit every nursery.
            </p>
          </div>
          <div className="overview-card">
            <h3>Trusted by Parents</h3>
            <p>
              Join thousands of families who trust Baby Land for durability,
              comfort, and lasting quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
