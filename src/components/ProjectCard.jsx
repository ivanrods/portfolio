import { FaGithub, FaGlobe } from "react-icons/fa";
import Text from "./Text";
import Link from "./Link";
import { icones } from "../utils/icones";

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
    const iconObj = icones.find(
      (icone) => icone.nome.toLowerCase().replace(/\./g, "") === cleanName
    );
    return iconObj ? (
      <span className={`${iconObj.cor} mr-1`}>{iconObj.componente}</span>
    ) : null;
  }

  return (
    <section
      data-aos="fade-up"
      className=" flex flex-col items-center  md:flex-row gap-8  bg-neutral-900  p-6 md:p-8 border-2 border-neutral-600 rounded-md  min-w-[90%] "
    >
      <img className="w-full h-full" src={img} alt={alt} />

      <article className="w-full h-auto md:h-full flex flex-col justify-between ">
        <div>
          <h2 className="text-lg md:text-2xl font-medium ">{title}</h2>

          <Text text={description} />
          <div className="flex flex-wrap gap-2 pb-2">
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="flex items-center border-2 border-neutral-600 px-2 py-1 rounded-md text-xs text-neutral-400"
              >
                {getIconByName(stack)}
                {stack.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap ">
          <Link href={hrefGitHub}>
            <FaGithub size={25} />
          </Link>
          <Link href={hrefProject}>
            <FaGlobe size={25} />
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Project;
