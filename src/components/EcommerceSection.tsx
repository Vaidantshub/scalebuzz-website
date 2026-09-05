import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Smartphone, ShieldCheck, Zap, BarChart2, Search } from 'lucide-react';

interface EcommerceSectionProps {
  onStartEcommerce: () => void;
}

export const EcommerceSection: React.FC<EcommerceSectionProps> = ({ onStartEcommerce }) => {
  const [activeTab, setActiveTab] = useState<'discovery' | 'checkout' | 'mobile'>('discovery');

  const features = [
    { title: 'PRODUCT DISCOVERY', icon: Search, desc: 'Instant search, category filters, and fast layout rendering.' },
    { title: 'PRODUCT PAGES', icon: ShoppingBag, desc: 'High-impact typography, crisp gallery views, and clear sizing.' },
    { title: 'MOBILE UX', icon: Smartphone, desc: 'Thumb-friendly navigation, sticky add-to-cart, zero overflow.' },
    { title: 'CHECKOUT UX', icon: ShieldCheck, desc: 'Single-page checkout flows designed to minimize step friction.' },
    { title: 'PERFORMANCE', icon: Zap, desc: 'Sub-second page transitions preventing mobile bounce rates.' },
    { title: 'CONVERSION', icon: BarChart2, desc: 'Optimistic UI updates for instant feedback during shopping.' }
  ];

  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block">
              DEDICATED E-COMMERCE ENGINEERING
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95] font-sans">
              YOUR STORE <br />
              SHOULD SELL. <br />
              <span className="text-zinc-500">NOT JUST EXIST.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              "We build e-commerce experiences that make products easier to discover, understand and buy."
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, fIdx) => {
                const Icon = feat.icon;
                return (
                  <div key={fIdx} className="p-3.5 bg-zinc-900/60 border border-white/10 rounded-sm space-y-1">
                    <div className="flex items-center space-x-2 text-white">
                      <Icon className="w-4 h-4 text-white" />
                      <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={onStartEcommerce}
                className="px-6 py-3.5 bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase rounded-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
              >
                BUILD MY STORE
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right E-Commerce Visual Preview Card */}
          <div className="lg:col-span-6 bg-zinc-950 border border-white/15 rounded-md p-6 shadow-2xl space-y-6">
            {/* Storefront Header Mock */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-sm font-extrabold text-white tracking-widest">
                KROMA ATELIER / STORE
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab('discovery')}
                  className={`px-2.5 py-1 text-[10px] font-mono rounded ${activeTab === 'discovery' ? 'bg-white text-black font-bold' : 'text-zinc-400'}`}
                >
                  DISCOVERY
                </button>
                <button
                  onClick={() => setActiveTab('checkout')}
                  className={`px-2.5 py-1 text-[10px] font-mono rounded ${activeTab === 'checkout' ? 'bg-white text-black font-bold' : 'text-zinc-400'}`}
                >
                  CHECKOUT
                </button>
              </div>
            </div>

            {/* Interactive Preview Content */}
            <div className="aspect-[4/3] rounded bg-zinc-900 border border-white/10 overflow-hidden relative p-4 flex flex-col justify-between">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="E-commerce Preview"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="px-2.5 py-1 bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-emerald-400 uppercase rounded">
                  98/100 Core Web Vitals
                </span>
                <span className="px-2.5 py-1 bg-white text-zinc-950 text-[10px] font-mono font-bold uppercase rounded">
                  Cart (1)
                </span>
              </div>

              <div className="relative z-10 space-y-2 bg-zinc-950/90 backdrop-blur-md p-4 rounded border border-white/10">
                <div className="flex justify-between items-center text-xs font-mono text-white">
                  <span>ATELIER LEATHER JACKET</span>
                  <span className="text-white font-bold">$480.00</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Sub-second optimistic UI cart item addition with zero layout shift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
