import React from 'react';

export const PrincipleItem = ({ title, description }) => {
  return (
    <div className="border-t border-gray-800 pt-8">
      <h3 className="text-2xl font-bold text-lime-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
