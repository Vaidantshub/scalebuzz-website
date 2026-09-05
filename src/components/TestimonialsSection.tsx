import React from 'react';

interface TestimonialCardData {
  handle: string;
  avatar: string;
  text: string;
  verified?: boolean;
}

const COLUMN_1: TestimonialCardData[] = [
  {
    handle: '@irohandev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    text: 'Got to know about ScaleBuzz and its just wow, the components are incredibly well designed! Really loved the overall feel and 3D quality.',
  },
  {
    handle: '@DIYDevs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    text: 'Have you heard of ScaleBuzz? They have lovingly put together a collection of animated and fully customizable 3D agency experiences.',
  },
  {
    handle: '@shadcn',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    text: 'Everything about this is next level: the components, the 3D performance, and the responsive design polish.',
  },
  {
    handle: '@alex_design',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    text: 'ScaleBuzz has become the ultimate visual agency experience for React. This level of flexibility and speed doesn’t exist anywhere else.',
  },
];

const COLUMN_2: TestimonialCardData[] = [
  {
    handle: '@gregberge_',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    text: 'ScaleBuzz: A stellar collection of React components and 3D interactions to make your landing pages shine ✨',
  },
  {
    handle: '@Logreg_n_coffee',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
    text: 'Literally the coolest web agency in react — fast load times, insane 3D animations, and clean modular code.',
  },
  {
    handle: '@sarah_frontend',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Just launched our SaaS platform built by ScaleBuzz. The smooth parallax grid and custom UI components blown our users away.',
  },
  {
    handle: '@david_ui',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
    text: 'The attention to typography, micro-interactions, and 60fps animations makes working with ScaleBuzz an absolute delight.',
  },
];

const COLUMN_3: TestimonialCardData[] = [
  {
    handle: '@makwanadeepam',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    text: 'Really impressed by ScaleBuzz. Check it out. The kinetic grid and interactive splash cursor effects are amazing.',
  },
  {
    handle: '@GibsonSMurray',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
    text: 'ScaleBuzz has got to be the most artistic UI & 3D agency work I have seen in a while 🤌',
  },
  {
    handle: '@elena_dev',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    text: 'Sleek, minimal, and super dev-friendly React setup. Clean UI, easy to integrate, and perfect for modern projects.',
  },
  {
    handle: '@marcus_founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    text: 'They transformed our legacy web app into a high-converting 3D digital experience in under 3 weeks. 10/10 recommendation.',
  },
];

const XIcon = () => (
  <svg className="w-4 h-4 text-zinc-500 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TestimonialCard: React.FC<{ item: TestimonialCardData }> = ({ item }) => (
  <div className="bg-[#0e0e12]/80 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all duration-300 shadow-xl group hover:-translate-y-1 my-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.handle}
          className="w-9 h-9 rounded-full object-cover border border-white/15 group-hover:border-white/40 transition-colors"
        />
        <div>
          <span className="text-sm font-semibold text-white block tracking-tight">
            {item.handle}
          </span>
        </div>
      </div>
      <XIcon />
    </div>

    <p className="text-sm text-zinc-300 font-sans leading-relaxed tracking-wide font-light">
      {item.text}
    </p>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/10 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-3">
              COMMUNITY & CLIENT REVIEWS
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
              WHAT PEOPLE <br />
              <span className="text-zinc-500">ARE SAYING ABOUT US.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md leading-relaxed">
            Discover how founders, developers, and design leaders build next-gen digital experiences with ScaleBuzz.
          </p>
        </div>

        {/* Multi-Column Scrolling Testimonial Wall Container */}
        <div className="relative h-[640px] overflow-hidden">
          {/* Top & Bottom Gradient Fade Scrims */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#09090b] via-[#09090b]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1: Vertical Scroll Up */}
            <div className="relative overflow-hidden h-full">
              <div className="animate-marquee-vertical pause-on-hover flex flex-col">
                {COLUMN_1.concat(COLUMN_1).map((item, idx) => (
                  <TestimonialCard key={`col1-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 2: Vertical Scroll Down */}
            <div className="relative overflow-hidden h-full hidden md:block">
              <div className="animate-marquee-vertical-reverse pause-on-hover flex flex-col">
                {COLUMN_2.concat(COLUMN_2).map((item, idx) => (
                  <TestimonialCard key={`col2-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3: Vertical Scroll Up */}
            <div className="relative overflow-hidden h-full hidden lg:block">
              <div className="animate-marquee-vertical pause-on-hover flex flex-col">
                {COLUMN_3.concat(COLUMN_3).map((item, idx) => (
                  <TestimonialCard key={`col3-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
