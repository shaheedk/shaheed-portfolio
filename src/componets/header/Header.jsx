import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 text-gray-900 shadow-md">
      {/* Navbar container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or brand name (if any) */}
        <div className="text-2xl font-semibold hover:text-emerald-400">Shaheed</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-teal-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90 backdrop-blur-lg p-6 text-white py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-lg hover:text-teal-400">Home</a>
            <a href="#about" className="text-lg hover:text-teal-400">About</a>
            <a href="#projects" className="text-lg hover:text-teal-400">Projects</a>
            <a href="#skills" className="text-lg hover:text-teal-400">Skills</a>
            <a href="#contact" className="text-lg hover:text-teal-400">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
