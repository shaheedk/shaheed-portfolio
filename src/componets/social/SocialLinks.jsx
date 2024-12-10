import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="flex flex-col space-y-6 items-center">
      <a 
        href="https://www.instagram.com/shaheed_7_" 
         
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
        <SiInstagram size={20} />
      </a>
      <a 
        href="https://www.linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
        <SiLinkedin size={20} />
      </a>
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
        <SiGithub size={20} />
      </a>
    </div>
  );
}

export default SocialLinks;
