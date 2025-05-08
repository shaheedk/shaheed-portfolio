import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <div className="w-[85%] fixed max-w-md  sm:px-8 md:px-6 h-12 border border-white/20 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center z-50 mt-4 mx-auto" >
      <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-14 text-sm md:text-lg font-medium py-6 sm:py-8 text-gray-300">
        <Link to="/" className="hover:text-white transition-all duration-200">
          Home
        </Link>
        <Link to="skills" className="hover:text-white transition-all duration-200">
          Skills
        </Link>
        <Link to="/projects" className="hover:text-white transition-all duration-200">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-white transition-all duration-200">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header