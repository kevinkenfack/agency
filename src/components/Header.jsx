export default function Header() {
  return (
    <header className="w-full min-h-screen flex flex-col justify-center relative pb-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="px-10 py-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl container mx-auto font-bold leading-tight">
          Your Vision
          <br />
          Our{' '}
          <span className="text-[#5D3B8C]">Expertise</span>
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
