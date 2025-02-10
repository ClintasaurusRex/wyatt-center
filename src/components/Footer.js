import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Healing Way</p>
          <p>Portland, OR 97201</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@wyattcenter.com</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section" id="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li className="quick-links">
              <a href="#services">Services</a>
            </li>
            <li className="quick-links">
              <a onClick={() => navigate("/about")} href="#about">
                About Us
              </a>
            </li>
            <li className="quick-links">
              <a href="#booking">Book Appointment</a>
            </li>
            <li className="quick-links">
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wyatt Center for Healing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
