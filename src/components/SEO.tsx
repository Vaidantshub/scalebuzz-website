import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../data/agencyData';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const BASE_URL = 'https://scalebuzz.in';

export const SEO: React.FC<SEOProps> = ({
  title = "ScaleBuzz | Website Design & Lead Generation Agency",
  description = "ScaleBuzz helps businesses grow with conversion-focused websites, landing pages, sales funnels and lead generation solutions. Serving clients in USA & India.",
  url = BASE_URL,
  image = `${BASE_URL}/og-image.jpg`,
}) => {
  // AEO & Entity Schema specifically targeting Google AI Overview, Gemini, and ChatGPT
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://scalebuzz.in/#organization",
    "name": "ScaleBuzz",
    "alternateName": ["ScaleBuzz Agency", "ScaleBuzz Digital", "ScaleBuzz Web Design"],
    "legalName": "ScaleBuzz",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "image": image,
    "description": "ScaleBuzz is a digital web design and lead generation agency founded by Vaidant Pipal, Samar Zayyan, and Vaibhav Sharma. Specializing in high-performance Next.js websites, 3D WebGL experiences, e-commerce storefronts, and sales funnels for ambitious startups and businesses across India and the United States.",
    "slogan": "Websites & Lead Generation Systems That Help Businesses Grow",
    "founder": [
      {
        "@type": "Person",
        "name": "Vaidant Pipal",
        "jobTitle": "Founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Samar Zayyan",
        "jobTitle": "Co-Founder & CTO"
      },
      {
        "@type": "Person",
        "name": "Vaibhav Sharma",
        "jobTitle": "CMO"
      }
    ],
    "email": "scalebuzzz@gmail.com",
    "telephone": "+91-9873764268",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rohini",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9873764268",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Rohini, Delhi" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "State", "name": "Delhi NCR" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" }
    ],
    "knowsAbout": [
      "Website Design",
      "Lead Generation",
      "Next.js Development",
      "React Development",
      "3D WebGL Experiences",
      "Three.js",
      "E-Commerce Development",
      "UI/UX Design",
      "Conversion Rate Optimization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ScaleBuzz Core Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Custom high-speed websites built with React and Next.js." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "3D WebGL Experiences", "description": "Interactive Three.js and WebGL digital products and 3D websites." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Lead Generation Systems", "description": "High-intent landing pages and sales funnels engineered to convert visitors into business leads." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "E-Commerce Development", "description": "High-converting headless storefronts with frictionless checkout flows." }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/_scalebuzz_",
      "https://github.com/Vaidantshub/scalebuzz-website"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ScaleBuzz",
    "url": BASE_URL,
    "description": "Website Design & Lead Generation Agency serving USA & India",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // FAQPage schema — boosts rich results in Google SERPs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ScaleBuzz" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@scalebuzz" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data: Organization + WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {/* Structured Data: FAQPage for rich results */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
