import React, { useState } from 'react';
import './Navbar.css';
import eagleLogo from '../assets/Garuda.bg removed.png';  // Replace with your eagle logo path

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left: Brand Name */}
      <div className="navbar-logo">
        <a href="/" className="brand-name">RAD KRING</a>
      </div>

      {/* Center: Eagle Logo */}
      <div className="navbar-center">
        <img src={eagleLogo} alt="Eagle Logo" className="eagle-logo" />
      </div>

      {/* Right: Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#services" className="nav-link">Services</a>
        </li>
        <li>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
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
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
