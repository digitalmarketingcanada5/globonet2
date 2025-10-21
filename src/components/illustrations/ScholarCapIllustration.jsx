import React from 'react';

export const ScholarCapIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 600 400" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCapTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#BEF264' }} />
          <stop offset="100%" style={{ stopColor: '#34D399' }} />
        </linearGradient>
        <linearGradient id="gradCapBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#374151' }} />
          <stop offset="100%" style={{ stopColor: '#111827' }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="shadowBlur" />
          <feOffset dx="0" dy="10" in="shadowBlur" result="shadowOffset" />
          <feComponentTransfer in="shadowOffset" result="shadowOpacity">
            <feFuncA type="linear" slope="0.5"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadowOpacity" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="120" fill="#BEF264" opacity="0.05" filter="url(#glow)" />
      <circle cx="480" cy="250" r="100" fill="#34D399" opacity="0.05" filter="url(#glow)" />
      <g filter="url(#shadow)" transform="translate(0, -20)">
        <path d="M170 200 C 170 290, 430 290, 430 200 C 400 190, 200 190, 170 200 Z" fill="url(#gradCapBase)" />
        <path d="M300, 80 L580, 150 L300, 220 L20, 150 Z" fill="url(#gradCapTop)" />
        <circle cx="300" cy="150" r="12" fill="#FBBF24" />
        <path d="M300 150 C 350 170, 450 170, 460, 220" stroke="#FCD34D" strokeWidth="4" fill="none" strokeLinecap="round" />
        <g stroke="#FCD34D" strokeWidth="4" strokeLinecap="round">
          <path d="M460 220 L 450 240" />
          <path d="M460 220 L 460 245" />
          <path d="M460 220 L 470 240" />
        </g>
      </g>
    </svg>
  </div>
);
