import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-white text-xl font-bold">Portfolio</div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <a href="#hero" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
            About
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition duration-300">
            Skills
          </a>
          <a href="#works" className="text-gray-300 hover:text-white transition duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;