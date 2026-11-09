import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import WeaponsMuy from './components/WeaponsMuy/WeaponsMuy';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AcademyPresentation />
      <FounderSection />
      <TestimonialSlider />
      <WeaponsMuy />
    </>
  )
}

export default App