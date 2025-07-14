// components/Header.jsx
import React, { useState } from 'react';
import './Header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>EgroSpace</h1>
          </div>
          
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <div></div>
          </div>
          
          <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="cta-buttons">
            <button className="btn btn-secondary">Sign Up</button>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;