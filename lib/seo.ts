import type { Metadata } from "next";

export const siteConfig = {
  name: "HastRekhaAI",
  url: "https://hastrekhaa.com",
  contactEmail: "abhijain.technical@gmail.com",
  description:
    "AI-assisted palm reading (Hastrekha Vigyan) and Vedic astrology guides in Hindi and English. Learn the lines of the palm, the twelve rashis, and how our free palm analysis works.",
  descriptionHi:
    "हस्तरेखा विज्ञान और वैदिक ज्योतिष पर आधारित AI-सहायित हथेली विश्लेषण और मार्गदर्शिकाएँ, हिंदी और अंग्रेज़ी में।",
  locale: "en_IN",
  alternateLocale: "hi_IN",
  adsenseClient: "ca-pub-1067207431102415",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ---------- JSON-LD builders ---------- */

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["hi", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon") },
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  inLanguage: "hi" | "en";
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.publishedTime,
    dateModified: input.modifiedTime ?? input.publishedTime,
    inLanguage: input.inLanguage,
    keywords: input.keywords?.join(", "),
    mainEntityOfPage: absoluteUrl(input.path),
    author: { "@type": "Organization", name: input.authorName, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon") },
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
