function Project({ img, description, title, hrefGitHub, hrefProject, alt }) {
  return (
    <a
      href={hrefProject}
      target="_blank"
      data-aos="fade-up"
      title="Ver Projeto"
      className=" bg-neutral-800 flex flex-col  rounded-lg overflow-hidden"
    >
      <img
        src={img}
        alt={alt}
        className="rounded-tl-md rounded-tr-md h-60 hover:scale-105 transition duration-400"
      />
      <article className="flex flex-col px-4 py-4 gap-2 ">
        <div className="flex items-center text-md text-white ">
          <p className="text-lg">{title}</p>
        </div>
        <p className="text-sm text-neutral-400">{description}</p>
        <button className=" bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700">
          <a
            className="block w-full px-8 py-2 text-base"
            target="_blank"
            href={hrefGitHub}
            title="Ver Repositório"
          >
            Ver Repositório
          </a>
        </button>
      </article>
    </a>
  );
}

export default Project;
