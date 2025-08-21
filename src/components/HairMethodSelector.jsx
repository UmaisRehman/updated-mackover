import React, { useState } from 'react';
import image1 from "../assets/Hårförlängning-–-Tape-Hair.jpg";
import image2 from "../assets/Standard-Tape-Hair-2cm-IDANA-Beauty-300x300.png";
import nailImage1 from "../assets/Nail-Hair-3.webp";
import weftimage from "../assets/weft-hair.jpg";
import mircobridle from "../assets/micro-bridle.jpg";
import lengthimg from "../assets/length.webp";
import quatityimg from "../assets/quantity.webp";
import colorcircle from "../assets/COLOR.webp";
import allcolor from "../assets/all color.webp";

const HairMethodSelector = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);

  const questions = [
    { id: 'method', title: 'Which method?' },
    { id: 'length', title: 'What length?' },
    { id: 'quantity', title: 'What quantity?' },
    { id: 'color', title: 'What color?' }
  ];

  const methodOptions = [
    {
      id: 'tape',
      title: 'Tape Hair - Tape Hair Extensions',
      description: 'Tape-in hair extensions are pre-taped wefts that are sandwiched between small sections of your natural hair. They are lightweight, lay flat against the head, and are virtually undetectable.',
      pros: ['Quick installation', 'Comfortable to wear', 'Easy maintenance', 'Reusable'],
      cons: ['May need repositioning every 6-8 weeks', 'Not suitable for very thin hair'],
      detailedContent: (
        <div className="space-y-6">
          <div>
            <div className="flex justify-center items-center gap-1">
              <img src={image1} width={400} />
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Tape hair is the most popular and gentlest method on the market. Applied either as a double or single tape. The method is best suited for those with thin hair. And for those with extra thin hair, especially at the temples, you can use single tape to minimize the weight, i.e. only taping one strip instead of two together "sandwiches" as is usually done with a tape hair extension.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Can be reused between 2-3 times which means the hair will last between 6-8 months if you have taken good care of your hair. With Tape Hair extensions you can do a full extension, thickening or just add effect strands to your own hair.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
              <li>Lasts about 1-2 months depending on care.</li>
              <li>Lasts about 6-8 months with re-insertion.</li>
              <li>Best suited for those with thin hair:</li>
              <li>1 strip of tape = 2.5 grams and 4 cm wide</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-purple-700">Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% Real hair (Luxury Hair)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Straight, Wavy & Curly (NB! The last two are made to order)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Remy quality</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Lasts up to 1-2 months</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Lasts up to 4-6 months with reapplication</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">All hairs lie in the same direction</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Flatten, curl and style just the way you want</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Weight: 2.5g/tape strip</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Wide: 4 cm</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-purple-700">Packaging</h4>
            <p className="text-gray-700 text-lg">One package contains 20 tape strips (50 grams)</p>
          </div>

          <div className="border-t border-gray-200 pt-5">
            <img src={image2} width={325} />
            <p className="text-lg font-semibold text-gray-800">Regular Tape Hair</p>
            <p className="text-gray-700">4 cm and 2.5g</p>
          </div>
        </div>
      )
    },
    {
      id: 'nail',
      title: 'Nail Hair - Keratin Wax',
      description: 'Keratin wax extensions use a special bonding technology that is gentle on hair. The extensions are attached using a heating tool that melts the keratin bond.',
      pros: ['Secure hold', 'Natural look', 'Long-lasting (3-4 months)', 'Good for medium to thick hair'],
      cons: ['Longer installation time', 'Requires professional removal'],
      detailedContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Nail Hair - Keratin Wax</h3>
            <div className="flex justify-center items-center mb-5">
              <img src={nailImage1} width={200} />
            </div>
            
            <h4 className="text-2xl font-semibold mb-3 text-gray-800">Nail Art</h4>
            <p className="text-gray-700 mb-4 text-lg">
              Nail Hair Extensions are a popular hair extension method where you attach hair extensions with heat and wax. The attachments are small thin wax nails that you melt and attach around a thin strand of your own hair. With Nail hair extensions you can do a full extension, thickening or just add effect strands to your own hair.
            </p>
            
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              1 keratin loop = 1 gram
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
              <li>Lasts about 3-6 months depending on care.</li>
              <li>Best suited for those with thick hair.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-purple-700">Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% Real hair (Luxury Hair)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Straight, Wavy & Curly (NB! The last two are made to order)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Remy quality</span>
             </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Lasts up to 3-6 months (hair extension attachment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">All hairs lie in the same direction</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Flatten, curl and style just the way you want</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Weight: 1g/loop</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-purple-700">Packaging</h4>
            <p className="text-gray-700 text-lg">One package contains 50 strands (50 grams)</p>
          </div>
        </div>
      )
    },
    {
      id: 'weft',
      title: 'Weft Hair - Sew-In Hair Extensions',
      description: 'Sew-in weft extensions involve braiding the natural hair into cornrows and then sewing the weft extensions onto the braids. This method provides a secure and durable attachment.',
      pros: ['Very secure', 'Long-lasting', 'Good for active lifestyles', 'Minimal daily maintenance'],
      cons: ['Can be heavy', 'Tight on scalp', 'Not suitable for thin hair'],
      detailedContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Weft Hair - Sew-in Hair Extensions</h3>
            <div className="flex justify-center items-center mb-5">
              <img src={weftimage} width={400} />
            </div>
            
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Weft Hair</h4>
            <p className="text-gray-700 mb-4 text-lg">
              Weft Hair Extensions is a popular hair extension method where you sew the hair extensions into a braid, the method is also called weaving. This is a gentle method as no chemicals are used and when your hair is braided, the wear and tear on your own hair is minimized. This method is suitable for all hair types but is not recommended for those with weak, thin or damaged hair.
            </p>

            <h4 className="text-xl font-semibold mb-3 text-gray-800">How does it work?</h4>
            <p className="text-gray-700 mb-4 text-lg">
              The hairdresser creates braids along the scalp where you want the hair extensions to sit and then continues to sew the hair extensions in place with a thread along the braids. You choose between hair thickening or full hair extensions.
            </p>

            <h4 className="text-xl font-semibold mb-3 text-gray-800">Care</h4>
            <p className="text-gray-700 mb-4 text-lg">
              To maintain a sewn hair extension it is important to shampoo the hair regularly and to avoid using too much blow dryer or other heat on the hair. When washing the hair it is good to rinse it out thoroughly so that no shampoo residue gets stuck in the braids. Since the hair has braids it takes longer to dry the hair. It is important not to rub the hair dry so that the braids do not dissolve.
            </p>
            
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              1 hair part = 100 grams
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
              <li>Lasts about 3-4 months depending on care.</li>
              <li>The hair can be reused.</li>
            </ul>

            <p className="text-gray-700 mb-4 text-lg">
              After about 2-3 months of use, you can book a re-insertion and use the same extensions. We will then remove your current extensions, wash and blow dry your hair and finish by re-inserting the same extensions or new hair if you wish.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-purple-700">Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% Real hair (Luxury Hair)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Straight, Wavy & Curly (NB! The last two are made to order)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Remy quality</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Lasts up to 3-4 months</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Reusable extensions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">All hairs lie in the same direction</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Flatten, curl and style just the way you want</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Weight: 100g/hair part</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-purple-700">Packaging</h4>
            <p className="text-gray-700 text-lg">One package contains 1 hair part (100 grams)</p>
          </div>
        </div>
      )
    },
    {
      id: 'micro',
      title: 'Micro bridle - Micro rings with bridle',
      description: 'Micro ring extensions use small metal rings to attach individual strands of extension hair to small sections of natural hair. No heat or glue is required for application.',
      pros: ['No damage from heat or chemicals', 'Adjustable tension', 'Reusable', 'Good for fine hair'],
      cons: ['Can slip if not properly installed', 'May need tightening every 4-6 weeks'],
      detailedContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Micro bridle - Micro rings with bridle</h3>
            <div className="flex justify-center items-center mb-5">
              <img src={mircobridle} width={400} />
            </div>
            
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Micro bridle</h4>
            <p className="text-gray-700 mb-4 text-lg">
              This hair extension method is much faster than the individual micro rings as you place the hair as in the loop-by-loop method. Micro braids are the gentlest method as no heat, tape or glue is used during insertion! A full 100 gram hair braid is cut and placed horizontally in strips against the head. The hair braid parts are then attached together with your own hair and pulled through the micro rings, which are then clamped.
            </p>
            
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              One hair part = 100 grams
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
              <li>Lasts about 3-4 months depending on care.</li>
              <li>The hair can be reused.</li>
            </ul>
          </div>


          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-purple-700">Packaging</h4>
            <p className="text-gray-700 text-lg">One package contains 1 hair part (100 grams)</p>
          </div>
        </div>
      )
    }
  ];

  const lengthOptions = [
    { id: '30', value: '30 cm', note: '' },
    { id: '40', value: '40 cm', note: '' },
    { id: '50', value: '50 cm', note: '' },
    { id: '60', value: '60 cm', note: 'Made to order' },
    { id: '70', value: '70 cm', note: 'Made to order' }
  ];

  const toggleQuestion = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
      setActiveMethod(null);
    } else {
      setActiveQuestion(questionId);
      setActiveMethod(null);
    }
  };

  const toggleMethod = (methodId) => {
    if (activeMethod === methodId) {
      setActiveMethod(null);
    } else {
      setActiveMethod(methodId);
    }
  };

  const selectLength = (lengthId) => {
    setSelectedLength(lengthId);
  };

  return (
    <div className="w-full bg-white p-6 md:p-10 max-w-6xl mx-auto rounded-xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-800 uppercase">
        WHICH METHOD? WHAT LENGTH? WHAT QUANTITY? WHAT COLOR?
      </h2>
      
      {/* Question Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => toggleQuestion(question.id)}
            className={`py-4 px-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${
              activeQuestion === question.id 
                ? 'bg-purple-600 text-white shadow-lg transform -translate-y-1' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {question.title}
          </button>
        ))}
      </div>
      
      {/* Method Question Content */}
      {activeQuestion === 'method' && (
        <div className="bg-purple-50 p-6 md:p-8 rounded-xl border border-purple-200 mb-8 animate-fadeIn">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-800 text-center">
            WHICH METHOD SHOULD I CHOOSE?
          </h3>
          
          <div className="space-y-4">
            {methodOptions.map((method) => (
              <div key={method.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleMethod(method.id)}
                  className={`w-full p-5 text-left font-medium flex justify-between items-center ${
                    activeMethod === method.id ? 'bg-purple-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    <div className={`h-6 w-6 rounded-full mr-4 flex items-center justify-center ${
                      activeMethod === method.id ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {activeMethod === method.id && (
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-lg">{method.title}</span>
                  </span>
                  <svg 
                    className={`h-5 w-5 transition-transform ${activeMethod === method.id ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeMethod === method.id && (
                  <div className="p-5 bg-white border-t border-gray-100 animate-fadeIn">
                    {/* Show detailed content for methods that have it, regular content for others */}
                    {method.detailedContent ? (
                      method.detailedContent
                    ) : (
                      <>
                        <p className="text-gray-700 mb-4 text-lg">{method.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-3 text-lg">Pros:</h4>
                            <ul className="list-disc list-inside text-gray-600 pl-2 space-y-2">
                              {method.pros.map((pro, index) => (
                                <li key={index} className="text-base">{pro}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-600 mb-3 text-lg">Cons:</h4>
                            <ul className="list-disc list-inside text-gray-600 pl-2 space-y-2">
                              {method.cons.map((con, index) => (
                                <li key={index} className="text-base">{con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Length Question Content */}
      {activeQuestion === 'length' && (
        <div className="bg-purple-50 p-6 md:p-8 rounded-xl border border-purple-200 animate-fadeIn">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-800 text-center">
            WHAT LENGTH SHOULD I HAVE?
          </h3>
          
          <div className="mb-6 bg-white p-5 rounded-lg">
            <p className="text-gray-700 mb-4 text-lg">
              With us you can choose to insert between 40 cm and 70 cm.
            </p>
            <img src={lengthimg} />
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              NOTE! 60 cm and 70 cm are made to order. When booking, you can note approximately which color you want.
            </p>
          </div>
        </div>
      )}
      
      {/* Quantity Question Content */}
      {activeQuestion === 'quantity' && (
        <div className="bg-purple-50 p-6 md:p-8 rounded-xl border border-purple-200 animate-fadeIn">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-800 text-center">
            HOW MUCH HAIR SHOULD I PUT IN?
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-purple-700">Hair Extension</h4>
              <p className="text-gray-700 mb-4 text-lg">
                Do you have short hair but want long hair with volume? Approximately 100g - 150g
              </p>
              
              <h4 className="text-xl font-bold mb-4 text-purple-700">Hair thickening</h4>
              <p className="text-gray-700 mb-4 text-lg">
                Do you have long hair but thin and want more volume? approx. 60g - 100g
              </p>
              
              <p className="text-gray-700 mb-4 text-lg">
                The longer the hair you choose, the more grams you need to put in to achieve good fullness.
              </p>
            <div className="bg-white p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">40 cm/150g</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">50 cm/150g</p>
                </div>
              </div>
              
              <img src={quatityimg} alt="Quantity comparison" className="w-full rounded-lg mb-4" />
              
              <p className="text-gray-700 text-lg font-semibold text-center">
                WHAT AMOUNT – GELLAS beauty
              </p>
              <p className="text-gray-600 text-center">
                The picture shows an approximate result after a clear hair extension.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-purple-700">Normal full hair</h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li><span className="font-semibold">40 cm</span> | 100g - 125g</li>
                <li><span className="font-semibold">50 cm</span> | 125g - 150g</li>
                <li><span className="font-semibold">60 cm</span> | 150g - 170g</li>
                <li><span className="font-semibold">70 cm</span> | 170g - 200g</li>
              </ul>
            </div>
            </div>
            
            
          </div>
        </div>
      )}
      
      {/* Placeholder for color question */}
   {activeQuestion === 'color' && (
  <div className="bg-purple-50 p-6 md:p-8 rounded-xl border border-purple-200 animate-fadeIn">
    <h3 className="text-xl md:text-2xl font-bold mb-6 text-purple-800 text-center">
      WHAT COLOR SHOULD I CHOOSE?
    </h3>
    
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-lg">
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-lg">
          <li>What color should I have for my hair extensions?</li>
          <li>Do you want to mix several colors and make a mix?</li>
          <li>Do you want Ombre or Streaks?</li>
          <li>Do you want to find out what hair color you have?</li>
        </ul>
        
        <p className="text-gray-700 mt-4 text-lg">
          Choose from 26 different standard colors or mix two colors to get a sling effect. Ombre variants are a made-to-order item and we need information from you so that we can quickly order it for your hair extension.
        </p>
      </div>
      
      <div className="bg-white p-5 rounded-lg">
        <h4 className="text-xl font-bold mb-4 text-purple-700 text-center">
          SEE OUR HAIR EXTENSIONS COLOR CHART HERE
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img 
              src={colorcircle} 
              alt="Color chart" 
              className="w-full rounded-lg mb-2 cursor-pointer transition-transform duration-300 hover:scale-105" 
              onClick={() => {
                // Create a modal for the image
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
                modal.innerHTML = `
                  <div class="relative max-w-4xl max-h-full">
                    <img src="${colorcircle}" alt="Color chart enlarged" class="max-w-full max-h-full">
                    <button class="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center">&times;</button>
                  </div>
                `;
                modal.querySelector('button').addEventListener('click', () => {
                  document.body.removeChild(modal);
                });
                document.body.appendChild(modal);
              }}
            />
            <p className="text-gray-600 text-sm ">Click on the image to enlarge.</p>
          </div>
          <div className="text-center lg:mt-12">
            <img 
              src={allcolor} 
              alt="All colors" 
              className="w-full rounded-lg mb-2 cursor-pointer transition-transform duration-300 hover:scale-105" 
              onClick={() => {
                // Create a modal for the image
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
                modal.innerHTML = `
                  <div class="relative max-w-4xl max-h-full">
                    <img src="${allcolor}" alt="All colors enlarged" class="max-w-full max-h-full">
                    <button class="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center">&times;</button>
                  </div>
                `;
                modal.querySelector('button').addEventListener('click', () => {
                  document.body.removeChild(modal);
                });
                document.body.appendChild(modal);
              }}
            />
            <p className="text-gray-600 text-sm">Click on the image to enlarge.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      
      {!activeQuestion && (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
          <svg className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-xl">Select one of the options above to learn more</p>
        </div>
      )}
    </div>
  );
};

export default HairMethodSelector;