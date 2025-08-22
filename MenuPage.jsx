import React from "react";
import "./menustyling.css";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "",
    };
  }

  handleViewFood = () => {
    this.setState({ activeButton: "food" });
    this.props.navigate("/newmenu");
  };

  handleViewDrinks = () => {
    this.setState({ activeButton: "wine" });
    this.props.navigate("/D1");
  };

  render() {
    const { activeButton } = this.state;

    return (
      <div className="menu-container">
        <div className="menu-half">
          <img src="/drink.jpg" alt="Bar Menu" className="menu-bg" />
          <div className="overlay">
            <h1 className="title">Bar Menu</h1>
            <hr className="divider" />
            <p className="description">
              Explore our exclusive selection of handcrafted cocktails and fine wines, perfectly curated to complement every occasion.
            </p>
            <button
              className={`menu-button ${activeButton === "wine" ? "active" : ""}`}
              onClick={this.handleViewDrinks}
            >
              View Our Drinks
            </button>
          </div>
        </div>

        <div className="menu-half">
          <img src="/burger.jpg" alt="Food Menu" className="menu-bg" />
          <div className="overlay">
            <h1 className="title">Food Menu</h1>
            <hr className="divider" />
            <p className="description">
              Savor the rich flavors of our gourmet dishes, prepared fresh with quality ingredients to delight your taste buds.
            </p>
            <button
              className={`menu-button ${activeButton === "food" ? "active" : ""}`}
              onClick={this.handleViewFood}
            >
              View Our Food
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuPage;
