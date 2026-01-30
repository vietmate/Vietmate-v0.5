import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import FloatingControls from './components/FloatingControls';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Regions from './components/Regions';
import Story from './components/Story';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize Intersection Observer to track active section
    const options = {
      root: null, // viewport
      threshold: 0.5, // 50% visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('.stage');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <FloatingControls activeSection={activeSection} />
      <main className="stage-container">
        <Hero />
        <WhyUs />
        <Regions />
        <Story />
        <Reviews />
        <Contact />
      </main>
    </>
  );
};

export default App;
