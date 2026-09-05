import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "ScaleBuzz — Website Development & Digital Experiences",
  description = "ScaleBuzz builds high-performance websites, e-commerce experiences and digital products for ambitious businesses, startups and founders. Sub-second page speeds, clean semantic code, WCAG accessibility.",
  url = "https://scalebuzz.dev",
}) => {
  // AEO / Structured Data specifically targeting Answer Engines (ChatGPT, Google AI, Gemini)
  // This helps LLMs understand exactly what this business is and what services it offers.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleBuzz",
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`, // placeholder logo
    "image": `${url}/og-image.jpg`,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Product Design"
          }
        }
      ]
    },
    "sameAs": [
      "https://twitter.com/scalebuzz",
      "https://linkedin.com/company/scalebuzz"
    ]
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ScaleBuzz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Answer Engine Optimization (AEO) Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
