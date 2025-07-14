// components/FeatureCard.jsx
import React from 'react';
import './FeatureCard.css';
import { MapPin, Calendar, Wifi, Star, CreditCard, Bell } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'map-pin':
        return <MapPin className="feature-icon" />;
      case 'calendar':
        return <Calendar className="feature-icon" />;
      case 'wifi':
        return <Wifi className="feature-icon" />;
      case 'star':
        return <Star className="feature-icon" />;
      case 'credit-card':
        return <CreditCard className="feature-icon" />;
      case 'bell':
        return <Bell className="feature-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-icon-container">
        {getIcon(icon)}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;