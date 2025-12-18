import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// New Pages
import NursingServices from './pages/NursingServices';
import NursingServiceDetail from './pages/NursingServiceDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact isPage={true} />} />
        <Route path="/nursing-services" element={<NursingServices />} />
        <Route path="/nursing-services/:id" element={<NursingServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
