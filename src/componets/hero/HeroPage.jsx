import React from "react";
import main from '../../assets/main.png'
import ActionButtons from "./ActionButtons";
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import './hero.css'

const HeroPage = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-teal-400">Shaheed</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A passionate web developer specializing in creating responsive and
            dynamic websites using the MERN stack.
          </p>
         <ActionButtons/>
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
     
    </section>
  );
};

export default HeroPage;
