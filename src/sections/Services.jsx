import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { FaCode } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { TbCodeDots } from "react-icons/tb";
import Title from "../components/Title";

function Services() {
  return (
    <Container id="services" color="bg-neutral-900">
      <Title title="Serviços:" />
      <section className="flex flex-col w-full py-8">
        <ServiceCard
          title='Desenvolvimento Front-End'
          description={
            "Criação de interfaces visuais e interativas utilizando HTML, CSS e JavaScript, com o uso de frameworks como React e Next.js. O foco é garantir experiências responsivas e intuitivas, sempre visando uma boa usabilidade e acessibilidade para o usuário."
          }
          positon="self-start"
        >
          <FaCode className="text-4xl text-blue-600" />
        </ServiceCard>
        <small
          data-aos="fade-up"
          className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"
        ></small>
        <ServiceCard
          title='Desenvolvimento Back-End'
          description={
            "Construção de APIs e servidores com Node.js e Express.js, além de gerenciar dados com bancos como PostgreSQL, MySQL ou MongoDB. Implementação de autenticação e segurança para garantir a funcionalidade e proteção das aplicações."
          }
          positon="self-end"
        >
          <TbCodeDots className="text-4xl blue-600 text-blue-600" />
        </ServiceCard>
        <small
          data-aos="fade-up"
          className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"
        ></small>
        <ServiceCard
          title={"Integração e Deploy"}
          description={
            "Integração eficiente entre front-end e back-end usando APIs REST ou GraphQL. Realização de deploy de aplicações em plataformas como Vercel, Netlify ou AWS, garantindo desempenho estável e rápido para os usuários finais."
          }
          positon="self-start"
        >
          <AiOutlineApi className="text-4xl text-blue-600" />
        </ServiceCard>
      </section>
    </Container>
  );
}

export default Services;
