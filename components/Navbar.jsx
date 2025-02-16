"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaCommentDots } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Image src="/logo.jpg" alt="Lawyer Logo" width={40} height={40} />
          <span>J.K Advocates</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/industries">Industry</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li className="nav-button">
            <Link href="#">
              <FaCommentDots /> Book a Call
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;