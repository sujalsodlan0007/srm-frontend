import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-6 text-accent">SRM GLOBAL HUB</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">Premium garment manufacturing company delivering quality worldwide. Your trusted partner for OEM, ODM & Private Label services.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-accent text-2xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-accent text-2xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-accent text-2xl"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-accent text-2xl"><FaLinkedin /></a>
              <a href="https://wa.me/919568978819?text=Hello%20SRM%20Global%20Hub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent text-2xl"><FaWhatsapp /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-lg">About Us</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-white text-lg">Manufacturing Process</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white text-lg">Product Categories</Link></li>
              <li><Link to="/infrastructure" className="text-gray-300 hover:text-white text-lg">Infrastructure</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-white text-lg">Clients</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-white text-lg">Manufacturing Process</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white text-lg">Product Categories</Link></li>
              <li><Link to="/infrastructure" className="text-gray-300 hover:text-white text-lg">Infrastructure</Link></li>
              <li><Link to="/compliance" className="text-gray-300 hover:text-white text-lg">Compliance</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-white text-lg">Clients</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Contact Info</h4>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 text-xl" />
                <span>Plot No. 123, Industrial Area, Gurugram, Haryana 122001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-xl" />
                <a href="mailto:sujalsodlan0001@gmail.com" className="hover:text-accent transition-colors">sujalsodlan0001@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent text-xl" />
                <span>+91 9259010657</span>
              </li>
            </ul>
            {/* REPLACE WITH REAL DATA: address, email, and phone for your export house */}
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; 2026 SRM GLOBAL HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
