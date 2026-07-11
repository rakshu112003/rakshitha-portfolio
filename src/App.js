import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;