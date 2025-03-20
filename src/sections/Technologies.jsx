import Container from "../components/Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Text from "../components/Text";
import { useState } from "react";

function Technologies() {
  // Textos para cada tecnologia
  const tecnologis = {
    html: "HTML (HyperText Markup Language) é a linguagem usada para estruturar o conteúdo de páginas na web, definindo elementos como títulos, parágrafos, imagens e links.",
    css: "CSS (Cascading Style Sheets) é usado para estilizar o conteúdo da web, controlando cores, layouts, fontes e responsividade.",
    js: "JavaScript é uma linguagem de programação usada para adicionar interatividade e dinamismo às páginas web.",
    tailwind:
      "Tailwind CSS é um framework de utilitários para estilização rápida e consistente em projetos web.",
    react:
      "React é uma biblioteca JavaScript para construir interfaces de usuário de forma eficiente e componentizada.",
    typescript:
      "TypeScript é uma linguagem de programação que estende o JavaScript com tipagem estática.",
    git: "Git é um sistema de controle de versão distribuído usado para gerenciar o histórico de projetos de software.",
    figma:
      "Figma é uma ferramenta de design colaborativa usada para criar interfaces de usuário e protótipos.",
    node: "Node.js é um ambiente de execução JavaScript do lado do servidor, permitindo a construção de aplicações escaláveis.",
    nextjs: "Next.js é um framework React que permite criar aplicativos web rápidos e otimizados, oferecendo:",
  };

  // Estado para o texto exibido
  const [text, setText] = useState("Passe o mouse sobre uma card para ver sua descrição.");

  // Função para atualizar o texto ao clicar no ícone
  function handleFigureClick(tecnologia) {
    setText(tecnologis[tecnologia] || "Passe o mouse sobre uma card para ver sua descrição.");
  }
  function handleMouseLeave (){
    setText('Passe o mouse sobre uma card para ver sua descrição. ')
  }

  // Mapa de ícones com seus nomes e cores
  const icones = [
    { componente: <FaHtml5 />, nome: "html", cor: "text-orange-600" },
    { componente: <FaCss3Alt />, nome: "css", cor: "text-blue-600" },
    { componente: <FaJsSquare />, nome: "js", cor: "text-yellow-400" },
    {
      componente: <RiTailwindCssFill />,
      nome: "tailwind",
      cor: "text-blue-400",
    },
    { componente: <FaReact />, nome: "react", cor: "text-blue-400" },
    { componente: <SiTypescript />, nome: "typescript", cor: "text-blue-500" },
    { componente: <FaGitAlt />, nome: "git", cor: "text-orange-600" },
    { componente: <FaFigma />, nome: "figma", cor: "text-orange-400" },
    { componente: <FaNodeJs />, nome: "node", cor: "text-green-600" },
    { componente: <RiNextjsLine />, nome: "nextjs", cor: "text-gray-300" },

    
    
  ];

  return (
    <Container id="technologies" color="bg-neutral-900">
      <Title title="Conhecimentos:" />

      <div className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-between">
        <section className="max-w-lg w-full flex justify-center mx-auto lg:mx-0">
          <Text text={text} />
        </section>

        <article className=" grid grid-cols-3 lg:grid-cols-4 gap-4 justify-center mx-auto lg:mx-0 text-6xl">
          {icones.map((icone, index) => (
            <Wrapper
              key={index}
              color={icone.cor}
              onMouseEnter={() => handleFigureClick(icone.nome)}
              onMouseLeave={handleMouseLeave}
            >
              {icone.componente}
            </Wrapper>
          ))}
        </article>
      </div>
    </Container>
  );
}

export default Technologies;
