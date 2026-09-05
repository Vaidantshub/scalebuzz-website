import React from 'react';
import { TEAM } from '../data/agencyData';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              THE TEAM BEHIND THE BUILD
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
              DIRECTOR-LED <br />
              <span className="text-zinc-500">EXECUTION.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md mt-6 md:mt-0 leading-relaxed">
            You work directly with senior architects and engineers who design and write the code. No middle managers or junior handoffs.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-[#121215] border border-white/10 hover:border-white/25 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-zinc-950 border border-white/15 flex items-center justify-center font-mono font-extrabold text-white text-lg">
                    {member.initials}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    CORE LEAD 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-sans">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                <span className="block text-[9px] text-zinc-500 uppercase mb-1">FOCUS AREA:</span>
                {member.specialty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
