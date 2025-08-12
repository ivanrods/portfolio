import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiJest,
  SiShadcnui,
  SiExpress,
  SiPrisma,
  SiGraphql,
  SiMongodb,
  SiZod,
  SiJsonwebtokens,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

export const techList = [
  {
    nome: "HTML",
    cor: "text-orange-600",
    componente: <FaHtml5 />,
    descricao:
      "HTML (HyperText Markup Language) é a linguagem usada para estruturar o conteúdo de páginas na web, definindo elementos como títulos, parágrafos, imagens e links.",
  },
  {
    nome: "CSS",
    cor: "text-blue-600",
    componente: <FaCss3Alt />,
    descricao:
      "CSS (Cascading Style Sheets) é usado para estilizar o conteúdo da web, controlando cores, layouts, fontes e responsividade.",
  },
  {
    nome: "JavaScript",
    cor: "text-yellow-400",
    componente: <FaJsSquare />,
    descricao:
      "JavaScript é uma linguagem de programação usada para adicionar interatividade e dinamismo às páginas web.",
  },
  {
    nome: "Tailwindcss",
    cor: "text-blue-400",
    componente: <RiTailwindCssFill />,
    descricao:
      "Tailwind CSS é um framework de utilitários para estilização rápida e consistente em projetos web.",
  },
  {
    nome: "React",
    cor: "text-blue-400",
    componente: <FaReact />,
    descricao:
      "React é uma biblioteca JavaScript para construir interfaces de usuário de forma eficiente e componentizada.",
  },
  {
    nome: "Next.js",
    cor: "text-gray-300",
    componente: <RiNextjsLine />,
    descricao:
      "Next.js é um framework React que permite criar aplicativos web rápidos e otimizados, oferecendo:",
  },
  {
    nome: "TypeScript",
    cor: "text-blue-500",
    componente: <SiTypescript />,
    descricao:
      "TypeScript é uma linguagem de programação que estende o JavaScript com tipagem estática.",
  },
  {
    nome: "Figma",
    cor: "text-red-600",
    componente: <FaFigma />,
    descricao:
      "Figma é uma ferramenta de design colaborativa usada para criar interfaces de usuário e protótipos.",
  },
  {
    nome: "Node.js",
    cor: "text-green-600",
    componente: <FaNodeJs />,
    descricao:
      "Node.js é um ambiente de execução JavaScript do lado do servidor, permitindo a construção de aplicações escaláveis.",
  },
  {
    nome: "PostgreSQL",
    cor: "text-blue-500",
    componente: <BiLogoPostgresql />,
    descricao:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
  },
  {
    nome: "Jest",
    cor: "text-orange-700",
    componente: <SiJest />,
    descricao:
      "Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript.",
  },
  {
    nome: "Git",
    cor: "text-orange-600",
    componente: <FaGitAlt />,
    descricao:
      "Git é um sistema de controle de versão distribuído usado para gerenciar o histórico de projetos de software.",
  },
  {
    nome: "Shadcn",
    cor: "text-gray-100",
    componente: <SiShadcnui />,
    descricao:
      "Shadcn/ui é uma coleção de componentes de interface do usuário (UI) para projetos web, construída sobre o Tailwind CSS e Radix UI.",
  },
  {
    nome: "Express",
    cor: "text-gray-100",
    componente: <SiExpress />,
    descricao:
      "Express.js é um framework web estruturado, escrito em JavaScript que roda sobre o ambiente Node.js em tempo de execução.",
  },
  {
    nome: "Prisma",
    cor: "text-gray-100",
    componente: <SiPrisma />,
    descricao:
      "O Prisma ORM é uma ferramenta moderna que facilita a interação com bancos de dados em aplicações Node.js e TypeScript.",
  },
  {
    nome: "Graphql",
    cor: "text-pink-600",
    componente: <SiGraphql />,
    descricao:
      "GraphQL é uma linguagem de consulta e runtime para APIs que permite aos clientes solicitar exatamente os dados necessários, evitando o excesso de dados comuns em APIs REST.",
  },
  {
    nome: "Mongodb",
    cor: "text-green-600",
    componente: <SiMongodb />,
    descricao:
      "O MongoDB é um sistema de gerenciamento de banco de dados (SGBD) NoSQL de código aberto, que utiliza documentos flexíveis em vez de tabelas e linhas para armazenar e processar dados.",
  },
  {
    nome: "Zod",
    cor: "text-blue-600",
    componente: <SiZod />,
    descricao:
      "Zod é uma biblioteca de validação de esquema de dados para JavaScript e TypeScript.",
  },
  {
    nome: "JWT",
    cor: "text-red-600",
    componente: <SiJsonwebtokens />,
    descricao:
      "JWT, ou JSON Web Token, é um padrão aberto para criar tokens de acesso de forma segura entre duas partes, geralmente um cliente e um servidor.",
  },
];
