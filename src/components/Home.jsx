import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import AppDownload from './AppDownload';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <div id="about-section">
                <About />
            </div>
            <div id="services-section">
                <Services />
            </div>
            <AppDownload />
            <div id="contact-section">
                <Contact />
            </div>
        </>
    );
};

export default Home;
