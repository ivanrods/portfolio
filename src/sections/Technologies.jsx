import Container from "../components/Container";
import { techList } from "../utils/techList";
import Title from "../components/Title";
import Text from "../components/Text";
import { useState } from "react";

function Technologies() {
  const [text, setText] = useState(
    "Passe o mouse sobre uma card para ver sua descrição."
  );

  function handleFigureClick(tecnologia) {
    const techObj = techList.find(
      (item) => item.nome.toLowerCase() === tecnologia.toLowerCase()
    );
    setText(
      techObj?.descricao ||
        "Passe o mouse sobre uma card para ver sua descrição."
    );
  }

  function handleMouseLeave() {
    setText("Passe o mouse sobre uma card para ver sua descrição.");
  }

  return (
    <Container id="technologies" color="bg-neutral-950 ">
      <Title title="Conhecimentos:" />

      <div className="flex flex-col justify-center gap-4 xl:flex-row lg:justify-between xl:grid xl:grid-cols-2">
        <section className="max-w-lg w-full flex justify-center mx-auto lg:mx-0">
          <Text text={text} />
        </section>

        <article className="flex justify-center flex-wrap gap-4">
          {techList.map((tecnologia, index) => (
            <div
              key={index}
              onMouseEnter={() => handleFigureClick(tecnologia.nome)}
              onMouseLeave={handleMouseLeave}
              data-aos="zoom-in"
              className={`px-3 md:px-4 py-2 border border-stone-500 transition duration-300 hover:border-custom-color rounded-xl flex items-center gap-2 md:gap-3 ${tecnologia.cor}   `}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleFigureClick(tecnologia.nome);
                }
              }}
            >
              <div className="text-2xl md:text-3xl">
                {tecnologia.componente}
              </div>
              <p className="text-md md:text-lg text-neutral-400 capitalize ">
                {tecnologia.nome}
              </p>
            </div>
          ))}
        </article>
      </div>
    </Container>
  );
}

export default Technologies;
