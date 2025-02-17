"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "./IndustrialSection.module.css";

import industries from "@/app/data";

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
                <p className={styles.cardDesc}>{industry.description}</p>
                <Link href={`/industry/${industry.id}`} className={styles.exploreLink}>
                  Explore More →
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        <div className={styles.buttonContainer}>
          <a href="/industries"><button className={styles.viewAll}>View All</button></a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;