import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/agencyData';
import LegoOnboarding from './LegoOnboarding';
import { Layers, Grid } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'lego' | 'grid'>('lego');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Workflow'];

  const filteredTech = selectedCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category === selectedCategory);

  return (
    <section id="technology" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              05 — TECHNOLOGY
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
              BUILT WITH <br />
              <span className="text-zinc-500">MODERN TECHNOLOGY.</span>
            </h2>
          </div>

          {/* View Mode & Category Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-sm">
              <button
                onClick={() => setViewMode('lego')}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  viewMode === 'lego'
                    ? 'bg-white text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                3D LEGO BUILDER
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                STACK MATRIX
              </button>
            </div>

            {viewMode === 'grid' && (
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-sm text-xs font-mono tracking-wider uppercase transition-all ${
                      selectedCategory === cat
                        ? 'bg-white text-zinc-950 font-bold'
                        : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Display Area */}
        {viewMode === 'lego' ? (
          <div className="rounded-md border border-white/10 bg-[#121215] shadow-2xl p-2 sm:p-6 overflow-hidden">
            <LegoOnboarding />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredTech.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#121215] border border-white/10 hover:border-white/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">
                      {tech.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:translate-x-1 transition-transform mb-2 font-sans">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-zinc-500 uppercase">
                  {tech.experienceYears}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
