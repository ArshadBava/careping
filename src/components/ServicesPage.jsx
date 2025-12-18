import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full pt-32 pb-20 bg-gray-50 font-poppins text-navy">
            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover a complete range of home and online healthcare
                    solutions — from nursing and doctor consultations to
                    physiotherapy, diagnostics, and pharmacy support — all
                    available at your fingertips.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
                {servicesData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    // Zig-Zag Logic: 
                    // Index 0 (Item 1): isEven=true. Prompt: "Item 1: Image on Left, Text on Right".
                    // So if Even -> Image Left.
                    // Mobile: Always stack Image Top (order-1), Text Bottom (order-2).
                    // Desktop: Image Left (order-1), Text Right (order-2) OR Image Right (order-2), Text Left (order-1).

                    return (
                        <div key={service.id} className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                            {/* Image Section */}
                            <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'} order-1`}>
                                <div className="rounded-2xl shadow-xl overflow-hidden h-[300px] md:h-[400px] relative group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'} order-2 flex flex-col justify-center`}>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                                    {service.title}
                                </h2>
                                <h3 className="text-xl text-primary font-semibold mb-6">
                                    {service.shortDesc}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {service.fullDesc}
                                </p>
                                <div>
                                    <Link to="/contact">
                                        <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                                            Book This Service
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-24">
                <p className="text-xl text-gray-700 mb-6">Need something else?</p>
                <Link to="/contact" className="text-primary font-semibold text-lg hover:underline underline-offset-4">
                    Contact our support team
                </Link>
            </div>
        </section>
    );
};

export default ServicesPage;
