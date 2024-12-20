import React from 'react';
import { Search, Code, Rocket } from 'lucide-react';
import '../styles/ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      description: "We start by understanding your vision and planning the perfect strategy to achieve your goals.",
      color: "#4a249d"
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "Our team brings your vision to life with cutting-edge design and development solutions.",
      color: "#8b5cf6"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support to keep your project running optimally.",
      color: "#22c55e"
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-box">
          <div className="process-header">
           
            <h2>Simple Effective Process</h2>
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="process-step"
                style={{ '--step-delay': `${index * 0.2}s` }}
              >
                <div 
                  className="step-icon"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)` }}
                >
                  <step.icon size={24} color="white" />
                  <span className="step-number">0{index + 1}</span>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 