import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, User, ArrowLeft, MessageSquare } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { openWhatsAppInquiry } from '../utils/whatsapp';

interface BlogListingPageProps {
  onSelectPost: (slug: string) => void;
  onGoHome: () => void;
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({ onSelectPost, onGoHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans pt-28 pb-20 px-6 md:px-12">
      <Helmet>
        <title>Engineering & Web Growth Blog | ScaleBuzz</title>
        <meta
          name="description"
          content="Practical web development, 3D WebGL, landing page, and conversion rate insights for startup founders and business owners. Written by engineers."
        />
        <link rel="canonical" href="https://scalebuzz.in/blog" />
        <meta property="og:title" content="Engineering & Web Growth Blog | ScaleBuzz" />
        <meta property="og:description" content="Realistic pricing, tech teardowns, and engineering guides for modern websites." />
        <meta property="og:url" content="https://scalebuzz.in/blog" />
      </Helmet>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </button>
          <span className="text-xs font-mono text-zinc-500">SCALEBUZZ INSIGHTS</span>
        </div>

        {/* Blog Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#c92a3e] uppercase block">
            THE SCALEBUZZ BLOG
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Honest Tech Guides &amp; <br />
            <span className="font-serif italic text-zinc-400 font-normal">Pricing Breakdowns</span>
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed font-sans">
            No marketing buzzwords. Direct answers on realistic costs, WebGL architecture, conversion engineering, and how to build websites that deliver results.
          </p>
        </div>

        {/* Featured Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              onClick={() => onSelectPost(post.slug)}
              className="group bg-zinc-950/70 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-medium text-white border border-white/10">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:translate-x-1 transition-transform">
                  READ ARTICLE <ArrowRight className="w-3.5 h-3.5 text-[#c92a3e]" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Have a specific project in mind?</h3>
            <p className="text-sm text-zinc-400">Get an upfront, transparent technical scope and quote directly on WhatsApp.</p>
          </div>
          <button
            onClick={() => openWhatsAppInquiry()}
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono tracking-wider uppercase rounded-full transition-all inline-flex items-center gap-2 shrink-0 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            CHAT WITH OUR ENGINEERS
          </button>
        </div>
      </div>
    </div>
  );
};
