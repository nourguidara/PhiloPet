import React from 'react';
import { Link } from 'react-router-dom';
import './FooterNav.css'; // Import the associated CSS file

function FooterNav() {
  return (
    <footer className="footer-section">
      <p>Sign up now so you don't miss our promotions</p>
      <div className="subscribe-container">
        <input
          type="email"
          placeholder="Enter your email"
          className="subscribe-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>

      <nav className="footer-nav-links">
        <Link to="/">Home</Link> | 
        <Link to="/Shop">Shop</Link> | 
        <Link to="/Adoption">Adoption</Link> | 
        <Link to="/Resources">Resources</Link> | 
        <Link to="/About-us">About Us</Link>
      </nav>

      <p>© 2024 PhiloPet. All rights reserved.</p>
    </footer>
  );
}

export default FooterNav;
