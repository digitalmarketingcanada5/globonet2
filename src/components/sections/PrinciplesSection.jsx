import React from 'react';
import { PrincipleItem } from '../ui/PrincipleItem';
import { principlesData } from '@/data/constants';

export const PrinciplesSection = () => {
  const principles = principlesData;

  return (
    <section id="principles" className="py-20 lg:py-24 bg-[#111111] rounded-2xl">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-extrabold">Our Principles</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Our commitments form the foundation of our services and student relationships.
        </p>
      </div>
      <div className="space-y-8 px-4 md:px-12">
        {principles.map((principle) => (
          <PrincipleItem 
            key={principle.title}
            title={principle.title}
            description={principle.description}
          />
        ))}
      </div>
    </section>
  );
};
