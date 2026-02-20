import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

import Text from "../components/Text";
import Link from "../components/Link";
import Container from "../components/Container";

function About() {
  return (
    <Container id="about" color="bg-neutral-950 ">
      <section
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-stretch gap-8 
bg-neutral-900/60 backdrop-blur-sm 
p-6 md:p-8 
border border-neutral-700 
rounded-2xl 
transition-all duration-300 
hover:border-custom-color 
hover:shadow-xl hover:shadow-custom-color/10"
      >
        <img
          className="w-full md:w-1/3 object-cover rounded-xl 
transition duration-500 hover:scale-[1.02]"
          src="https://i.ibb.co/dJkQFrLK/ia-profile.png"
          //src="https://i.ibb.co/B8kG74C/profile.png"
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
          <Text
            text="Sou Desenvolvedor Full Stack com foco no ecossistema JavaScript, 
                construindo aplicações modernas com React, Next.js e Node.js.

                Tenho experiência na criação de sistemas completos, 
                desde interfaces performáticas até APIs seguras e bem estruturadas. 

                Meu objetivo é desenvolver soluções escaláveis, 
                com código limpo, boas práticas e excelente experiência do usuário.."
          />

          <div className="flex gap-4 flex-wrap">
            <Link href="https://wa.me/86994075453" title="Meu WhatsApp">
              <FaWhatsapp />
            </Link>
            <Link href="mailto:contaivanrodrigues@gmail.com" title="Meu E-mail">
              <MdMarkEmailUnread />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ivanrods/"
              title="Meu LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/ivanrods" title="Meu GitHub">
              <FaGithub />
            </Link>
          </div>
        </article>
      </section>
    </Container>
  );
}

export default About;
