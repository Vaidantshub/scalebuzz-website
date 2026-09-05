import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block">
              06 — ABOUT SCALEBUZZ
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95] font-sans">
              WE'RE NOT HERE <br />
              TO MAKE ANOTHER <br />
              <span className="text-zinc-500">GENERIC WEBSITE.</span>
            </h2>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 font-sans text-base leading-relaxed">
            <p className="text-xl text-white font-semibold leading-snug">
              "ScaleBuzz exists to help businesses, founders and brands turn ambitious ideas into strong, high-performance digital experiences."
            </p>
            <p>
              Most agency websites suffer from one of two flaws: either they look visually impressive but load terribly slow and confuse customers, or they are built on rigid, bloated templates that look identical to every competitor.
            </p>
            <p>
              We founded ScaleBuzz to bridges that exact gap. We combine high-contrast editorial UI design with custom, production-grade web engineering. No bloated page builders, no template shortcuts, no fake awards. Just clean architecture, transparent communication, and software built to last.
            </p>

            {/* Studio Standards List */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-zinc-950 rounded border border-white/5 space-y-1">
                <span className="text-white uppercase font-bold block">OUR PHILOSOPHY</span>
                <p className="text-zinc-400 font-sans">Design, code, and business objectives working together from day one.</p>
              </div>
              <div className="p-4 bg-zinc-950 rounded border border-white/5 space-y-1">
                <span className="text-white uppercase font-bold block">OUR STANDARD</span>
                <p className="text-zinc-400 font-sans">Sub-second page speeds, clean semantic code, WCAG accessibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
