import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';
import '../styles/CTASection.css';

const CTASection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4a249d', '#8b5cf6', '#c4b5fd']
    });
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section className="cta-section animate-fade-up">
      <div className="cta-container">
        <div className="cta-content animate-scale-in delay-200">
          <h2 className="cta-title">
            Transform Your Digital Presence Today
          </h2>
          <p className="cta-description">
            Take your first step towards digital excellence. Schedule a free strategy call and let's discuss how we can help you achieve your goals.
          </p>
          <div className="cta-buttons">
            <Link
              to="/book-call"
              className={`primary-button ${isAnimating ? 'animating' : ''}`}
              onClick={handleClick}
            >
              Book an Intro Call
              <ArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>
        
        <div className="gradient-circle"></div>
      </div>
    </section>
  );
};

export default CTASection; 