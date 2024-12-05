import { Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

export default function MobileFooter() {
  return (
    <footer className="bg-[#5D3B8C] text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto">
        {/* Logo */}
        <div className="mb-12 text-center">
          <img
            src="/ui.svg"
            alt="Your Company Logo"
            className="mx-auto w-[200px] h-auto"
          />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 text-center">
          <div>
            <p className="text-base uppercase mb-2 font-medium">In India (HQ)</p>
            <p className="text-3xl font-bold">+91 94 99 888 170</p>
          </div>
          <div>
            <p className="text-base uppercase mb-2 font-medium">For Sales</p>
            <p className="text-3xl font-bold">hi@uiflow.in</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-medium">
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
        <div className="flex flex-col items-center">
          <p className="text-center text-sm mb-6">
            © Copyright by UIFlow.
          </p>
          <div>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
