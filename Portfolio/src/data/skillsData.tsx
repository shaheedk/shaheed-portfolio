import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiFirebase,
  SiRedux,
  SiNodemon,
  SiRender,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import type { ReactElement } from "react";
import { FaGitAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FiShield } from "react-icons/fi";

type Skill = {
  name: string;
  icon: ReactElement;
};

export const frontend: Skill[] = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "React.js", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-800" /> },
];
export const backend: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
];

export const libraries: Skill[] = [
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Git Hub", icon: <SiGithub className="text-white" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  { name: "NodeMailer", icon: <MdEmail className="text-[#0072c6]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#0072c6]" /> },
  { name: "Nodemon", icon: <SiNodemon className="text-green-500" /> },
  { name: "JWT", icon: <FiShield className="text-[#4B5563]" /> },
];

export const deploy: Skill[] = [
  { name: "Render", icon: <SiRender className="text-black bg-white px-2 py-2 rounded-[5px] " size={45}/> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Netlify", icon: <SiNetlify className="text-green-300" /> },

]
