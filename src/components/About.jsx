import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://wa.me/86994075453",
    title: "Meu WhatsApp",
    icon: FaWhatsapp,
  },
  {
    href: "mailto:contaivanrodrigues@gmail.com",
    title: "Meu E-mail",
    icon: MdMarkEmailUnread,
  },
  {
    href: "https://www.linkedin.com/in/ivanrods/",
    title: "Meu LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/ivanrods",
    title: "Meu GitHub",
    icon: FaGithub,
  },
];

function About() {
  return (
    <div id="Sobre" className="px-4 justify-center bg-neutral-950">
      <div className="max-w-6xl py-12 md:py-24 mx-auto">
        <section
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-stretch gap-8 bg-neutral-900/60 backdrop-blur-sm p-6 md:p-8 border border-neutral-700 rounded-2xl transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10"
        >
          <img
            className="w-full md:w-1/3 object-cover rounded-xl transition duration-500 hover:scale-[1.02]"
            src="https://i.ibb.co/dJkQFrLK/ia-profile.png"
            alt="Photo"
          />

          <article className="w-full md:w-2/3 flex flex-col gap-4 justify-between">
            <div>
              <span className="text-md lg:text-xl text-custom-color font-medium">
                Quem sou
              </span>
              <h2 className="text-lg lg:text-2xl font-medium">
                Ivan Rodrigues Machado
              </h2>
            </div>

            <p className="text-md lg:text-lg">Desenvolvedor Full Stack</p>
            <p className="text-neutral-300 leading-relaxed  md:text-left hover:text-neutral-300">
              Sou Desenvolvedor Full Stack com foco no ecossistema JavaScript,
              construindo aplicações modernas com React, Next.js e Node.js Tenho
              experiência na criação de sistemas completos, desde interfaces
              performáticas até APIs seguras e bem estruturadas. Meu objetivo é
              desenvolver soluções escaláveis, com código limpo, boas práticas e
              excelente experiência do usuário.
            </p>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map(({ href, title, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl text-custom-color border border-neutral-700 rounded-xl p-3 transition-all duration-300 hover:border-custom-color hover:scale-110 hover:shadow-lg hover:shadow-custom-color/20"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default About;
