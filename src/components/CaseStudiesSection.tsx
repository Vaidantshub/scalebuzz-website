import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SplitText } from './SplitText';

interface CaseStudiesSectionProps {
  onStartProject: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
            PERFORMANCE & QUALITATIVE ANALYSIS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
            <SplitText text="NOT JUST PRETTY." animationType="word" delay={0.1} /> <br />
            <span className="text-zinc-500">
              <SplitText text="BUILT TO PERFORM." animationType="word" delay={0.1} />
            </span>
          </h2>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-zinc-900/60 border border-white/10 rounded-sm p-6 sm:p-10 hover:border-white/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                  CASE STUDY 0{idx + 1} — {cs.industry}
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {cs.client}
                </h3>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  "{cs.headline}"
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">THE CHALLENGE</h4>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">OUR APPROACH</h4>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{cs.approach}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-400">THE BUILD</h4>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">{cs.build}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-white">QUALITATIVE OUTCOMES</h4>
                  <ul className="space-y-1.5">
                    {cs.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-center space-x-2 text-xs text-white font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 text-center pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-mono text-zinc-400">
            Want to see similar performance results for your platform?
          </span>
          <button
            onClick={onStartProject}
            className="px-6 py-3 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            START A PROJECT
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
