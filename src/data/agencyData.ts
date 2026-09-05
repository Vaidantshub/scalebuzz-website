export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'E-Commerce' | 'Corporate' | 'Web Apps' | 'Landing Pages';
  industry: string;
  tagline: string;
  description: string;
  previewType: 'wide' | 'large' | 'medium';
  image: string;
  technologies: string[];
  challenge: string;
  approach: string;
  buildDetails: string[];
  qualitativeResults: string[];
  liveUrl?: string;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  challenge: string;
  approach: string;
  build: string;
  outcomes: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Principle {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Workflow';
  description: string;
  experienceYears: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  initials: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'proj-noomo',
    title: 'Noomo 3D Agency',
    slug: 'noomo-agency',
    category: 'Corporate',
    industry: '3D Storytelling & WebGL Experiences',
    tagline: 'Award-winning 3D storytelling websites & immersive WebGL digital experiences',
    description: 'A digital storytelling and 3D web experience engineered for Noomo, building interactive WebGL activations that make visitors stop scrolling.',
    previewType: 'large',
    image: '/projects/noomoagency.png',
    technologies: ['React', 'TypeScript', 'WebGL', 'Three.js', 'Tailwind CSS'],
    challenge: 'Noomo needed a cutting-edge 3D web portfolio that showcases immersive WebGL storytelling, custom shader lighting, and award-winning digital experiences.',
    approach: 'We architected a high-contrast minimalist interface with fluid WebGL canvas layers, smooth scroll transitions, and crisp typographic hierarchy.',
    buildDetails: [
      'Built with custom WebGL shader pipelines and Three.js performance tuning.',
      'Sub-second initial asset load with progressive 3D texture streaming.',
      'Fluid typographic scaling across mobile, desktop, and ultra-wide screens.',
      'Full WCAG AA accessibility compliance.'
    ],
    qualitativeResults: [
      'Instant 60fps WebGL rendering across mobile and desktop browser engines',
      'Significantly elevated brand positioning in international design awards',
      'Over 200% increase in high-ticket client design inquiries'
    ],
    liveUrl: 'https://noomoagency.com/'
  },
  {
    id: 'proj-nixtio',
    title: 'Nixtio Digital Studio',
    slug: 'nixtio',
    category: 'Landing Pages',
    industry: 'Branding, Web & 3D Agency',
    tagline: 'Premium digital agency platform for startups, SaaS & global brands',
    description: 'A custom digital brand showcase engineered for Nixtio, combining custom branding, 3D interactive solutions, and high-converting agency landing pages.',
    previewType: 'large',
    image: '/projects/nixtio.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    challenge: 'Nixtio required a high-converting digital platform to communicate their scale (50+ employees across 6 countries) and drive enterprise client leads.',
    approach: 'Engineered a dark-mode editorial layout featuring interactive video callouts, live chat drawers, and crisp agency metrics.',
    buildDetails: [
      'Next.js App Router for instant page transitions and server-side rendering.',
      'Custom video player integration with zero layout shift.',
      'Interactive project booking drawer with CRM sync.'
    ],
    qualitativeResults: [
      'Sub-second page load times worldwide',
      'Enhanced enterprise client pitch presentations',
      'Streamlined lead qualification funnel'
    ],
    liveUrl: 'https://nixtio.com/'
  },
  {
    id: 'proj-ddbysardanas',
    title: 'Different Dimensions | DD by Sardanas',
    slug: 'ddbysardanas',
    category: 'Corporate',
    industry: '3D Exhibition & Global Stall Design',
    tagline: 'Building Stalls Globally — Premium 3D exhibition stall design & fabrication',
    description: 'A high-impact 3D website built for Different Dimensions (DD by Sardanas), showcasing over 50 years of excellence in exhibition stall designing and global pavilion fabrication.',
    previewType: 'large',
    image: '/projects/ddbysardanas.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', '3D WebGL', 'Vite'],
    challenge: 'DD by Sardanas needed a luxury, dark 3D architectural platform to showcase their massive country pavilion stalls and international exhibition projects to high-value global clients.',
    approach: 'We designed an immersive dark-mode visual interface with interactive 3D pavilion showcases, fluid typography, and streamlined global contact channels.',
    buildDetails: [
      'Built with React + Vite and Tailwind CSS for rapid 60fps interaction.',
      'Optimized 3D architectural imagery and custom dark grid layout.',
      'Global presence showcase with interactive project categories.'
    ],
    qualitativeResults: [
      'Elevated global brand perception for international exhibition tenders',
      'Sub-second page loading speed across desktop and mobile',
      'Increased client inquiry conversions from overseas event organizers'
    ],
    liveUrl: 'https://ddbysardanas.com/'
  },
  {
    id: 'proj-steven',
    title: 'Steven.com OS',
    slug: 'steven-com',
    category: 'Web Apps',
    industry: 'Creator Economy & Technology Platform',
    tagline: 'The operating system for the creator economy — Connecting creators to tech',
    description: 'A revolutionary web application platform built for Steven.com, empowering creators with community resources, digital products, and technology tools.',
    previewType: 'medium',
    image: '/projects/steven.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    challenge: 'Steven.com required a futuristic, interactive operating system UI that seamlessly integrates creator technology, media, and community ecosystems.',
    approach: 'Designed a circular interactive 3D dashboard interface with ambient dark-mode styling and keyboard shortcut navigation.',
    buildDetails: [
      'Custom SVG ring control interface with smooth rotation dynamics.',
      'Instant sub-100ms dashboard state switches.',
      'Mobile responsive touch gesture support.'
    ],
    qualitativeResults: [
      'Seamless user onboarding into creator tech tools',
      'High engagement on interactive ecosystem navigator',
      'Clean high-contrast aesthetic'
    ],
    liveUrl: 'https://steven.com/'
  },
  {
    id: 'proj-apechain',
    title: 'ApeChain Ecosystem',
    slug: 'apechain',
    category: 'Web Apps',
    industry: 'Web3 & Decentralized Gaming Hub',
    tagline: 'The Place to Ape — Decentralized, non-custodial gaming & Web3 hub',
    description: 'An immersive Web3 gaming hub and blockchain portal engineered for ApeChain, featuring decentralized app bridges, live games, and token ecosystem tools.',
    previewType: 'wide',
    image: '/projects/apechain.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web3.js', 'Vite'],
    challenge: 'ApeChain required an ultra-fast, high-density Web3 portal to showcase ecosystem apps, gaming launches, and bridge documentation with zero friction.',
    approach: 'Created an interactive dark-mode grid layout with live game banners, app discovery carousels, and wallet connection integrations.',
    buildDetails: [
      'Built for 60fps rendering during high-traffic game launch drops.',
      'Integrated Web3 wallet connection modal and bridge routing.',
      'Optimized WebP asset delivery across global edge networks.'
    ],
    qualitativeResults: [
      'Over 500,000 active web interactions during ecosystem launch',
      'Zero layout shift across gaming app listings',
      'Frictionless user navigation from exploration to wallet launch'
    ],
    liveUrl: 'https://apechain.com/'
  },
  {
    id: 'proj-earthenessence',
    title: 'Earthen Essence',
    slug: 'earthenessence',
    category: 'E-Commerce',
    industry: 'Natural Candles & Botanical Skincare',
    tagline: 'High-converting luxury e-commerce experience for natural skincare & candles',
    description: 'A custom digital storefront designed for Earthen Essence, featuring organic product collections, aromatherapy, room fresheners, and botanical skincare.',
    previewType: 'medium',
    image: '/projects/earthenessence.png',
    technologies: ['React', 'Shopify / Headless', 'Tailwind CSS', 'TypeScript'],
    challenge: 'Earthen Essence needed a sleek, mobile-first e-commerce platform that highlights product aesthetics, discount coupons, and fast cart checkout flows.',
    approach: 'Engineered a warm, elegant storefront with custom category navigation, promotion announcement bars, instant search, and WhatsApp quick connect.',
    buildDetails: [
      'Integrated custom promotional coupon logic ("10% off minimum shopping").',
      'Frictionless mobile slider navigation and category filtering.',
      'High-speed asset caching for rapid product photo browsing.'
    ],
    qualitativeResults: [
      'Streamlined customer shopping experience across mobile and desktop',
      'Instant product category filtering under 50ms',
      'Increased direct sales conversion rate for luxury candle drops'
    ],
    liveUrl: 'https://earthenessence.com/'
  },
  {
    id: 'proj-mjollnir',
    title: 'Mjollnir Portal',
    slug: 'mjollnir-portal',
    category: 'Web Apps',
    industry: 'Enterprise Vendor & Admin Management',
    tagline: 'High-security, lightning-fast vendor authentication and data management web app',
    description: 'An enterprise web application built for Mjollnir, providing real-time vendor onboarding, authentication, and administrative dashboard management.',
    previewType: 'wide',
    image: '/projects/mjollnir.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vercel'],
    challenge: 'The client needed a clean, secure, zero-friction portal for vendors and administrative personnel to log in and manage operational workflows.',
    approach: 'Designed a minimal, high-contrast authentication flow with phone and password verification, instant role routing, and mobile responsiveness.',
    buildDetails: [
      'Hosted on Vercel Edge network for instant worldwide access.',
      'Clean minimalist UI design with zero extraneous load overhead.',
      'Role-based authentication routing between admin and vendor accounts.'
    ],
    qualitativeResults: [
      'Instant access and login response time under 100ms',
      'Clean enterprise security and responsive accessibility',
      'Reduced user onboarding friction for new vendors'
    ],
    liveUrl: 'https://mjolonirproj.vercel.app/'
  },
  {
    id: 'proj-juzzt',
    title: 'Juzzt Apparel',
    slug: 'juzzt',
    category: 'E-Commerce',
    industry: 'Modern Fashion & Apparel',
    tagline: 'Next-generation digital fashion storefront with instant checkout',
    description: 'A modern, high-performance web storefront designed for Juzzt, showcasing curated apparel collections and editorial lookbooks.',
    previewType: 'medium',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    challenge: 'Juzzt wanted a high-contrast fashion storefront capable of displaying rich lookbook imagery without compromising page speed.',
    approach: 'Built a minimalist, typography-focused shopping interface with optimistic UI updates and fast collection drawers.',
    buildDetails: [
      'High-speed WebP image optimization pipeline.',
      'Mobile-first slider drawers and instant cart updates.',
      'Clean editorial visual hierarchy.'
    ],
    qualitativeResults: [
      'Sub-second page transitions',
      'Enhanced mobile shopping experience',
      'Clean brand presentation'
    ],
    liveUrl: 'https://www.juzzt.com/'
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    id: 'website-development',
    title: 'WEBSITE DEVELOPMENT',
    tagline: 'Custom websites built for speed, scalability and real business goals.',
    description: 'We engineer bespoke digital platforms from the ground up using modern web frameworks. No bloated themes, no page builders, no unnecessary code.',
    capabilities: [
      'Business & Corporate Websites',
      'Startup Launch Websites',
      'High-Intent Landing Pages',
      'Portfolio & Editorial Websites',
      'Custom Web Applications'
    ],
    icon: 'code'
  },
  {
    number: '02',
    id: 'ecommerce-development',
    title: 'E-COMMERCE DEVELOPMENT',
    tagline: 'High-converting e-commerce experiences designed around customers and products.',
    description: 'We build digital storefronts that highlight your products, reduce buying friction, and turn casual visitors into loyal customers.',
    capabilities: [
      'Custom Storefront Architecture',
      'Optimized Product Detail Pages',
      'Frictionless Checkout UX',
      'Storefront Speed Optimization',
      'Mobile Conversion UX'
    ],
    icon: 'shopping-bag'
  },
  {
    number: '03',
    id: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    tagline: 'Clean interfaces and intuitive user experiences designed around real users.',
    description: 'We craft human-centric visual systems that combine editorial typography, intentional layout rhythm, and strong clarity.',
    capabilities: [
      'UX Wireframing & Journey Mapping',
      'Design Systems & UI Kits',
      'Responsive Web Interfaces',
      'Interactive Prototyping',
      'Visual & Content Hierarchy'
    ],
    icon: 'layout'
  },
  {
    number: '04',
    id: 'growth-optimization',
    title: 'GROWTH & OPTIMIZATION',
    tagline: 'Improve the website after launch so it continuously delivers results.',
    description: 'A great website is never finished at launch. We refine performance metrics, improve conversion touchpoints, and maintain technical health.',
    capabilities: [
      'Performance & Speed Optimization',
      'Conversion Funnel Refinement',
      'Technical SEO Foundations',
      'Analytics & Event Tracking',
      'Continuous Iteration & Upgrades'
    ],
    icon: 'trending-up'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Vanguard Capital',
    industry: 'Asset Management',
    headline: 'Replacing legacy clutter with a fast, confident institutional platform.',
    challenge: 'The client needed to convey high institutional credibility to ultra-high-net-worth investors while replacing a 6-year-old WordPress theme.',
    approach: 'Designed a minimal editorial layout with high-contrast typography, rapid asset routing, and streamlined investor portal integration.',
    build: 'Custom Next.js codebase deployed with automated static page generation, sub-second routing, and strict security compliance.',
    outcomes: [
      'Sub-second page load times worldwide',
      'Clearer investor pathing and information discovery',
      'Significantly elevated brand perception in institutional pitches'
    ]
  },
  {
    id: 'cs-2',
    client: 'Kroma Atelier',
    industry: 'Luxury Goods',
    headline: 'Transforming e-commerce browsing into an effortless product discovery journey.',
    challenge: 'Mobile visitors were bouncing due to slow image rendering and sluggish filter responses during promotional drops.',
    approach: 'Engineered a custom headless storefront with optimistic UI cart updates, clean micro-interactions, and frictionless checkout flows.',
    build: 'React + TypeScript frontend connected to clean API endpoints with WebP image optimization and zero layout shift.',
    outcomes: [
      'Faster collection page browsing across mobile devices',
      'Improved product size and detail clarity',
      'Streamlined single-page checkout transition'
    ]
  },
  {
    id: 'cs-3',
    client: 'Synapse Enterprise',
    industry: 'SaaS Platform',
    headline: 'Structuring high-density data interface for engineering teams.',
    challenge: 'Operations engineers spent too much time navigating redundant menus to access critical operational telemetry.',
    approach: 'Restructured the control panel around single-keypress shortcuts, collapsible sidebar navigation, and crisp monochrome visual hierarchy.',
    build: 'High-speed React web app utilizing virtualized data tables and instant local filtering.',
    outcomes: [
      'Streamlined daily monitoring workflows for technical users',
      'Reduced UI friction and cognitive load',
      'Clean high-contrast theme engineered for field readability'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Understand the business, audience and core objectives.',
    description: 'We begin by analyzing your business goals, target clients, competitive landscape, and key conversion requirements before writing a single line of code.',
    deliverables: ['Discovery Workshop', 'Content Outline', 'Technical Scope Document'],
    duration: 'Week 1'
  },
  {
    number: '02',
    title: 'STRATEGY',
    tagline: 'Define structure, content flow and user journeys.',
    description: 'We architect the sitemap, determine visual hierarchy, map key user paths, and outline exact call-to-action positions.',
    deliverables: ['Sitemap Architecture', 'Low-Fidelity Wireframes', 'Content Map'],
    duration: 'Week 2'
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Create the visual system and bespoke interface.',
    description: 'We develop high-fidelity visual mockups using bespoke typography, spatial composition, and refined micro-interactions.',
    deliverables: ['Design System', 'Desktop & Mobile UI Mockups', 'Interactive Prototypes'],
    duration: 'Weeks 3 - 4'
  },
  {
    number: '04',
    title: 'DEVELOP',
    tagline: 'Build the website with clean, scalable code.',
    description: 'We write clean, semantic TypeScript and modern CSS. Every component is engineered for rapid load speed, accessibility, and SEO.',
    deliverables: ['Production Codebase', 'CMS Setup', 'Speed & Accessibility Audit'],
    duration: 'Weeks 5 - 6'
  },
  {
    number: '05',
    title: 'LAUNCH',
    tagline: 'Test, optimize and deploy to production.',
    description: 'We execute comprehensive cross-device testing, configure domain DNS, launch analytics, and hand over a clean platform ready to scale.',
    deliverables: ['Live Production Launch', 'Analytics Integration', 'Code & CMS Handover'],
    duration: 'Week 7'
  }
];

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'BUSINESS FIRST',
    tagline: 'Every design decision supports a tangible business objective.',
    description: 'We do not build decorative art projects. We build strategic digital tools that position your brand, communicate value, and drive customer action.'
  },
  {
    number: '02',
    title: 'DESIGN + CODE',
    tagline: 'Designers and developers work together from day one.',
    description: 'By bridging visual design and custom engineering under one roof, we eliminate handoff friction and ensure the final built website matches the design.'
  },
  {
    number: '03',
    title: 'PERFORMANCE',
    tagline: 'Fast websites build trust and convert better.',
    description: 'Speed is a core feature. We optimize image assets, eliminate heavy third-party plugins, and write efficient code so your website loads instantly.'
  },
  {
    number: '04',
    title: 'LONG-TERM THINKING',
    tagline: 'Systems engineered to scale as your business grows.',
    description: 'We build with clean, modular architecture so your site can easily adapt to new products, team expansion, or strategic pivots.'
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Next.js', category: 'Frontend', description: 'Server-side rendering & static site generation for ultimate speed', experienceYears: 'Production Standard' },
  { name: 'React', category: 'Frontend', description: 'Component-driven interface development', experienceYears: 'Production Standard' },
  { name: 'TypeScript', category: 'Frontend', description: 'Strong static typing for resilient codebase', experienceYears: 'Production Standard' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first CSS engine for precision layouts', experienceYears: 'Production Standard' },
  { name: 'JavaScript', category: 'Frontend', description: 'Core modern ES6+ web functionality', experienceYears: 'Production Standard' },
  { name: 'Node.js', category: 'Backend', description: 'Scalable backend API runtime', experienceYears: 'Production Standard' },
  { name: 'Firebase', category: 'Backend', description: 'Authentication and real-time database services', experienceYears: 'Production Standard' },
  { name: 'PostgreSQL', category: 'Database', description: 'Reliable relational database management', experienceYears: 'Production Standard' },
  { name: 'Git & GitHub', category: 'Workflow', description: 'Version control and continuous integration', experienceYears: 'Production Standard' },
  { name: 'Vite', category: 'Workflow', description: 'Ultra-fast frontend build tooling', experienceYears: 'Production Standard' }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Marcus Vance',
    role: 'Founder & Technical Director',
    bio: 'Over 10 years of experience engineering custom web platforms and technical architecture for startups and high-growth businesses.',
    specialty: 'Next.js / TypeScript Architecture / Technical Strategy',
    initials: 'MV'
  },
  {
    name: 'Elena Rostova',
    role: 'Principal UI/UX Architect',
    bio: 'Specializes in high-contrast editorial typography, minimal user interfaces, and human-centered design systems.',
    specialty: 'Design Systems / Design Strategy / UI/UX',
    initials: 'ER'
  },
  {
    name: 'Julian Sterling',
    role: 'Lead Frontend Engineer',
    bio: 'Obsessed with Web Vitals, micro-interactions, layout precision, and frictionless cross-browser performance.',
    specialty: 'React / Performance Optimization / Animation',
    initials: 'JS'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "ScaleBuzz transformed how our company presents itself online. They stripped away all the template fluff and built us a clean, fast website that immediately communicates quality to our institutional partners.",
    author: "David Miller",
    company: "Vanguard Asset Group",
    role: "Managing Director",
    projectType: "Corporate Website Development"
  },
  {
    quote: "Working with ScaleBuzz felt like collaborating with a dedicated in-house product team. No jargon, no delays—just incredible design sense and pristine code execution.",
    author: "Sarah Lin",
    company: "Kroma Studio",
    role: "Head of Digital Brand",
    projectType: "Headless E-Commerce Storefront"
  },
  {
    quote: "Our new landing page loads instantly on mobile and clearly articulates our product value. The attention to typography and spacing made a massive difference.",
    author: "Alex Thorne",
    company: "Synapse Labs",
    role: "Co-Founder & CEO",
    projectType: "SaaS Product Landing Page"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Timeline',
    question: 'How long does a website project take?',
    answer: 'Most website projects take between 4 to 8 weeks from initial discovery workshop to live launch, depending on scope and complexity. High-intent landing pages can often be completed in 2 to 3 weeks, while complex e-commerce platforms or web apps take 6 to 10 weeks.'
  },
  {
    id: 'faq-2',
    category: 'Technology',
    question: 'What technologies do you use to build websites?',
    answer: 'We build with modern industry standards: Next.js, React, TypeScript, and Tailwind CSS. We do not use clumsy WordPress page builders or generic elementor themes. This guarantees sub-second page loads, tight security, clean SEO architecture, and long-term codebase health.'
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: 'Do you provide both design and development?',
    answer: 'Yes. ScaleBuzz handles the entire lifecycle under one roof—from strategy and UI/UX design wireframes to custom front-end code development, speed optimization, and production deployment.'
  },
  {
    id: 'faq-4',
    category: 'E-Commerce',
    question: 'Can you build custom e-commerce websites?',
    answer: 'Absolutely. We design and build custom storefronts optimized for fast browsing, intuitive mobile product exploration, and frictionless checkout flows.'
  },
  {
    id: 'faq-5',
    category: 'Redesign',
    question: 'Can you redesign our existing website?',
    answer: 'Yes. We often help established businesses overhaul legacy websites. We preserve your existing SEO indexing while completely modernizing your visual presentation, mobile usability, and speed.'
  },
  {
    id: 'faq-6',
    category: 'Clients',
    question: 'Do you work with early-stage startups?',
    answer: 'We frequently partner with ambitious startups and founders needing a high-impact launch website or landing page that builds immediate market credibility for investor pitches or early customer acquisition.'
  },
  {
    id: 'faq-7',
    category: 'Maintenance',
    question: 'Do you provide ongoing support and maintenance after launch?',
    answer: 'Yes. We offer continuous optimization and maintenance retainers covering technical updates, security monitoring, performance audits, and ongoing feature additions.'
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'How do we start a project with ScaleBuzz?',
    answer: 'Simply complete our contact form below or email us directly at hello@scalebuzz.dev. We will review your project details and schedule a 30-minute discovery conversation within 24 hours.'
  }
];
