import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

/**
 * SEO component for managing dynamic head metadata.
 * Use this in pages or modals to update the document title and meta tags.
 */
const SEO: React.FC<SEOProps> = ({
  title = "Chalamandra Magistral | Sistema Operativo del 1%",
  description = "Domina el Grimorio Táctico: fusión cognitiva, modelos mentales y ventaja estratégica. Decodifica tu realidad y desmantela tus límites con Chalamandra Magistral.",
  keywords = "cognitive fusion, mental models, strategic advantage, alto rendimiento, hacks cognitivos, chalamandra magistral",
  canonical = "https://chalamandramagistral.com",
  ogType = "website",
  ogImage = "https://chalamandramagistral.com/og-image.jpg",
  twitterHandle = "@chalamandra",
}) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph (Facebook/LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO;
