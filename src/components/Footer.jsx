import { Linkedin, Phone, Mail } from 'lucide-react'
import { Link } from "react-router-dom";
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/ui.svg" 
            alt="Logo uiroom" 
            className="footer-logo"
          />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <a 
            href="tel:+919499888170" 
            className="contact-box group"
          >
            <Phone className="contact-icon-plus" />
            <div>
              <p className="text-xl mb-2 text-purple-200">IN FRANCE 🇫🇷</p>
              <p className="text-4xl font-light group-hover:text-white transition-colors">
                +91 94 99 888 170
              </p>
            </div>
          </a>
          
          <a 
            href="mailto:hi@uiroom.in" 
            className="contact-box group"
          >
            <Mail className="contact-icon-plus" />
            <div>
              <p className="text-xl mb-2 text-purple-200">For Sales</p>
              <p className="text-4xl font-light group-hover:text-white transition-colors">
                hi@uiroom.in
              </p>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <a 
            href="/sitemap.xml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Sitemap
          </a>
        </div>

        {/* Copyright and Social */}
        <div className="footer-bottom">
          <p className="copyright">© Copyright by UIFLOW.</p>
          <Link 
            to="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin className="linkedin-icon" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
