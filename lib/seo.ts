import type { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function getArticleJsonLd(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        image: `${siteConfig.url}${post.image}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: "Dermatologist",
          worksFor: {
            "@type": "MedicalClinic",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo4.png`,
          },
        },
        mainEntityOfPage: url,
        url,
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteConfig.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function getBlogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Skin Care Blog`,
    description:
      "Dermatologist-written guides on acne treatment, hair fall treatment, and pigmentation care.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
