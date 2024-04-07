import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="bg-body-color container px-3 ">
        <Home />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
