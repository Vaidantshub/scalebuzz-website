import React, { useState, useEffect } from 'react';
import { PROJECTS, Project } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';
import DepthCarousel from './DepthCarousel';
import BlurTextAnimation from '@/components/ui/blur-text-animation';

interface WorkSectionProps {
  onOpenModal: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All', 'Corporate', 'E-Commerce', 'Web Apps', 'Landing Pages'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              02 — SELECTED WORK
            </span>
            <BlurTextAnimation
              text="BUILT FOR THE REAL WORLD"
              fontSize="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter"
              textColor="text-white"
              animationDelay={5000}
              containerClassName="text-left"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveProjectIndex(0); // Reset index when category changes
                }}
                className={`px-4 py-2 rounded-sm text-xs font-mono tracking-wider transition-all uppercase ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-950 font-bold border border-white'
                    : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative mt-8">
          <div style={{ height: windowWidth < 768 ? '360px' : '520px', position: 'relative' }}>
            <DepthCarousel
              items={filteredProjects.map(p => ({ image: p.image, alt: p.title }))}
              visibleCards={windowWidth < 768 ? 2 : 3}
              cardWidth={windowWidth < 768 ? Math.min(330, windowWidth * 0.85) : 560}
              cardHeight={windowWidth < 768 ? 210 : 340}
              depth={200}
              spread={120}
              tilt={18}
              tiltDirection="right"
              perspective={1400}
              falloff={0.2}
              blur={4}
              autoplay={false}
              loop={true}
              onChange={(index: number) => setActiveProjectIndex(index)}
            />
          </div>

          {/* Active Project Details Overlay / Footer */}
          {filteredProjects[activeProjectIndex] && (
            <div className="max-w-3xl mx-auto mt-8 text-center flex flex-col items-center">
              <span className="text-xs font-mono text-zinc-400 block uppercase tracking-wider mb-2">
                {filteredProjects[activeProjectIndex].industry} • {filteredProjects[activeProjectIndex].category}
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                {filteredProjects[activeProjectIndex].title}
              </h3>
              <p className="text-sm text-zinc-400 font-sans max-w-lg mb-6">
                {filteredProjects[activeProjectIndex].tagline}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => onOpenModal(filteredProjects[activeProjectIndex])}
                  className="px-6 py-3 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
                >
                  VIEW FULL CASE STUDY
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                {filteredProjects[activeProjectIndex].liveUrl && (
                  <a
                    href={filteredProjects[activeProjectIndex].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 text-white border border-white/20 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white/20 transition-colors inline-flex items-center gap-2"
                  >
                    VISIT LIVE WEBSITE
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
