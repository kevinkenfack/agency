export default function Header() {
    return (
      <header className="w-full min-h-screen  flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="__className_2eaf5e px-10 py-8 text-5xl md:text-9xl container mx-auto">
            Your Vision
            <br />
            Our{' '}
            <span className="text-[#5D3B8C]">Expertise</span>
          </h1>
        </div>
        
        {/* Curved Line SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/hero-line-flow.svg"
          alt="Curved Line"
          className="w-full h-auto" 
        />
      </div>
      </header>
    )
  }  
