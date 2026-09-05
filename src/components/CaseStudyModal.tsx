import React from 'react';
import { Project } from '../data/agencyData';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { PixelReveal } from './PixelReveal';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (projectType?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      <div
        className="bg-[#121215] border border-white/15 rounded-md w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-zinc-200 scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#121215]/95 border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
              {project.category}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400 uppercase">
              {project.industry}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:border-white text-zinc-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Content */}
        <div className="p-6 md:p-10 space-y-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="rounded-sm border border-white/10 overflow-hidden bg-[#121215] aspect-[16/9] relative">
            <PixelReveal 
              src={project.image} 
              alt={project.title} 
              gridSize={16} 
              delay={0.1} 
              className="w-full h-full absolute inset-0"
            />
            <div className="absolute bottom-4 right-4 bg-zinc-950/90 border border-white/10 px-4 py-2 rounded-sm text-xs font-mono text-zinc-300 backdrop-blur-md">
              DESIGN + BUILD BY SCALEBUZZ
            </div>
          </div>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2">TECH STACK:</span>
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Challenge & Approach Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white">
                <ShieldCheck className="w-4 h-4 text-white" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">THE CHALLENGE</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white">
                <Layers className="w-4 h-4 text-white" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">OUR APPROACH</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Build Details */}
          <div className="border-t border-white/10 pt-8 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Cpu className="w-4 h-4 text-white" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">TECHNICAL EXECUTION</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.buildDetails.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-zinc-300 bg-zinc-950/40 p-3 rounded border border-white/5">
                  <span className="text-white mt-0.5">•</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualitative Results */}
          <div className="border-t border-white/10 pt-8 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              QUALITATIVE OUTCOMES & IMPACT
            </h3>
            <div className="space-y-2">
              {project.qualitativeResults.map((result, rIdx) => (
                <div key={rIdx} className="flex items-center space-x-3 text-sm text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 font-mono">
              Interested in a similar build for your brand?
            </p>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 bg-white/10 text-white border border-white/20 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  VISIT LIVE SITE
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              )}
              <button
                onClick={() => {
                  onClose();
                  onStartProject(project.category);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                START A PROJECT LIKE THIS
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
