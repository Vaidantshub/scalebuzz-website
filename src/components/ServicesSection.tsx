import React from 'react';
import FlowingMenu from './ui/FlowingMenu';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              01 — WHAT WE DO
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none">
              FROM IDEA <br />
              <span className="text-zinc-500">TO LAUNCH.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md mt-6 md:mt-0 leading-relaxed">
            We focus on core digital services where design, engineering, and business strategy intersect to produce high-impact outcomes.
          </p>
        </div>

        {/* Section Header ends here */}
      </div>

      {/* FlowingMenu — interactive service showcase */}
      <div style={{ height: '420px', position: 'relative' }}>
        <FlowingMenu
          items={[
            {
              link: '#services',
              text: 'Website Development',
              image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&h=400&fit=crop&sat=-30&auto=format',
            },
            {
              link: '#services',
              text: 'E-Commerce',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=400&fit=crop&sat=-30&auto=format',
            },
            {
              link: '#services',
              text: 'UI / UX Design',
              image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&h=400&fit=crop&sat=-30&auto=format',
            },
            {
              link: '#services',
              text: 'Growth & Optimization',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop&sat=-30&auto=format',
            },
          ]}
          speed={12}
          bgColor="#09090b"
          textColor="#ffffff"
          marqueeBgColor="#dc2626"
          marqueeTextColor="#ffffff"
          borderColor="rgba(255,255,255,0.08)"
        />
      </div>
    </section>
  );
};
