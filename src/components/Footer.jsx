import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8 text-center">
      <p>
        Copyright &copy; {currentYear}. Designed and Developed by Newton Muhindi.
      </p>
    </footer>
  )
}

export default Footer
