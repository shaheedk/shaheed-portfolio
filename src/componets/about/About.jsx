import React, { useEffect } from "react";
import image from '../../assets/aboutImg.png';
import AOS from "aos";
import './about.css'
const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000 })
  })
  return (
    <section className=" bg-gray-50 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
          id="image"
            src={image}
            alt="About Me"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h1>
          <div className="text1">
            <p className=" text-lg leading-relaxed mb-4" data-Aos="fade-left">
            Hi, I’m <span className="font-semibold text-blue-600">Shaheed</span>, a web developer and designer with a passion for crafting 
            responsive, visually striking, and user-friendly digital experiences. With expertise in the MERN stack, I specialize 
            in building modern web applications that combine functionality with intuitive design.
          </p>
          </div>
          <p className="text-lg leading-relaxed mb-4" data-Aos="fade-left">
            I have a strong command of tools like <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, 
            <span className="font-semibold"> Tailwind</span>, <span className="font-semibold">Bootstrap</span>, <span className="font-semibold">React</span>, and 
            <span className="font-semibold"> Node.js</span>, enabling me to deliver seamless and engaging solutions tailored to meet users' needs. My focus is on creating clean, 
            efficient, and impactful designs that leave a lasting impression.
          </p>
          <p className="text-lg leading-relaxed mb-6" data-Aos="fade-left">
            Whether it’s front-end development or back-end logic, I enjoy turning ideas into reality and continuously pushing the 
            boundaries of innovation. Let’s connect and create something extraordinary together!
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
