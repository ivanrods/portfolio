import { LuDownload } from "react-icons/lu";
import Container from "../components/Container";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex flex-col gap-8 items-center justify-center  my-52">
        <h1
          data-aos="fade-down"
          className="text-3xl font-medium leading-tight md:text-5xl  text-center "
        >
          <strong className="text-custom-color ">
            Full Stack Developer |{" "}
          </strong>
          Construindo soluções completas e escaláveis.
        </h1>

        <ReactTyped
          strings={[
            "Combinando habilidades em front-end e back-end para criar aplicações dinâmicas, seguras e com ótimo desempenho, entregando soluções completas e integradas que atendem às necessidades do usuário e do sistema.",
          ]}
          typeSpeed={40}
          className="text-base md:text-lg text-center text-neutral-400 leading-tight  min-h-28 sm:min-h-16"
        />

        <button
          data-aos="fade-up"
          className="block mx-auto md:mx-0 text-lg bg-transparent rounded-xl border-2 border-custom-color  transition duration-300 hover:bg-custom-color "
        >
          <a
            className="flex gap-3 items-center px-4 py-3 md:px-6 md:py-4 "
            href="curriculo-ivan-rodrigues.pdf"
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
