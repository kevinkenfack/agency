import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + Math.random() * 30, 100));
      } else {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <img 
          src="/ui.svg" 
          alt="UIroom Logo" 
          className="loader-logo"
        />
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          />
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader; 