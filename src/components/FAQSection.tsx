import React, { useState } from 'react';
import { FAQS } from '../data/agencyData';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
            QUESTIONS?
          </h2>
          <p className="text-sm text-zinc-400 font-sans mt-4 max-w-xl mx-auto">
            Everything you need to know about partnering with ScaleBuzz on your digital development project.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left flex items-center justify-between gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-zinc-300 transition-colors font-sans">
                    {faq.question}
                  </span>
                  <span className={`p-2 rounded-full border transition-all shrink-0 ${isOpen ? 'bg-white border-transparent text-zinc-950' : 'border-white/20 text-zinc-400 group-hover:border-white group-hover:text-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm text-zinc-300 font-sans leading-relaxed pr-8 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
