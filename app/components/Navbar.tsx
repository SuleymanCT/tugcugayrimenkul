'use client'

import { useState } from 'react'
import { FaPhone, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#anasayfa', label: 'Ana Sayfa' },
    { href: '#hizmetler', label: 'Hizmetlerimiz' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#projeler', label: 'Projelerimiz' },
    { href: '#iletisim', label: 'İletişim' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center">
            <div className="flex flex-col leading-tight">
              <span className={`text-3xl font-horizon font-black tracking-wider transition-colors ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}>
                TUGCU
              </span>
              <span className={`text-sm font-raleway font-semibold tracking-wide transition-colors ${
                scrolled ? 'text-brand-500' : 'text-brand-400'
              }`}>
                İnşaat, Gayrimenkul ve Tadilat
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-400 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+905332582468"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                scrolled
                  ? 'brand-gradient text-white hover:opacity-90'
                  : 'bg-white text-brand-600 hover:bg-gray-100'
              }`}
            >
              <FaPhone />
              <span>0533 258 24 68</span>
            </a>
            <a
              href="https://instagram.com/tugcuinsaat"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-colors ${
                scrolled
                  ? 'text-brand-500 hover:bg-brand-50'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-primary-700' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 bg-white rounded-xl shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 font-medium hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-4 space-y-3">
              <a
                href="tel:+905332582468"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 brand-gradient text-white rounded-lg font-semibold"
              >
                <FaPhone />
                <span>0533 258 24 68</span>
              </a>
              <a
                href="tel:+905332356824"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-primary-900 text-white rounded-lg font-semibold"
              >
                <FaPhone />
                <span>0533 235 68 24</span>
              </a>
              <a
                href="https://instagram.com/tugcuinsaat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 border-2 border-brand-400 text-brand-600 rounded-lg font-semibold"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
