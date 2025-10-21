import React from 'react';

export const MissionVisionSection = () => {
  return (
    <section className="py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center border-y border-gray-800">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-lime-400">Our Mission</h2>
        <p className="text-gray-300 text-lg">
          Our vision is to pave the road for students to realize their academic potential and build 
          prosperous, fulfilling careers; we will do this by being the world's preeminent provider of 
          student recruiting, education, and career services.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-lime-400">Our Vision</h2>
        <p className="text-gray-300 text-lg">
          To be a global leader in student recruiting, education, and career services, helping students 
          accomplish their academic goals and build a bright future, while promoting opportunity, progress, 
          and achievement.
        </p>
      </div>
    </section>
  );
};
