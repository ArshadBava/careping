import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    // Cleanup overflow on component unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section id="services-section" className="w-full py-20 bg-gray-50 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From nursing to pharmacy, everything you need is just a ping away.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => openModal(service)}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-b-4 hover:border-secondary group cursor-pointer"
                        >
                            <div className="bg-light-teal w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="text-primary w-7 h-7 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed line-clamp-3">
                                {service.desc || service.shortDesc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                            onClick={closeModal}
                        ></div>

                        {/* Modal Content */}
                        <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 animate-fade-in-up">

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full text-gray-600 hover:text-red-500 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Image Side */}
                                <div className="w-full md:w-2/5 h-64 md:h-auto">
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                                        {selectedService.title}
                                    </h3>
                                    <h4 className="text-primary font-medium mb-4">
                                        {selectedService.shortDesc}
                                    </h4>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {selectedService.fullDesc}
                                    </p>
                                    <Link to="/contact" onClick={closeModal}>
                                        <button className="bg-primary text-white font-semibold py-2 px-6 rounded-full w-fit hover:bg-opacity-90 transition-all">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Services;
