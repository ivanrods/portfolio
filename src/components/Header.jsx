import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

function Header({ activeSection }) {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <header className="bg-neutral-950 px-4 fixed w-full z-50">
      <div className="max-w-6xl flex justify-between items-center py-4  mx-auto">
        <img className="h-8" src={logo} alt="Logo" />

        <FiMenu
          className="text-2xl md:hidden text-white cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />

        <ul className="hidden md:flex gap-6 text-neutral-400">
          {["about", "experience", "services", "projects", "technologies"].map(
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

        {["about", "experience", "services", "projects", "technologies"].map(
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
