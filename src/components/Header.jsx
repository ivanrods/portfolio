import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function Header({ activeSection }) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <header
      data-aos="fade-down"
      className="bg-neutral-950 justify-center px-4 fixed w-full z-10"
    >
      <div className="max-w-6xl flex justify-between py-8 mx-auto flex-wrap ">
        <p className="uppercase text-xl font-medium md:text-2xl">
          {" "}
          &lt; Ivan Rodrigues /&gt;
        </p>
        <FiMenu
          className={`${openMenu ? "hidden" : "flex"} text-3xl md:hidden`}
          onClick={toggleMenu}
        />
        <IoMdClose
          className={`${openMenu ? "flex" : "hidden"} text-3xl md:hidden`}
          onClick={toggleMenu}
        />
        <ul
          className={`${
            openMenu ? "flex" : "hidden"
          } flex pt-6 w-full text-center text-2xl gap-6 md:w-auto md:pt-0 flex-col md:flex-row md:flex md:gap-4 md:text-lg  flex-wrap pl-4 cursor-pointer transition-all duration-500 ease-in-out`}
        >
          <li
            className={`${
              activeSection === "about"
                ? "text-neutral-300"
                : "text-neutral-500"
            } hover:text-neutral-300`}
            onClick={() => scrollToSection("about")}
          >
            Sobre
          </li>
          <li
            className={`${
              activeSection === "services"
                ? "text-neutral-300"
                : "text-neutral-500"
            } hover:text-neutral-300`}
            onClick={() => scrollToSection("services")}
          >
            Serviços
          </li>
          <li
            className={`${
              activeSection === "projects"
                ? "text-neutral-300"
                : "text-neutral-500"
            } hover:text-neutral-300`}
            onClick={() => scrollToSection("projects")}
          >
            Projetos
          </li>
          <li
            className={`${
              activeSection === "technologies"
                ? "text-neutral-300"
                : "text-neutral-500"
            } hover:text-neutral-300`}
            onClick={() => scrollToSection("technologies")}
          >
            Tecnologias
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
