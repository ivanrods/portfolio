import { FiMenu } from "react-icons/fi";
function Header() {
  return (
    <header className="bg-neutral-950 justify-center px-4 fixed w-full z-10">
      <div className="max-w-6xl flex justify-between py-8 mx-auto">
        <p className="uppercase text-2xl font-medium">
          {" "}
          &lt; Ivan Rodrigues /&gt;
        </p>
        <ul className="hidden md:flex gap-4 text-lg text-stone-400 flex-wrap pl-4 cursor-pointer ">
          <li className="hover:text-stone-500">Sobre</li>
          <li className="hover:text-stone-500">Serviços</li>
          <li className="hover:text-stone-500">Projetos</li>
          <li className="hover:text-stone-500">Tecnologias</li>
        </ul>
        <FiMenu className="text-3xl md:hidden" />
      </div>
    </header>
  );
}

export default Header;
