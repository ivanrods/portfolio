import { FaCode } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { TbCodeDots } from "react-icons/tb";
import React from "react";

const services = [
  {
    title: "Desenvolvimento Front-End",
    description:
      "Desenvolvimento de interfaces modernas e responsivas com React e Next.js, priorizando performance, acessibilidade e excelente experiência do usuário. Criação de layouts bem estruturados, componentes reutilizáveis e aplicações com foco em usabilidade e fluidez.",
    position: "self-start",
    icon: FaCode,
  },
  {
    title: "Desenvolvimento Back-End",
    description:
      "Construção de APIs seguras e bem estruturadas com Node.js e Express, implementando autenticação, controle de acesso e integração com banco de dados. Foco em organização de código, escalabilidade e comunicação eficiente entre front-end e servidor.",
    position: "self-end",
    icon: TbCodeDots,
  },
  {
    title: "Integração e Deploy",
    description:
      "Integração entre front-end e back-end utilizando APIs REST, garantindo comunicação eficiente e dados consistentes. Deploy de aplicações em ambiente de produção, priorizando estabilidade, desempenho e boas práticas.",
    position: "self-start",
    icon: AiOutlineApi,
  },
];

function Services() {
  return (
    <div id="Serviços" className="px-4 justify-center bg-neutral-950">
      <div className="max-w-6xl py-12 md:py-24 mx-auto">
        {" "}
        <h2 className="text-2xl md:text-3xl font-medium py-4 mx-0 ">
          Serviços
        </h2>
        <section className="flex flex-col w-full py-8">
          {services.map(
            ({ title, description, position, icon: Icon }, index) => (
              <React.Fragment key={index}>
                <div
                  data-aos="fade-up"
                  className={`group flex flex-col gap-5 max-w-2xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10 ${position}`}
                >
                  <div className="flex gap-4">
                    <Icon className="text-4xl text-custom-color transition duration-300 group-hover:scale-110" />
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {title}
                    </h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed  md:text-left hover:text-neutral-300">
                    {description}
                  </p>
                </div>
                {index !== services.length - 1 && (
                  <small
                    data-aos="fade-up"
                    className="h-8 w-1 border-l-2 border-neutral-600 mx-auto"
                  ></small>
                )}
              </React.Fragment>
            ),
          )}
        </section>
      </div>
    </div>
  );
}

export default Services;
