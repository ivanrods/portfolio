import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicia a animação
  }, [])
  return (
    <div>
      <Header />
      <Home />
      <Profile/>
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
