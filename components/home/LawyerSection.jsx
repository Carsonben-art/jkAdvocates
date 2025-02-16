"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import './LawyerSection.css'
const LawyerSection = () => {
  return (
    <section className="lawyer-section">
      <div className="lawyer-content">
        <h4 className="subtitle">J.K Lampart Advocates - Mission</h4>
        <h1 className="title">
        Expert Legal Solutions: Professional, Efficient & Committed to Justice
        </h1>
        <p className="description">
          We deliver high-quality legal solutions with professionalism, efficiency, 
          and a deep commitment to our clients' needs, ensuring justice and legal 
          protection in every case we handle.
        </p>
        <button className="cta-btn">Contact Us Now</button>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="star-icon" />
          ))}
          
          <span className="rating-text">Average rating of 4.89/5 from our clients.</span>
        </div>
      </div>

      <div className="lawyer-image">
        <Image src="/lawyer.jpg" alt="Lawyers discussing" width={400} height={500} />
      </div>
    </section>
  );
};

export default LawyerSection;