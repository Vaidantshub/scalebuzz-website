import React from 'react';
import { ArrowUpRight, Target, Zap, Rocket, Users, ShieldAlert, Award } from 'lucide-react';

interface LandingPageSectionProps {
  onStartLandingPage: () => void;
}

export const LandingPageSection: React.FC<LandingPageSectionProps> = ({ onStartLandingPage }) => {
  const landingTypes = [
    { title: 'LEAD GENERATION', icon: Target, desc: 'High-intent forms designed to capture qualified business leads.' },
    { title: 'PRODUCT LAUNCH', icon: Rocket, desc: 'Position new products with crisp visual storytelling & immediate CTAs.' },
    { title: 'SAAS PLATFORM', icon: Zap, desc: 'Clear feature grids, transparent pricing tables & trial conversions.' },
    { title: 'CAMPAIGNS & ADS', icon: Users, desc: 'Dedicated landing destinations matching ad copy to boost conversion.' },
    { title: 'WAITLIST & BETA', icon: Award, desc: 'Build momentum for upcoming apps with viral waitlist mechanics.' },
    { title: 'SPECIAL OFFERS', icon: ShieldAlert, desc: 'Time-sensitive campaign pages engineered for high response rates.' }
  ];

  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              CONVERSION-FOCUSED LANDING PAGES
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
              ONE PAGE. <br />
              <span className="text-zinc-500">ONE GOAL.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md mt-6 md:mt-0 leading-relaxed">
            ScaleBuzz designs and develops single-purpose landing pages stripped of distractions, focused strictly on converting visitors into leads, signups, or customers.
          </p>
        </div>

        {/* Landing Page Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {landingTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#121215] border border-white/10 hover:border-white/30 transition-all duration-200 space-y-3 group"
              >
                <div className="flex items-center justify-between text-white">
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight uppercase group-hover:translate-x-1 transition-transform font-sans">
                  {type.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {type.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-sm bg-[#121215] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-1 font-sans">
              NEED A HIGH-CONVERTING LANDING PAGE?
            </h3>
            <p className="text-xs text-zinc-400 font-sans">
              Launch in as little as 2 to 3 weeks with custom Next.js code.
            </p>
          </div>

          <button
            onClick={onStartLandingPage}
            className="px-6 py-3.5 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-all flex items-center gap-2 shrink-0"
          >
            BUILD A LANDING PAGE
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
