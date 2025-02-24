import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import rocketNotes from "../assets/rocket-notes.webp";
import costs from "../assets/costs.webp";
import photoblog from "../assets/photo-blog.webp";
import donalds from "../assets/donalds.webp"
function Projects() {
  return (
    <Container id="projects" color="bg-neutral-950">
      <Title title="Projetos:" />

      <section className="grid gap-4 flex-wrap py-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ProjectCard
          img={rocketNotes}
          hrefSite="https://rocketnotes-frontend-web.netlify.app/"
          hrefGitHoub="https://github.com/ivanrods/rocketnotes-frontend"
          title="RocketNotes"
          description={
            "Crie anotaçẽs e com tags e descrições para rever quando quiser!"
          }
        />
        <ProjectCard
          img={costs}
          hrefSite="#"
          hrefGitHoub="https://github.com/ivanrods/costs"
          title="Costs"
          description={
            "Comece a criar e gerenciar os seus projetos agora mesmo!"
          }
        />
        <ProjectCard
          img={photoblog}
          hrefSite="#"
          hrefGitHoub="https://github.com/ivanrods/photo-blog"
          title="FotoBlog"
          description={
            "Encontre imagens gratuitas para salvar e usar para qualquer coisa!"
          }
        />
        <ProjectCard
          img={donalds}
          hrefSite="https://donalds-nine.vercel.app/fsw-donalds"
          hrefGitHoub="https://github.com/ivanrods/donalds"
          title="Donalds"
          description={
            "Escolha seus lanches favoritos e adiciones ao na sua sacola! "
          }
        />
      </section>

      <div className="text-center">
        <a href="https://github.com/ivanrods?tab=repositories">
          Repositórios no GitHub
        </a>
      </div>
    </Container>
  );
}

export default Projects;
