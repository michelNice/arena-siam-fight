import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AcademyPresentation />
      <FounderSection />
      <TestimonialSlider />
    </>
  )
}

export default App