import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import '../styles/FloatingComponent.css';

const FloatingComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`floating-button ${isVisible ? 'visible' : 'hidden'}`}>
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
