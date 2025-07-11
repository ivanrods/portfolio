import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

function Projects() {
  return (
    <Container id="projects" color="bg-neutral-950">
      <Title title="Projetos:" />

      <section className="grid gap-6 flex-wrap py-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ProjectCard
          img="https://i.ibb.co/HT5NCZdF/photo-blog.webp"
          alt="Capa do projeto FotoLiked"
          hrefProject="https://photo-liked.vercel.app"
          hrefGitHub="https://github.com/ivanrods/photo-liked"
          title="FotoLiked"
          description={
            "Encontre imagens gratuitas para salvar e usar em qualquer coisa!"
          }
        />
        <ProjectCard
          img="https://i.ibb.co/RTStX9dR/note-link.webp"
          alt="Capa do projeto NoteLinks"
          hrefProject="https://notelinks.netlify.app/"
          hrefGitHub="https://github.com/ivanrods/notelinks-frontend"
          title="NoteLinks"
          description={
            "Crie anotaçẽs e com tags e descrições para rever quando quiser!"
          }
        />
        <ProjectCard
          img="https://i.ibb.co/358BSNzZ/go-menu.webp"
          alt="Capa do projeto GoMenu"
          hrefProject="https://donalds-nine.vercel.app/fsw-donalds"
          hrefGitHub="https://github.com/ivanrods/donalds"
          title="GoMenu"
          description={
            "Escolha seus lanches favoritos e adiciones na sua sacola!"
          }
        />
        <ProjectCard
          img="https://i.ibb.co/CkrR0Ls/cadastros.webp"
          alt="Capa do projeto Cadastros"
          hrefProject="https://cadastros-frontend.vercel.app/"
          hrefGitHub="https://github.com/ivanrods/cadastros-frontend"
          title="Cadastros"
          description={
            "Cadastre pessoas e cidades de forma simples e eficiente!"
          }
        />
        <ProjectCard
          img="https://i.ibb.co/Lz7B2s7k/codarse.webp"
          alt="Capa do projeto Codarse"
          hrefProject="https://codarse-bice.vercel.app/"
          hrefGitHub="https://github.com/ivanrods/codarse"
          title="Codarse"
          description={
            "Plataforama com aula e cursor de programaçao do youtube!"
          }
        />

        <ProjectCard
          img="https://i.ibb.co/rGjKq9dk/secret-friend.webp"
          alt="Capa do projeto Secret Friend"
          hrefProject="https://secret-friend-web.vercel.app"
          hrefGitHub="https://github.com/ivanrods/secret-friend"
          title="Secret Friend"
          description={
            "Aplicação web moderna para organizar eventos de amigo secreto!"
          }
        />
      </section>

      <div className="text-center hover:text-neutral-400">
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
