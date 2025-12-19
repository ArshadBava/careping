import React from 'react';

import { Link } from 'react-router-dom';
import HeroBanner from '../assets/HeroBanner.jpg';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-white flex flex-col md:flex-row items-center overflow-hidden font-poppins pt-20 md:pt-0">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 order-2 md:order-1 z-10">
                <div className="max-w-xl">
                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-navy mb-6">
                        Care is just a <span className="text-secondary">Ping</span> away
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                        Instant, compassionate, connected care — anytime, anywhere.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-row gap-4">
                        <Link to="/contact">
                            <button className="bg-primary text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                                Book Now
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="bg-white text-navy border border-navy text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                                About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Image Content */}
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-screen order-1 md:order-2 flex justify-center items-center bg-gray-50 p-6 md:p-0">
                <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl transform md:translate-x-0">
                    <img
                        src={HeroBanner}
                        alt="CarePing Hero"
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl z-10 relative"
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
