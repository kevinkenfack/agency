import { Linkedin } from 'lucide-react'
import { Link } from "react-router-dom";

export default function MobileFooter() {
  return (
    <footer className="bg-[#5D3B8C] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img src="/ui.svg" alt="UIFLOW" className="mx-auto h-16" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <p className="text-base mb-2">INDIA (HQ)</p>
            <p className="text-2xl font-light">+91 94 99 888 170</p>
          </div>
          <div className="text-center">
            <p className="text-base mb-2">For Sales</p>
            <p className="text-2xl font-light">hi@uiflow.in</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-center">
          <Link to="/privacy-policy" className="hover:underline text-sm">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:underline text-sm">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:underline text-sm">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="hover:underline text-sm">
            Contact
          </Link>
          <Link to="/sitemap" className="hover:underline text-sm">
            Sitemap
          </Link>
        </div>

        {/* Copyright and Social */}
        <div className="flex flex-col justify-between items-center">
          <p className="text-center text-sm mb-4">
            © Copyright by UIFLOW.
          </p>
          <div className="flex justify-center">
            <Link 
              to="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}