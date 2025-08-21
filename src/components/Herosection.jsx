import React from 'react';
import { FaStar, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import LuxuryMakeoverImage from '../assets/Luxury-Makeover-gellas-Beauty.jpg';
import HairImage from "../assets/WhatsApp_Image_2025-05-20_at_8.05.17_PM-removebg-preview.png";

const Herosection = () => {
  return (
    <div className="font-sans">
      {/* Luxury Makeover Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Section */}
          <div className="lg:w-1/2 space-y-2">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">
                LUXURY <span className="text-amber-600">MAKEOVER</span>
              </h1>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 -z-10 transform -rotate-1"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Experience a complete transformation with our premium makeover service. 
              We expertly dye your hair and add matching luxury extensions for a flawless, 
              glamorous look that turns heads.
            </p>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-xl">Choose your preferred extension method:</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span className="text-gray-800">Tape Hair</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span className="text-gray-800">Nail Hair</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span className="text-gray-800">Weft Hair</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span className="text-gray-800">Microträns</span>
                </div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center group">
              Book Your Transformation
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <img
                src={HairImage}
                alt="Luxury Makeover Hair"
                className="w-full max-w-md rounded-2xl object-cover shadow-xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-pink-100 rounded-2xl -z-10 transform rotate-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See The <span className="text-amber-600">Transformation</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how we create stunning makeovers that exceed expectations
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LkGNtnMLVmo?si=5dH051wAIY7I6jzd"
                title="Luxury Makeover Transformation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <FaPlayCircle className="text-white text-6xl opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Have <span className="text-amber-600">100% Focus</span> on Customer Satisfaction
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our clients love their transformations. Read what they have to say about their experience.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
              <button className="group flex flex-col items-center border-2 border-amber-500 text-amber-600 px-8 py-6 rounded-2xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-xl mx-0.5" />
                  ))}
                </div>
                <span className="font-semibold text-lg">LÄS RECENSIONER FÖR SKÄRHOLMEN</span>
                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-500 mt-2 transition-all duration-300"></div>
              </button>
              
              <button className="group flex flex-col items-center border-2 border-amber-500 text-amber-600 px-8 py-6 rounded-2xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-xl mx-0.5" />
                  ))}
                </div>
                <span className="font-semibold text-lg">LÄS RECENSIONER FÖR GLOBEN</span>
                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-500 mt-2 transition-all duration-300"></div>
              </button>
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-amber-50 px-6 py-3 rounded-full">
                <span className="text-amber-600 font-semibold mr-2">4.9/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 mx-0.5" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">based on 247 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;