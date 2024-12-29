import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `hover:text-teal-400 transition-colors duration-300 ${
      isActive ? 'text-teal-400 font-bold' : ''
    }`;

  return (
    <header className="bg-gray-100 text-gray-900 shadow-md">
      {/* Navbar container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or brand name */}
        <div className="text-2xl font-semibold hover:text-emerald-400">Shaheed</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={navLinkClasses}>
            Skills
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
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
            <NavLink to="/home" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClasses}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={navLinkClasses}>
              Skills
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
