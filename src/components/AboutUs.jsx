import React, { useState, useEffect, useRef } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    years: 0,
    projects: 0,
    clients: 0
  });
  
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const finalStats = {
    years: 5,
    projects: 100,
    clients: 50
  };

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setStats(prev => ({
        years: Math.floor(progress * finalStats.years),
        projects: Math.floor(progress * finalStats.projects),
        clients: Math.floor(progress * finalStats.clients)
      }));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateValue(0, 100, 2000); // Animation sur 2 secondes
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
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
            <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
              <span className="stat-number">{stats.years}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
              <span className="stat-number">{stats.projects}+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className={`stat-item ${isVisible ? 'animate' : ''}`}>
              <span className="stat-number">{stats.clients}+</span>
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