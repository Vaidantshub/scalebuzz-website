import React from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { openWhatsAppInquiry, WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'SERVICES', id: 'services' },
    { label: 'PROCESS', id: 'process' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <footer className="bg-transparent text-zinc-400 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-extrabold tracking-tighter text-white font-sans block">
              SCALEBUZZ
            </span>
            <p className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              WE DESIGN. WE DEVELOP. WE BUILD.
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              High-performance websites and custom digital experiences engineered for ambitious brands and growing businesses.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-white uppercase transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
              DIRECT CONTACT & SOCIALS
            </span>
            <div className="space-y-2 text-xs font-mono text-zinc-300">
              <p className="flex items-center gap-2">
                <span className="text-zinc-500">WhatsApp:</span>
                <button
                  onClick={() => openWhatsAppInquiry()}
                  className="text-emerald-400 font-bold underline hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  {WHATSAPP_DISPLAY}
                </button>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">Email:</span>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white underline hover:text-zinc-300 transition-colors">
                  {EMAIL_ADDRESS}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-zinc-500">Instagram:</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-zinc-300 transition-colors">
                  {INSTAGRAM_HANDLE}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © 2026 SCALEBUZZ. All rights reserved. • Privacy Policy • Terms of Service
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-zinc-300 hover:text-white uppercase transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};
