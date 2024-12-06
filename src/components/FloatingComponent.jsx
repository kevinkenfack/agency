import React, { useState, useEffect } from 'react';

const FloatingButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const favicon = '/favicon.ico'; // remplacez par l'URL de votre favicon

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    setScrollY(currentScrollY);
    setIsVisible(
      currentScrollY <= 100 || currentScrollY >= document.documentElement.scrollHeight - window.innerHeight - 100
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-[#EAEAEA]/60 backdrop-blur w-10/12 md:w-96 mx-auto rounded-full py-4 px-6 border-2 fixed left-1/2 -translate-x-1/2 bottom-8 shadow-2xl flex items-center justify-between z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        alt="UIFLOW LOGO"
        loading="lazy"
        width="432"
        height="432"
        decoding="async"
        data-nimg="1"
        className="w-12 h-12"
        style={{ color: 'transparent' }}
        src="/floting.svg"
      />
      
      <a
        href="mailto:hi@uiflow.in?subject=Inquiry"
        className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white transition active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6d6d6d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-send"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 14l11 -11" />
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingButton;
