import React, { useState } from 'react';

const LuxuryMakeover = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Professional Makeup",
      description: "Expert application with premium cosmetics for a flawless finish",
      icon: "💄"
    },
    {
      title: "Hairstyling",
      description: "Custom hairstyle to complement your look and occasion",
      icon: "💇‍♀️"
    },
    {
      title: "Eyelash & Brow Styling",
      description: "Lash application and brow shaping for perfect frame to your eyes",
      icon: "👁️"
    },
    {
      title: "Champagne Service",
      description: "Enjoy a glass of premium champagne during your experience",
      icon: "🍾"
    },
    {
      title: "Professional Photoshoot",
      description: "Studio-quality portraits to capture your transformation",
      icon: "📸"
    },
    {
      title: "Pre-Consultation",
      description: "Personalized planning session to design your perfect look",
      icon: "💬"
    }
  ];

  const faqs = [
    {
      question: "How long does the Luxury Makeover take?",
      answer: "The complete experience typically takes 2-3 hours, depending on the complexity of your desired look."
    },
    {
      question: "Should I arrive with a bare face?",
      answer: "Yes, please arrive with a clean, moisturized face without any makeup for the best results."
    },
    {
      question: "Can I bring inspiration photos?",
      answer: "Absolutely! We encourage you to bring photos or create a mood board for your pre-consultation."
    },
    {
      question: "What is the cancellation policy?",
      answer: "We require 48 hours notice for cancellations to avoid a fee. Last-minute cancellations are charged 50% of the service cost."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-pink-700">IDANA BEAUTY</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition">
              Book Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 px-6">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Services</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition w-full mt-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                Luxury Makeover Experience
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A complete transformation for your special occasion. More than just makeup - it's a glow-up experience designed to make you feel like the best version of yourself.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition shadow-lg">
                  Book Your Experience
                </button>
                <button className="border-2 border-pink-600 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-medium transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-pink-200 rounded-2xl h-80 w-full absolute -bottom-4 -right-4 z-0"></div>
                <div className="bg-gray-800 rounded-2xl h-80 w-full absolute z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-serif text-xl mb-2">Complete Transformation</h3>
                      <p className="text-pink-200">Before & After Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">What's Included</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our Luxury Makeover is a comprehensive experience designed to make you look and feel extraordinary for your special occasion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-pink-50 rounded-2xl p-8 transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 bg-pink-100 rounded-2xl p-10">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Investment in Yourself</h3>
            <p className="text-3xl font-bold text-pink-700 mb-6">4,900 SEK</p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-medium transition shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex border-b border-gray-200 mb-10">
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'overview' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'process' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('process')}
            >
              The Process
            </button>
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'faq' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQs
            </button>
          </div>
          
          <div className="min-h-[300px]">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Complete Luxury Experience</h3>
                <p className="text-gray-600 mb-4">
                  Our Luxury Makeover is designed for those special occasions when you want to look and feel your absolute best. Whether it's for a wedding, gala, birthday celebration, or any important event, we provide a complete transformation experience.
                </p>
                <p className="text-gray-600 mb-4">
                  This service goes beyond standard makeup application by including professional hairstyling, lash and brow work, and even a professional photoshoot to capture your stunning new look.
                </p>
                <p className="text-gray-600">
                  We begin with a consultation to understand your vision and create a personalized plan for your transformation. Throughout the process, you'll enjoy premium amenities including champagne, ensuring your experience is as luxurious as the results.
                </p>
              </div>
            )}
            
            {activeTab === 'process' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Your Transformation Journey</h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold mr-4">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Pre-Consultation</h4>
                      <p className="text-gray-600">We discuss your vision, preferences, and occasion to create a customized plan for your look.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold mr-4">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Preparation</h4>
                      <p className="text-gray-600">Skincare preparation and base application to ensure your makeup looks flawless and lasts all day.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold mr-4">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Application</h4>
                      <p className="text-gray-600">Expert application of makeup and hairstyling using premium products tailored to your skin type and desired look.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold mr-4">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Photoshoot</h4>
                      <p className="text-gray-600">Professional portraits to capture your transformation and provide you with lasting memories of your luxury experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'faq' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-lg text-pink-100 mb-10 max-w-2xl mx-auto">
            Book your Luxury Makeover experience today and get ready to feel confident and beautiful for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition shadow-lg">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-pink-700 px-8 py-4 rounded-full text-lg font-medium transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">IDANA BEAUTY</h3>
              <p className="text-gray-400">Premium beauty services and luxury makeover experiences for your special occasions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-2">Email: info@idanabeauty.se</p>
              <p className="text-gray-400 mb-2">Phone: +46 123 456 789</p>
              <p className="text-gray-400">Address: Beauty Street 1, Stockholm</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Idana Beauty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryMakeover;