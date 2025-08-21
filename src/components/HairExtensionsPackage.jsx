import React from 'react';

const HairExtensionsPackage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            All Packages Include
          </h1>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Included Services */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Dyeing</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Tape, Nail, Weft or Micro Braids Hair Extensions</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Hair extensions (minimum 100g)</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Clipping</span>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Styling</span>
            </div>
          </div>
          
          {/* Hair extensions included section */}
          <div className="bg-pink-50 rounded-lg p-4 mb-8 border border-pink-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-pink-700 font-semibold">Hair extensions included!</span>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Klarna or Qliro installment payment</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Cash, Card & Swish</span>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">Book your appointment today!</p>
        </div>
      </div>
    </div>
  );
};

export default HairExtensionsPackage;