
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/aboutimg.jpg';

const About = () => {
    return (
        <section className="w-full py-20 bg-white font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                        About Care Ping
                    </h2>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        We’re redefining digital healthcare by putting people before processes. From home nursing to virtual therapy, every service on Care Ping is built around trust, comfort, and connection. Because we know that the best kind of care doesn’t just heal it understands.
                    </p>

                    <div className="space-y-4 mb-10">
                        {[
                            "Certified Professionals (Doctors, Nurses, Therapists)",
                            "Affordable & Transparent Pricing",
                            "Technology meets Empathy"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
                                <span className="text-navy font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/about" className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300">
                        Explore More
                    </Link>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                    <div className="rounded-3xl w-full h-[400px] md:h-[500px] shadow-lg overflow-hidden relative">
                        <img src={aboutImage} alt="About CarePing" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
