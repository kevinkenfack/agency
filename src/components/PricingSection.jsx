import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/PricingSection.css';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const plans = {
    standard: {
      name: "Standard",
      description: "Perfect for small businesses and startups",
      features: [
        { name: "Custom Design", included: true },
        { name: "Responsive Development", included: true },
        { name: "SEO Optimization", included: true },
        { name: "Content Management", included: true },
        { name: "Basic Analytics", included: true },
        { name: "24/7 Support", included: false },
        { name: "Advanced Features", included: false },
      ]
    },
    pro: {
      name: "Professional",
      description: "For businesses ready to scale",
      features: [
        { name: "Custom Design", included: true },
        { name: "Responsive Development", included: true },
        { name: "SEO Optimization", included: true },
        { name: "Content Management", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "24/7 Support", included: true },
        { name: "Advanced Features", included: true },
      ]
    }
  };

  return (
    <section className="pricing-wrapper">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="availability-badge">
            <span className="pulse"></span>
            Limited spots available for December
          </div>
        </div>

        <div className="plans-grid">
          <div className="plan-card standard">
            <div className="plan-content">
              <h3>Standard</h3>
              <p className="plan-description">{plans.standard.description}</p>
              
              <div className="features">
                {plans.standard.features.map((feature, index) => (
                  <div key={index} className="feature">
                    {feature.included ? (
                      <Check className="check" />
                    ) : (
                      <X className="x" />
                    )}
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/call" 
                className="book-call-btn"
              >
                Book a Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="plan-card pro">
            <div className="popular-badge">Most Popular</div>
            <div className="plan-content">
              <h3>Professional</h3>
              <p className="plan-description">{plans.pro.description}</p>
              
              <div className="features">
                {plans.pro.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <Check className="check" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/call" 
                className="book-call-btn pro"
              >
                Book a Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 