import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

import rocketNotes from "../assets/rocket-notes.webp";
import taskPro from "../assets/task-pro.webp";
import photoblog from "../assets/photo-blog.webp";
import donalds from "../assets/donalds.webp"
import movieslib from '../assets/movies-lib.webp'
import cadastros from '../assets/cadastros.webp'

function Projects() {
  return (
    <Container id="projects" color="bg-neutral-950">
      <Title title="Projetos:" />

      <section className="grid gap-6 flex-wrap py-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ProjectCard
          img={donalds}
          hrefProject="https://donalds-nine.vercel.app/fsw-donalds"
          hrefGitHub="https://github.com/ivanrods/donalds"
          title="Donalds"
          description={
            "Escolha seus lanches favoritos e adiciones na sua sacola!"
          }
        />
         <ProjectCard
          img={movieslib}
          hrefProject="https://movies-lib-ashy.vercel.app"
          hrefGitHub="https://github.com/ivanrods/movies-lib"
          title="MoviesLib"
          description={
            "Encontre e busque os melhores filmes e veja todos os detalhes sobre eles!"
          }
        />
          <ProjectCard
            img={photoblog}
            hrefProject="https://photo-liked.vercel.app"
            hrefGitHub="https://github.com/ivanrods/photo-liked"
            title="FotoLiked"
            description={
              "Encontre imagens gratuitas para salvar e usar em qualquer coisa!"
            }
          />
        <ProjectCard
          img={taskPro}
          hrefProject=""
          hrefGitHub="https://github.com/ivanrods/task-pro"
          title="Task Pro"
          description={
            "Gerencie suas tarefas de forma fácil, rápida e completa!"
          }
        />
          <ProjectCard
            img={rocketNotes}
            hrefProject="https://rocketnotes-frontend-web.netlify.app/"
            hrefGitHub="https://github.com/ivanrods/rocketnotes-frontend"
            title="RocketNotes"
            description={
              "Crie anotaçẽs e com tags e descrições para rever quando quiser!"
            }
          />
          <ProjectCard
            img={cadastros}
            hrefProject="#"
            hrefGitHub="https://github.com/ivanrods/cadastros-frontend"
            title="Cadastros"
            description={
              "Cadastre pessoas e cidades de forma simples e eficiente!"
            }
          />
      </section>

      <div className="text-center hover:text-neutral-400">
        <a target="_blanck" className="text-base md:text-lg text-blue-600 hover:text-blue-700" href="https://github.com/ivanrods?tab=repositories">
          Repositórios no GitHub
        </a>
      </div>
    </Container>
  );
}

export default Projects;
