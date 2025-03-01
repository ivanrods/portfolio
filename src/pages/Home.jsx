import Container from "../components/Container";
import Text from "../components/Text";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function Home() {
  return (
    <Container color="bg-neutral-950">
      <section className="flex items-center h-[650px] justify-between">
        <div className="max-w-2xl animate-[slideRight_0.5s_ease-out_forwards]">
          <h1 className="text-4xl font-medium leading-tight md:text-5xl">
            <strong className="text-blue-600">Front-end Developer | </strong>
            Criando experiências fluidas e eficientes
          </h1>

          <Text text="Combinando performance, responsividade e experiência do usuário para criar interfaces modernas e intuitivas que elevam a experiência digital." />
          <button className="text-xl px-8 py-4 bg-blue-600 rounded-md cursor-pointer transition duration-300 hover:bg-blue-700">
            <a href="curriculum.pdf" download>
              Download CV
            </a>
          </button>
        </div>
        <article className="hidden lg:block ">
          <a href="https://wa.me/86994075453" target="_black" title="Fale comigo" data-aos="zoom-in">
            <IoChatboxEllipsesOutline className="text-[250px] text-blue-600 hover:text-blue-700 rotate-12 transition duration-300"/>
          </a>
        
        </article>
      </section>
    </Container>
  );
}

export default Home;
