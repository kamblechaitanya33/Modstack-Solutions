"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
  <img
    src="/modstackbg.png"
    alt="Modstack Solutions Logo"
  className="w-[130px] h-[140px] object-contain"  />
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#374151] hover:text-[#0f172a] transition">
              Home
            </Link>
            <Link href="/services" className="text-[#374151] hover:text-[#0f172a] transition">
              Services
            </Link>
            <Link href="/about" className="text-[#374151] hover:text-[#0f172a] transition">
              About
            </Link>
            <Link href="/portfolio" className="text-[#374151] hover:text-[#0f172a] transition">
              Portfolio
            </Link>
            <Link href="/blog" className="text-[#374151] hover:text-[#0f172a] transition">
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#1e40af] transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
              Services
            </Link>
            <Link href="/about" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
              About
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
              Portfolio
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
              Blog
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-[#3b82f6] text-white rounded">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
