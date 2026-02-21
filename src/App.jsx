import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      { threshold: 0.5 },
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
      <Experience />
      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
