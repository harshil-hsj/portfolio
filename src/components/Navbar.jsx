import { AiOutlineFilePdf } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdHome } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-black shadow-md">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <h1 className="text-white text-3xl sm:text-xl font-bold flex items-center space-x-2">
              Hey, It's Harshil!
            </h1>
          </div>
          <a href="https://drive.google.com/file/d/1e0wb8G42zwGOxhMFeaTcqrsTwMbQ5uhi/view?usp=drive_link" download className="bg-red-900 text-white py-1 px-2 sm:py-2 sm:px-3 rounded-md font-semibold hover:bg-gray-200">
            Get My Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
