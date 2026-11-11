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
  // Organization + WebSite + Service structured data (AEO-ready for Google AI, Gemini, ChatGPT)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleBuzz",
    "alternateName": "ScaleBuzz Agency",
    "description": "ScaleBuzz is a website design and lead generation agency helping businesses grow with conversion-focused websites, landing pages, and sales funnels.",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "image": image,
    "email": "scalebuzzz@gmail.com",
    "telephone": "+91-9873764268",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9873764268",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Agency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Custom websites built for speed, scalability and real business goals." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "E-Commerce Development", "description": "High-converting e-commerce experiences designed around customers and products." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "UI/UX Design", "description": "Clean interfaces and intuitive user experiences designed around real users." }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Lead Generation", "description": "Landing pages and sales funnels that turn website visitors into qualified business leads." }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/_scalebuzz_",
      "https://linkedin.com/company/scalebuzz"
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
