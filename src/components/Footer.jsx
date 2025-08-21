import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPinterestP, 
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Gellas #Beauty
            </h3>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Gellas #Beauty is a Salon & Boutique that offers premium beauty treatments 
              and sells exclusive beauty products from leading brands.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <FaMapMarkerAlt className="text-amber-400 mr-3" />
                <span className="text-gray-400">123 Beauty Street, Stockholm</span>
              </div>
              <div className="flex items-center mb-3">
                <FaPhoneAlt className="text-amber-400 mr-3" />
                <span className="text-gray-400">+46 000 000 000</span>
              </div>
              <div className="flex items-center mb-3">
                <FaEnvelope className="text-amber-400 mr-3" />
                <span className="text-gray-400">info@Gellasbeauty.com</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-amber-400 mr-3" />
                <span className="text-gray-400">Mon-Fri: 9AM-8PM, Sat: 10AM-6PM</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter size={16} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Pinterest"
                >
                  <FaPinterestP size={16} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-amber-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-400">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Contact us</span></a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Opening hours</span></a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Book an appointment</span></a></li>
              
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-amber-400">
              INFORMATION
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">About us</span></a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Work with us</span></a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Our courses</span></a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"><span className="group-hover:translate-x-1 transition-transform">Requisition</span></a></li>
            </ul>
          </div>
        </div>
        
        {/* Products CTA */}
        <div className="text-center mb-10">
          <a href="#" className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20">
            GO TO OUR PRODUCTS
          </a>
        </div>
        
        {/* Bottom section */}
        <div className="flex justify-center border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gellas #Beauty. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;