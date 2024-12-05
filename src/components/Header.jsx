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
        
        {/* Curved Line SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96.4C240 32.1333 480 0 720 0C960 0 1200 32.1333 1440 96.4V160H0V96.4Z"
            fill="#F3F0FF"
            fillOpacity="0.5"
          />
        </svg>
      </header>
    )
  }  
