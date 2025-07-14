// components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="container">
        <div className="footer-content">
          <div className="footer-company">
            <div className="footer-logo">
              <h2>WorkSpace</h2>
            </div>
            <p className="tagline">Find your perfect place to work</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-group">
              <h3>For Workers</h3>
              <ul>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Find Spaces</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h3>For Space Providers</h3>
              <ul>
                <li><a href="#">List Your Space</a></li>
                <li><a href="#">Provider Guidelines</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Get the latest on new spaces and features</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 WorkSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;