// components/Reviews.jsx
import React from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      quote: "I've found amazing cafés with perfect working conditions that I never would have discovered otherwise. The booking process is seamless, and I love being able to see real photos before I commit.",
      name: "Sarah T.",
      title: "Freelance Designer"
    },
    {
      id: 2,
      rating: 5,
      quote: "As a café owner, I've seen a 30% increase in weekday revenue since listing on WorkSpace. The platform handles all the bookings and payments automatically, allowing me to focus on providing a great experience.",
      name: "Michael L.",
      title: "Café Owner"
    },
    {
      id: 3,
      rating: 5,
      quote: "Our team uses WorkSpace to find meeting locations when we need to collaborate in person. The filtering options help us find exactly what we need, and the booking history makes expense reporting simple.",
      name: "Priya K.",
      title: "Remote Team Lead"
    }
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
        </div>
        <div className="reviews-carousel">
          {reviews.map(review => (
            <ReviewCard 
              key={review.id}
              rating={review.rating}
              quote={review.quote}
              name={review.name}
              title={review.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;