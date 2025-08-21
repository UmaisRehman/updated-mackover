import React from 'react';

const PriceListSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-900">PRICE LIST</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            In Book Direct - Follow these steps:
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-3 mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">First choose which Coloring</h3>
            </div>
            <p className="text-gray-600">
              Sometimes it can be difficult to know which color you need depending on the result you want to achieve. Our prices refer to the time we spend on the color. Below times are approximate examples of colors within that time frame. If you feel unsure about which color to book, you can contact us or book a consultation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-pink-100 text-pink-700 rounded-full p-3 mr-4">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Add "Remove Wash" if you have hair extensions inserted</h3>
            </div>
            <p className="text-gray-600">
              We have discounted prices for washing and removal in a makeover treatment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-teal-100 text-teal-700 rounded-full p-3 mr-4">
                <span className="text-2xl">🔁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Reattach existing hair</h3>
            </div>
            <p className="text-gray-600">
              If you are going to reattach existing hair - See Reattach options. If you are going to restyle existing hair - Add only this option along with the coloring.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 text-purple-700 rounded-full p-3 mr-4">
                <span className="text-2xl">🆕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Brand new hair extensions</h3>
            </div>
            <p className="text-gray-600">
              If you are going to have brand new hair extensions. Use this option together with wash + removal if you have hair from before that you wish to remove before the new set.
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="bg-indigo-200 text-indigo-800 rounded-lg p-2 mr-4 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl text-indigo-800 mb-2">Important Note</h3>
              <p className="text-indigo-700">
                The price you see on the right side is the final price and everything is included in that price. That is, the price you see in the color column is only intended to show the time and price for the coloring.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default PriceListSection;