import React from 'react';
import './Footer.css';
import qrImage from '../assets/companyqr.png'; // Adjust the path as needed

// Social Media Icons
const socialMediaIcons = [
  {
    src: "https://img.icons8.com/ios-filled/50/facebook--v1.png",
    alt: "Facebook",
    url: "https://www.facebook.com"
  },
  {
    src: "https://img.icons8.com/ios/50/twitterx--v2.png",
    alt: "Twitter",
    url: "https://www.twitter.com"
  },
  {
    src: "https://img.icons8.com/ios-filled/50/instagram-new--v1.png",
    alt: "Instagram",
    url: "https://www.instagram.com"
  },
  {
    src: "https://img.icons8.com/ios-filled/50/linkedin.png",
    alt: "LinkedIn",
    url: "https://www.linkedin.com"
  },
];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media-card">
        <div className="qr-code">
          <img src={qrImage} alt="Company QR Code" />
        </div>
        <h3>Follow Us</h3>
        <div className="social-icons">
          {socialMediaIcons.map(icon => (
            <a key={icon.alt} href={icon.url} target="_blank" rel="noopener noreferrer">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
      <div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>About</h4>
          <a href=""><p>Sankalpa V1</p></a>
          <a href=""><p>Our Team </p></a>
          <a href=""><p>Investors</p></a>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:example@example.com">radkring@gmail.com</a></p>
          <p>Phone No: <a href="tel:+91 8446552049">+91 8446552049</a></p>
        </div>
        <div className="footer-column">
          <h4>Our Address</h4>
          <p>Block 5, TCET, Thakur village</p>
          <p>Kandivali East, Mumbai, India</p>
        </div>
      </div>

      <div className="copyright-card">
        <div className="copyright">
          <p>Copyright © {new Date().getFullYear()} RAD KRING. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
