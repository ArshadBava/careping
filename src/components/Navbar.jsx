import React, { useState, useEffect } from 'react';
import logo from '../assets/carepinglogo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToApp = () => {
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation
            setTimeout(() => {
                const appSection = document.getElementById('app-download-section');
                if (appSection) {
                    appSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const appSection = document.getElementById('app-download-section');
            if (appSection) {
                appSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img src={logo} alt="CarePing Logo" className="h-16 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu (Center) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-navy hover:text-primary font-medium transition-colors">Home</Link>
                        <Link to="/about" className="text-navy hover:text-primary font-medium transition-colors">About Us</Link>
                        <Link to="/services" className="text-navy hover:text-primary font-medium transition-colors">Services</Link>
                        <Link to="/nursing-services" className="text-navy hover:text-primary font-medium transition-colors">Nursing Services</Link>
                        <Link to="/blog" className="text-navy hover:text-primary font-medium transition-colors">Blog</Link>
                        <Link to="/contact" className="text-navy hover:text-primary font-medium transition-colors">Contact Us</Link>
                    </div>

                    {/* Desktop Right (Login + Get App) */}
                    <div className="hidden md:flex items-center space-x-6">

                        <button
                            onClick={scrollToApp}
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5"
                        >
                            Get App
                        </button>
                    </div>

                    {/* Mobile Right (Get App + Hamburger) */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Get App Button - Visible on Mobile */}
                        <button
                            onClick={scrollToApp}
                            className="bg-primary text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium shadow-sm active:scale-95 transition-transform"
                        >
                            Get App
                        </button>

                        {/* Hamburger Menu */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy hover:text-primary focus:outline-none p-1"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">Home</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">About Us</Link>
                        <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">Services</Link>
                        <Link to="/nursing-services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">Nursing Services</Link>
                        <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">Blog</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-navy hover:bg-gray-50 hover:text-primary">Contact Us</Link>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
