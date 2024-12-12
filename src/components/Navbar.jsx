import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY < window.innerHeight;
      setIsScrolled(window.scrollY > 20 && !isAtTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : 'hidden'}`}>
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src="/logo.svg" alt="Logo" className="logo-image" />
          </Link>
        </div>

        <nav className="navbar-links">
          <Link to="/#domains" className="nav-link">Services</Link>
          <Link to="/#achievements" className="nav-link">Achievements</Link>
          <Link to="/#testimonials" className="nav-link">Testimonials</Link>
          <Link to="/#faq" className="nav-link">FAQ</Link>
        </nav>

        <div className="navbar-cta">
          <Link to="/book-call" className="cta-button">
            Book an Intro Call
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <Menu className="menu-icon" />
        </button>
      </header>

      {/* Menu Mobile */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/#domains" className="mobile-nav-link" onClick={toggleMenu}>Services</Link>
          <Link to="/#achievements" className="mobile-nav-link" onClick={toggleMenu}>Achievements</Link>
          <Link to="/#testimonials" className="mobile-nav-link" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/#faq" className="mobile-nav-link" onClick={toggleMenu}>FAQ</Link>
          <Link to="/book-call" className="mobile-cta-button" onClick={toggleMenu}>
            Book an Intro Call
          </Link>
        </div>
        <button className="mobile-menu-toggle close" onClick={toggleMenu}>
          <X className="menu-icon" />
        </button>
      </div>
    </>
  );
};

export default Navbar; 