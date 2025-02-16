"use client";
import Image from "next/image";
import './TeamSection.css'
const teamMembers = [
  { name: "JK Lampart", role: "Founder", image: "/user1.jpg" },
  { name: "Lampart", role: "Lawyer", image: "/user4.jpg" },
  { name: "Arlene McCoy", role: "Lawyer", image: "/user.jpg" },
  { name: "Brook Seims", role: "Lawyer", image: "/user3.jpg" },
  { name: "Traice Dantini", role: "Lawyer", image: "/user2.jpg" },
  { name: "Kira Zayn", role: "Lawyer", image: "/user.jpg" },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-content">
        <h2>Lawyers specializing in diverse areas</h2>
        <p>
        Our team of highly skilled and experienced advocates is dedicated to 
        providing top-notch legal services. We combine deep legal knowledge with 
        practical experience to deliver effective solutions tailored to our clients' unique needs.
        </p>

        <blockquote>
          "Our attorneys are accessible, responsive, and will keep you updated on the progress of your case"
          <cite>— JK Lampart, founder J.K. Lampart & Co Advocates</cite>
        </blockquote>

        <button className="team-button">Call Us Now</button>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="team-image"
              onError={(e) => (e.target.src = "/user.jpg")}
            />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
