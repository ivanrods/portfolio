import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Technologies from "./sections/Technologies";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./sections/Experience";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Experience/>
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
