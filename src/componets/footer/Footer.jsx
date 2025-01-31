import React from 'react';
import SocialLinks from '../social/SocialLinks';

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-gray-100 py-5 ">
       <SocialLinks/>
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4">Thank You for Visiting!</h2>
        <p className="text-lg mb-4">
          Feel free to reach out or connect with me on my social media platforms.
        </p>
        <p className="text-lg ">
        Email: <a href="sheheedk07@gmail.com" className="text-teal-400 hover:underline">sheheedk07@gmail.com</a>
        </p>
       


     
      
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} shaheed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
