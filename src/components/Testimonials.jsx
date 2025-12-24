import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { getTestimonials } from '../services/api';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await getTestimonials();
                setTestimonials(response.data);
                // Start from middle if possible for visual balance, or just 0
                if (response.data.length > 0) {
                    setCurrentIndex(Math.floor(response.data.length / 2));
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    useEffect(() => {
        let interval;
        if (isAutoPlaying && testimonials.length > 0) {
            interval = setInterval(() => {
                handleNext();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, testimonials.length]);

    const handleNext = () => {
        if (testimonials.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        if (testimonials.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getPosition = (index) => {
        if (testimonials.length === 0) return 'hidden';
        const diff = (index - currentIndex + testimonials.length) % testimonials.length;

        if (diff === 0) return 'center';
        if (diff === 1 || diff === -4) return 'right';
        if (diff === 2 || diff === -3) return 'far-right';
        if (diff === testimonials.length - 1 || diff === -1) return 'left';
        if (diff === testimonials.length - 2 || diff === -2) return 'far-left';

        return 'hidden';
    };

    const variants = {
        center: {
            x: '-50%',
            scale: 1,
            opacity: 1,
            zIndex: 10,
            filter: 'blur(0px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
        },
        left: {
            x: '-155%',
            scale: 0.85,
            opacity: 0.5,
            zIndex: 5,
            filter: 'blur(0.5px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        },
        right: {
            x: '55%',
            scale: 0.85,
            opacity: 0.5,
            zIndex: 5,
            filter: 'blur(0.5px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        },
        'far-left': {
            x: '-260%',
            scale: 0.7,
            opacity: 0,
            zIndex: 1,
            filter: 'blur(2px)'
        },
        'far-right': {
            x: '160%',
            scale: 0.7,
            opacity: 0,
            zIndex: 1,
            filter: 'blur(2px)'
        },
        hidden: {
            opacity: 0,
            scale: 0
        }
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            handleNext();
        } else if (info.offset.x > 50) {
            handlePrev();
        }
    };

    if (loading) return <div className="py-20 text-center text-gray-400">Loading testimonials...</div>;
    if (testimonials.length === 0) return null;

    return (
        <section className="w-full py-20 bg-gray-50 overflow-hidden font-poppins relative">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16 space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">What Our Clients Say</h2>
                <p className="text-gray-500 text-lg uppercase tracking-wider font-medium">Trusted by hundreds of families</p>
            </div>

            {/* Carousel Area */}
            <div
                className="relative h-[450px] md:h-[500px] flex items-center justify-center max-w-[1400px] mx-auto"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Navigation Buttons (Desktop) */}
                <button
                    onClick={handlePrev}
                    className="absolute left-8 z-30 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all text-gray-700 hidden md:flex items-center justify-center border border-gray-100 group"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-8 z-30 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all text-gray-700 hidden md:flex items-center justify-center border border-gray-100 group"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Cards Container */}
                <div className="relative w-full max-w-sm md:max-w-3xl h-full flex items-center justify-center">
                    <AnimatePresence initial={false} mode='popLayout'>
                        {testimonials.map((testimonial, index) => {
                            const position = getPosition(index);
                            return (
                                <motion.div
                                    key={testimonial.id || index}
                                    initial={false}
                                    animate={position}
                                    variants={variants}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.1}
                                    onDragEnd={handleDragEnd}
                                    className="absolute left-1/2 w-[90%] md:w-[420px] bg-white rounded-3xl p-8 md:p-12 flex flex-col justify-between h-[400px] md:h-[420px] border border-gray-100/50 cursor-grab active:cursor-grabbing"
                                >
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <Quote className="w-12 h-12 text-gray-200 fill-gray-100/50" />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-grow">
                                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium line-clamp-4">
                                            "{testimonial.message}"
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gray-100 my-6"></div>

                                    {/* Profile */}
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-100 p-0.5">
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=random`}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-4 md:mt-0">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full h-2 ${index === currentIndex
                            ? 'bg-blue-600 w-8'
                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
export default Testimonials;
