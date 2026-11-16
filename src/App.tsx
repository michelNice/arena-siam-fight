<<<<<<< HEAD
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
=======
import './App.css'
import  {useEffect } from 'react';
>>>>>>> 526af23 (fix: corrige os problemas identificados no cartão #35)
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import WeaponsMuy from './components/WeaponsMuy/WeaponsMuy';
import LocationAndSchedule from './components/LocationAndSchedule/LocationAndSchedule';
import Contact from './components/Contact/Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
<<<<<<< HEAD
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

=======
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
>>>>>>> 526af23 (fix: corrige os problemas identificados no cartão #35)
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AcademyPresentation />
      <FounderSection />
      <WeaponsMuy />
      <LocationAndSchedule />
      <TestimonialSlider />
      <Contact />
    </>
  );
}
<<<<<<< HEAD

export default App;
=======
export default App
>>>>>>> 526af23 (fix: corrige os problemas identificados no cartão #35)

