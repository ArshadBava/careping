import React, { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = ({ isPage = false }) => {
    // Scroll to top on mount only if it's a full page view
    useEffect(() => {
        if (isPage) {
            window.scrollTo(0, 0);
        }
    }, [isPage]);

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = React.useState(''); // '', 'sending', 'success', 'error'

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/arshadbavam@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject || 'New Contact Request',
                    message: formData.message,
                    _subject: `New Inquiry: ${formData.subject || 'General'}`, // Custom email subject
                    _template: 'table' // Formsubmit template
                })
            });

            const data = await response.json();

            if (data.success === "true" || response.ok) {
                setStatus('success');
                setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); // Reset form
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

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
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {/* Hidden Captcha Field for FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Full Name */}
                                <div className="relative">
                                    <label htmlFor="fullName" className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
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
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium cursor-pointer appearance-none"
                                        >
                                            <option value="" disabled className="text-gray-300">Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Nursing Services">Nursing Services</option>
                                            <option value="Book an Appointment">Book an Appointment</option>
                                            <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                                            <option value="Careers">Careers</option>
                                            <option value="Other">Other</option>
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-2 border-b border-gray-300 focus:border-[#019688] outline-none transition-colors duration-300 bg-transparent text-navy font-medium placeholder-gray-300 resize-none min-h-[40px] focus:min-h-[100px]"
                                    placeholder="Write your message"
                                    style={{ transition: 'min-height 0.3s ease' }}
                                    onFocus={(e) => e.target.style.minHeight = '100px'}
                                    onBlur={(e) => e.target.value === '' && (e.target.style.minHeight = '40px')}
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Success!</strong>
                                    <span className="block sm:inline ml-1">Your message has been sent successfully. We'll get back to you soon!</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline ml-1">Something went wrong. Please try again or email us directly at ccareping@gmail.com.</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`px-8 py-3 bg-[#019688] hover:bg-[#00796b] text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
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
