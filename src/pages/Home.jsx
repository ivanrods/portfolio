import Container from "../components/Container";
import Text from "../components/Text";
import Profile from "./Profile";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex items-center h-screen ">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-medium leading-tight md:text-5xl">
            <strong className="text-blue-600">Front-end Developer | </strong>
            Criando experiências fluidas e eficientes
          </h1>

          <Text text="Combinando performance, responsividade e experiência do usuário para criar interfaces modernas e intuitivas que elevam a experiência digital." />
          <button className="text-xl px-8 py-4 bg-blue-600 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            <a href="curriculum.pdf" download>Download CV</a>
          </button>
        </div>
      </section>
      <Profile />
    </Container>
  );
}

export default Home;
