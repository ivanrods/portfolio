import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Technologies from "./sections/Technologies";
import Footer from "./components/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia a animação
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
