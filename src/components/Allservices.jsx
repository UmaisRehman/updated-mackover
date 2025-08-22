import React, { useEffect, useRef, useState } from 'react';
import lm from "../assets/Luxurymakeover.png";
import hl from "../assets/harforlangning.png";
import kf from "../assets/klipp & Farg.png";
import kbh from "../assets/Keratinbehandling.png";

const Allservices = () => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleCardInteraction = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  const services = [
    {
      title: "LUXURY MAKEOVER",
      image: lm,
      description: "Experience our premium makeover service that transforms your look with the finest products and techniques."
    },
    {
      title: "HAR FÖRLÄNGNING",
      image: hl,
      description: "Our hair extension services use the highest quality hair for a natural, seamless look that lasts."
    },
    {
      title: "KLIPP & FÄRG",
      image: kf,
      description: "Expert haircuts and coloring tailored to your unique style and preferences by our master stylists."
    },
    {
      title: "KERATINBEHANDLING",
      image: kbh,
      description: "Revitalize your hair with our smoothing keratin treatment for sleek, frizz-free, and manageable hair."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wider">ALL OUR SERVICES</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Indulge in our exclusive range of luxury treatments designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 translate-y-10 transition-all duration-700 ease-out group relative"
              onClick={() => isMobile && handleCardInteraction(index)}
            >
              <div 
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 h-96 flex flex-col items-center justify-center p-6 border transition-all duration-500 ${
                  (activeCard === index && isMobile) ? '-translate-y-2 border-amber-400 shadow-2xl' : 
                  'border-gray-700 shadow-xl md:hover:-translate-y-2 md:hover:border-amber-400 md:hover:shadow-2xl'
                }`}
                onMouseEnter={() => !isMobile && setActiveCard(index)}
                onMouseLeave={() => !isMobile && setActiveCard(null)}
              >
                {/* Animated background elements */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  (activeCard === index && isMobile) || (!isMobile && activeCard === index) ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute -inset-10 rotate-45 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent group-hover:animate-shine"></div>
                </div>
                
                {/* Image container with animation */}
                <div className={`relative z-10 mb-6 transition-transform duration-500 ${
                  (activeCard === index && isMobile) || (!isMobile && activeCard === index) ? 'scale-110' : ''
                }`}>
                  <div className={`rounded-full p-4 transition-colors duration-500 ${
                    (activeCard === index && isMobile) || (!isMobile && activeCard === index) ? 'bg-amber-400/10' : 'bg-gray-700/50'
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="h-24 w-24 object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-semibold text-center mb-3 transition-colors duration-500 ${
                  (activeCard === index && isMobile) || (!isMobile && activeCard === index) ? 'text-amber-400' : ''
                }`}>
                  {service.title}
                </h3>
                <p className={`text-center text-sm leading-relaxed transition-colors duration-500 ${
                  (activeCard === index && isMobile) || (!isMobile && activeCard === index) ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  {service.description}
                </p>
                
                {/* Button - always visible on mobile when active, shown on hover on desktop */}
                <button className={`mt-6 py-2 px-6 bg-transparent border border-amber-400 text-amber-400 rounded-full transition-all duration-500 hover:bg-amber-400 hover:text-gray-900 font-medium ${
                  (activeCard === index && isMobile) ? 'opacity-100 translate-y-0' : 
                  (!isMobile ? 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0' : 'opacity-0 translate-y-4')
                }`}>
                  Discover
                </button>
              </div>

             
            </div>
          ))}
        </div>
      </div>

      {/* Add custom styles for the animations */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Allservices;