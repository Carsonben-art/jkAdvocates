"use client";
import Image from "next/image";
import styles from "./MissionSection.module.css";

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <p className={styles.subheading}>Our Mission</p>
        <h2 className={styles.heading}>What we want to achieve</h2>
        <p className={styles.description}>
        To deliver high-quality legal solutions with professionalism, efficiency, 
        and a deep commitment to our clients' needs, ensuring justice and legal 
        protection in every case we handle.
        </p>

        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/advocates.jpg" 
              alt="Legal Team"
              width={350}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/advocate2.jpg" 
              alt="Lawyer Speaking"
              width={350}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/advocate3.jpg"
              alt="Legal Consultation"
              width={350}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;