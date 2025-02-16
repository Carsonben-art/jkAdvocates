"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./IntegritySection.module.css";

const IntegritySection = () => {
  const [expanded, setExpanded] = useState({
    record: true,
    approach: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className={styles.integritySection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/litigation.jpg" 
            alt="Legal Consultation"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>We uphold the highest standards of integrity</h1>
          <p className={styles.description}>
            We prioritize our clients' needs, understanding that each case is unique. 
            Our team of seasoned attorneys is committed to delivering tailored solutions, 
            ensuring you receive the attention and representation you deserve. 
            Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
          </p>

          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleExpand("record")}>
                <span>Proven track record</span>
                <span className={styles.icon}>{expanded.record ? "−" : "+"}</span>
              </button>
              {expanded.record && (
                <p className={styles.accordionContent}>
                  Our successful case outcomes and satisfied clients speak volumes about our dedication to excellence.
                </p>
              )}
            </div>

            <div className={styles.accordionItem}>
              <button className={styles.accordionHeader} onClick={() => toggleExpand("approach")}>
                <span>Personalized approach</span>
                <span className={styles.icon}>{expanded.approach ? "−" : "+"}</span>
              </button>
              {expanded.approach && (
                <p className={styles.accordionContent}>
                  Every client receives individualized attention and customized legal strategies tailored to their specific needs.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegritySection;