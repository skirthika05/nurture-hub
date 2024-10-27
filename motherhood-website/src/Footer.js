// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer({setPage}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} NURTURE HUB. All rights reserved.</p>
        <div className="footer-links">
        <button onClick={() => setPage('about')}>About Us</button>
          <button onClick={() => setPage('contact')}>Contact</button>
          
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
