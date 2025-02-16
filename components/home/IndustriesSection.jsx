"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./IndustrialSection.module.css";

const industries = [
  { title: "Corporate Law", desc: "Advising businesses on legal matters, including mergers and acquisitions, corporate governance, and compliance.", img: "/corporate.jpg" },
  { title: "Litigation", desc: "Representing clients in civil and commercial disputes, including mediation and arbitration.", img: "/litigation.jpg" },
  { title: "Real Estate Law", desc: "Handling property transactions, leasing agreements, and land disputes.", img: "/real-estate.jpg" },
  { title: "Employment Law", desc: "Assisting with employment contracts, labor disputes, and workplace policies.", img: "/employment.jpg" },
  { title: "Intellectual Property", desc: "Protecting intellectual property rights, including trademarks, copyrights, and patents.", img: "/intelligent.jpg" },
  { title: "Family Law", desc: "Providing legal support for family-related matters, including divorce, custody, and inheritance issues.", img: "/family.jpg" },
  { title: "Commercial Law", desc: "Advising on commercial contracts, trade regulations, and business disputes.", img: "/commercial.jpg" },
];

const IndustriesSection = () => {
  const controls = useAnimation();
//   const [isHovered, setIsHovered] = useState(false);

  
  const animation = {
    x: ["0%", "-100%"], 
    transition: {
      ease: "linear",
      repeat: Infinity, 
      duration:  40 , 
    },
  };

  useEffect(() => {
    controls.start(animation);
  }, [controls, animation]);

  return (
    <section className={styles.industriesSection}>
      <h4 className={styles.subheading}>Our Practice Areas</h4>
      <h1 className={styles.heading}>Comprehensive Legal Solutions: <br/> Protecting Your Business, Assets, and Rights</h1>

      <div
        className={styles.sliderContainer}
        
      >
        <motion.div
          className={styles.slider}
          animate={controls}
        >
          {/* Duplicate content for seamless infinite effect */}
          {[...industries, ...industries].map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <Image
                src={industry.img}
                alt={industry.title}
                width={350}
                height={200}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDesc}>{industry.desc}</p>
                <a href="#" className={styles.exploreLink}>
                  Explore More →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;