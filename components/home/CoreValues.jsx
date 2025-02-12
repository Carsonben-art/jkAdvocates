"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CoreValues.css";

const coreValues = [
  {
    id: 1,
    title: "Integrity",
    description: "Upholding the highest standards of honesty and ethical behavior.",
    number: "01",
    bgColor: "#E4EFFA",
    textColor: "#1C2B40",
  },
  {
    id: 2,
    title: "Excellence",
    description: "Striving for superior performance and continuous improvement.",
    number: "02",
    bgColor: "#1C2B40",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    title: "Client Focus",
    description: "Prioritizing our clients' interests and providing personalized attention.",
    number: "03",
    bgColor: "#E4EFFA",
    textColor: "#1C2B40",
  },
  {
    id: 4,
    title: "Professionalism",
    description: "Maintaining a professional demeanor and respect in all interactions.",
    number: "04",
    bgColor: "#1C2B40",
    textColor: "#FFFFFF",
  },
  {
    id: 5,
    title: "Innovation",
    description: "Embracing new ideas and approaches to solve complex legal challenges.",
    number: "05",
    bgColor: "#E4EFFA",
    textColor: "#1C2B40",
  },
];

const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="core-values">
      {/* Animated Title */}
      <motion.h1 
        className="core-title"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Justice, Integrity, and a Pinch of Innovation – <span>Our Core Values!</span>
      </motion.h1>

      <div className="values-container" ref={ref}>
        {/* Animated Value Cards */}
        <motion.div 
          className="values-list"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              className="value-card"
              style={{ backgroundColor: value.bgColor, color: value.textColor }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <span className="value-number">{value.number}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Right Content */}
        <motion.div
          className="values-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Your rights matter, we are here to defend them!</h2>
          <p>
            We prioritize our clients' needs, understanding that each case is unique. 
            We are committed to delivering tailored solutions, ensuring you receive the attention 
            and representation you deserve. Our comprehensive expertise allows us to handle 
            a wide range of legal matters effectively.
          </p>
          <motion.button
            className="consultation-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get A Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
