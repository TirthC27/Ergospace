// components/CafeSection/CafeSection.jsx
import React from 'react';
import './CafeSection.css';

import cafeOwner from "../../../assets/cafe-owner.jpeg";

const CafeSection = () => {
  return (
    <section className="cafe-section" id='how-it-works'>
      <div className="container">
        <div className="cafe-content">
          <div className="cafe-text">
            <h2>For Cafés: Transform Your Space into a Productive Hub</h2>
            <p className="cafe-subtitle">Turn quiet hours into profitable workspace time</p>
            
            <div className="cafe-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="icon-revenue"></i>
                </div>
                <div className="benefit-content">
                  <h3>Increase Revenue</h3>
                  <p>Generate additional income during traditionally slow hours. Most cafés see a 30-40% increase in weekday revenue.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="icon-customers"></i>
                </div>
                <div className="benefit-content">
                  <h3>Attract Loyal Customers</h3>
                  <p>Remote workers often become regular patrons, visiting 3-4 times weekly and spending more than casual customers.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="icon-management"></i>
                </div>
                <div className="benefit-content">
                  <h3>Seamless Management</h3>
                  <p>Our platform handles bookings, payments, and customer communication, requiring minimal effort from your staff.</p>
                </div>
              </div>
            </div>
            
            <div className="cafe-cta">
              <button className="btn btn-primary">List Your Café</button>
              <a href="#cafe-stories" className="link-arrow">See Success Stories</a>
            </div>
          </div>
          
          <div className="cafe-image">
            <img src={cafeOwner} alt="Café transformed into a productive workspace" />
            <div className="cafe-stats">
              <div className="stat-item">
                <h4>+35%</h4>
                <p>Average Weekday Revenue</p>
              </div>
              <div className="stat-item">
                <h4>2.5hrs</h4>
                <p>Average Booking Duration</p>
              </div>
              <div className="stat-item">
                <h4>84%</h4>
                <p>Become Repeat Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeSection;