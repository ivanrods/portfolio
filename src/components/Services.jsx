import { FaCode } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { TbCodeDots } from "react-icons/tb";
import React from "react";

const services = [
  {
    title: "Desenvolvimento Front-End",
    description:
      "Desenvolvimento de aplicações web modernas e responsivas com React, Next.js e TypeScript. Criação de interfaces intuitivas, componentes reutilizáveis e layouts adaptáveis, utilizando boas práticas de componentização, gerenciamento de estado e otimização de performance. Foco em acessibilidade, usabilidade e experiência do usuário.",
    position: "self-start",
    icon: FaCode,
  },
  {
    title: "Desenvolvimento Back-End",
    description:
      "Desenvolvimento de APIs REST e regras de negócio com Node.js e Express. Implementação de autenticação, autorização, validação de dados e integração com bancos de dados relacionais e não relacionais. Foco em segurança, organização da arquitetura, separação de responsabilidades e manutenção do código.",
    position: "self-end",
    icon: TbCodeDots,
  },
  {
    title: "Integração e Deploy",
    description:
      "Integração entre aplicações e serviços por meio de APIs, garantindo comunicação eficiente e consistência dos dados. Configuração de ambientes, gerenciamento de variáveis, versionamento com Git e publicação de aplicações em produção. Aplicação de boas práticas para garantir estabilidade, confiabilidade e facilidade de manutenção.",
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
                  className={`group flex flex-col gap-5 max-w-2xl bg-neutral-900/60 backdrop-blur-sm p-8 border border-neutral-800  rounded-2xl transition-all duration-300 hover:border-custom-color ${position}`}
                >
                  <div className="flex gap-4">
                    <Icon className="text-4xl text-custom-color transition duration-300 group-hover:scale-110 hover:text-neutral-300" />
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
