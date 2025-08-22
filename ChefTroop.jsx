import React, { useState } from "react";
import "./ChefTroop.css";
import { useNavigate, Link } from "react-router-dom";

const chefs = [
    {
        name: "Kevin Luo",
        title: "Head Chef",
        image: "./images/chef1.jpg",
        bio: "Expert in Asian fusion with a twist of creativity.",
    },
    {
        name: "Patrick Choi",
        title: "Deputy Chef",
        image: "./images/chef2.jpg",
        bio: "Specialist in classic European and Asian cuisines.",
        detail: {
            experience: "20+ years",
            education: "Culinary Institute of Hong Kong",
            awards: "Best Chef Award - Asia 2018",
        },
    },
    {
        name: "Jack Biseoff",
        title: "Station Chef",
        image: "./images/chef3.jpg",
        bio: "Known for his BBQ and grill mastery.",
    },
    {
        name: "Stacy Lee",
        title: "Sous Chef",
        image: "./images/chef5.jpg",
        bio: "Pastry perfectionist and dessert innovator.",
    },
];

const ChefTroop = () => {
    const [selectedChef, setSelectedChef] = useState(chefs[1]);

    return (
        <div className="chef-container">
            <div className="chef-header">
                <h3>Our Chef</h3>
                <h1>Chef Troop</h1>
                <p>
                    Get your team of chefs some spotlight with Gericht, finely designed chef
                    introduction section which can be the center of attraction for multi-cuisine
                    restaurants.
                </p>
            </div>

            <div className="chef-grid">
                {chefs.map((chef, index) => (
                    <div
                        key={index}
                        className="chef-card"
                        onClick={() => setSelectedChef(chef)}
                    >
                        <img src={chef.image} alt={chef.name} />
                        <h3>{chef.name}</h3>
                        <p>{chef.title}</p>
                    </div>
                ))}
            </div>

            <div className="chef-detail">
                <img src={selectedChef.image} alt={selectedChef.name} />
                <div className="detail-info">
                    <h2>{selectedChef.title}</h2>
                    <h1>{selectedChef.name}</h1>
                    <p>{selectedChef.bio}</p>

                    {selectedChef.detail && (
                        <ul>
                            <li><strong>Experience:</strong> {selectedChef.detail.experience}</li>
                            <li><strong>Education:</strong> {selectedChef.detail.education}</li>
                            <li><strong>Awards:</strong> {selectedChef.detail.awards}</li>
                        </ul>
                    )}

                    <p className="signature">~ {selectedChef.name}</p>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <h2>Flavors Fusion</h2>
                    <p>
                        Bringing Culinary Excellence With The Finest Chefs From Around The World.
                    </p>
                    <div className="footer-links">
                        <a href="#">Home</a>
                        <Link to="/ChefTroop">Our Chefs</Link>

                        <a href="/foodmenu">Menu</a>
                        <a href="/ContactUs">Contact</a>
                    </div>
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} Flavors Fusion. All Rights Reserved.
                    </p>
                </div>
            </footer>


        </div>


    );
};

export default ChefTroop;
