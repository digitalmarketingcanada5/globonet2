import React from 'react';
import { ScholarCapIllustration } from '../illustrations/ScholarCapIllustration';

export const HeroSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
        <p className="text-lime-400 font-bold tracking-widest">STUDENT DREAM STUDY ABROAD</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
          Globonet Education Consulting
        </h1>
        <p className="text-lg font-semibold">
          Professional Student Consulting: <span className="text-gray-400">STUDY WORK VISIT SETTLE</span>
        </p>
        <p className="max-w-xl text-gray-400 text-md">
          Welcome to Globonet Education Consulting, the premier student consultancy agency in Sylhet, Bangladesh. 
          We are committed to assisting students in achieving their aspirations of studying abroad. With a 
          demonstrated history of success and a dedication to quality, Globonet Education consulting stands as 
          your trusted partner for a successful study abroad experience.
        </p>
        <button className="bg-lime-400 text-black font-bold px-10 py-4 rounded-lg text-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(190,242,100,0.5)]">
          Get a free quote
        </button>
      </div>
      <div className="w-full h-80 lg:h-[500px]">
        <ScholarCapIllustration />
      </div>
    </section>
  );
};
