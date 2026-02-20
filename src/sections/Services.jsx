import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { FaCode } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { TbCodeDots } from "react-icons/tb";
import Title from "../components/Title";

function Services() {
  return (
    <Container id="services" color="bg-neutral-950">
      <Title title="Serviços" />
      <section className="flex flex-col w-full py-8">
        <ServiceCard
          title="Desenvolvimento Front-End"
          description={
            "Desenvolvimento de interfaces modernas e responsivas com React e Next.js, priorizando performance, acessibilidade e excelente experiência do usuário. Criação de layouts bem estruturados, componentes reutilizáveis e aplicações com foco em usabilidade e fluidez."
          }
          positon="self-start"
        >
          <FaCode className="text-4xl text-custom-color transition duration-300 group-hover:scale-110" />
        </ServiceCard>
        <small
          data-aos="fade-up"
          className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"
        ></small>
        <ServiceCard
          title="Desenvolvimento Back-End"
          description={
            "Construção de APIs seguras e bem estruturadas com Node.js e Express, implementando autenticação, controle de acesso e integração com banco de dados. Foco em organização de código, escalabilidade e comunicação eficiente entre front-end e servidor."
          }
          positon="self-end"
        >
          <TbCodeDots className="text-4xl text-custom-color transition duration-300 group-hover:scale-110" />
        </ServiceCard>
        <small
          data-aos="fade-up"
          className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"
        ></small>
        <ServiceCard
          title={"Integração e Deploy"}
          description={
            "Integração entre front-end e back-end utilizando APIs REST, garantindo comunicação eficiente e dados consistentes. Deploy de aplicações em ambiente de produção, priorizando estabilidade, desempenho e boas práticas."
          }
          positon="self-start"
        >
          <AiOutlineApi className="text-4xl text-custom-color transition duration-300 group-hover:scale-110" />
        </ServiceCard>
      </section>
    </Container>
  );
}

export default Services;
