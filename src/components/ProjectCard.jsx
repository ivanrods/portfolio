import { FaGithub, FaGlobe } from "react-icons/fa";
import Text from "./Text";
import Link from "./Link";
import { techList } from "../utils/techList";

function Project({
  img,
  description,
  title,
  hrefGitHub,
  hrefProject,
  alt,
  stacks,
}) {
  function getIconByName(name) {
    const cleanName = name.trim().toLowerCase().replace(/\./g, ""); // remove todos os pontos
    const iconObj = techList.find(
      (icone) => icone.nome.toLowerCase().replace(/\./g, "") === cleanName
    );
    return iconObj ? (
      <span className={`${iconObj.cor} mr-1`}>{iconObj.componente}</span>
    ) : null;
  }
  function getDescriptionByName(name) {
    const cleanName = name.trim().toLowerCase().replace(/\./g, "");
    const tech = techList.find(
      (t) => t.nome.toLowerCase().replace(/\./g, "") === cleanName
    );
    return tech ? tech.descricao : "";
  }

  return (
    <section
      data-aos="fade-right"
      className=" flex flex-col items-center  md:flex-row gap-8  bg-neutral-900  p-6 md:p-8 border-2 border-neutral-600 rounded-xl  min-w-[90%] hover:bg-neutral-800"
    >
      <img className="w-full md:h-full object-cover" src={img} alt={alt} />

      <article className="w-full h-auto md:h-full flex flex-col gap-4 justify-between ">
        <h2 className="text-lg md:text-2xl font-medium ">{title}</h2>

        <Text text={description} />
        <div className="flex flex-wrap gap-2">
          {stacks.map((stack, index) => (
            <span
              key={index}
              title={getDescriptionByName(stack)}
              className="flex items-center border-2 border-neutral-600 px-2 py-1 rounded-lg text-xs text-neutral-400 cursor-pointer"
            >
              {getIconByName(stack)}
              {stack.trim()}
            </span>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap ">
          <Link href={hrefGitHub} title="Ver repositório do projeto">
            <FaGithub size={25} />
          </Link>
          <Link href={hrefProject} title="Ver deploy do projeto">
            <FaGlobe size={25} />
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Project;
