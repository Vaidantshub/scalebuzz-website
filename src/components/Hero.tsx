import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MarqueeDemo } from '@/components/ui/marquee-demo';
import GooeyNav from './GooeyNav';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
  onOpenProjectModal?: (projectId: string) => void;
  onNavigate?: (sectionId: string) => void;
}

const gooeyItems = [
  { label: 'Work', sectionId: 'work' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Process', sectionId: 'process' },
  { label: 'About', sectionId: 'about' },
  { label: 'Contact', sectionId: 'contact' },
];

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork, onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-44 md:pb-24 border-b border-white/10 bg-transparent text-white overflow-hidden"
    >
      {/* Central Translucent Crimson Radial Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] rounded-full bg-[#8b1022]/25 blur-[110px] pointer-events-none" />

      {/* Concentric Radial Ring Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[700px] sm:h-[700px] rounded-full border border-red-500/10 pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full border border-red-500/15 pointer-events-none" />

      {/* Grid Pattern Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Pure Original 3D Floating Icon Badges (NO Text, Pure High-Res Official Brand Logos) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 min-h-[540px] flex flex-col justify-center items-center text-center">
        
        {/* Floating Logo 1: Swift (Top-Left) */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-16 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(250,115,67,0.25)] animate-float-1 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#FA7343] group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M19.8 14.8c-.8.8-2.6.4-3.5 0-1.4-.6-2.5-1.9-3.7-3-.4.8-1 1.7-1.8 2.3-1.6 1.4-3.8 2-5.8 1.4 3 .8 6.5.1 8.8-1.9-2.3.4-4.8-.1-6.8-1.4 3.7.8 7.6-.8 9.3-4.1.3.9.7 1.9 1.1 2.8.9 2 2.7 3.3 2.5 3.9zm.2-13.8c-1.8.8-3.7 1.8-5.2 3.1-1.6 1.3-3 2.9-4.1 4.7-.6.9-1.2 1.9-1.6 3 2.4-1.9 5.3-3.1 8.3-3.7-.6 2.3-2.1 4.3-4.1 5.6 2.6-.2 5-1.3 6.9-3.1-1 2.5-3 4.5-5.5 5.6 3.1-.3 6.1-1.7 8.2-4.1 1.2-1.4 2-3 2.3-4.8.4-1.7-.1-3.6-1.1-5.1-1.1-1.3-2.6-2-4.1-1.3z"/>
          </svg>
        </div>

        {/* Floating Logo 2: Google Official (Top-Left 2) */}
        <div className="absolute top-24 sm:top-28 -left-2 lg:left-12 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(66,133,244,0.25)] animate-float-2 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>

        {/* Floating Logo 3: HTML5 (Top-Right) */}
        <div className="absolute top-4 sm:top-8 right-2 sm:right-20 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(227,79,38,0.25)] animate-float-3 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#E34F26] group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.056.002.67 7.954h8.805l-.366 4.063-2.642.714-2.644-.714-.17-1.896H6.602l.334 4.197 5.034 1.394 5.034-1.394.67-7.982H8.531z"/>
          </svg>
        </div>

        {/* Floating Logo 4: Angular (Mid-Left) */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-10 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(221,0,49,0.25)] animate-float-2 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#DD0031] group-hover:-rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M12 0L1.75 3.639l1.562 13.541L12 24l8.688-6.82 1.562-13.541L12 0zm0 3.844l5.375 12.012H14.88l-1.078-2.69h-3.604l-1.078 2.69H6.625L12 3.844zm-1.258 7.32h2.516L12 7.973l-1.258 3.191z"/>
          </svg>
        </div>

        {/* Floating Logo 5: Java (Mid-Right) */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:right-12 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(83,130,161,0.25)] animate-float-1 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#5382A1] group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
            <path d="M7.747 18.23s-1.05.698 1.492.932c3.082.285 5.568.252 8.441-.285 0 0 .973.535-1.57.874-4.873.65-10.74-.23-8.363-1.521m-1.04-2.827s-1.236.93 1.258 1.157c3.344.305 6.643.272 9.878-.291 0 0 .762.463-1.428.847-5.467.962-12.759.088-9.708-1.713m7.743-4.884c.839.957-.222 2.378-.222 2.378s2.138-1.088 1.169-2.612c-.932-1.464-1.644-2.215.932-4.526 0 0-3.527.972-1.879 4.76"/>
          </svg>
        </div>

        {/* Floating Logo 6: React (Lower-Left) */}
        <div className="absolute bottom-16 sm:bottom-12 -left-2 sm:left-24 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(97,218,251,0.25)] animate-float-3 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#61DAFB] animate-spin [animation-duration:12s]" viewBox="0 0 24 24">
            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7.5c-4.47 0-8.52 2.05-10.5 5.5 1.98 3.45 6.03 5.5 10.5 5.5s8.52-2.05 10.5-5.5c-1.98-3.45-6.03-5.5-10.5-5.5z"/>
          </svg>
        </div>

        {/* Floating Logo 7: VS Code (Lower-Right) */}
        <div className="absolute bottom-24 sm:bottom-20 -right-2 sm:right-28 p-2 sm:p-3 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(0,122,204,0.25)] animate-float-2 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-7 h-7 fill-[#007ACC] group-hover:-rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.75.75 0 0 0-.977.06L.263 7.643a.75.75 0 0 0 .046 1.096l3.58 3.1-3.58 3.1a.75.75 0 0 0-.046 1.096l1.684 1.573a.75.75 0 0 0 .977.06l4.12-3.12 9.46 8.63c.487.444 1.2.56 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 19.863V4.137a1.5 1.5 0 0 0-.85-1.55zM18 16.5l-6.5-4.5L18 7.5v9z"/>
          </svg>
        </div>

        {/* Floating Logo 8: CSS3 (Bottom-Left 2) */}
        <div className="absolute bottom-4 sm:bottom-2 left-16 sm:left-36 p-1.5 sm:p-2.5 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(21,114,182,0.25)] animate-float-1 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-6 h-6 fill-[#1572B6] group-hover:rotate-6 transition-transform" viewBox="0 0 24 24">
            <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.056.002.67 7.954h8.805l-.366 4.063-2.642.714-2.644-.714-.17-1.896H6.602l.334 4.197 5.034 1.394 5.034-1.394.67-7.982H8.531z"/>
          </svg>
        </div>

        {/* Floating Logo 9: Figma (Bottom-Right 2) */}
        <div className="absolute bottom-8 sm:bottom-4 right-16 sm:right-48 p-1.5 sm:p-2.5 bg-[#121215]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_10px_25px_rgba(162,89,255,0.25)] animate-float-3 flex scale-[0.6] sm:scale-100 opacity-70 sm:opacity-100 items-center justify-center hover:scale-110 transition-all cursor-pointer group z-0">
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#FF7262"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#1ABCFE"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>

        {/* Main Central Headline */}
        <div className="max-w-4xl space-y-6 pt-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-sans">
            Build Faster, Smarter, <br />
            Scalable <span className="font-serif italic text-[#c92a3e] font-normal tracking-normal">Digital Products</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed">
            From AI-Powered Apps To Pixel-Perfect UX—We Turn Ideas Into High-Performance Solutions.
          </p>

          {/* Dual Pill CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* Primary Burgundy Pill Button */}
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#8b1022] hover:bg-[#a31328] text-white font-semibold text-sm rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
            >
              <span>Let's Connect</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

            {/* Secondary Outline Pill Button */}
            <button
              onClick={onViewWork}
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/20 text-white hover:border-white font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>View Our Cases</span>
              <span className="w-7 h-7 rounded-full bg-white text-zinc-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gooey Section Navigation */}
      <div className="mt-10 flex justify-center">
        <GooeyNav
          items={gooeyItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Marquee Technology Banner */}
      <div className="mt-10">
        <MarqueeDemo />
      </div>
    </section>
  );
};
