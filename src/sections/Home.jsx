import { LuDownload } from "react-icons/lu";
import Container from "../components/Container";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex flex-col gap-8 items-center my-32 md:my-40 justify-center max-w-2xl md:items-start">
        <h1
          data-aos="fade-right"
          className="text-3xl font-medium leading-tight md:text-5xl  text-center md:text-left"
        >
          <strong className="text-blue-600">Full Stack Developer | </strong>
          Construindo soluções completas e escaláveis.
        </h1>

        <ReactTyped
          strings={[
            "Combinando habilidades em front-end e back-end para criar aplicações dinâmicas, seguras e com ótimo desempenho, entregando soluções completas e integradas que atendem às necessidades do usuário e do sistema.",
          ]}
          typeSpeed={40}
          className="text-base md:text-lg text-center text-neutral-400 leading-tight  md:text-left "
        />

        <button
          data-aos="zoom-in"
          className="block mx-auto md:mx-0 text-lg bg-transparent rounded-xl border-2 border-blue-600 transition duration-300 hover:bg-blue-600 "
        >
          <a
            className="flex gap-3 items-center px-4 py-3 md:px-6 md:py-4 "
            href="curriculum-ivan-rodrigues.pdf"
            download
          >
            Download CV <LuDownload size={20} />
          </a>
        </button>
      </section>
    </Container>
  );
}

export default Home;
