import React, { useEffect } from "react";
import projectOne from "../../assets/newlight.png";
import projectTwo from "../../assets/netflix.png";
import mini from "../../assets/mini.jpg";
import Aos from "aos";
const projects = [
  {
    title: "New Light",
    description:
      "Static business website created with modern web technologies.",
    link: "https://github.com/shaheedk/New-light",
    image: projectOne,
  },
  {
    title: "Netflix Clone",
    description:
      "Clone of Netflix built with React and other modern web tools.",
    link: "https://github.com/shaheedk/Netflix-clone",
    image: projectTwo,
  },
  {
    title: "Mini Softwares",
    description: "A collection of small, useful applications for everyday use.",
    link: "https://shaheedk.github.io/To-Do-app/",
    image: mini,
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <section className="py-16 bg-gray-100" id="works">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          My works
        </h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              data-aos="flip-right"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                View work
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
