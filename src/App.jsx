import Allservices from "./components/Allservices"
import DreamWaveSection from "./components/DreamWaveSection"
import Footer from "./components/Footer"
import HairExtensionsPackage from "./components/HairExtensionsPackage"
import HairGuide from "./components/HairGuide"
import HairMethodSelector from "./components/HairMethodSelector"
import HairServicesPage from "./components/HairServicesPage"
import Herosection from "./components/Herosection"
import Lady from "./components/Lady"
import Navbar from "./components/Navbar"
import PriceListImage from "./components/PriceListImage"
import PriceListSection from "./components/PriceListSection"

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-25">
        <Herosection />
        <DreamWaveSection />
        <PriceListSection />
        <PriceListImage />
        <HairServicesPage />
        <HairGuide />
        <HairMethodSelector />
        <div>
          <div className="bg-gradient-to-br from-gray-900 to-black text-white mt-15 py-4 px- md:px-8 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')]">
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-2">
                <span className="inline-block bg-purple-600 text-xl font-semibold px-3 py-1 rounded-full mb-4">
                  FREE CONSULTATION
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Book a free consultation!
              </h2>

              <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>

              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
                We want you to get the most out of your treatment, which is why we always include advice and tips tailored to you. Each treatment already includes a consultation before the work starts.
              </p>

              <div className="mb-8 p-4 bg-gray-800 bg-opacity-50 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-200 italic">
                  You choose whether you want to first receive a consultation remotely or only directly during the treatment.
                </p>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 px-10 rounded-lg text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto group">
                <span>BOOK AN APPOINTMENT</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Lady />
        <Allservices />
        <Footer />

      </div>

    </>
  )
}

export default App
