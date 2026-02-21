const experiences = [
  {
    period: "2025 — Atual",
    title: "Desenvolvedor Full Stack Freelancer",
    subtitle: "Atuação independente",
    description: `
      Desenvolvimento de aplicações web completas, atuando desde a
      construção de interfaces modernas com React e Next.js até a
      implementação de APIs seguras com Node.js e MongoDB. Implementação
      de autenticação com JWT, controle de acesso, CRUDs estruturados,
      integração com APIs externas e deploy em produção. Foco em
      arquitetura organizada, código limpo, tipagem forte com TypeScript
      e boas práticas de versionamento com Git/GitHub.
    `,
  },
  {
    period: "2024 — Atual",
    title: "Projetos Pessoais Full Stack",
    subtitle: "Desenvolvimento prático e simulação de cenários reais",
    description: `
      Criação de sistemas completos com autenticação, rotas protegidas,
      painel administrativo, filtros dinâmicos e integração com banco de
      dados. Estruturação de projetos com arquitetura modular, separação
      de responsabilidades e deploy em ambiente de produção. Projetos
      desenvolvidos com foco em performance, escalabilidade e preparação
      para atuação profissional.
    `,
  },
];

function Experience() {
  return (
    <div
      id="Experiência"
      className={"px-4 justify-center bg-neutral-900 h-full"}
    >
      <div className="max-w-6xl py-12 md:py-24 mx-auto">
        {" "}
        <h2 className="text-2xl md:text-3xl font-medium py-4 mx-0 ">
          Experiência
        </h2>
        <section className="w-full mx-auto max-w-4xl flex flex-col gap-10 py-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group flex gap-6 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-custom-color rounded-full mt-2"></div>

                {index !== experiences.length && (
                  <div className="w-0.5 flex-1 bg-neutral-700"></div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm text-neutral-400">{exp.period}</span>

                <h3 className="text-xl font-semibold">{exp.title}</h3>

                <p className="text-neutral-400">{exp.subtitle}</p>

                <p className="text-neutral-300 leading-relaxed md:text-left hover:text-neutral-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Experience;
