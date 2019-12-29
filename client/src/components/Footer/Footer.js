// Imports ========================================================================================

import React from "react";
import './Footer.css';

// Functions ======================================================================================

const Footer = () => {
  return (
    <footer className="page-footer mt-auto">
      <div className="footer-copyright">
        <div className="container text-center" style={{opacity: 0.5}}>
          <span id="footerText"> &copy; 2019 Luke B, Krishti B, Maurice W 
            <a href="https://github.com/LMBoyle/cheapo">
              <i className="icon-github"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
};

// Export =========================================================================================

export default Footer;