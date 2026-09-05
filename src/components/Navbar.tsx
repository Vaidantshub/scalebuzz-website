import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onStartProject: (projectType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'SERVICES', id: 'services' },
    { label: 'PROCESS', id: 'process' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group focus:outline-none"
            aria-label="ScaleBuzz Home"
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white font-sans flex items-center gap-1.5">
              SCALEBUZZ
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block group-hover:scale-125 transition-transform duration-200" />
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Desktop Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-xs font-mono font-semibold tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 uppercase py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => onStartProject()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white text-zinc-950 font-sans font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-200 group active:scale-95 shadow-md"
            >
              START A PROJECT
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#09090b] flex flex-col justify-between p-8 md:hidden animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-xl font-extrabold tracking-tighter text-white">SCALEBUZZ</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-3xl font-extrabold tracking-tight text-zinc-200 hover:text-white transition-colors duration-200 flex items-center justify-between group"
              >
                <span>0{idx + 1} — {link.label}</span>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-4 bg-white text-zinc-950 font-bold text-sm tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs font-mono text-zinc-500">
              hello@scalebuzz.dev • © 2026 SCALEBUZZ
            </p>
          </div>
        </div>
      )}
    </>
  );
};
