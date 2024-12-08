import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold">Shaheed</span>, a web developer and designer with a passion for crafting 
          responsive, visually striking, and user-friendly digital experiences. With expertise in the MERN stack, I specialize 
          in building modern web applications that combine functionality with intuitive design.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I have a strong command of tools like HTML, CSS, Tailwind, Bootstrap, React, and Node.js, enabling me to deliver seamless 
          and engaging solutions tailored to meet users' needs. My focus is on creating clean, efficient, and impactful designs 
          that leave a lasting impression.
        </p>
        <p className="text-lg leading-relaxed">
          Whether it’s front-end development or back-end logic, I enjoy turning ideas into reality and continuously pushing the 
          boundaries of innovation. Let’s connect and create something extraordinary together!
        </p>
      </div>
    </section>
  );
};

export default About;
