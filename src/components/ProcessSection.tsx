import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Check, Clock, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              03 — OUR PROCESS
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
              SIMPLE PROCESS. <br />
              <span className="text-zinc-500">SERIOUS EXECUTION.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md mt-6 md:mt-0 leading-relaxed">
            A structured, 5-stage engineering timeline built to eliminate guesswork, keep communication transparent, and deliver on target.
          </p>
        </div>

        {/* Timeline Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-sm border text-left transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#121215] border-white text-white shadow-xl'
                    : 'bg-zinc-900/30 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-base font-extrabold tracking-tight uppercase">
                  {step.title}
                </h3>

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Display Panel */}
        <div className="bg-[#121215] border border-white/10 rounded-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white uppercase tracking-wider mb-4">
                STAGE {PROCESS_STEPS[activeStep].number} OF 05 — {PROCESS_STEPS[activeStep].duration}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-3">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-base text-zinc-300 font-sans leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 border border-white/10 rounded-sm text-xs font-mono text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed uppercase"
              >
                ← PREV STEP
              </button>
              <button
                disabled={activeStep === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStep(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-4 py-2 bg-white text-zinc-950 font-bold rounded-sm text-xs font-mono hover:bg-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed uppercase inline-flex items-center gap-1"
              >
                NEXT STEP <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-zinc-950/80 p-6 sm:p-8 rounded-sm border border-white/10 space-y-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
              KEY DELIVERABLES:
            </span>
            <div className="space-y-3">
              {PROCESS_STEPS[activeStep].deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-3 text-sm text-zinc-200">
                  <span className="p-1 rounded-full bg-white/10 text-white">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-sans font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
