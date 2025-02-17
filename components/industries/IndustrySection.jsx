import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import industries from '@/app/data';
import './IndustrySection.css';

const IndustrySection = () => {
  return (
    <div className="industry-container">
      {industries.map((industry) => (
        <div key={industry.id} className="industryCard">
          <Image
            src={industry.img}
            alt={industry.title}
            width={350}
            height={200}
            className="image"
          />
          <div className="cardContent">
            <h3 className="cardTitle">{industry.title}</h3>
            <p className="cardDesc">{industry.description}</p>
            <Link href={`/industry/${industry.id}`} className="exploreLink">
              Explore More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustrySection;