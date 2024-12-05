import React, { useState, useEffect } from 'react';

const FloatingButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const favicon = '/favicon.ico'; // remplacez par l'URL de votre favicon

  const handleScroll = () => {
    setScrollY(window.pageYOffset || document.documentElement.scrollTop);
    setIsVisible(scrollY <= 100 || scrollY >= document.documentElement.scrollHeight - window.innerHeight - 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <a
        href="#"
        className="bg-white rounded-full shadow-lg hover:shadow-2xl cursor-pointer backdrop-blur-md bg-opacity-60 p-5 flex items-center justify-center"
      >
        <img src={favicon} alt="Favicon" className="w-10 h-10" />
        <a href="#" className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
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

export default FloatingButton;
