import React from 'react';

const HairServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">Hair Extension Services</h1>
          <p className="text-gray-600 mt-2">Professional hair extensions with premium care</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Packages Included */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                All Packages Include
              </h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4 mb-8">
                {[
                  "Dyeing",
                  "Tape, Nail, Weft or Micro Braids Hair Extensions",
                  "Hair extensions (minimum 100g)",
                  "Clipping",
                  "Styling"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center mr-3 mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
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
            
            <div className="bg-gray-100 p-4 text-center">
              <p className="text-sm text-gray-600">Book your appointment today!</p>
            </div>
          </div>

          {/* Right Column - Things to Consider */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                Things to Consider Before the Visit
              </h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Come with freshly washed hair, washed with shampoo only.</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Do not use conditioner or styling products before the visit.</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Do you need to have hair extensions removed? Select the Remove, Color & Insert option. Additional cost for removal will apply!
                  </span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-8 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">NOTE!</h3>
                <p className="text-blue-700 text-sm">
                  If you have, or think you have, hair that is too short, you first need to consult with us to see if hair extensions are possible for you. You can then send us a picture of your hair and we will check it for you. We usually say that you should have hair length at least to the chin. If you book an appointment with hair that is too short where hair extensions are not possible - then you will be charged a No Show of 50% of the treatment cost.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Pictures can be sent here:</h3>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">info@dana.se</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">Or our Instagram customer service</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 text-center">
              <p className="text-sm text-gray-600">We look forward to your visit!</p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HairServicesPage;