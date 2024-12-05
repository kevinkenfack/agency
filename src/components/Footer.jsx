import { Linkedin } from 'lucide-react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#5D3B8C] text-white py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="mb-8 md:mb-16 text-center">
          <img src="/ui.svg" alt="Your Company Logo" className="mx-auto h-12 md:h-20" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="text-center md:text-left">
            <p className="text-base md:text-xl mb-2">IN INDIA (HQ)</p>
            <p className="text-2xl md:text-4xl font-light">+91 94 99 888 170</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-base md:text-xl mb-2">For Sales</p>
            <p className="text-2xl md:text-4xl font-light">hi@yourcompany.in</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-center">
          <Link to="/privacy-policy" className="hover:underline text-sm md:text-base">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:underline text-sm md:text-base">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:underline text-sm md:text-base">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="hover:underline text-sm md:text-base">
            Contact
          </Link>
          <Link to="/sitemap" className="hover:underline text-sm md:text-base">
            Sitemap
          </Link>
        </div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm md:text-base mb-4 md:mb-0">
            © Copyright by Your Company.
          </p>
          <div className="flex justify-center">
            <Link 
              to="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}