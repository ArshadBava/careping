import React from 'react';

import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-image.png';

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

            {/* Right Image Content - Redesigned */}
            <div className="w-full md:w-1/2 relative h-[60vh] md:h-screen order-1 md:order-2 flex justify-center items-end md:items-center overflow-hidden">

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[120%] h-[100%] bg-primary rounded-bl-[200px] md:rounded-bl-[300px] translate-x-[20%] -translate-y-[10%] md:translate-y-0 z-0"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full z-0 blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/10 rounded-full z-0 blur-3xl"></div>

                {/* Secondary Lighter Shape for Depth */}
                <div className="absolute top-0 right-[-10%] w-[120%] h-[110%] bg-light-teal/20 rounded-bl-[250px] md:rounded-bl-[350px] translate-x-[25%] -z-10"></div>

                <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl z-10 px-4 md:px-0 mt-auto flex justify-center md:block">
                    <img
                        src={HeroImage}
                        alt="Medical Professionals"
                        className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in-up"
                        style={{ maxHeight: '90vh' }}
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
