import React, { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = ({ isPage = false }) => {
    // Scroll to top on mount only if it's a full page view
    useEffect(() => {
        if (isPage) {
            window.scrollTo(0, 0);
        }
    }, [isPage]);

    return (
        <section className={`w-full font-poppins ${isPage ? 'pt-32 pb-20 min-h-screen bg-gray-50' : 'py-20 bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        We’re here to make healthcare simpler for you. Whether you have a question, need support, or wish to collaborate, the Care Ping team is always ready to help. Reach out to us anytime — your health, comfort, and care are just a ping away.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">

                    {/* Left Side: Contact Information (Teal Panel) */}
                    <div className="lg:w-2/5 bg-[#019688] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/10 pointer-events-none"></div>
                        <div className="absolute -top-24 -right-24 w-40 h-40 rounded-full bg-white/5 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="text-teal-100 mb-12 leading-relaxed">
                                We’re here to make healthcare simpler for you. Reach out to us anytime — your health, comfort, and care are just a ping away.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 mt-1" />
                                    <div className="flex flex-col space-y-1 text-teal-50">
                                        <a href="tel:+919846580165" className="hover:text-white transition-colors">+91 98465 80165</a>
                                        <a href="tel:+919846580222" className="hover:text-white transition-colors">+91 98465 80222</a>
                                        <a href="tel:+447587391195" className="hover:text-white transition-colors">+44 75873 91195 (UK)</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 mt-1" />
                                    <a href="mailto:ccareping@gmail.com" className="text-teal-50 hover:text-white transition-colors">
                                        ccareping@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 mt-1" />
                                    <div className="text-teal-50">
                                        <p>Careping Healthcare Pvt.Ltd</p>
                                        <p>154 1st floor 3rd Main 5th cross</p>
                                        <p>MICO layout Opp Nandanavana Park</p>
                                        <p>BTM 2nd stage, Bangalore 560076</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-3/5 p-10 md:p-14 bg-white">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Full Name */}
                                <div className="relative">
                                    <label htmlFor="fullName" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium placeholder-gray-300"
                                        placeholder="Full Name"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="relative">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium placeholder-gray-300"
                                        placeholder="yourname@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Phone Number */}
                                <div className="relative">
                                    <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium placeholder-gray-300"
                                        placeholder="+91 ..."
                                    />
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <label htmlFor="subject" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium cursor-pointer appearance-none"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-gray-300">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="nursing">Nursing Services</option>
                                            <option value="appointment">Book an Appointment</option>
                                            <option value="feedback">Feedback / Suggestion</option>
                                            <option value="careers">Careers</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="1"
                                    className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium placeholder-gray-300 resize-none min-h-[40px] focus:min-h-[100px]"
                                    placeholder="Write your message"
                                    style={{ transition: 'min-height 0.3s ease' }}
                                    onFocus={(e) => e.target.style.minHeight = '100px'}
                                    onBlur={(e) => e.target.value === '' && (e.target.style.minHeight = '40px')}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-[#019688] hover:bg-[#00796b] text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
