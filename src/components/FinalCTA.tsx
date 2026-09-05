import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-24 bg-transparent border-b border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block">
          TAKE THE NEXT STEP
        </span>

        <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
          READY TO BUILD <br />
          <span className="text-zinc-500">SOMETHING BETTER?</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-xl mx-auto leading-relaxed">
          "Let's turn your idea into a digital experience people remember."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartProject}
            className="px-8 py-4 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            START A PROJECT
            <ArrowUpRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="mailto:hello@scalebuzz.dev"
            className="px-8 py-4 bg-transparent border border-white/20 text-zinc-200 font-bold text-xs tracking-wider uppercase rounded-sm hover:border-white hover:text-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            EMAIL US
          </a>
        </div>
      </div>
    </section>
  );
};
