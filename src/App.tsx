import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import AcademyPresentation from './components/AcademyPresentation/AcademyPresentation';
import FounderSection from './components/FounderSection/FounderSection';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AcademyPresentation />
      <FounderSection />
    </>
  )
}

export default App