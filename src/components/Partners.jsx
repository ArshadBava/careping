import React from 'react';
import SampleLogo from '../assets/Logos/samplelogo.png';

const Partners = () => {
    // Creating a list of logos to display
    // In a real app, this would be an array of different logo imports.
    // For now, we reuse the sample logo as requested.
    const logos = Array(20).fill({
        id: 1,
        src: SampleLogo,
        alt: "Partner Company"
    });

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold text-navy mb-2">Our Partners</h2>
                <p className="text-gray-500 text-lg">Trusted by companies and collaborators we work with</p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* 
                   We need two sets of logos for the seamless loop.
                   The container width must be large enough to hold them.
                   We use a track that translates -50% (the width of one set).
                */}
                <div className="flex w-max animate-scroll will-change-transform">
                    {/* First Set */}
                    <div className="flex items-center space-x-12 mx-6">
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex-shrink-0  transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate Set for Infinite Scroll */}
                    <div className="flex items-center space-x-12 mx-6">
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex-shrink-0  transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
