import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './History.css';

function History() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    navigate('/about');
  };

  return (

    <div className="history-container">

      <h4 className="history-label">History</h4>
      <h1 className="history-heading">175 Years of Service</h1>
      <hr className="divider" />
      <p className="subheading">
        Welcome to our culinary legacy. Since 2018, we’ve reserved tables, served joy, and built memories — one dish at a time.
      </p>
      <p className="description">
        From traditional recipes passed down generations to modern delicacies, our restaurant blends history with flavor. Whether you’re dining in or reserving your favorite spot, we ensure every guest experiences warmth, taste, and tradition.
      </p>
      <button
        className={`about-button ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        MORE ABOUT US
      </button>
    </div>
  );
}

export default History;