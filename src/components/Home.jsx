import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import AppDownload from './AppDownload';
import Contact from './Contact';

import BlogSection from './BlogSection';

import Partners from './Partners';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Partners />
            <div id="about-section">
                <About />
            </div>
            <div id="services-section">
                <Services />
            </div>

            <BlogSection />
            <AppDownload />
            <div id="contact-section">
                <Contact />
            </div>
            <Testimonials />
        </>
    );
};

export default Home;
