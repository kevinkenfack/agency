import React from 'react';

export default function Header() {
  return (
    <div id="home" className="w-full min-h-screen flex flex-col justify-center">
      <h1 className="px-10 py-8 text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold container mx-auto">
        Your Vision
        <br />
        Our <span className="text-[#4a249d] font-bold">Expertise</span>
      </h1>
      <img
        loading="lazy"
        width="1728"
        height="331"
        decoding="async"
        data-nimg="1"
        className="w-full"
        style={{ color: 'transparent' }}
        src="/hero-line-flow.svg"
        alt="Curved Line"
      />
    </div>
  );
}
