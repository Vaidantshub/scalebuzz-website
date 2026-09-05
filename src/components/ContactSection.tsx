import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import { openWhatsAppInquiry, WHATSAPP_DISPLAY, EMAIL_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../utils/whatsapp';

interface ContactSectionProps {
  selectedProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedProjectType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website',
    budget: '$5k - $10k',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedProjectType) {
      setFormData(prev => ({ ...prev, projectType: selectedProjectType }));
    }
  }, [selectedProjectType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setErrorMessage('Please fill in your name, email, and project details.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      // Automatically send query to WhatsApp +91 9873764268
      openWhatsAppInquiry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        details: formData.details
      });
    }, 800);
  };

  const projectOptions = ['Website', 'E-commerce', 'Landing Page', 'Web Application', 'Redesign', 'Other'];
  const budgetOptions = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

  return (
    <section id="contact" className="py-24 border-b border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Editorial Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block">
              START A PROJECT
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.95] font-sans">
              HAVE A PROJECT <br />
              <span className="text-zinc-500">IN MIND?</span>
            </h2>
            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              Tell us about your business goals, target timeline, and what you're looking to build. Your inquiry goes directly to our team via WhatsApp for instant response!
            </p>

            {/* Direct Contact Details Block */}
            <div className="pt-6 border-t border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-2 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-semibold">WHATSAPP AUTOMATION ACTIVE</span>
              </div>

              <div className="space-y-2 text-zinc-300">
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">WhatsApp:</span>
                  <button
                    onClick={() => openWhatsAppInquiry({ projectType: formData.projectType })}
                    className="text-white font-bold underline hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                  >
                    {WHATSAPP_DISPLAY}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">Direct Email:</span>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white underline hover:text-zinc-300 transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">Instagram:</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-zinc-300 transition-colors">
                    {INSTAGRAM_HANDLE}
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsAppInquiry()}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  CHAT DIRECTLY ON WHATSAPP
                </button>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-zinc-950 border border-white/15 rounded-md p-6 sm:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-16 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight uppercase font-sans">
                  INQUIRY SENT VIA WHATSAPP ✓
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you! Your project inquiry has been prepared and routed directly to our WhatsApp at <span className="text-white font-mono font-bold">{WHATSAPP_DISPLAY}</span>.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', company: '', projectType: 'Website', budget: '$5k - $10k', details: '' });
                  }}
                  className="px-6 py-2.5 bg-white/10 text-white font-mono text-xs uppercase rounded hover:bg-white/20 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono rounded">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      COMPANY / BRAND
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      PROJECT TYPE
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors font-sans"
                    >
                      {projectOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-zinc-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map(b => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-3 text-xs font-mono border rounded-sm transition-all uppercase ${
                          formData.budget === b
                            ? 'bg-white text-zinc-950 font-bold border-white'
                            : 'bg-zinc-900 text-zinc-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your goals, current site issues, or specific features needed..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm p-4 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase rounded-sm transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      CONNECTING TO WHATSAPP...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-white" />
                      SEND INQUIRY VIA WHATSAPP (+91 9873764268)
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
