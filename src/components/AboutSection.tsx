import React from 'react';
import vaidantImg from '../assets/team/vaidant.jpg';
import samarImg from '../assets/team/samar.jpg';
import vaibhavImg from '../assets/team/vaibhav.jpg';

const team = [
  {
    name: 'Vaidant',
    role: 'Founder & CEO',
    img: vaidantImg,
    tagline: 'Vision. Strategy. Execution.',
    socials: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Samar Zayyan',
    role: 'Co-Founder & CTO',
    img: samarImg,
    tagline: 'Code. Architecture. Scale.',
    socials: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Vaibhav Sharma',
    role: 'CMO',
    img: vaibhavImg,
    tagline: 'Brand. Growth. Impact.',
    socials: { twitter: '#', linkedin: '#' },
  },
];

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

        {/* ── TEAM SECTION ── */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
                THE FACES BEHIND SCALEBUZZ
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
                MEET THE <span className="text-zinc-500">TEAM.</span>
              </h3>
            </div>
            <p className="text-sm text-zinc-500 font-mono max-w-sm">
              No middle managers. No junior handoffs. You work directly with the people who build.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {team.map((m, idx) => (
              <div
                key={m.name}
                className="group relative bg-[#0a0a0c] rounded-lg border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
              >
                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Tagline - appears on hover */}
                  <div className="absolute bottom-20 left-0 right-0 px-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
                      {m.tagline}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="relative px-5 pb-5 -mt-12 z-10">
                  <h4 className="text-xl font-extrabold text-white tracking-tight font-sans leading-tight">
                    {m.name}
                  </h4>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mt-1">
                    {m.role}
                  </p>

                  {/* Divider + Social Links */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                    <a
                      href={m.socials.twitter}
                      aria-label={`${m.name} Twitter`}
                      className="text-zinc-600 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={m.socials.linkedin}
                      aria-label={`${m.name} LinkedIn`}
                      className="text-zinc-600 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
