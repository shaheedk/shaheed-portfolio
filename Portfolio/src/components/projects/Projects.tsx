import { projects } from "../../data/projectData";

import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen text-white py-14 px-6 relative">
      <div className="flex justify-center mb-12">
        <div className="w-fit px-6 py-2 rounded-full bg-[#262626AD] flex items-center justify-center">
          <p className="text-base font-medium tracking-wide">
            <span className="mr-2 text-lg">◉</span> All Projects
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Image Container with Blur Overlay */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                {(project.live || project.github) && (
                  <div className="flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 bg-violet-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                        View
                      </a>
                    )}
                    {project.github && (
                      <Link
                        to={project.github}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition"
                      >
                        <FaGithub className="text-black text-2xl" /> View
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
