import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Capabilities from "./sections/Capabilities";
import Journey from "./sections/Journey";
import Currently from "./sections/Currently";
import Education from "./sections/Education";import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BottomDock from "./components/layout/BottomDock";
import Certificate from "./sections/ProofOfWork";


function App() {
  return (
    <>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Capabilities/>
        <Journey/>
        <Currently/>
        <Certificate/>
        <Education/>
        <Contact/>
        <Footer/>
      </main>
    
      <BottomDock/>
    </>
  )
}

export default App