import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#home" className="text-primary hover:text-secondary transition-colors">
            Muhindi
          </a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-secondary font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-times text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="px-8 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-secondary font-medium hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
