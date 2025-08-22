import React from 'react';
import './AboutUs.css';
 // Update with your actual image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <p className="label">ABOUT US</p>
        <h1 className="headline">
          Crafting comfort<br />
          for your little <span className="highlight-wrapper">
            one's world
            <span className="highlight"></span>
          </span><br />
          since day one.
        </h1>
        <p className="descriptionn">
          At Baby Land, we believe furniture isn't just about function — it's about creating
          safe, cozy, and joyful spaces for your child to grow and play. Our journey began
          with a love for smart design, gentle materials, and thoughtful details tailored to young families.
          Whether you're furnishing a nursery or upgrading a playroom, we’re here to provide
          beautiful, durable, and baby-friendly solutions made with care.
        </p>
      </div>
      <div className="image-section">
        <img src={image} alt="Baby furniture or nursery setup" className="about-image" />
        <div className="bg-shape"></div>
      </div>
    </div>
  );
};

export default AboutUs;
