import React from 'react';
import './menustyling.css';
import { useNavigate } from 'react-router-dom';

const NewMenu = () => {
  const categories = [
    "Pakistani Cuisine",
    "Italian Cuisine",
    "Mexican Cuisine",
    "American Cuisine"
  ];

  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/foodmenu");
  };

  return (
    <div className="foodmenu-wrapper">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src="video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="menu-heading">Explore Our Food Categories</h2>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-box" key={index}>
            <h3>{category}</h3>
            <button className="view-button" onClick={handleViewAll}>View All</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMenu;

