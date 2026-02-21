import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { techList } from "../utils/techList";

function ProjectCard({
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
      className="group relative flex flex-col p-6 md:flex-row gap-6 bg-gradient-to-br from-neutral-900 to-neutral-950  overflow-hidden min-w-[95%] bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-custom-colo hover:shadow-xl hover:shadow-custom-color/10
      "
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

          <p className="text-neutral-300 leading-relaxed  md:text-left hover:text-neutral-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, index) => (
              <span
                key={index}
                title={getDescriptionByName(stack)}
                className="flex items-center bg-neutral-800/70 border border-neutral-700 px-3 py-1.5 rounded-full text-xs text-neutral-300 backdrop-blur-md transition-all duration-300 hover:border-custom-color hover:text-white"
              >
                {getIconByName(stack)}
                {stack.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 pt-4 border-t border-neutral-800">
          <a
            href={hrefGitHub}
            title="Ver repositório do projeto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl text-custom-color border border-neutral-700 rounded-xl p-3 transition-all duration-300 hover:border-custom-color hover:scale-110 hover:shadow-lg hover:shadow-custom-color/20"
          >
            <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <FaGithub size={20} />
              <span className="text-sm">Código</span>
            </div>
          </a>

          <a
            href={hrefProject}
            title="Ver deploy do projeto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl text-custom-color border border-neutral-700 rounded-xl p-3 transition-all duration-300 hover:border-custom-color hover:scale-110 hover:shadow-lg hover:shadow-custom-color/20"
          >
            <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <FaGlobe size={20} />
              <span className="text-sm">Deploy</span>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      img: "https://i.ibb.co/hFhxYhJH/balacefy.png",
      alt: "Capa do projeto Balancefy",
      hrefProject: "https://balancefy.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/balancefy",
      title: "Balancefy",
      description:
        "Aplicação Full Stack para controle financeiro pessoal, com autenticação segura, categorização de transações e visualização de dados em gráficos dinâmicos. Com foco em organização de código e experiência.",
      stacks: [
        " Next.js ",
        " TypeScript ",
        " Zod ",
        " NextAuth ",
        " Shadcn",
        " Prisma  ",
        " PostgreSQL",
      ],
    },
    {
      img: "https://i.ibb.co/ZRnzL30n/chat.webp",
      alt: "Capa do projeto ConnectChat",
      hrefProject: "https://connect-chat-client.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/connect-chat",
      title: "ConnectChat",
      description:
        "Aplicação de chat em tempo real com comunicação bidirecional e persistência de mensagens. Projeto estruturado para simular aplicações reais de mensageria, com foco em performance, escalabilidade e gerenciamento de estado.",
      stacks: [
        "React ",
        " Material-UI",
        " Zod ",
        " Node.js ",
        " Socket.IO",
        " JWT",
        " PostgreSQL",
      ],
    },
    {
      img: "https://i.ibb.co/jtZh3Sc/go-menu.webp",
      alt: "Capa do projeto GoMenu",
      hrefProject: "https://go-menu-web.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/go-menu",
      title: "GoMenu",
      description:
        "Sistema Full Stack que simula um restaurante digital, com fluxo completo de navegação, seleção de produtos e gerenciamento de pedidos. Construído com foco em componentização, organização modular e validação de dados.",
      stacks: [
        "Next.js ",
        " TypeScript ",
        " Tailwindcss ",
        " Shadcn ",
        " Zod ",
        " Prisma",
      ],
    },
    {
      img: "https://i.ibb.co/CkrR0Ls/cadastros.webp",
      alt: "Capa do projeto Cadastros",
      hrefProject: "https://cadastros-frontend.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/cadastros-frontend",
      title: "Cadastros",
      description:
        "É uma aplicação Full Stack com autenticação, que permite criar usuário, cadastrar, consultar pessoas e cidades de forma simples e eficiente com um layout agradavel, paginação e integração entre front-end e API.",
      stacks: [
        "React ",
        " TypeScript ",
        " Material-UI ",
        " Node.js ",
        " Express",
        " JWT",
        " PostgreSQL",
        "Jest",
      ],
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      }
    };
  }, []);

  return (
    <div id="Projetos" className="px-4 justify-center bg-neutral-900">
      <div className="max-w-6xl py-12 md:py-24 mx-auto">
        {" "}
        <h2 className="text-2xl md:text-3xl font-medium py-4 mx-0 ">
          Projetos
        </h2>
        <div className="relative w-full">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-700"
              aria-label="Scroll para a esquerda"
            >
              <FiChevronLeft className="text-white w-6 h-6" />
            </button>
          )}

          <section
            ref={scrollRef}
            className="flex flex-row overflow-x-auto w-full gap-2 py-8 no-scrollbar"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                img={project.img}
                alt={project.alt}
                hrefProject={project.hrefProject}
                hrefGitHub={project.hrefGitHub}
                title={project.title}
                description={project.description}
                stacks={project.stacks}
              />
            ))}
          </section>
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-700"
              aria-label="Scroll para a direita"
            >
              <FiChevronRight className="text-white w-6 h-6" />
            </button>
          )}
        </div>
        <div className="text-center hover:text-neutral-400 mt-4">
          <a
            target="_blanck"
            className="text-base md:text-lg text-custom-color hover:opacity-80 transition"
            href="https://github.com/ivanrods?tab=repositories"
          >
            Repositórios no GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
