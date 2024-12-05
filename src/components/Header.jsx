import React from 'react';

export default function Header() {
  return (
    <header className="w-full min-h-screen flex flex-col justify-center items-center relative pb-16">
      {/* Conteneur du texte centré */}
      <div className="container mx-auto text-center px-10 py-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
          Your Vision
          <br />
          Our{' '}
          <span className="text-[#5D3B8C]">Expertise</span>
        </h1>
      </div>

      {/* Ligne courbée */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#E0D4F5"
            fillOpacity="1"
            d="M0,192L1440,320L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}
