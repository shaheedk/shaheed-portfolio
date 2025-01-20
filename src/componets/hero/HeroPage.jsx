import React, { useEffect } from "react";
import main from "../../assets/main.png";
import ActionButtons from "./ActionButtons";
import SocialLinks from "../social/SocialLinks";

import AOS from "aos";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-white" id="hero">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            data-aos="fade-down"
          >
            Hi, I'm <span className="text-teal-400">Shaheed</span>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 mb-6"
            data-aos="fade-up"
          >
            A passionate web developer specializing in creating responsive and
            dynamic websites using the MERN stack.
          </p>
          <ActionButtons data-aos="fade-up" />
          <SocialLinks />
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-left">
          <div className="relative w-56 h-56 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-full overflow-hidden">
            <img src={main} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
    </section>
  );
};

export default HeroPage;
