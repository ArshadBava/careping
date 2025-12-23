import React, { useEffect } from 'react';
import { nursingData } from '../data/nursingData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const NursingServices = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full pt-28 pb-20 font-poppins bg-gray-50 text-navy">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Nursing Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-600 text-lg max-w-2xl mx-auto"
                >
                    Professional, compassionate care delivered to your doorstep.
                </motion.p>
            </div>

            {/* Mobile Quick Links */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="md:hidden px-4 mb-16"
            >
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-4 text-center">Jump to Section</p>
                    <div className="flex flex-col gap-3">
                        {nursingData.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => scrollToSection(category.id)}
                                className="w-full bg-gray-50 hover:bg-light-teal text-navy text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between group"
                            >
                                {category.categoryTitle}
                                <span className="text-gray-300 group-hover:text-primary transition-colors">↓</span>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {nursingData.map((category, index) => (
                    <div key={category.id} id={category.id} className="mb-24 last:mb-0 scroll-mt-28">
                        {/* Category Title */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 flex items-center gap-4"
                        >
                            <div className="h-10 w-2 bg-secondary rounded-full"></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary">
                                {category.categoryTitle}
                            </h2>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {category.services.map((service) => (
                                <motion.div
                                    key={service.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -10 }}
                                    className="h-full"
                                >
                                    <Link
                                        to={`/nursing-services/${service.id}`}
                                        className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 relative block"
                                    >
                                        {/* Image Area with Overlay */}
                                        <div className="h-56 w-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://placehold.co/600x400?text=Service+Image";
                                                }}
                                            />
                                            {/* Floating Badge */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-20">
                                                Care<span className="text-secondary">Ping</span>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8 flex-grow flex flex-col relative z-20 bg-white">
                                            <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                                {service.shortDesc || "Professional nursing care tailored to your needs. Click to learn more about this service."}
                                            </p>

                                            <div className="mt-auto">
                                                <button className="w-full flex items-center justify-center gap-2 bg-light-teal text-primary font-semibold py-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 pointer-events-none">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NursingServices;
