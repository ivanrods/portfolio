import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { FaPenFancy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import Title from "../components/Title";

function Services() {
  return (
    <Container color="bg-neutral-900">
      <Title title="Serviços:" />
      <section className="flex flex-col w-full py-8">
        <ServiceCard
          title={"Web Design"}
          description={
            "Crio interfaces atraentes e intuitivas, focadas na usabilidade e na melhor experiência para o usuário."
          }
          positon="self-start"
        >
          <FaPenFancy className="text-4xl text-blue-600" />
        </ServiceCard>
        <small className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"></small>
        <ServiceCard
          title={"Desenvolvimento"}
          description={
            "Desenvolvo sites, blogs, portfólios, landing pages e e-commerces com foco em performance e responsividade."
          }
          positon="self-end"
        >
          <FaCode className="text-4xl blue-600 text-blue-600" />
        </ServiceCard>
        <small className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"></small>
        <ServiceCard
          title={"Integração com APIs"}
          description={
            "Conexão de interfaces front-end com APIs para consumir e exibir dados dinamicamente."
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
