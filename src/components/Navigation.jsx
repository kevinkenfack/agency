import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optimisation avec useCallback
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <button 
        className="floating-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`glass-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-links">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#domains" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#faqsection" onClick={() => setIsOpen(false)}>FAQ</a>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navigation); 