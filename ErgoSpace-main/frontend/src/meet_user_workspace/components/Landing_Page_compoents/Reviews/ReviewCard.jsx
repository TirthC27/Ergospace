// components/ReviewCard.jsx
import React from 'react';
import { Star } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ rating, quote, name, title }) => {
  return (
    <div className="reviewsss-card">
      <div className="review-rating">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} fill="#FFD700" color="#FFD700" size={20} />
        ))}
      </div>
      <blockquote>"{quote}"</blockquote>
      <div className="reviewer-info">
        <p className="reviewer-name">{name}</p>
        <p className="reviewer-title">{title}</p>
      </div>
    </div>
  );
};

export default ReviewCard;