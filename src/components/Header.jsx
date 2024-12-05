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
        <svg width="1728" height="331" viewBox="0 0 1728 331" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-53.8182 326.575C20.7027 186.228 284.636 -59.3749 744.203 80.9915C1318.66 256.449 1668.73 158.883 1787.96 5.29887" stroke="#4A249D" stroke-opacity="0.2" stroke-width="16"/>
        </svg>
      </header>
    )
  }  
