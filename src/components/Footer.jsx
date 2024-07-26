import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="text-black bg-black py-4 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* GitHub Link */}
        <a 
          href="https://github.com/harshil-hsj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
          <FaGithub size={24} />
          <span>My GitHub</span>
        </a>

        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/harshil-singh-jhijaria-a0745526a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 text-white hover:text-gray-400"
        >
          <FaLinkedin size={24} />
          <span>Connect with me on LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
