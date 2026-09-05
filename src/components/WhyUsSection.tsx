import React from 'react';
import { PRINCIPLES } from '../data/agencyData';
import { Check, X } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Codebase Architecture',
      scalebuzz: 'Custom clean TypeScript & Next.js built for your exact specs',
      traditional: 'Bloated third-party theme builders with 50+ unnecessary plugins'
    },
    {
      feature: 'Page Speed & Vitals',
      scalebuzz: 'Sub-second load times optimized for 95+ Core Web Vitals',
      traditional: 'Sluggish 4+ second load times causing high bounce rates'
    },
    {
      feature: 'Design System',
      scalebuzz: 'Bespoke editorial typography & layout designed for your brand',
      traditional: 'Generic template layout reused by hundreds of competitors'
    },
    {
      feature: 'Mobile Usability',
      scalebuzz: 'Hand-crafted responsive layout built specifically for handheld UX',
      traditional: 'Awkward automated mobile stacked layout shifts and text overlap'
    }
  ];

  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
            04 — WHY US
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
            WE CARE ABOUT <br />
            <span className="text-zinc-500">THE DETAILS.</span>
          </h2>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PRINCIPLES.map((p) => (
            <div
              key={p.number}
              className="p-8 rounded-sm bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors space-y-4"
            >
              <span className="text-sm font-mono font-bold text-zinc-400">
                {p.number} — PRINCIPLE
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase font-sans">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                {p.tagline}
              </p>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="border border-white/10 rounded-sm bg-zinc-950 overflow-hidden">
          <div className="p-6 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-white uppercase tracking-tight font-sans">
              THE SCALEBUZZ DIFFERENCE
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase hidden sm:inline">
              ENGINEERING MATRIX
            </span>
          </div>

          <div className="divide-y divide-white/10 text-xs sm:text-sm">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center">
                <div className="md:col-span-3 font-mono font-bold text-white uppercase">
                  {item.feature}
                </div>
                <div className="md:col-span-4 flex items-start space-x-2 text-emerald-400">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="font-sans">{item.scalebuzz}</span>
                </div>
                <div className="md:col-span-5 flex items-start space-x-2 text-zinc-500">
                  <X className="w-4 h-4 shrink-0 mt-0.5 text-rose-500/70" />
                  <span className="font-sans line-through">{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
