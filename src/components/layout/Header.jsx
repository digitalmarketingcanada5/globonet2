'use client';

import React from 'react';
import Image from 'next/image';
import { MenuIcon } from '../icons';
import { navLinks } from '@/data/constants';

export const Header = () => {

  return (
    <header className="flex items-center justify-between py-6 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <Image 
          src="/images/logo.png" 
          alt="Globonet Education Logo" 
          width={50} 
          height={50}
          className="object-contain"
        />
        <div className="text-2xl font-bold tracking-wider">
          Globonet Education
        </div>
      </div>
      <nav className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </nav>
      <button className="lg:hidden text-gray-400" aria-label="Toggle menu">
        <MenuIcon />
      </button>
    </header>
  );
};
