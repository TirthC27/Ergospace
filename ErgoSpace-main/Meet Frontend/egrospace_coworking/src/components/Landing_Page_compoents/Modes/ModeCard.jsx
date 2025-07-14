// components/ModeCard.jsx
import React from 'react';
import './ModeCard.css';

const ModeCard = ({ image, title, description }) => {
  return (
    <div className="mode-card">
      <div className="mode-image">
        <img src={image} alt={title} />
      </div>
      <div className="mode-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ModeCard;