import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import WeaponsMuy from './components/WeaponsMuy/WeaponsMuy';
import LocationAndSchedule from './components/LocationAndSchedule/LocationAndSchedule';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AcademyPresentation />
      <FounderSection />
      <WeaponsMuy />
       <TestimonialSlider />
      <LocationAndSchedule />
      <Contact />
    </>
  );
}

export default App;
