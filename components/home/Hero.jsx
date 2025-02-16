"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const textVariants = {
    initial: { y: 0 },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="hero-section">
      <div className="content-container">
        <motion.h1
          initial="initial"
          whileHover="hover"
          variants={textVariants}
        >
          Your Trusted Legal Partner – J. K. Lampart & Co Advocates
        </motion.h1>
        <p>
        Trust us to be your legal partner in navigating the complexities of the law.
        </p>
        <div className="buttons-container">
          <motion.button
            className="book-call"
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
          >
            Book a Call
          </motion.button>
          <motion.button
            className="contact"
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
          >
            +2547 1233 2667
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
