import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Projects() {
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
    checkScrollButtons(); // checa no carregamento
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
    <Container id="projects" color="bg-neutral-900">
      <Title title="Projetos:" />
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
          <ProjectCard
            img="https://i.ibb.co/CkrR0Ls/cadastros.webp"
            alt="Capa do projeto Cadastros"
            hrefProject="https://cadastros-frontend.vercel.app/"
            hrefGitHub="https://github.com/ivanrods/cadastros-frontend"
            title="Cadastros"
            description={
              "É uma aplicação Full Stack, que permite criar usuário, cadastrar, consultar pessoas e cidades de forma simples e eficiente com um layout agradavel, responsivo e paginado. "
            }
            stacks="React | TypeScript | Material-UI | Node.js | PostgreSQL"
          />
          <ProjectCard
            img="https://i.ibb.co/Jj57KwmM/task-pro.webp"
            alt="Capa do projeto TaskPro"
            hrefProject="https://task-pro-flame.vercel.app/"
            hrefGitHub="https://github.com/ivanrods/task-pro"
            title="TaskPro"
            description={
              "É uma aplicação Full Stack, que permite gerenciar uma lista de tarefas com praticidade e segurança. O usuário pode criar conta, fazer login, marcar como favorita, editar e excluir com uma interface moderna e responsiva."
            }
            stacks=" Next.js | TypeScript | Prisma  | JWT | Zod "
          />
          <ProjectCard
            img="https://i.ibb.co/358BSNzZ/go-menu.webp"
            alt="Capa do projeto GoMenu"
            hrefProject="https://donalds-nine.vercel.app/fsw-donalds"
            hrefGitHub="https://github.com/ivanrods/donalds"
            title="GoMenu"
            description={
              "É uma aplicação Full Stack que simula um restaurante virtual, onde os usuários podem explorar o cardápio, escolher produtos e adicioná-los à sacola para finalizar a compra."
            }
            stacks="Next.js | Tailwind | Shdcn | Node.js | Prisma."
          />
          <ProjectCard
            img="https://i.ibb.co/HT5NCZdF/photo-blog.webp"
            alt="Capa do projeto FotoLiked"
            hrefProject="https://photo-liked.vercel.app"
            hrefGitHub="https://github.com/ivanrods/photo-liked"
            title="FotoLiked"
            description={
              "É uma aplicação front-end onde você pode explorar imagens e dar likes nas que mais gostar. A aplicação permite navegar por diversas imagens e interagir com elas, proporcionando uma experiência simples e agradavel."
            }
            stacks="React | Tailwind | Node.js | MongoDB | JWT"
          />
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
          className="text-base md:text-lg text-blue-600 hover:text-blue-700"
          href="https://github.com/ivanrods?tab=repositories"
        >
          Repositórios no GitHub
        </a>
      </div>
    </Container>
  );
}

export default Projects;
