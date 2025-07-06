import Container from "../components/Container";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex items-center mt-44 sm:mt-72 md:mt-72 justify-between ">
        <div data-aos="fade-right" className="max-w-2xl ">
          <h1 className="text-3xl font-medium leading-tight md:text-5xl pb-4 text-center md:text-left">
            <strong className="text-blue-600">Full Stack Developer | </strong>
            Construindo soluções completas e escaláveis.
          </h1>

          <p className="text-base md:text-lg text-center text-neutral-400 leading-tight my-4  md:text-left">
            Combinando habilidades em front-end e back-end para criar aplicações
            dinâmicas, seguras e com ótimo desempenho, entregando soluções
            completas e integradas que atendem às necessidades do usuário e do
            sistema.
          </p>

          <button className="block mx-auto md:mx-0 text-lg mt-4 bg-transparent rounded-md border-2 border-blue-600 transition duration-300 hover:bg-blue-600 ">
            <a
              className="block px-6 py-3 md:px-8 md:py-4 "
              href="curriculum-ivan-rodrigues.pdf"
              download
            >
              Download CV
            </a>
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
