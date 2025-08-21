import React, { useState, useEffect } from 'react';
import { href, Link, useNavigate } from 'react-router-dom';
import { 
  FiMail, 
  FiClock, 
  FiPhone, 
  FiBookOpen,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiFacebook,
  FiInstagram,
  FiMessageCircle
} from 'react-icons/fi';
import logo from "../assets/WhatsApp_Image_2025-05-20_at_8.05.17_PM-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full font-sans fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 text-xs sm:text-sm px-4 py-2">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <a href="https://www.gellasbeauty.se/" className="flex items-center text-center sm:text-left w-full sm:w-auto font-medium tracking-wide hover:text-amber-300 transition-colors">
              <FiShoppingBag className="mr-1" />GO TO WEBSITE
            </a>
            <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto mt-1 sm:mt-0">
            
              <div className="flex gap-2">
                <a href="#contact" className="bg-gray-700 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-amber-500 transition-colors">
                  <FiMail size={12} />
                </a>
                <a href="#hours" className="bg-gray-700 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-amber-500 transition-colors">
                  <FiClock size={12} />
                </a>
                <a href="#contact" className="bg-gray-700 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-amber-500 transition-colors">
                  <FiPhone size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`bg-black px-4 py-3 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}>
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="text-gray-700 hidden md:block">
              <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 whitespace-nowrap text-sm font-medium flex items-center">
                <FiMessageCircle className="mr-2" /> Book Your Appointment
              </button>
            </div>

            <div className='flex-1 flex justify-center md:justify-center'>
              <Link to="/" className="flex justify-center transition-transform duration-500 hover:scale-105">
                <img
                  src={logo}
                  alt="logo"
                  className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                <FiInstagram size={16} />
              </a>
              <a href="#contact" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                <FiMail size={16} />
              </a>
              <a href="#contact" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-all duration-300 transform hover:scale-110">
                <FiPhone size={16} />
              </a>
            </div>

            <button
              className="md:hidden text-gray-300 text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-6 space-y-4">
            <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md text-sm font-medium flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <FiMessageCircle className="mr-2" /> Book Your Appointment
            </button>
            
            <div className="flex items-center justify-between pt-2">
             
              <div className="flex justify-center items-center gap-3">
                <a href="#" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-colors">
                  <FiFacebook size={16} />
                </a>
                <a href="#" className="bg-gray-700 text-white p-2 rounded-full w-9 h-9 flex items-center justify-center text-sm hover:bg-amber-500 transition-colors">
                  <FiInstagram size={16} />
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <div className="grid grid-cols-3 gap-3">
                <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center">Services</Link>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center">About Us</Link>
                <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors text-sm py-2 text-center">Contact</Link>
               
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to the top of your page content */}
      <div className="pt-32"></div>
    </>
  );
};

export default Navbar;