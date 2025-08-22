import React from "react";
import "./menustyling.css";

const DrinksMenuList = () => {
  return (
    <div className="menu-fullscreen">
      <img src="/blackbackground.jpg" className="background-image" alt="bg" />

      <div className="menu-content">
        <div className="left-video">
          <video autoPlay muted loop className="video-box">
            <source src="/teaa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="right-menu">
          <h1 className="menu-title">Mocktails</h1>
          <div className="menu-divider"><span>❧❧❧</span></div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Virgin Mojito</span>
              <span className="item-price">$10.00</span>
            </div>
            <p className="item-desc">Mint, lemon juice, and soda</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Strawberry Cooler</span>
              <span className="item-price">$12.00</span>
            </div>
            <p className="item-desc">Strawberry syrup, lime, and Sprite</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Blue Lagoon</span>
              <span className="item-price">$11.50</span>
            </div>
            <p className="item-desc">Blue curacao, lemon juice, soda</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Fruit Punch</span>
              <span className="item-price">$9.50</span>
            </div>
            <p className="item-desc">Mixed fruit juice blend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksMenuList;
