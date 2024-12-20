import React from 'react';
import '../styles/DomainSection.css';

export default function DomainsSection() {
  const domains = [
    {
      title: "Full Stack",
      description: "Need a web solution, but overwhelmed by the tech props? We've got you covered! Our full-stack expertise tackles SaaS, web apps, e-commerce, and landing pages. We make tech simple.",
      technologies: [
        { placeholder: "/icon-tech/nextjs.svg" },
        { placeholder: "/icon-tech/typescript-color.svg" },
        { placeholder: "/icon-tech/tailwind-color.svg" },
        { placeholder: "/icon-tech/vue-color.svg" },
        { placeholder: "/icon-tech/nuxt-color.svg" },
        { placeholder: "/icon-tech/node-js-seeklogo.svg" },
        { placeholder: "/icon-tech/react.svg" },
        { placeholder: "/icon-tech/mongodb.svg" }
      ]
    },
    {
      title: "No-Code Solutions",
      description: "Fast, efficient, and powerful. We leverage the best no-code platforms to build your digital presence quickly and effectively.",
      technologies: [
        { placeholder: "/icon-tech/webflow-svgrepo-com.svg" },
        { placeholder: "/icon-tech/shopify-color.svg" },
        { placeholder: "/icon-tech/wordpress-svgrepo-com.svg" },
        { placeholder: "/icon-tech/framer-svgrepo-com.svg" }
      ]
    },
    {
      title: "UI/UX & Design",
      description: "Bridge the gap between user and tech. Strategic UI/UX design for success.",
      technologies: [
        { placeholder: "/icon-tech/lightroom-color.svg" },
        { placeholder: "/icon-tech/photoshop-color.svg" },
        { placeholder: "/icon-tech/figma-color.svg" },
        { placeholder: "/icon-tech/illustrator-color.svg" }
      ]
    }
  ];

  return (
    <section className="domains-section" id="domains">
      <div className="domains-container">
        <h2 className="domains-main-title">Our Expertise</h2>
        <div className="domains-grid">
          {domains.map((domain, index) => (
            <div key={index} className="domain-card">
              <div className="domain-content">
                <h3 className="domain-title">{domain.title}</h3>
                <p className="domain-description">{domain.description}</p>
                <div className="tech-grid">
                  {domain.technologies.map((tech, iconIndex) => (
                    <div key={iconIndex} className="tech-icon-wrapper">
                      <img 
                        src={tech.placeholder} 
                        alt={`${domain.title} technology`} 
                        className="tech-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}