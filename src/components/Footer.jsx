import { Linkedin } from 'lucide-react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4a249d] text-white py-16 px-8">
      <div className="container mx-auto px-10 pt-10 pb-40">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img src="/ui.svg" alt="Your Company Logo" className="mx-auto h-16" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-xl mb-2">IN INDIA (HQ)</p>
            <p className="text-4xl font-light">+91 94 99 888 170</p>
          </div>
          <div>
            <p className="text-xl mb-2">For Sales</p>
            <p className="text-4xl font-light">hi@uiflow.in</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-8 mb-12">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/sitemap" className="hover:underline">
            Sitemap
          </Link>
        </div>

        {/* Copyright and Social */}
        <div className="flex justify-between items-center">
          <p>© Copyright by UIFLOW.</p>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

