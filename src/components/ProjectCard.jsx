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
    const cleanName = name.trim().toLowerCase().replace(/\./g, "");
    const iconObj = techList.find(
      (icone) => icone.nome.toLowerCase().replace(/\./g, "") === cleanName,
    );

    return iconObj ? (
      <span className={`${iconObj.cor} mr-1 text-sm`}>
        {iconObj.componente}
      </span>
    ) : null;
  }

  function getDescriptionByName(name) {
    const cleanName = name.trim().toLowerCase().replace(/\./g, "");
    const tech = techList.find(
      (t) => t.nome.toLowerCase().replace(/\./g, "") === cleanName,
    );
    return tech ? tech.descricao : "";
  }

  return (
    <section
      data-aos="fade-right"
      className="group relative flex flex-col p-6 md:flex-row gap-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden min-w-[95%] transition-all duration-500 hover:border-custom-color hover:shadow-custom-color/10"
    >
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl border border-neutral-800">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "
          src={img}
          alt={alt}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
      </div>

      <article className="w-full md:w-1/2  flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-white group-hover:text-custom-color transition-colors">
            {title}
          </h2>

          <Text text={description} />

          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, index) => (
              <span
                key={index}
                title={getDescriptionByName(stack)}
                className="flex items-center
                bg-neutral-800/70
                border border-neutral-700
                px-3 py-1.5
                rounded-full
                text-xs
                text-neutral-300
                backdrop-blur-md
                transition-all duration-300
                hover:border-custom-color
                hover:text-white"
              >
                {getIconByName(stack)}
                {stack.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 pt-4 border-t border-neutral-800">
          <Link href={hrefGitHub} title="Ver repositório do projeto">
            <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <FaGithub size={20} />
              <span className="text-sm">Código</span>
            </div>
          </Link>

          <Link href={hrefProject} title="Ver deploy do projeto">
            <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <FaGlobe size={20} />
              <span className="text-sm">Deploy</span>
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Project;
