import Container from "../components/Container";
import Text from "../components/Text";
import Title from "../components/Title";

function Experience() {
  return (
    <Container id="experience" color="bg-neutral-900 h-full">
      <Title title="Experiência:" />
      <section className="w-full h-full mx-auto max-w-4xl flex flex-col justify-center py-8">
        <div
          className="w-full h-full flex justify-center flex-row gap-4  "
          data-aos="fade-up"
        >
          <span className="block h-full bg-neutral-500 px-3 rounded-full text-sm md:text-base mt-1">
            2025
          </span>
          <div className=" flex flex-col  justify-center gap-2 items-center mt-1">
            <div className="p-1.5 bg-blue-800 rounded-full mt-1"></div>
            <div className="w-1 h-full rounded-full bg-neutral-500"></div>
          </div>
          <div className="h-full flex flex-col pb-4">
            <h3 className="text-lg md:text-xl">
              Desenvolvedor Full Stack Freelancer
            </h3>
            <p className="text-base md:text-lg">Freelancer</p>
            <Text
              text="Desenvolvo aplicações web completas com React, Next.js, Node.js, TypeScript e MongoDB, implementando funcionalidades como CRUD,         autenticação com JWT, rotas protegidas e integração com APIs.
                Utilizo Tailwind CSS para interfaces modernas e responsivas, sigo boas práticas de código com Git/GitHub e realizo deploys no Vercel (front-end) e Render (back-end)."
            />
          </div>
        </div>
        <div
          className="w-full h-full flex justify-center flex-row gap-4 "
          data-aos="fade-up"
        >
          <span className="block h-full bg-neutral-500 px-3  rounded-full text-sm md:text-base mt-1">
            2025
          </span>
          <div className=" flex flex-col  justify-center gap-2 items-center mt-1">
            <div className="p-1.5 bg-blue-800 rounded-full mt-1"></div>
            <div className="w-1 h-full rounded-full bg-neutral-500"></div>
          </div>
          <div className="h-full flex flex-col pb-4">
            <h3 className="text-lg md:text-xl">
              Desenvolvedor Full Stack (Projetos Pessoais)
            </h3>
            <p className="text-base md:text-lg">Autônomo</p>
            <Text
              text="Desenvolvo aplicações web full stack com React, Next.js, Node.js, TypeScript e MongoDB, incluindo funcionalidades como CRUD, autenticação JWT, filtros e painel administrativo.
                Organizo o código com boas práticas e versionamento em Git/GitHub, e realizo deploys no Vercel (front) e Render (back).
                Os projetos foram criados para portfólio, aprendizado e preparação para atuar como freelancer ou CLT."
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Experience;
