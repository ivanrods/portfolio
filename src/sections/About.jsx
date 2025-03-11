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
        <p className="text-lg ">Desenvolvedor front-end</p>
        <Text text=" Meu nome é Ivan Rodrigues, sou um desenvolvedor front-end apaixonado por criar interfaces web rápidas, responsivas e intuitivas. Com foco na experiência do usuário, busco sempre melhorar a performance e garantir que cada projeto tenha um design limpo e funcional. Meu objetivo é transformar ideias em experiências digitais que não apenas atendam, mas superem as expectativas." />

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
