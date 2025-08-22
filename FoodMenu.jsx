import React from "react";
import "./menustyling.css";

const FoodMenu = () => {
  return (
    <div className="menu-fullscreen">
      <div className="menu-content">
        <div className="left-video">
          <video autoPlay muted loop className="video-box">
            <source src="/pizzaa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="right-menu">
          <h1 className="menu-title">Pizza</h1>
          <div className="menu-divider"><span>❧❧❧</span></div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Whole Grain Pizza</span>
              <span className="item-price">$25.00</span>
            </div>
            <p className="item-desc">Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Tortellini Gorgonzola</span>
              <span className="item-price">$18.50</span>
            </div>
            <p className="item-desc">Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Rigatoni Zuccati</span>
              <span className="item-price">$22.50</span>
            </div>
            <p className="item-desc">Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8</p>
          </div>

          <div className="menu-item">
            <div className="item-title-price">
              <span className="item-name">Spaghetti Marinara</span>
              <span className="item-price">$21.50</span>
            </div>
            <p className="item-desc">Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;

