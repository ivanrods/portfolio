import Container from "../components/Container";
import { techList } from "../utils/techList";
import Title from "../components/Title";
import Text from "../components/Text";
import { useState } from "react";

function Technologies() {
  const defaultText =
    "Passe o mouse sobre uma tecnologia para visualizar sua descrição detalhada.";

  const [text, setText] = useState(defaultText);

  function handleFigureHover(tecnologia) {
    const techObj = techList.find(
      (item) => item.nome.toLowerCase() === tecnologia.toLowerCase(),
    );

    setText(techObj?.descricao || defaultText);
  }

  function handleMouseLeave() {
    setText(defaultText);
  }

  return (
    <Container
      id="technologies"
      color="bg-gradient-to-b from-neutral-950 to-black"
    >
      <Title title="Tecnologias & Ferramentas" />

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
        <section className="relative">
          <div
            className="
         
           
           
            min-h-[180px]
           
             bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10"
          >
            <Text text={text} />
          </div>
        </section>

        <article className="flex flex-wrap justify-center gap-5">
          {techList.map((tecnologia, index) => (
            <div
              key={index}
              onMouseEnter={() => handleFigureHover(tecnologia.nome)}
              onMouseLeave={handleMouseLeave}
              data-aos="zoom-in"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleFigureHover(tecnologia.nome);
                }
              }}
              className={`
                group relative
                flex items-center gap-3
                px-5 py-3 cursor-pointer
                hover:-translate-y-1
                bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10
              `}
            >
              <div
                className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${tecnologia.cor}`}
              >
                {tecnologia.componente}
              </div>

              <p className="text-base md:text-lg text-neutral-300 capitalize group-hover:text-white transition-colors">
                {tecnologia.nome}
              </p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-custom-color/10 to-transparent" />
            </div>
          ))}
        </article>
      </div>
    </Container>
  );
}

export default Technologies;
