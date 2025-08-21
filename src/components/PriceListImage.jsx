import React from 'react';
import price from "../assets/pricelist.jpg"
const PriceListImage = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <img
        src={price}
        className="max-w-full h-auto mb-4"
      />
     
       {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
             <a
        href={price}
        download
       
      >
        Download Price List
      </a>
          </button>
        </div>
    </div>
  );
};

export default PriceListImage;
