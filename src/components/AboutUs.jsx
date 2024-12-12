import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About UIROOM</h2>
          <div className="about-description">
            <p className="about-text">
              UIROOM offers advanced digital services, specializing in custom SaaS product development,
              web applications, and innovative UI/UX design solutions. Our passionate team transforms
              creative ideas into powerful digital experiences that drive business growth.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img 
            src="/girl-with-laptop.webp" 
            alt="Our team at work"
            className="team-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;