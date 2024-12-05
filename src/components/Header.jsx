import React from 'react';

export default function Header() {
  return (
    <header className="w-full min-h-screen flex flex-col justify-start items-start relative pb-16">
      {/* Conteneur du texte positionné en haut à gauche */}
      <div className="container mx-auto px-10 py-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
          Your Vision
          <br />
          Our <span className="text-[#5D3B8C]">Expertise</span>
        </h1>
      </div>

      {/* Curved Line Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/hero-line-flow.svg" 
          alt="Curved Line"
          className="w-full h-auto"
        />
      </div>
    </header>
  );
}
