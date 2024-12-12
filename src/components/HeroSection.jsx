import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Transforming Ideas into
            <span className="gradient-text"> Digital Reality</span>
          </h1>
          <p className="hero-subtitle">
            We create cutting-edge digital solutions that elevate your business
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Start Your Project
          </motion.button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image-container"
        >
          <img 
            src="/hero-3d-image.webp" 
            alt="3D illustration" 
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 