import Container from "../components/Container";
import Text from "../components/Text";
import Title from "../components/Title";

function Experience() {
  return (
    <Container id="experience" color="bg-neutral-900 h-full">
      <Title title="Experiência" />

      <section className="w-full mx-auto max-w-4xl flex flex-col gap-10 py-12">
        <div
          data-aos="fade-up"
          className="group flex gap-6 p-6 rounded-2xl border border-neutral-800 
    bg-neutral-900/50 backdrop-blur-sm 
    transition-all duration-300 
    hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10"
        >
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-custom-color rounded-full mt-2"></div>
            <div className="w-[2px] flex-1 bg-neutral-700"></div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm text-neutral-400">2025 — Atual</span>

            <h3 className="text-xl font-semibold">
              Desenvolvedor Full Stack Freelancer
            </h3>

            <p className="text-neutral-400">Atuação independente</p>

            <Text
              text=" Desenvolvimento de aplicações web completas, atuando desde a
              construção de interfaces modernas com React e Next.js até a
              implementação de APIs seguras com Node.js e MongoDB. Implementação
              de autenticação com JWT, controle de acesso, CRUDs estruturados,
              integração com APIs externas e deploy em produção. Foco em
              arquitetura organizada, código limpo, tipagem forte com TypeScript
              e boas práticas de versionamento com Git/GitHub."
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="group flex gap-6 p-6 rounded-2xl border border-neutral-800 
    bg-neutral-900/50 backdrop-blur-sm 
    transition-all duration-300 
    hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10"
        >
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-custom-color rounded-full mt-2"></div>
            <div className="w-[2px] flex-1 bg-neutral-700"></div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm text-neutral-400">2024 — Atual</span>

            <h3 className="text-xl font-semibold">
              Projetos Pessoais Full Stack
            </h3>

            <p className="text-neutral-400">
              Desenvolvimento prático e simulação de cenários reais
            </p>

            <Text
              text="Criação de sistemas completos com autenticação, rotas protegidas,
              painel administrativo, filtros dinâmicos e integração com banco de
              dados. Estruturação de projetos com arquitetura modular, separação
              de responsabilidades e deploy em ambiente de produção. Projetos
              desenvolvidos com foco em performance, escalabilidade e preparação
              para atuação profissional."
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Experience;
