// components/Features.jsx
import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'map-pin',
      title: 'Smart Location Search',
      description: 'Find workspaces near you with GPS-enabled searching, filtering by distance, amenities, and availability.'
    },
    {
      id: 2,
      icon: 'calendar',
      title: 'Flexible Booking Options',
      description: 'Book by the hour, day, or month with instant confirmation and calendar integration.'
    },
    {
      id: 3,
      icon: 'wifi',
      title: 'Verified Amenities',
      description: 'Filter spaces by must-have amenities like high-speed WiFi, private rooms, power outlets, and more.'
    },
    {
      id: 4,
      icon: 'star',
      title: 'Trusted Reviews',
      description: 'Make confident decisions with verified reviews from other remote workers.'
    },
    {
      id: 5,
      icon: 'credit-card',
      title: 'Secure Payments',
      description: 'Pay safely through our platform with multiple payment options and automatic receipts.'
    },
    {
      id: 6,
      icon: 'bell',
      title: 'Real-Time Notifications',
      description: 'Get updates about your bookings, special offers, and important information.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need for Productive Remote Work</h2>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;