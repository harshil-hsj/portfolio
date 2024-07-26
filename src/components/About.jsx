import React from 'react';
import image from '../assets/profilePhoto.jpg';

const About = () => {
  return (
    <section className="py-32 px-4 text-black flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Container without max-width constraint */}
      <div className="flex-1 max-w-lg">
        <style>
          {`
            @keyframes colorChange {
              0% {
                color: #3490dc; /* Blue */
              }
              50% {
                color: #38b2ac; /* Teal */
              }
              100% {
                color: #f56565; /* Red */
              }
            }
            
            .animate-color-change {
              animation: colorChange 5s infinite;
            }
          `}
        </style>
        <p className="text-lg text-center md:text-left">
          I am an aspiring software engineer with practical experience in 
          <span className="font-bold text-blue-600 px-1 rounded animate-color-change">
            full-stack web development
          </span> and 
          <span className="font-bold text-green-600 px-1 rounded animate-color-change">
            machine learning
          </span>. 
          I excel at tackling complex challenges and am committed to continuously enhancing my skills. 
          My goal is to leverage my expertise to develop impactful solutions and make meaningful contributions 
          to the tech industry.
        </p>
      </div>

      {/* Image with right margin */}
      
      <img src={image} alt="Profile" className="h-64 w-64 object-cover rounded-full md:ml-8" />
    </section>
  );
};

export default About;
