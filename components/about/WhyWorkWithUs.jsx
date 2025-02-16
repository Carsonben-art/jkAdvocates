"use client";
import styles from "./WhyWorkWithUs.module.css";
import { FaUserTie, FaUsers, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const WhyWorkWithUs = () => {
    const features = [
        {
          icon: <FaUserTie />, 
          title: "Expertise",
          description: "Our advocates are experts in their respective fields, ensuring you receive knowledgeable and effective representation.",
        },
        {
          icon: <FaUsers />, 
          title: "Client-Centered Approach",
          description: "We take the time to understand your situation and goals, providing personalized legal strategies.",
        },
        {
          icon: <FaCheckCircle />, 
          title: "Proven Track Record",
          description: "We have a history of successful outcomes for our clients, built on our commitment to excellence and diligence.",
        },
        {
          icon: <FaPhoneAlt />, 
          title: "Accessibility",
          description: "We are always available to address your concerns and provide timely updates on your case.",
        },
      ];

  return (
    <section className={styles.whyWorkSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Why should you work with us?</h2>
          <p className={styles.description}>
            We consider all the drivers of change gives you the blocks & we are components and find more.
          </p>
        </div>

        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
