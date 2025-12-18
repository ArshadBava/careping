import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Globe, Shield, Zap, Heart,
    Stethoscope, Video, Brain, TestTube,
    Smartphone, Lock, Building, Users,
    CheckCircle, Award, Clock
} from 'lucide-react';
import logo from '../assets/carepinglogo.png';

const AboutPage = () => {
    // --- Animations ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // Merged variant for Cards (Scale on Hover + Fade In)
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { scale: 1.02, transition: { duration: 0.3 } }
    };

    // --- Data ---
    const offers = [
        {
            title: "24/7 Urgent & Everyday Care",
            desc: "For colds, flu, minor injuries, chronic condition management, and follow‑up.",
            icon: Clock
        },
        {
            title: "Virtual Primary Care",
            desc: "Holistic support including labs, medication refills, and ongoing health plans.",
            icon: Video
        },
        {
            title: "Behavioural & Mental Health",
            desc: "Access licensed therapists and psychiatrists offering therapy, medication evaluation, and follow-ups.",
            icon: Brain
        },
        {
            title: "Diagnostic & Lab Integration",
            desc: "Seamless lab ordering and results, extended through our partnerships.",
            icon: TestTube
        }
    ];

    const workSteps = [
        { text: "On-demand video visits via smartphone or desktop", icon: Smartphone },
        { text: "Secure medical record vault, available anytime", icon: Lock },
        { text: "Integration with insurance/employers for easy claims and upfront pricing", icon: Building },
        { text: "Post‑visit follow-ups and care coordination backed by patient‑centric service teams", icon: Users }
    ];

    const whyChooseUs = [
        { title: "Accessibility", desc: "Care for urban, rural, and mobility‑limited individuals", icon: Globe },
        { title: "Quality", desc: "Only board‑certified, vetted clinicians following strict quality protocols", icon: Award },
        { title: "Convenience", desc: "Zero‑wait, transparent pricing, and seamless access to a full spectrum of care", icon: Zap },
        { title: "Empathy", desc: "We strive to treat every patient with dignity and build trust through every interaction", icon: Heart }
    ];

    const objectives = [
        { title: "Expand accessibility", desc: "Continuously broaden patient reach through innovative telehealth tools and partnerships, eliminating traditional barriers like location or mobility." },
        { title: "Ensure excellence", desc: "Deliver clinically sound care via certified professionals, supported by ongoing quality improvement and rigorous clinician vetting - aligned with top telehealth standards." },
        { title: "Personalize the experience", desc: "Offer tailored care journeys - from urgent needs and primary care to chronic and mental health - through integrated, user-friendly digital workflows." },
        { title: "Affordability & transparency", desc: "Provide clear pricing and flexible payment options, working with insurers to minimize out‑of‑pocket costs and ensure no surprise bills." },
        { title: "Build trust and empathy", desc: "Cultivate long‑term patient relationships grounded in respect, kindness, and commitment to holistic well-being - echoing values from top telehealth innovators." },
        { title: "Foster innovation", desc: "Continuously enhance platform capabilities - secure data, real-time diagnostics, care coordination - through partnerships and in-house R&D." }
    ];

    return (
        <div className="w-full pt-28 pb-20 font-poppins bg-gray-50 overflow-hidden text-navy">

            {/* Section A: Header */}
            <motion.header
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center mb-20 px-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <img src={logo} alt="CarePing Logo" className="h-20 w-auto" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-navy text-center relative pb-4">
                    About CarePing
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                </h1>
            </motion.header>

            {/* Section B: Who We Are */}
            <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                    <p className="text-gray-600 text-lg md:text-xl leading-loose text-justify">
                        A dedicated team of licensed physicians, nurses, therapists, and technologists, united by the belief that
                        <span className="font-semibold text-primary"> “Care is just a Ping away”</span>.
                        We’ve combined clinical excellence with secure, user-first digital design to build a platform capable of meeting modern health challenges.
                    </p>
                </motion.div>
            </section>

            {/* Section C: What We Offer */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-navy"
                >
                    What We Offer
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-primary transition-all group"
                        >
                            <div className="bg-light-teal w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <offer.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-navy">{offer.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-justify">{offer.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Section D: How We Work */}
            <section className="bg-white py-20 mb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-navy"
                    >
                        How We Work
                    </motion.h2>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                        >
                            {workSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex flex-col items-center text-center bg-gray-50 lg:bg-transparent p-6 rounded-2xl lg:p-0"
                                >
                                    <div className="w-24 h-24 bg-white border-4 border-secondary/20 rounded-full flex items-center justify-center mb-6 shadow-md z-10">
                                        <step.icon className="w-10 h-10 text-secondary" />
                                    </div>
                                    <p className="text-gray-700 font-medium text-justify w-full">{step.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section E: Why Choose Us */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-navy"
                >
                    Why Choose Us
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center"
                        >
                            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-navy">{item.title}</h3>
                            <p className="text-sm text-gray-600 text-justify">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Section F: Mission & Vision */}
            <section className="bg-navy text-white py-20 mb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {/* Mission */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Target className="w-10 h-10 text-secondary" />
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-gray-200 text-lg leading-relaxed text-justify">
                                We aim to revolutionize home and virtual care by delivering high-quality, compassionate healthcare anywhere, at any time - making personalized medical service affordable, accessible, and patient-centred.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Globe className="w-10 h-10 text-secondary" />
                                <h2 className="text-3xl font-bold">Our Vision</h2>
                            </div>
                            <p className="text-gray-200 text-lg leading-relaxed text-justify">
                                Our vision is to become the world’s most trusted digital care platform, blending leading-edge technology with our excellent team to ensure seamless, holistic healthcare for every individual.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section G: Objectives */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-16 text-navy"
                >
                    Our Objectives
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {objectives.map((obj, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-t-4 border-secondary transition-all"
                        >
                            <h3 className="font-bold text-xl mb-4 text-navy">{obj.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-justify text-sm">
                                {obj.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
};

export default AboutPage;
