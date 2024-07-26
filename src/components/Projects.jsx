import React from 'react';
import keyValue from "../assets/keyValue.jpg";
import emailSpam from "../assets/emailSpam.png";
import myCalc from "../assets/myCalc.jpg";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <section className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          <a 
            href="https://github.com/harshil-hsj/Key-Value"
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${keyValue})` }}
          >
            <div className="h-full absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Key-Value</h3>
              <p className="text-lg text-white">Developed a secure password manager using React for the front-end and MySQL for the back-end, enabling users to store and manage their passwords efficiently.</p>
            </div>
          </a>
          <a 
            href="https://github.com/harshil-hsj/spam-detector"
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${emailSpam})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Email-Spam-Detector</h3>
              <p className="text-lg text-white">Developed an email spam detector with PyCharm as the IDE, utilizing machine learning algorithms to achieve high accuracy in identifying and filtering spam emails.</p>
            </div>
          </a>
          <a 
            href="https://github.com/harshil-hsj/calculator"
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${myCalc})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">My Calculator</h3>
              <p className="text-lg text-white">Developed a basic calculator app using Android Studio and Java, featuring essential arithmetic operations such as addition, subtraction, multiplication, and division, with a user-friendly interface.</p>
            </div>
          </a>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <a 
            href="https://github.com/harshil-hsj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl text-gray-600 hover:text-gray-800"
          >
            <p className="mr-2">For more of my projects</p>
            <FaGithub size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
