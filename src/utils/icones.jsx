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
  SiJsonwebtokens,
  SiZod,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

export const icones = [
  { componente: <FaHtml5 />, nome: "html", cor: "text-orange-600" },
  { componente: <FaCss3Alt />, nome: "css", cor: "text-blue-600" },
  { componente: <FaJsSquare />, nome: "javascript", cor: "text-yellow-400" },
  { componente: <RiTailwindCssFill />, nome: "tailwind", cor: "text-blue-400" },
  { componente: <FaReact />, nome: "react", cor: "text-blue-400" },
  { componente: <RiNextjsLine />, nome: "nextjs", cor: "text-gray-300" },
  { componente: <SiShadcnui />, nome: "shadcn", cor: "text-gray-100" },
  { componente: <SiTypescript />, nome: "typescript", cor: "text-blue-500" },
  { componente: <SiGraphql />, nome: "graphql", cor: "text-pink-600" },
  { componente: <FaNodeJs />, nome: "nodejs", cor: "text-green-600" },
  { componente: <SiExpress />, nome: "express", cor: "text-gray-100" },
  { componente: <SiPrisma />, nome: "prisma", cor: "text-gray-100" },
  {
    componente: <BiLogoPostgresql />,
    nome: "postgresql",
    cor: "text-blue-500",
  },
  { componente: <SiJest />, nome: "jest", cor: "text-orange-700" },
  { componente: <FaFigma />, nome: "figma", cor: " text-red-600" },
  { componente: <FaGitAlt />, nome: "git", cor: "text-orange-600" },

  { componente: <SiMongodb />, nome: "mongodb", cor: "text-green-600" },
  { componente: <SiJsonwebtokens />, nome: "jwt", cor: "text-red-600" },
  { componente: <SiZod />, nome: "zod", cor: "text-blue-600" },
];
