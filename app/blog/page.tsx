import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { blogPosts } from "@/lib/blog";
import { getBlogIndexJsonLd } from "@/lib/seo";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skin Care Blog | Acne, Hair Fall & Pigmentation Guides",
  description:
    "Dermatologist-written guides on acne treatment, hair fall treatment, and pigmentation care. In-clinic and remote consultations with Dr. Anisha Sharma at Tvachit Clinic.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Skin Care Blog | Acne, Hair Fall & Pigmentation Guides",
    description:
      "Read dermatologist guides on acne, hair fall, and dark spots from Tvachit Clinic.",
    url: "/blog",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Care Blog | Acne, Hair Fall & Pigmentation Guides",
    description:
      "Read dermatologist guides on acne, hair fall, and dark spots from Tvachit Clinic.",
    images: [ogImage.url],
  },
};

export default function BlogIndexPage() {
  return (
    <main className="flex-1">
      <JsonLd data={getBlogIndexJsonLd()} />
      <section className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li>
                <Link href="/" className="hover:text-teal-600">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skin Care Blog
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-xl">
            Practical guides from Tvachit Clinic on acne treatment, hair fall
            treatment, and pigmentation — with in-clinic and remote consultations.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-3 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-teal-600">
                      {post.category} · {post.readingTime}
                    </p>
                    <h2 className="text-xl font-semibold leading-snug">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-teal-600">
                      Read article
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
