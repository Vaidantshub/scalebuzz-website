import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User, Share2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { openWhatsAppInquiry } from '../utils/whatsapp';

interface BlogPostPageProps {
  post: BlogPost;
  onGoBack: () => void;
  onSelectPost: (slug: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onGoBack, onSelectPost }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  // Structured Data (JSON-LD) for Article + FAQPage + BreadcrumbList
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": `https://scalebuzz.in${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Founder & Technical Lead",
      "worksFor": {
        "@type": "Organization",
        "name": "ScaleBuzz",
        "url": "https://scalebuzz.in"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "ScaleBuzz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://scalebuzz.in/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.updated,
    "mainEntityOfPage": `https://scalebuzz.in/blog/${post.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://scalebuzz.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://scalebuzz.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://scalebuzz.in/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-[#09090b] text-zinc-300 font-sans pt-28 pb-24 px-6 md:px-12 selection:bg-[#E05A47] selection:text-white">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://scalebuzz.in/blog/${post.slug}`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://scalebuzz.in/blog/${post.slug}`} />
        <meta property="og:image" content={`https://scalebuzz.in${post.image}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`https://scalebuzz.in${post.image}`} />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <button
            onClick={onGoBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            ALL ARTICLES
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            title="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
            SHARE
          </button>
        </div>

        {/* Header Metadata */}
        <header className="space-y-6">
          <div className="inline-block bg-[#8b1022]/20 border border-[#8b1022]/40 text-[#c92a3e] px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400 pt-2 border-b border-white/10 pb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-zinc-300" />
              By {post.author} (Founder &amp; Tech Lead)
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Direct TL;DR Answer Block (Google Snippet Optimized) */}
        <div className="p-6 md:p-8 bg-zinc-950/80 border-l-4 border-emerald-500 border border-white/10 rounded-r-xl space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">
            QUICK SUMMARY (DIRECT ANSWER)
          </span>
          <p className="text-base text-zinc-200 leading-relaxed font-sans font-medium">
            A production-grade <strong>3D website cost in India</strong> starts around ₹45,000 for lightweight interactive 3D hero sections and ranges between ₹1,50,000 and ₹5,50,000+ for custom WebGL and Three.js platforms. Costs scale with custom 3D mesh modeling, custom GLSL shader lighting, and multi-device 60fps performance tuning.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-base leading-relaxed text-zinc-300 font-sans">
          <p className="text-lg text-zinc-200 leading-relaxed">
            Every week, founders message us on WhatsApp asking: <em>"Bhaiya, ek 3D website banwani hai—kitna kharcha aayega?"</em>
          </p>
          <p>
            Most founders have seen award-winning sites on Awwwards or sites like our own Noomo 3D case study and want that exact immersive depth. But nobody talks about the actual math behind building interactive 3D in India without crashing your visitor's phone.
          </p>
          <p>
            Let's break down the realistic numbers, the tech involved, and how to avoid burning cash on slow, laggy 3D gimmicks.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-6 border-t border-white/10">
            3D Website Cost in India: 2026 Price Breakdown by Scope
          </h2>
          <p>To give you an honest baseline, here is how the Indian market prices 3D web development today:</p>

          {/* Pricing Table */}
          <div className="overflow-x-auto my-6 border border-white/10 rounded-lg">
            <table className="w-full text-left text-xs font-mono divide-y divide-white/10">
              <thead className="bg-zinc-900 text-white uppercase">
                <tr>
                  <th className="p-3.5">Project Tier</th>
                  <th className="p-3.5">Scope &amp; Features</th>
                  <th className="p-3.5">Tech Stack</th>
                  <th className="p-3.5">Cost (INR)</th>
                  <th className="p-3.5">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-zinc-950/60 text-zinc-300">
                <tr>
                  <td className="p-3.5 font-bold text-white">Tier 1: 3D Hero / Micro-Interactions</td>
                  <td className="p-3.5">Single 3D canvas hero, interactive mouse parallax, 1-2 optimized GLTF models</td>
                  <td className="p-3.5">React + Three.js / Spline</td>
                  <td className="p-3.5 font-bold text-emerald-400">₹45,000 – ₹90,000</td>
                  <td className="p-3.5">2–3 Weeks</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white">Tier 2: Interactive Product Showcase</td>
                  <td className="p-3.5">360° product configurator, custom camera zoom, smooth scroll storytelling</td>
                  <td className="p-3.5">Next.js + Three.js + Blender</td>
                  <td className="p-3.5 font-bold text-emerald-400">₹1,00,000 – ₹2,20,000</td>
                  <td className="p-3.5">3–5 Weeks</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-white">Tier 3: Full Immersive WebGL Experience</td>
                  <td className="p-3.5">Custom GLSL shaders, multi-scene transitions, physics, sound FX</td>
                  <td className="p-3.5">Next.js + R3F + OGL + Shaders</td>
                  <td className="p-3.5 font-bold text-emerald-400">₹2,50,000 – ₹5,50,000+</td>
                  <td className="p-3.5">6–10 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-zinc-400 italic">
            *Warning: If someone offers to build you a "complete 3D website" for ₹5,000 on a freelancer platform, run the other way. They will dump an uncompressed 50MB model that destroys mobile page speed and gets your site penalized by Google.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-6 border-t border-white/10">
            What Actually Drives Up the Cost of a 3D Website?
          </h2>
          <p>
            Building in 3D isn't like normal web development where you drop an image onto a flexbox layout. A real 3D website runs a live graphics engine inside the visitor's browser.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 bg-zinc-950 border border-white/10 rounded-lg space-y-2">
              <h3 className="text-lg font-bold text-white">1. Custom 3D Asset Modeling</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Finished .glb CAD files keep costs down. If we need to model, UV-unwrap, and texture products from scratch in Blender, expect an additional ₹25,000 to ₹80,000 depending on geometry.
              </p>
            </div>
            <div className="p-5 bg-zinc-950 border border-white/10 rounded-lg space-y-2">
              <h3 className="text-lg font-bold text-white">2. Draw Calls &amp; Shader Tuning</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If your scene has 200 unbatched meshes, mobile phones drop to 15 frames per second. Custom GLSL shaders and geometry batching are necessary for smooth 60fps interaction.
              </p>
            </div>
            <div className="p-5 bg-zinc-950 border border-white/10 rounded-lg space-y-2">
              <h3 className="text-lg font-bold text-white">3. Draco Mesh Compression</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Raw 3D files easily hit 45MB. We run Draco and meshoptimizer pipelines to squash them below 2.5MB so users see content in under 2 seconds.
              </p>
            </div>
            <div className="p-5 bg-zinc-950 border border-white/10 rounded-lg space-y-2">
              <h3 className="text-lg font-bold text-white">4. Conversion Flow Integration</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A 3D website that doesn't capture leads is just digital art. Integrating 3D canvas events with CRM forms and WhatsApp routing ensures marketing ROI.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-6 border-t border-white/10">
            Can AI Make 3D Websites in 2026?
          </h2>
          <p>The short answer is: <strong>AI can generate pieces, but it cannot assemble a production site.</strong></p>
          <p>
            Tools like Meshy or Tripo can generate rough 3D models from prompts, and ChatGPT can write basic Three.js boilerplate. But AI cannot optimize polygon counts for mobile GPUs, handle canvas context restoration when users switch tabs, or guarantee passing scores on Google's Core Web Vitals.
          </p>

          {/* FAQ Accordion Section */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-6 border-t border-white/10">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-white/10 border-t border-b border-white/10 my-6">
            {post.faqs.map((faq, i) => (
              <div key={i} className="py-5 space-y-2">
                <h3 className="text-lg font-bold text-white flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Post Bottom CTA Block */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-[#8b1022]/20 via-zinc-950 to-zinc-900 border border-white/15 rounded-2xl text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            GET AN HONEST SCOPE &amp; PRICE
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Planning a Website Project? Let's Talk.
          </h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Message our founders directly on WhatsApp at <strong>+91 9873764268</strong>. We'll give you a transparent breakdown of timeline, tech stack, and costs within 24 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openWhatsAppInquiry({ projectType: '3D Website' })}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono uppercase tracking-widest rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              CHAT DIRECTLY ON WHATSAPP (+91 9873764268)
            </button>
            <button
              onClick={onGoBack}
              className="w-full sm:w-auto px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs font-mono uppercase tracking-widest rounded-full transition-colors"
            >
              EXPLORE MORE ARTICLES
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

