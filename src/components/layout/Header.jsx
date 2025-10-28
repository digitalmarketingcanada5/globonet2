'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from '../icons';
import { navLinks } from '@/data/constants';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between py-6 border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight cursor-pointer hover:text-lime-400 transition-colors">
              Globonet Education Consulting
            </h1>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link === 'Certificates') {
              return (
                <Link 
                  key={link}
                  href="/certificates"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </Link>
              );
            }
            return (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            );
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-400 hover:text-white transition-colors z-50" 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <MenuIcon />
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-[#111111] border-l border-gray-800 z-40 lg:hidden shadow-2xl">
            <nav className="flex flex-col p-8 space-y-6 mt-20">
              {navLinks.map((link) => {
                if (link === 'Certificates') {
                  return (
                    <Link 
                      key={link}
                      href="/certificates"
                      onClick={closeMobileMenu}
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-lg font-medium"
                    >
                      {link}
                    </Link>
                  );
                }
                return (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-lg font-medium"
                  >
                    {link}
                  </a>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
};
