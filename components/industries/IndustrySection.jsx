import React from 'react'
import Image from 'next/image';
import './IndustrySection.css'
const IndustrySection = () => {
    const industries = [
        { title: "Corporate Law", desc: "Advising businesses on legal matters, including mergers and acquisitions, corporate governance, and compliance.", img: "/corporate.jpg" },
        { title: "Litigation", desc: "Representing clients in civil and commercial disputes, including mediation and arbitration.", img: "/litigation.jpg" },
        { title: "Real Estate Law", desc: "Handling property transactions, leasing agreements, and land disputes.", img: "/real-estate.jpg" },
        { title: "Employment Law", desc: "Assisting with employment contracts, labor disputes, and workplace policies.", img: "/employment.jpg" },
        { title: "Intellectual Property", desc: "Protecting intellectual property rights, including trademarks, copyrights, and patents.", img: "/intelligent.jpg" },
        { title: "Family Law", desc: "Providing legal support for family-related matters, including divorce, custody, and inheritance issues.", img: "/family.jpg" },
        { title: "Commercial Law", desc: "Advising on commercial contracts, trade regulations, and business disputes.", img: "/commercial.jpg" },
      ];
  return (
    <div className='industry-container'>
        {[...industries].map((industry, index) => (
            <div key={index} className="industryCard">
              <Image
                src={industry.img}
                alt={industry.title}
                width={350}
                height={200}
                className="image"
              />
              <div className="cardContent">
                <h3 className="cardTitle">{industry.title}</h3>
                <p className="cardDesc">{industry.desc}</p>
                <a href="#" className="exploreLink">
                  Explore More →
                </a>
              </div>
            </div>
          ))}
    </div>
  )
}

export default IndustrySection
