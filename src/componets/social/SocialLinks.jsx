import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import AOS from "aos";
const SocialLinks=()=> {
  return (
    <div className="flex flex-row space-x-6 ml-46 mt-4" data-aos="fade-right">
      <a 
        href="https://www.instagram.com/shaheed_7_" 
         
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
        <SiInstagram size={20} />
      </a>
      <a 
        href="https://www.linkedin.com/in/shaheed-k-690010317" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
        <SiLinkedin size={20} />
      </a>
      <a 
        href="https://github.com/shaheedk" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
        <SiGithub size={22} />
      </a>
    </div>
  );
}

export default SocialLinks;
