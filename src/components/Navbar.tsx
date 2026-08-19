import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glassmorphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold font-poppins text-primary">
            SRM GLOBAL HUB
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary hover:text-accent font-medium">Home</Link>
            
            <div className="relative group">
              <button className="flex items-center text-primary hover:text-accent font-medium">
                Capabilities <FaChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/manufacturing" className="block py-2 text-primary hover:text-accent">Manufacturing Process</Link>
                  <Link to="/categories" className="block py-2 text-primary hover:text-accent">Product Categories</Link>
                  <Link to="/infrastructure" className="block py-2 text-primary hover:text-accent">Infrastructure</Link>
                  <Link to="/compliance" className="block py-2 text-primary hover:text-accent">Compliance</Link>
                  <Link to="/clients" className="block py-2 text-primary hover:text-accent">Clients</Link>
                </div>
              </div>
            </div>
            
            <Link to="/gallery" className="text-primary hover:text-accent font-medium">Gallery</Link>
            <Link to="/about" className="text-primary hover:text-accent font-medium">About</Link>
            <Link to="/contact" className="text-primary hover:text-accent font-medium">Contact</Link>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/919568978819?text=Hello%20SRM%20Global%20Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
              >
                <FaWhatsapp size={16} /> WhatsApp
              </a>
              <Link to="/request-quotation" className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full font-semibold transition-colors">
                Request Quote
              </Link>
            </div>
          </div>
          
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-white rounded-xl shadow-lg mb-4 p-4">
            <Link to="/" className="block text-primary hover:text-accent font-medium py-2">Home</Link>
              <Link to="/manufacturing" className="block text-primary hover:text-accent font-medium py-2">Manufacturing Process</Link>
            <Link to="/categories" className="block text-primary hover:text-accent font-medium py-2">Product Categories</Link>
            <Link to="/infrastructure" className="block text-primary hover:text-accent font-medium py-2">Infrastructure</Link>
            <Link to="/compliance" className="block text-primary hover:text-accent font-medium py-2">Compliance</Link>
            <Link to="/clients" className="block text-primary hover:text-accent font-medium py-2">Clients</Link>
            <Link to="/gallery" className="block text-primary hover:text-accent font-medium py-2">Gallery</Link>
            <Link to="/about" className="block text-primary hover:text-accent font-medium py-2">About</Link>
            <Link to="/contact" className="block text-primary hover:text-accent font-medium py-2">Contact</Link>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="https://wa.me/919568978819?text=Hello%20SRM%20Global%20Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-semibold text-center transition-colors"
              >
                <FaWhatsapp size={16} className="inline mr-2" /> WhatsApp
              </a>
              <Link
                to="/request-quotation"
                className="block bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-full font-semibold text-center transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
