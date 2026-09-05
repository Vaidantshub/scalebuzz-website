import React from 'react';
import { ShieldCheck, Zap, Target, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% CUSTOM CODE',
      subtitle: 'Zero bloated themes or slow page builders'
    },
    {
      icon: Zap,
      title: 'SUB-SECOND SPEED',
      subtitle: 'Engineered for top Core Web Vitals'
    },
    {
      icon: Target,
      title: 'CONVERSION UX',
      subtitle: 'Structured around real customer journeys'
    },
    {
      icon: Layers,
      title: 'SCALABLE STACK',
      subtitle: 'Modern TypeScript & Next.js architecture'
    }
  ];

  return (
    <section className="bg-transparent border-b border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Horizontal Editorial Equation */}
        <div className="border-b border-white/10 pb-12 mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 font-mono text-sm md:text-base font-bold tracking-wider text-zinc-400 uppercase mb-6">
            <span className="text-white">DESIGN</span>
            <span className="text-zinc-500">+</span>
            <span className="text-white">DEVELOPMENT</span>
            <span className="text-zinc-500">+</span>
            <span className="text-white">PERFORMANCE</span>
            <span className="text-zinc-500">=</span>
            <span className="text-white bg-white/5 px-3 py-1 border border-white/10 rounded-sm">
              DIGITAL EXPERIENCES
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl leading-snug">
            "We don't just make websites look good. <br className="hidden sm:inline" />
            We build them to work."
          </h2>
        </div>

        {/* 4 Engineering Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 p-4 rounded-sm bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-colors duration-200"
              >
                <div className="p-2.5 rounded-sm bg-white/5 border border-white/10 text-white shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
