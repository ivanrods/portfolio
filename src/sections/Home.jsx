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
            "Desenvolvimento Full Stack | React • Next.js • Node.js",
            "Criação de aplicações rápidas, escaláveis e seguras",
            "Interfaces modernas com foco em performance e experiência do usuário",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-lg md:text-xl text-neutral-400 min-h-[40px]"
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* CTA Principal */}
          <a
            href="curriculo-ivan-rodrigues.pdf"
            download
            className="group rounded-xl bg-custom-color px-6 py-3 text-md font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-custom-color/40 flex items-center gap-3"
          >
            Download CV
            <LuDownload className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          {/* CTA Secundário */}
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl border border-neutral-600 px-6 py-3 text-md text-neutral-300 transition-all duration-300 hover:border-custom-color hover:text-white"
          >
            Ver Projetos
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
