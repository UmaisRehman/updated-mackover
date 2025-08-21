import React from 'react';

const DreamHairSection = () => {
    return (
        <section className="mb-12 px-4 sm:px-6 md:px-8 lg:px-12">
            <h1 className="text-3xl font-bold text-center mb-2 break-words">FÅ DITT DRÖMSVALL MED EXTENSIONS!</h1>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 9.172a4 4 0 010 5.656M9.172 14.828a4 4 0 010-5.656m5.656-1.414a6 6 0 010 8.485m-8.485-8.485a6 6 0 018.485 0M12 12v.01" />
                    </svg>
                    BLI INSPIRERAD!
                </h2>
                <button className="text-blue-600 underline hover:text-blue-800 transition duration-200 self-start sm:self-auto">Se fler bilder...</button>
            </div>
            <p className="text-left break-words max-w-full sm:max-w-xl mx-auto">Bli inspirerad av andra som har bokat!</p>
        </section>
    );
};

export default DreamHairSection;
