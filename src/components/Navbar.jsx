import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#home" className="text-primary hover:text-secondary transition-colors">
            Muhindi
          </a>
        </h1>
        <ul className="flex gap-8">
          <li>
            <a 
              href="#home" 
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-secondary font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
