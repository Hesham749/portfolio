import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";



function App() {
  return (
    <>
      <Header />
      <main className="bg-body-color container px-5 ">
      <Home />
      <About />
      <Skills />
      <Services />
      </main>

    </>
  );
}

export default App;
