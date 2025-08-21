import React from 'react'
import image3 from "../assets/lady.jpeg"
const Lady = () => {
  return (
<>
<div className=" py-16 px-6 md:px-8 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      {/* Image placeholder - will appear on the left */}
      <div className="lg:w-1/2">
        <div className="bg-gray-200 rounded-xl lg:mt-13 overflow-hidden  lg:w-96  lg:h-96 flex items-center justify-center">
          <img src={image3} alt="Hair extensions" className=" h-120 object-cover" />
        </div>
      </div>
      
      {/* Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why should you get hair extensions done with us?
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          So if you're looking for a transformation, increased confidence or just want to treat yourself to
          some extra love and care, come to one of our salons. Contact us today to book your next
          treatment, and let us take care of your hair with the care and expertise it deserves.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">EXCELLENT CUSTOMER SERVICE!</span>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">ALWAYS FREE CONSULTATION!</span>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">CHEAPEST IN SWEDEN!</span>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">LUXURY HAIR QUALITY!</span>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">MANY YEARS OF EXPERIENCE!</span>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-800 font-medium">ONE MONTH WARRANTY!</span>
          </div>
        </div>
        
        {/* <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
          <div className="flex items-start">
            <div className="bg-purple-600 p-2 rounded-full mr-3 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 极狐 011-8.618 11.955 11.955 0 019.618 4.484 11.955 11.955 0 014.484 9.618A11.955 11.955 0 0118.618 21.5a11.955 11.955 0 01-9.618-4.484A11.955 11.955 0 014.484 7.382 11.955 11.955 0 012.944 12a11.955 11.955 0 014.484 9.618z"></path>
              </svg>
            </div>
            <span className="text-purple-800 font-semibold">WE ARE ALSO AFFILIATED WITH THE COUNTY COUNCIL.</span>
          </div>
        </div> */}
        
        {/* <button className="group flex items-center text-purple-700 font-semibold hover:text-purple-900 transition-colors">
          <span className="mr-2">Read more</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button> */}
      </div>
    </div>
  </div>
</div>
</>
)
}

export default Lady