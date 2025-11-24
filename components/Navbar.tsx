"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight text-textMain">
              Riyasudeen <span className="text-accent">Farook</span>
            </div>
            <span className="text-xs text-textMuted tracking-wide">IT Operations Manager</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Note: Theme toggle removed to enforce Dark Mode */}

            <div className="flex items-center bg-slate-800 rounded-full p-1 border border-white/10">
                <span className="px-3 py-1 rounded-full bg-accent text-slate-900 text-xs font-bold cursor-default">En</span>
                <a href="#" className="px-3 py-1 rounded-full text-textMuted text-xs font-medium hover:text-white transition" title="Arabic version coming soon">Ar</a>
            </div>

            <div className="h-4 w-px bg-gray-700"></div>

            <a href="https://linkedin.com/in/riyasudeen-p-m/" target="_blank" className="text-textMuted hover:text-[#0077b5] transition transform hover:scale-110"><i className="fab fa-linkedin fa-lg"></i></a>
            <a href="https://github.com/riyas22" target="_blank" className="text-textMuted hover:text-textMain transition transform hover:scale-110"><i className="fab fa-github fa-lg"></i></a>
            <a href="mailto:uriyas22@gmail.com" className="bg-white/10 hover:bg-accent hover:text-primary text-textMain px-4 py-2 rounded-lg text-sm font-medium transition duration-300 border border-white/5">
              Email Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textMuted hover:text-textMain focus:outline-none"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4 border-t border-white/5 pt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg mb-4">
              <span className="text-sm text-textMuted">Language</span>
              <div className="flex items-center bg-slate-800 rounded-full p-1 border border-white/10">
                  <span className="px-3 py-1 rounded-full bg-accent text-slate-900 text-xs font-bold">En</span>
                  <span className="px-3 py-1 text-textMuted text-xs">Ar</span>
              </div>
          </div>
          <a href="https://linkedin.com/in/riyasudeen-p-m/" target="_blank" className="flex items-center gap-3 text-textMuted hover:text-textMain p-2">
            <i className="fab fa-linkedin fa-lg w-6"></i> LinkedIn Profile
          </a>
          <a href="https://github.com/riyas22" target="_blank" className="flex items-center gap-3 text-textMuted hover:text-textMain p-2">
            <i className="fab fa-github fa-lg w-6"></i> GitHub Profile
          </a>
          <a href="mailto:uriyas22@gmail.com" className="block text-center w-full bg-accent text-primary font-bold py-3 rounded-lg mt-2">
            Email Me
          </a>
        </div>
      </div>
    </nav>
  );
}