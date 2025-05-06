import Container from "../components/Container";
import Text from "../components/Text";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex items-center mt-44 sm:mt-72 md:mt-72 justify-between">
        <div data-aos="fade-right" className="max-w-2xl ">
          <h1 className="text-3xl font-medium leading-tight md:text-5xl pb-4">
            <strong className="text-blue-600">Full Stack Developer | </strong>
            Construindo soluções completas e escaláveis.
          </h1>

          <Text text="Combinando habilidades em front-end e back-end para criar aplicações dinâmicas, seguras e com ótimo desempenho, entregando soluções completas e integradas que atendem às necessidades do usuário e do sistema." />

          <button className="text-lg mt-4 bg-transparent rounded-md border-2 border-blue-600 transition duration-300 hover:bg-blue-600 ">
            <a className="block px-8 py-4 " href="curriculum.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
