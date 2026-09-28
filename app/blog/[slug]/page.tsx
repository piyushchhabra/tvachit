import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { getArticleJsonLd } from "@/lib/seo";
import { ogImage, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [
        {
          url: `${siteConfig.url}${post.image}`,
          alt: post.imageAlt,
        },
        ogImage,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: [`${siteConfig.url}${post.image}`, ogImage.url],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug);

  return (
    <main className="flex-1">
      <JsonLd data={getArticleJsonLd(post)} />
      <article>
        <header className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-16">
          <div className="container max-w-3xl px-4 md:px-6">
            <nav
              className="mb-6 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-teal-600">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{post.category}</li>
              </ol>
            </nav>
            <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              By {post.author}, {siteConfig.doctors.dermatologist.role} ·
              Updated {formatDate(post.dateModified)}
            </p>
          </div>
        </header>

        <div className="container max-w-3xl px-4 py-8 md:px-6">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={800}
            height={500}
            className="mb-10 w-full rounded-lg object-cover"
            priority
          />
          <div className="space-y-6 text-base leading-relaxed text-foreground md:text-lg">
            {post.content.map((block, index) => {
              if (block.type === "p") {
                return <p key={index}>{block.text}</p>;
              }
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    className="pt-4 text-2xl font-bold tracking-tight md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={index} className="pt-2 text-xl font-semibold">
                    {block.text}
                  </h3>
                );
              }
              return (
                <ul key={index} className="list-disc space-y-2 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            })}
          </div>

          <aside className="mt-10 rounded-lg border bg-teal-50 p-6">
            <h2 className="text-xl font-semibold">
              Book a consultation with Dr. Anisha Sharma
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              In-clinic visits at Tvachit Clinic, or a remote consultation if
              you cannot come in. Monday to Saturday, 10:30 AM–1:00 PM and 5:00
              PM–8:00 PM.
            </p>
            <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href={`tel:${siteConfig.phoneTel}`}>
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#contact">Clinic details</Link>
              </Button>
            </div>
          </aside>

          <p className="mt-8 text-sm text-muted-foreground">
            This article is educational and does not replace a consultation
            with a dermatologist. Dr. Anisha Sharma offers in-clinic and remote
            consultations; treatment is prescribed after reviewing your skin or
            scalp.
          </p>

          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">
              Frequently asked questions
            </h2>
            <FaqList faqs={post.faqs} />
          </section>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Related guides</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-lg border p-4 hover:border-teal-600"
                >
                  <p className="text-xs font-medium uppercase text-teal-600">
                    {item.category}
                  </p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
