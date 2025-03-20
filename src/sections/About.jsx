import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub, } from "react-icons/fa";
import photo from "../assets/photo.webp";
import Text from "../components/Text";
import Link from "../components/Link";
import Container from "../components/Container";

function About() {
  return (
    <Container id="about" color="bg-neutral-950 ">
    <section data-aos="fade-up"  className="flex flex-col gap-8 bg-neutral-900 px-8 py-8 border-2 border-neutral-600 rounded-md lg:flex-row">
      <div className="object-cover overflow-hidden">
        <img className="" src={photo} alt="Photo" />
      </div>

      <article>
        <span className="text-xl text-blue-600 font-medium">Quem sou</span>
        <h2 className="text-3xl font-medium py-4">Ivan Rodrigues</h2>
        <p className="text-lg ">Desenvolvedor Full Stack</p>
        <Text text="Meu nome é Ivan Rodrigues, sou um desenvolvedor Full Stack apaixonado por criar soluções web completas e escaláveis. Com habilidades em front-end e back-end, meu foco é construir aplicações dinâmicas e eficientes, sempre garantindo uma ótima experiência do usuário e desempenho superior. Busco constantemente aprimorar meus conhecimentos e aplicar as melhores práticas em todas as camadas de desenvolvimento, criando projetos que atendem às necessidades dos usuários e dos sistemas de forma integrada." />

        <div className="flex gap-4 flex-wrap">
          <Link href="https://wa.me/86994075453">
            <FaWhatsapp />
          </Link>
          <Link href="mailto:contaivanrodrigues@gmail.com">
            <MdMarkEmailUnread />
          </Link>
          <Link href="https://www.linkedin.com/in/ivanrods/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/ivanrods">
            <FaGithub />
          </Link>
        </div>
      </article>
    </section>
    </Container>
  );
}

export default About;
