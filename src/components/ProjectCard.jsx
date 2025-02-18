function Project({ img, description, title, hrefGitHoub, hrefSite }) {
  return (
    <div className=" bg-neutral-900 flex flex-col gap-3 border-2 border-neutral-600 rounded-md overflow-hidden px-4 py-4 transition duration-300 hover:bg-neutral-800">
      <img src={img} alt="" className="rounded-tl-md rounded-tr-md h-46" />
      <article className="flex flex-col   gap-2">
        <p className="text-lg">{title}</p>

        <p className="text-sm text-neutral-400">{description}</p>
        <div className="flex gap-4 text-md text-blue-600">
          <a target="_blank" href={hrefSite}>
            Ver Projeto
          </a>
          <a target="_blank" href={hrefGitHoub}>
            Ver Repositório
          </a>
        </div>
      </article>
    </div>
  );
}

export default Project;
