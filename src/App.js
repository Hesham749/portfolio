import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";



function App() {
  return (
    <>
      <Header />
      <main className="bg-body-color container px-3 ">
      <Home />
      <About />
      <Skills />
      <Services />
      </main>
      <Footer />

    </>
  );
}

export default App;
