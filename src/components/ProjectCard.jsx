import { FaGithub, FaGlobe } from "react-icons/fa";
import Text from "./Text";
import Link from "./Link";

function Project({ img, description, title, hrefGitHub, hrefProject, alt }) {
  return (
    <section
      data-aos="fade-up"
      className=" flex flex-col items-center  lg:flex-row gap-8  bg-neutral-900 px-8 py-8 border-2 border-neutral-600 rounded-md  min-w-[90%] "
    >
      <div className="object-cover overflow-hidden w-full">
        <img className="" src={img} alt={alt} />
      </div>

      <article className="w-full flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-medium ">{title}</h2>
          <p className="text-lg ">Desenvolvedor Full Stack</p>
          <Text text={description} />
        </div>

        <div className="flex gap-4 flex-wrap ">
          <Link href={hrefGitHub}>
            <FaGithub />
          </Link>
          <Link href={hrefProject}>
            <FaGlobe />
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Project;
