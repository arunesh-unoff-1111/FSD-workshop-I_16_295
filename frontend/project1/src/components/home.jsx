import React from 'react';

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-slate-800/60 max-w-7xl mx-auto w-full bg-[#060d19] text-white font-sans">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-cyan-400">
          <svg className="w-7 h-7" viewBox="-11.5 -10.23934 23 20.47868" fill="currentColor">
            <circle cx="0" cy="0" r="2" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">
          React<span className="text-sky-400">Site</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#home" className="text-sky-400 border-b-2 border-sky-400 pb-1">
          Home
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-white transition-colors">
          Services
        </a>
        <a href="#portfolio" className="hover:text-white transition-colors">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;