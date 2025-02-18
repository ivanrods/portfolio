import Container from "../components/Container";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Text from "../components/Text";

function Skills() {
  return (
    <Container color="bg-neutral-900">
      <Title title="Conhecimentos:" />

      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between">
        <section className="max-w-lg">
          <Text text="*passe o cursor do mouse no card para ler*" />
        </section>
        <article className="grid grid-cols-3 md:grid-cols-4 gap-4   justify-center mx-auto md:mx-0 text-6xl  ">
          <Wrapper color="text-orange-600">
            <FaHtml5 />
          </Wrapper>
          <Wrapper color="text-blue-600">
            <FaCss3Alt />
          </Wrapper>
          <Wrapper color="text-yellow-400">
            <FaJsSquare />
          </Wrapper>
          <Wrapper color="text-blue-400">
            <RiTailwindCssFill />
          </Wrapper>
          <Wrapper color="text-blue-400">
            <FaReact />
          </Wrapper>
          <Wrapper color="text-blue-600">
            <SiTypescript />
          </Wrapper>
          <Wrapper color="text-orange-600">
            <FaGitAlt />
          </Wrapper>
          <Wrapper color="text-orange-400">
            <FaFigma />
          </Wrapper>
          <Wrapper color="text-green-600">
            <FaNodeJs />
          </Wrapper>
        </article>
      </div>
    </Container>
  );
}
export default Skills;
