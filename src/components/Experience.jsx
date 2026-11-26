const experiences = [
  {
    period: "2025 — Atual",
    title: "Desenvolvedor Full Stack Freelancer",
    subtitle: "Atuação independente",
    description: `
      Desenvolvimento independente de aplicações web, atuando na construção de interfaces modernas, responsivas e intuitivas, implementação de funcionalidades e integração com APIs e bancos de dados. Experiência com React, Next.js, TypeScript e Node.js, aplicando boas práticas de desenvolvimento, organização de código, componentização e separação de responsabilidades. Implementação de autenticação, gerenciamento de dados, validações, integração com serviços externos e publicação de aplicações em produção.
    `,
  },
  {
    period: "2024 — Atual",
    title: "Projetos Pessoais Full Stack",
    subtitle: "Desenvolvimento prático e simulação de cenários reais",
    description: `
      Desenvolvimento de aplicações full stack com foco na resolução de problemas reais e aplicação prática de tecnologias utilizadas no mercado. Construção de projetos como o Balancefy, uma aplicação de controle financeiro pessoal com autenticação, dashboards e visualização de dados, e o ConnectFly, uma plataforma de mensageria com comunicação em tempo real, persistência de mensagens e envio de imagens. Atuação em todo o ciclo de desenvolvimento, desde a estruturação da aplicação até a implementação das funcionalidades, testes e deploy em produção.
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
              className="group flex gap-6 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-custom-color"
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
