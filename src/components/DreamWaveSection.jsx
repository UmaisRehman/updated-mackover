import React, { useState, useEffect } from 'react';
import { FiInstagram, FiArrowRight, FiPlay } from 'react-icons/fi';
import first from "../assets/first.jpg"
import sec from "../assets/2.jpg"
import th from "../assets/3.jpg"
import ft from "../assets/4.jpg"
const DreamWaveSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Instagram posts with direct URLs
  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/gellasbeauty99/reel/DEs60MYtL7Y/",
      image: first,
      type: "post",
      title: "Hair Transformation Reel"
    },
    {
      id: 2,
      url: "https://www.instagram.com/gellasbeauty99/p/DECQRxbNjFD/",
      image: sec,
      type: "post",
      title: "Beautiful Extensions"
    },
    {
      id: 3,
      url: "https://www.instagram.com/gellasbeauty99/p/DEAx0XRtMfh/",
      image: th,
      type: "post",
      title: "Style Inspiration"
    },
    {
      id: 4,
      url: "https://www.instagram.com/gellasbeauty99/p/DEAx6mhNp2J/",
      image: ft,
      type: "post",
      title: "Dream Waves"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 py-16 md:py-20">
      {/* Animated Heading */}
      <div className={`text-center mb-12 transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 inline-block relative">
          GET YOUR DREAM WAVE WITH EXTENSIONS!
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-pink-500"></span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Transform your look with our premium hair extensions that create perfect, natural-looking waves.
        </p>
      </div>

      {/* Instagram Gallery Preview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {instagramPosts.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 ease-out shadow-lg hover:shadow-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActivePost(post.id)}
            onMouseLeave={() => setActivePost(null)}
          >
            {/* Instagram Post Image */}
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-semibold text-sm mb-1">{post.title}</h3>
                <p className="text-xs opacity-90">View on Instagram</p>
              </div>
            </div>

            {/* Instagram Logo */}
            <div className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-0 group-hover:rotate-12">
              <FiInstagram className="text-gray-800 text-lg" />
            </div>

            {/* Play Button for Reels */}
            {post.type === "reel" && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <FiPlay className="text-gray-800 text-xl ml-0.5" />
              </div>
            )}

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        ))}
      </div>

      {/* Get Inspired Section */}
      <div className={`flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="flex items-center space-x-3 mb-4 sm:mb-0 group">
          <div className="bg-gradient-to-r from-amber-500 to-pink-500 p-2 rounded-full">
            <FiInstagram className="w-6 h-6 text-white" />
          </div>
          <span className="font-semibold text-gray-800">
            FOLLOW OUR INSTAGRAM
          </span>
        </div>
        <a
          href="https://www.instagram.com/gellasbeauty99/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-amber-600 hover:text-amber-800 transition-colors group"
        >
          <span className="font-medium">@gellasbeauty99</span>
          <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* CTA Button */}
      <div className={`text-center mt-12 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default DreamWaveSection;