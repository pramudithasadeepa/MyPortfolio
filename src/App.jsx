import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';
import Technologies from './components/Technologies';

function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar 
        introRef={introRef} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef}
        technologiesRef={technologiesRef} 
        contactRef={contactRef} 
      />
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={technologiesRef}>
        <Technologies />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
