import Container from "../components/Container";
import { icones } from "../utils/icones";
import { tech } from "../utils/tech";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Text from "../components/Text";
import { useState } from "react";

function Technologies() {
  // Textos para cada tecnologia

  // Estado para o texto exibido
  const [text, setText] = useState(
    "Passe o mouse sobre uma card para ver sua descrição."
  );

  // Função para atualizar o texto ao clicar no ícone
  function handleFigureClick(tecnologia) {
    setText(
      tech[tecnologia] || "Passe o mouse sobre uma card para ver sua descrição."
    );
  }
  function handleMouseLeave() {
    setText("Passe o mouse sobre uma card para ver sua descrição. ");
  }

  return (
    <Container id="technologies" color="bg-neutral-950 ">
      <Title title="Conhecimentos:" />

      <div className="flex flex-col justify-center gap-4 xl:flex-row lg:justify-between">
        <section className="max-w-lg w-full flex justify-center mx-auto lg:mx-0">
          <Text text={text} />
        </section>

        <article className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4 gap-4 justify-center mx-auto xl:mx-0 text-6xl ">
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
