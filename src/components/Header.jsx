import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

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
    <header className="bg-neutral-950 px-4 fixed w-full z-50">
      <div
        data-aos="fade-down"
        className="max-w-6xl flex justify-between items-center py-4  mx-auto"
      >
        <img className="h-8" src={logo} alt="Logo" />

        <FiMenu
          className="text-2xl md:hidden text-white cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />

        <ul className="hidden md:flex gap-6 text-neutral-400">
          {["Sobre", "Experiência", "Serviços", "Projetos", "Tecnologias"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer hover:text-white transition ${
                  activeSection === item
                    ? "text-custom-color"
                    : "text-neutral-400"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ),
          )}
        </ul>
      </div>

      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-2xl text-white transition-all duration-500 ${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <IoMdClose
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />

        {["Sobre", "Experiência", "Serviços", "Projetos", "Tecnologias"].map(
          (item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`transition hover:scale-110 ${
                activeSection === item
                  ? "text-custom-color"
                  : "text-neutral-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ),
        )}
      </div>
    </header>
  );
}

export default Header;
