import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { blogPosts } from "@/lib/blog";
import { clinicFaqs, getHomeFaqJsonLd, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Dermatologist in Vadodara | Tvachit Skin & Hair Clinic",
  description:
    "Tvachit Clinic is a dermatologist for acne treatment, hair fall treatment, pigmentation, laser hair removal, and skin care. In-clinic and remote consultations with Dr. Anisha Sharma.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Dermatologist in Vadodara | Tvachit Skin & Hair Clinic",
    description:
      "Acne, hair fall, pigmentation, and skin treatments. In-clinic and remote consultations with Dr. Anisha Sharma at Tvachit Clinic.",
    url: "/",
    type: "website",
  },
};

const treatments = [
  {
    title: "Acne Treatment",
    description:
      "Medical acne treatment for pimples, cystic acne, and acne marks — not a one-size face wash.",
    image: "/cmeel.png",
    href: "/blog/acne-treatment",
  },
  {
    title: "Anti-Aging Therapy",
    description:
      "Rejuvenate dull, ageing skin with dermatologist-led anti-aging treatments and medi-facials.",
    image: "/aging.png",
  },
  {
    title: "Hair Treatments & Laser Hair Removal",
    description:
      "Hair fall treatment for thinning and shedding, plus laser hair removal for unwanted hair.",
    image: "/hair.png",
    href: "/blog/hair-fall-treatment",
  },
  {
    title: "Mole / Skin Tag Removal",
    description:
      "Safe mole and skin tag removal using clinic procedures after a dermatologist examination.",
    image: "/mole.png",
  },
  {
    title: "Medi-Facials & Pigmentation Care",
    description:
      "Hydrafacials and pigmentation treatment to fade dark spots, tanning, and uneven tone.",
    image: "/1.webp",
    href: "/blog/pigmentation-treatment",
  },
  {
    title: "Earlobe Repair & Ear Piercing",
    description:
      "Restore split or stretched earlobes and get medical ear piercing in a sterile clinic setting.",
    image: "/earlobe.png",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={getHomeFaqJsonLd()} />
      <section
        id="home"
        className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-20"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Expert Neurology and Skin Care at{" "}
                  <span className="text-teal-600">Tvachit</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Specialized skin treatments with personalized care — in clinic
                  or through a remote consultation with Dr. Anisha Sharma.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href={`tel:${siteConfig.phoneTel}`}>Book a Consultation</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#treatments">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/hero2.png"
                width={400}
                height={400}
                alt="Tvachit Clinic"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Treatments
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive dermatological services for all skin conditions
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {treatments.map((treatment) => (
              <div
                key={treatment.title}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{treatment.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {treatment.description}
                  </p>
                  {treatment.href ? (
                    <Link
                      href={treatment.href}
                      className="mt-3 inline-block text-sm font-medium text-teal-600 hover:underline"
                    >
                      Read treatment guide
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="bg-white py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Doctors
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet our experienced specialists dedicated to your skin health
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/anisha-doc.png"
                  width={160}
                  height={160}
                  alt="Dr. Anisha Sharma"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {siteConfig.doctors.dermatologist.name}
                </h3>
                <p className="text-sm font-medium text-teal-600">
                  {siteConfig.doctors.dermatologist.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  A dedicated dermatologist committed to personalised skin and
                  hair care. Dr. Sharma treats acne, hair fall, pigmentation,
                  anti-aging concerns, and skin rejuvenation — in clinic or
                  through remote consultation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-sm">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/pankaj.png"
                  width={160}
                  height={160}
                  alt="Dr. Pankaj Sharma"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {siteConfig.doctors.neurologist.name}
                </h3>
                <p className="text-sm font-medium text-teal-600">
                  {siteConfig.doctors.neurologist.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  Dr. Sharma is a neurologist based in Vadodara with six years
                  of experience. He completed MBBS from S.S.G. Hospital &
                  Medical College Baroda in 2018, MD in General Medicine from LG
                  Hospital, Ahmedabad in 2021, and DM in Neurology from Sawai
                  Mansingh Medical College, Jaipur in 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Skin Care Guides from Our Clinic
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Dermatologist-written articles on acne, hair fall, and
                pigmentation
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 p-4 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-teal-600">
                      {post.category}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-sm font-medium text-teal-600">
                      Read article
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">View all articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex items-center justify-center">
              <Image
                src="/doctors.webp"
                width={400}
                height={400}
                alt="About Tvachit"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About Tvachit
                </h2>
                <p className="text-muted-foreground">
                  Tvachit is a premier dermatology and neurology clinic
                  dedicated to providing exceptional skin care and neurology
                  services. Our team of experienced doctors are committed to
                  helping you achieve healthy, beautiful skin and a healthy
                  mind. Dr. Anisha Sharma also offers remote consultations for
                  patients who cannot visit in person.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <Clock className="h-4 w-4 text-teal-600" />
                  </div>
                  <span>{siteConfig.hoursDisplay}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <MapPin className="h-4 w-4 text-teal-600" />
                  </div>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-teal-600 hover:underline"
                  >
                    {siteConfig.address.full} — view on Google Maps
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <Phone className="h-4 w-4 text-teal-600" />
                  </div>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="text-black hover:text-teal-600 hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <Instagram className="h-4 w-4 text-teal-600" />
                  </div>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-600 hover:underline"
                  >
                    tvachit_clinic
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                    <Mail className="h-4 w-4 text-teal-600" />
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-teal-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about Tvachit Clinic
            </p>
          </div>
          <FaqList faqs={clinicFaqs} />
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Have questions or want to schedule an in-clinic or remote
                appointment? Reach out to us.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-md space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-medium">Phone</h3>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="text-sm text-muted-foreground hover:text-teal-600"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-medium">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-teal-600"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex flex-col items-center space-y-2 text-center">
                <MapPin className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-medium">Address</h3>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-teal-600"
                >
                  {siteConfig.address.full}
                </a>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Clock className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-medium">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.hoursDisplay}
                </p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
