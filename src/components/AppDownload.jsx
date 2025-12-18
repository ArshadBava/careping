import React from 'react';
import MobileAppImage from '../assets/MobileApp.png';

const AppDownload = () => {
    return (
        <section id="app-download-section" className="w-full py-20 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                {/* Floating Card */}
                <div className="bg-gradient-to-r from-primary to-teal-700 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row items-center px-8 md:px-16 pt-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10 pb-12 md:pb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Healthcare That Fits in Your Pocket
                        </h2>
                        <p className="text-base md:text-lg text-white opacity-90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed md:pr-4">
                            Access the complete healthcare ecosystem at your fingertips. Whether booking a nurse, consulting a doctor, or ordering medicines — everything happens seamlessly within the app. It’s healthcare made simple, secure, and personal.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            {/* App Store */}
                            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-lg active:scale-95">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.68-.83 1.14-1.99 1.01-3.15-1.09.05-2.4 1.12-3.17 2.03-.68.81-1.27 2.05-1.12 3.17 1.22.09 2.61-1.21 3.28-2.05" />
                                </svg>
                                <div className="text-left">
                                    <span className="block text-[9px] leading-tight">Download on the</span>
                                    <span className="block text-sm font-bold leading-none">App Store</span>
                                </div>
                            </button>

                            {/* Google Play */}
                            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-lg active:scale-95">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08,20.75,11.5,20.75,12C20.75,12.5,20.53,12.92,20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <span className="block text-[9px] leading-tight">Get it on</span>
                                    <span className="block text-sm font-bold leading-none">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end relative h-[300px] md:h-[450px]">
                        <img
                            src={MobileAppImage}
                            alt="CarePing App Interface"
                            className="w-auto h-full object-contain drop-shadow-2xl md:translate-y-8 transform hover:-translate-y-2 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppDownload;
