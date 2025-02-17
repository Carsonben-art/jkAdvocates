"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import industries from '@/app/data';
import './Industry.css';

const IndustryPage = () => {
  const { industryId } = useParams();
  const industry = industries.find(ind => ind.id === industryId);

  if (!industry) {
    return <div className="industry-container"><h2>Industry Not Found</h2></div>;
  }

  return (
    <div className='industry-container'>
      <div className='industry-header'>
        <div className='overlay'></div>
        <h1 className='header-title'>{industry.title}</h1>
      </div>
      
      <section className="container">
        <div className="content">
          <a href="/industries" className="back-link">← Go Back</a>
          <h2 className="title">Service Highlights</h2>
          <p className="description">{industry.description}</p>

          {industry.services.map((service, index) => (
            <div className="service" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="contact-card">
          <h3>Ask Us Anything</h3>
          <p><FaMapMarkerAlt /> Nairobi, Kenya - Westlands DTB Towers, 532</p>
          <p><FaPhoneAlt /> +2547 1233 2667</p>
          <p><FaEnvelope /> info@jklampartadvocates.com</p>
          <a href="#" className="contact-link">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;