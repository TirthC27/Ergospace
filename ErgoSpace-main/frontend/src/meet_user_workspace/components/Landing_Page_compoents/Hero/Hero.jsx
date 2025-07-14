// components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from "../../../assets/hero-image.jpeg";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find Your Perfect Workspace, Anywhere</h1>
            <p className="subheadline">
              Connect with cafés, coworking spaces, and offices that match your exact needs—book by the hour, day, or month.
            </p>
            <p className="description">
              WorkSpace helps remote workers find and book ideal work environments while enabling businesses to monetize their unused space. Join thousands of productive professionals finding their perfect spot to work.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/workspaces')}>Find a Workspace</button>
              <button className="btn btn-secondary">List Your Space</button>
            </div>
          </div>
          <div className="hero-image">
            <img src= {heroImage} alt="Remote worker and business owner using WorkSpace" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;