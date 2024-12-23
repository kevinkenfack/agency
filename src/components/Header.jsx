import React from 'react';

export default function Header() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-[#4a249d]/10 px-6 py-3 text-base">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#4a249d]"></span>
          Digital Solutions Agency
        </div>

        {/* Titre Principal */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-7xl lg:text-8xl">
            We Create
            <br />
            <span className="bg-gradient-to-r from-[#4a249d] via-[#6b46c1] to-[#8b5cf6] bg-clip-text text-transparent">
              Digital Experiences
            </span>
            <br />
            That Matter
          </h1>
        </div>

        {/* Sous-titre */}
        <div className="max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
            Transforming innovative ideas into exceptional digital solutions
            for forward-thinking businesses.
          </p>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMiAyaDJ2MkgyeiIgZmlsbD0iIzAwMCIvPjwvZz48L3N2Zz4=')]"></div>
        </div>

        {/* Éléments décoratifs avec nos couleurs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Premier blob - en haut à gauche */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#4a249d]/20 via-[#6b46c1]/20 to-transparent blur-2xl"></div>
          
          {/* Deuxième blob - en bas à droite */}
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tl from-[#8b5cf6]/20 via-[#6b46c1]/20 to-transparent blur-2xl"></div>
          
          {/* Cercles flottants plus subtils */}
          <div className="absolute left-1/4 top-1/4 h-4 w-4 rounded-full bg-[#4a249d]/20"></div>
          <div className="absolute bottom-1/3 right-1/4 h-6 w-6 rounded-full bg-[#6b46c1]/20"></div>
          <div className="absolute right-1/3 top-1/3 h-3 w-3 rounded-full bg-[#8b5cf6]/20"></div>
        </div>
      </div>
    </section>
  );
}