import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import '../styles/FloatingComponent.css';

const FloatingComponent = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <div className={`floating-button ${scrollDirection}`}>
      <img
        alt="UIroomLOGO"
        src="/floting.svg"
        className="floating-logo"
      />
      <a
        href="mailto:hi@uiroom.in?subject=Inquiry"
        className="send-button"
      >
        <Send className="send-icon" stroke="#5D3B8C" />
      </a>
    </div>
  );
};

export default FloatingComponent;
