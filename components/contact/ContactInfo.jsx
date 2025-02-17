import './ContactInfo.css'
export default function ContactInfo() {
    return (
      <section className="contact-info-container">
        <div className="contact-info-item">
          <h3>Availability</h3>
          <p>Monday-Friday</p>
          <p>8:00 am to 5:00 pm</p>
        </div>
        <div className="contact-info-item">
          <h3>Our Address</h3>
          <p>Nairobi Kenya - Westlands DTB Towers, 532</p>
          <p>info@jklampartadvocates.com</p>
        </div>
        <div className="contact-info-item">
          <h3>Call Us</h3>
          <p>+2547 1233 2667</p>
          <p>+2547 2222 6320</p>
        </div>
      </section>
    );
  }