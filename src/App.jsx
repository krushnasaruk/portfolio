import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollToTop />
          <Navbar />
          <Hero />
          <TechMarquee />
          <About />
          <Stats />
          <Timeline />
          <Skills />
          <Projects />
          <Interests />
          <Goals />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
