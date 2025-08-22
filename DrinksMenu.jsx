import React from 'react';
import './menustyling.css';
import { useNavigate } from 'react-router-dom';

const DrinksMenu = () => {
  const navigate = useNavigate();

  const drinkCategories = [
    "Fresh Juices",
    "Smoothies",
    "Soft Drinks",
    "Mocktails"
  ];

  const handleViewAll = () => {
    navigate("/drinksmenu");
  };

  return (
    <div className="foodmenu-wrapper">
      <video autoPlay muted loop className="background-video">
        <source src="drink2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="menu-heading">Explore Our Drink Categories</h2>

      <div className="categories-grid">
        {drinkCategories.map((category, index) => (
          <div className="category-box" key={index}>
            <h3>{category}</h3>
            <button className="view-button" onClick={handleViewAll}>
              View All
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksMenu;
