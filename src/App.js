// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import particlesJS from 'particles.js';

export default function App() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    } else {
      console.error('particlesJS is not available.');
    }
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

