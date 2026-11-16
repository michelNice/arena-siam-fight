import './App.css'
import  {useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import WeaponsMuy from './components/WeaponsMuy/WeaponsMuy';
import Contact from './components/Contact/Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
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
      <Contact />
    </>
  )
}
export default App

