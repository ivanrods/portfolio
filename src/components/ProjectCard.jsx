import { FaGithub } from "react-icons/fa";
function Project({ img, description, title, hrefGitHoub, hrefSite }) {
  return (
    <div
      data-aos="fade-up"
      className=" bg-neutral-800 flex flex-col  rounded-lg overflow-hidden"
    >
      <img src={img} alt="" className="rounded-tl-md rounded-tr-md h-46 hover:scale-105 transition duration-400" />
      <article className="flex flex-col px-4 py-4 gap-2">
        <div className="flex items-center gap-4 text-md text-white ">
          <p className="text-lg">{title}</p>
          <a className="text-xl hover:text-neutral-400" target="_blank" href={hrefGitHoub} title="Ver Repositório">
          <FaGithub />
          </a>
        </div>
        <p className="text-sm text-neutral-400">{description}</p>

        <button className=" bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700">
          <a className="block w-full px-8 py-2 text-base" target="_blank" href={hrefSite}>
            Ver Projeto
          </a>
        </button>
      </article>
    </div>
  );
}

export default Project;
