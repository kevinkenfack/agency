export default function Header() {
  return (
    <header className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
          Your Vision
          <br />
          Our{' '}
          <span className="text-[#5D3B8C]">Expertise</span>
        </h1>
      </div>

      {/* Curved Line Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/hero-line-flow.svg" // Remplace cette URL par celle de ton image
          alt="Curved Line"
          className="w-full h-auto" // Cela rend l'image responsive
        />
      </div>
    </header>
  );
}