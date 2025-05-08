import { assets } from "../../assets/assets";
import CardLayout from "../../common/CardLayout";
import { frontend, backend, libraries, deploy } from "../../data/skillsData";
const Skills = () => {
  return (
    <div className="relative">
      <section className="flex flex-col text-white items-center justify-center px-4 py-20 relative z-10 ">
        {/* Heading */}
        <div className="text-center mt-5 max-w-2xl">
          <h1 className="text-4xl md:text-4xl font-bold text-yellow-400">
            Skills
          </h1>
          <hr className="bg-yellow-600 h-1 border-none mt-2" />
        </div>

        {/* Subheading */}
        <div className="mt-10 w-full flex flex-col items-center justify-center max-w-xl">
          <p className="text-xl font-bold mb-2">Programming Languages</p>
          <hr className="bg-yellow-600 h-0.5 w-24 border-none" />
        </div>

        {/* Icons of Frontend */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <CardLayout>
            <img src={assets.js} alt="" />
            <p className="font-bold ">Javascript</p>
          </CardLayout>

          <CardLayout>
            <img src={assets.ts} alt="" />
            <p className="font-bold ">Typescript</p>
          </CardLayout>
        </div>
        {/* sub heading */}
        <div className="mt-10 w-full flex flex-col items-center justify-center max-w-xl">
          <p className="text-xl font-bold mb-2">Frontend Development</p>
          <hr className="bg-yellow-600 h-0.5 w-24 border-none" />
        </div>

        {/* mapping of frontend */}
        <div className="flex flex-wrap justify-center w-full gap-8 mt-8">
          {frontend.map((skill: any, index: number) => (
            <CardLayout key={index}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-white font-medium mt-0.5">{skill.name}</p>
            </CardLayout>
          ))}
        </div>
        {/* sub heading */}
        <div className="mt-12 w-full flex flex-col items-center justify-center max-w-xl">
          <p className="text-xl font-bold mb-2">Backend & Databases</p>
          <hr className="bg-yellow-600 h-0.5 w-24 border-none" />
        </div>

        {/* mapping of backend */}
        <div className="flex flex-wrap justify-center w-full gap-8 mt-8">
          {backend.map((skill: any, index: number) => (
            <CardLayout key={index}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-white font-medium mt-0.5">{skill.name}</p>
            </CardLayout>
          ))}
        </div>
         {/* sub heading */}
         <div className="mt-12 w-full flex flex-col items-center justify-center max-w-xl">
          <p className="text-xl font-bold mb-2">Backend & Databases</p>
          <hr className="bg-yellow-600 h-0.5 w-24 border-none" />
        </div>

        {/* mapping of backend */}
        <div className="flex flex-wrap justify-center w-full gap-8 mt-8">
          {libraries.map((skill: any, index: number) => (
            <CardLayout key={index}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-white font-medium mt-0.5">{skill.name}</p>
            </CardLayout>
          ))}
        </div>

         {/* sub heading */}
         <div className="mt-12 w-full flex flex-col items-center justify-center max-w-xl">
          <p className="text-xl font-bold mb-2">Deployments</p>
          <hr className="bg-yellow-600 h-0.5 w-24 border-none" />
        </div>

        {/* mapping of backend */}
        <div className="flex flex-wrap justify-center w-full gap-8 mt-8">
          {deploy.map((skill: any, index: number) => (
            <CardLayout key={index}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-white font-medium mt-0.5">{skill.name}</p>
            </CardLayout>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
