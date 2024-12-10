import React, { useEffect } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiGithub, SiTailwindcss } from "react-icons/si";
import Aos from "aos";
const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React.js", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-600" /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" data-Aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
