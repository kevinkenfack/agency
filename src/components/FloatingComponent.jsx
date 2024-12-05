import React, { useState, useEffect } from 'react';

const FloatingComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const favicon = '/favicon.ico'; // remplacez par l'URL de votre favicon

  const handleScroll = () => {
    setScrollY(window.pageYOffset || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        scrollY > 100 ? 'opacity-0 pointer-events-none' : ''
      }`}
    >
      <a
        href="#"
        className="bg-white rounded-full shadow-lg hover:shadow-2xl cursor-pointer backdrop-blur-sm bg-opacity-70 p-2 flex items-center justify-center"
      >
        <img src={favicon} alt="Favicon" className="w-6 h-6" />
        <a href="#" className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </a>
    </div>
  );
};

export default FloatingComponent;
