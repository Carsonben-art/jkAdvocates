"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <Image src="/logo.jpg" alt="Lawyer Logo" width={50} height={50} />
          <span>J.K Lampart & Co <br/>Advocates</span>
        </div>

        {/* Office Information */}
        <div className="footer-column">
          <h4>Office</h4>
          <p>Nairobi - Kenya</p>
          <p>Westlands, DTB Towers, 532</p>
          <p>info@jklampartadvocates.com</p>
          <p>+2547 1233 2667</p>
        </div>

        {/* Links Section */}
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Industry</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2023 J.K Lampart & Co Advocates. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;