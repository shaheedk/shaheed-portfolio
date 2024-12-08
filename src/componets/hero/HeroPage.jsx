import React from "react";
import main from '../../assets/main.png'
import './hero.css'
const HeroPage = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Shaheed</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A passionate web developer specializing in creating responsive and
            dynamic websites using the MERN stack.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-blue-700"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={main}
            alt="Hero"
            className="w-full h-auto  "
          />
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
    </section>
  );
};

export default HeroPage;
