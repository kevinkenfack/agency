import { Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#5D3B8C] text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-8xl font-bold tracking-wider">UIFLOW</h1>
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
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/sitemap" className="hover:underline">
            Sitemap
          </Link>
        </div>

        {/* Copyright and Social */}
        <div className="flex justify-between items-center">
          <p>© Copyright by UIFLOW.</p>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

