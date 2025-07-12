import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CoupleInfo from './components/CoupleInfo';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <Hero />
      <CoupleInfo />
      <EventDetails />
      <RSVP />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
