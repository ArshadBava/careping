import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Apple, Play, Youtube } from 'lucide-react';
import logo from '../assets/carepinglogo.png';



const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#0B1A33] text-white pt-20 pb-10 font-poppins">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

                {/* 1. Logo Section */}
                <div className="mb-10 transform hover:scale-105 transition-transform duration-300">
                    <Link to="/" onClick={scrollToTop} className="text-3xl font-bold tracking-wider">
                        <span className="text-white">CARE</span>
                        <span className="text-primary">PING</span>
                    </Link>
                </div>

                {/* 2. Main Navigation */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                    <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">Home</Link>
                    <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">About Us</Link>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">Services</Link>
                    <Link to="/nursing-services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">Nursing Services</Link>
                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide">Contact</Link>
                </nav>

                {/* 3. App Download Section */}
                <div className="flex flex-col items-center mb-12">
                    <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">Experience CarePing on Mobile</p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-primary hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all group">
                            <Apple className="w-5 h-5 group-hover:text-primary transition-colors" />
                            <div className="text-left">
                                <span className="block text-[8px] text-gray-400 leading-none">Download on</span>
                                <span className="block text-xs font-bold leading-none mt-0.5">App Store</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-primary hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all group">
                            <Play className="w-5 h-5 group-hover:text-primary transition-colors fill-current" />
                            <div className="text-left">
                                <span className="block text-[8px] text-gray-400 leading-none">Get it on</span>
                                <span className="block text-xs font-bold leading-none mt-0.5">Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* 4. Social Media Section */}
                <div className="flex gap-4 mb-14">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                        <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                        <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                        <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                        <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                        <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* 5. Bottom Section: Legal & Copyright */}
                <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                    <div>
                        © 2025 CarePing Healthcare Pvt Ltd. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
