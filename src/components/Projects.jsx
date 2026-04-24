import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { techList } from "../utils/stacks-list.js";

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
        <iconObj.componente />
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
      className="group relative flex flex-col p-6 md:flex-row gap-6 bg-linear-to-br from-neutral-900 to-neutral-950  overflow-hidden min-w-[95%] bg-neutral-900/60 backdrop-blur-sm border  hover:border-custom-colo hover:shadow-xl hover:shadow-custom-color/10 border-neutral-800  rounded-2xl transition-all duration-300 hover:border-custom-color"
    >
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl border border-neutral-800">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "
          src={img}
          alt={alt}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80" />
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
      img: "https://i.ibb.co/ksLjcRZh/balacefly-cover.jpg",
      alt: "Capa do projeto Balancefy",
      hrefProject: "https://balancefy.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/balancefy",
      title: "Balancefy",
      description:
        "Aplicação para gestão financeira pessoal com autenticação segura, controle de transações e visualização de dados em gráficos interativos. Desenvolvida com arquitetura organizada utilizando Next.js App Router, Prisma e PostgreSQL, aplicando validação robusta com Zod e boas práticas de separação de responsabilidades.",
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
      img: "https://i.ibb.co/F4SSKq4s/commercefly-cover.jpg",
      alt: "Capa do projeto CommerceFly",
      hrefProject: "https://commercefly.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/commercefly",
      title: "CommerceFly",
      description:
        "Aplicação completa de e-commerce desenvolvida com foco em arquitetura moderna, boas práticas e integração com serviços reais como autenticação e pagamentos que simula um e-commerce real, permitindo que usuários naveguem por produtos, adicionem itens ao carrinho e realizem compras com pagamento integrado.",
      stacks: [
        "Next.js ",
        " TypeScript ",
        " Tailwindcss ",
        " Shadcn ",
        " Stripe ",
        " Clerk ",
        " Prisma",
      ],
    },
    {
      img: "https://i.ibb.co/cc72FRhJ/connectfly-cover.jpg",
      alt: "Capa do projeto ConnectFly",
      hrefProject: "https://connectfly.vercel.app/",
      hrefGitHub: "https://github.com/ivanrods/connectfly",
      title: "ConnectFly",
      description:
        "Aplicação de chat em tempo real com comunicação bidirecional via Socket.IO e autenticação baseada em JWT. Implementa persistência de mensagens em banco de dados e gerenciamento eficiente de estado no front-end. Estruturado para simular aplicações reais de mensageria com foco em escalabilidade e organização de código.",
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
      img: "https://i.ibb.co/gLZ0g4gZ/photo-liked-cover.jpg",
      alt: "Capa do projeto FotoLiked",
      hrefProject: "https://photo-liked.vercel.app",
      hrefGitHub: "https://github.com/ivanrods/photo-liked",
      title: "FotoLiked",
      description:
        "Aplicação web Full Stack completa para exploração e interação com  milhares imagens, permitindo autenticação de usuários e sistema de likes persistente visualizar e baixar imagens de otima qualidade. Backend desenvolvido com Node.js e Express, utilizando JWT para controle de acesso e MongoDB para armazenamento de dados.",
      stacks: [
        "React ",
        " Tailwindcss ",
        " Zod ",
        " Node.js ",
        " Express",
        " JWT",
        " MongoDB ",
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
