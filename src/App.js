import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import ScrollUp from "./components/scroll up/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [position, setPosition ] = useState(0);
  const handleScroll = ( ) => {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <Header position={position}/>
      <main className="bg-body-color container px-3 ">
        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Testimonials /> */}
        <Portfolio />
        <Contact />
        <ScrollUp position={position}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
