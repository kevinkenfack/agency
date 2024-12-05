import React from 'react';

export default function Header() {
  return (
    <header className="w-full min-h-screen flex flex-col justify-center items-center relative pb-16">
      {/* Conteneur du texte centré */}
      <div className="container mx-auto px-6 py-10 sm:py-12 md:py-14 lg:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          Your Vision
          <br />
          Our <span className="text-[#5D3B8C]">Expertise</span>
        </h1>
      </div>

      {/* Image de la ligne courbée */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/hero-line-flow.svg" 
          alt="Curved Line"
          className="w-full h-auto translate-y-16 sm:translate-y-12 md:translate-y-8 lg:translate-y-2"
        />
      </div>
    </header>
  );
}
