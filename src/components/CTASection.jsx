import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
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
        <div className="cta-box animate-scale-in delay-200">
          <div className="cta-box-inner">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Transform Your Digital Presence?
                <span className="gradient-text">Let's Create Together</span>
              </h2>

              <div className="cta-features">
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <Calendar className="feature-icon" />
                  </div>
                  <div className="feature-text">
                    <h3>Free Strategy Session</h3>
                    <p>30-minute consultation call</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <Sparkles className="feature-icon" />
                  </div>
                  <div className="feature-text">
                    <h3>Expert Solutions</h3>
                    <p>Tailored to your needs</p>
                  </div>
                </div>
              </div>

              <Link
                to="/book-call"
                className={`cta-button ${isAnimating ? 'animating' : ''}`}
                onClick={handleClick}
              >
                <span>Book an Intro Call</span>
                <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
          
          <div className="cta-background">
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
            <div className="grid-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 