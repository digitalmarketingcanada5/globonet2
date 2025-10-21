import React from 'react';

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#111111] p-8 rounded-xl border border-gray-800 hover:border-lime-400 hover:scale-105 transition-all duration-300">
      <div className="text-lime-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
