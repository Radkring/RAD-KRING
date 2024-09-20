import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from '../assets/nameremoved.png';  // Replace with your logo path
import eagleLogo from '../assets/Garuda.bg removed.png';  // Replace with your eagle logo path

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left: Company Logo */}
      <div className="navbar-logo">
        <img src={companyLogo} alt="Company Logo" className="logo-image" />
      </div>

      {/* Center: Eagle Logo */}
      <div className="navbar-center">
        <img src={eagleLogo} alt="Eagle Logo" className="eagle-logo" />
      </div>

      {/* Right: Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu active">
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
