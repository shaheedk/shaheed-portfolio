import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import { assets } from "../../assets/assets";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] pointer-events-none"
      >
        <source src={assets.bg} type="video/mp4" />
      </video>
      <section
        className="flex flex-col text-white items-center justify-center px-4 py-20 relative z-10"
        id="home"
      >
        {/* Image Content */}
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-66 lg:h-66 mt-9 mb-7 rounded-full bg-black/60 overflow-hidden">
          <img
            src={assets.main}
            alt="Shaheed's profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-yellow-400">Shaheed</span>
          </h1>

          <p className="sm:text-sm  md:text-xl mb-6">
            A passionate web developer specializing in creating responsive and
            dynamic websites using the MERN stack.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2">Connect with me</p>
            <hr className="w-20 h-1 bg-yellow-600 border-none rounded mb-4" />
          </div>

          <div className="flex gap-6 justify-center text-2xl">
            <a
              href="https://www.instagram.com/shaheed_7_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <SiInstagram />
            </a>
            <a
              href="https://github.com/shaheedk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white hover:text-black rounded-full "
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shaheed-k-690010317/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <SiLinkedin />
            </a>
          </div>
          <p className="mt-4">Or</p>
          <p className="my-2">
            {" "}
            <FaEnvelope size={25} className="inline mx-2 " />
            <span className="text-[19px]"> sheheedk07@gmail.com</span>
          </p>
        </div>
        <hr className="w-[60%] h-1 bg-yellow-600 border-none rounded mt-5" />
      </section>
    </div>
  );
};

export default Hero;
