import React from 'react';

interface SopepriLogoProps {
  showText?: boolean;
  showSlogan?: boolean;
  theme?: 'light' | 'dark'; // 'light' is dark text on light bg, 'dark' is white text on dark bg
  symbolClassName?: string;
  className?: string;
  language?: 'pt' | 'en';
}

export default function SopepriLogo({
  showText = true,
  showSlogan = true,
  theme = 'dark',
  symbolClassName = 'w-9 h-9',
  className = '',
  language = 'pt',
}: SopepriLogoProps) {
  // Brand colors matching the uploaded logo:
  // - Top & Bottom Wave: Deep Blue Gradients
  // - Dark Text (Light Theme): Deep Navy (#0a3054 or slate-950)
  // - Light Text (Dark Theme): White / slate-100
  const isDarkTheme = theme === 'dark';
  
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Dynamic SVG Symbol */}
      <svg
        viewBox="0 0 110 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${symbolClassName} shrink-0 transition-transform duration-300 hover:scale-105`}
      >
        <defs>
          {/* Main blue-to-navy gradient for the shapes */}
          <linearGradient id="sopepri-grad-1" x1="17" y1="10" x2="93" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0072bc" />
            <stop offset="50%" stopColor="#004d80" />
            <stop offset="100%" stopColor="#07294d" />
          </linearGradient>
          
          <linearGradient id="sopepri-grad-2" x1="43" y1="10" x2="93" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#008ce3" />
            <stop offset="60%" stopColor="#005d96" />
            <stop offset="100%" stopColor="#003559" />
          </linearGradient>

          <linearGradient id="sopepri-grad-3" x1="17" y1="35" x2="67" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#005a94" />
            <stop offset="50%" stopColor="#003559" />
            <stop offset="100%" stopColor="#001d33" />
          </linearGradient>
        </defs>

        {/* 1. Top-Right Dome */}
        <path
          d="M 45,38 H 95 A 25,25 0 0 0 45,38 Z"
          fill="url(#sopepri-grad-2)"
        />

        {/* 2. Bottom-Left Cup */}
        <path
          d="M 15,38 H 65 A 25,25 0 0 1 15,38 Z"
          fill="url(#sopepri-grad-3)"
        />

        {/* 3. Bottom-Right crescent shape */}
        <path
          d="M 72,38 H 91 C 91,45 88,51 83,55 C 78,59 71,59 65,55 C 69,51 72,45 72,38 Z"
          fill="url(#sopepri-grad-1)"
        />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center text-left leading-none">
          <div className="flex items-baseline space-x-0.5">
            <span
              className={`text-xl font-extrabold tracking-tight font-sans ${
                isDarkTheme ? 'text-white' : 'text-[#062c4e]'
              }`}
            >
              Sopepri
            </span>
            <span className="w-1 h-1 bg-[#008ce3] rounded-full"></span>
          </div>
          {showSlogan && (
            <span
              className={`text-[8px] font-bold uppercase tracking-[0.14em] mt-1 ${
                isDarkTheme ? 'text-slate-300' : 'text-[#0b3861]'
              }`}
            >
              {language === 'pt' ? 'Engrandecemos o seu Futuro' : 'Enriching your Future'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
