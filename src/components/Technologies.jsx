import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { FaNodeJs, FaJava } from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 sm:pb-12 lg:pb-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">My Tech Stack</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 sm:p-6 flex items-center justify-center">
          <RiReactjsLine className="text-5xl sm:text-6xl md:text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 sm:p-6 flex items-center justify-center">
          <DiPython className="text-5xl sm:text-6xl md:text-7xl text-black" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 sm:p-6 flex items-center justify-center">
          <FaNodeJs className="text-5xl sm:text-6xl md:text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 sm:p-6 flex items-center justify-center">
          <SiMysql className="text-5xl sm:text-6xl md:text-7xl text-[#00758F]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 sm:p-6 flex items-center justify-center">
          <FaJava className="text-5xl sm:text-6xl md:text-7xl text-[#007396]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
