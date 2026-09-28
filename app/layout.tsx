import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getClinicJsonLd, ogImage, siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Best Dermatologist in Vadodara | Tvachit Skin & Hair Clinic",
    template: "%s | Tvachit Clinic",
  },
  description:
    "Tvachit Clinic is a dermatologist for acne treatment, hair fall treatment, pigmentation, laser hair removal, and skin care. In-clinic and remote consultations with Dr. Anisha Sharma.",
  keywords: [
    "dermatologist in vadodara",
    "skin specialist vadodara",
    "best dermatologist vadodara",
    "acne treatment vadodara",
    "hair fall treatment vadodara",
    "pigmentation treatment vadodara",
    "remote dermatology consultation",
    "skin clinic tarsali",
  ],
  authors: [{ name: "Tvachit Clinic", url: siteConfig.url }],
  creator: "Tvachit Clinic",
  publisher: "Tvachit Clinic",
  category: "health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Dermatologist in Vadodara | Tvachit Skin & Hair Clinic",
    description:
      "Acne, hair fall, pigmentation, and skin treatments. In-clinic and remote consultations with Dr. Anisha Sharma at Tvachit Clinic.",
    url: siteConfig.url,
    siteName: "Tvachit Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage.url,
        secureUrl: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        type: ogImage.type,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dermatologist in Vadodara | Tvachit Skin & Hair Clinic",
    description:
      "Acne, hair fall, pigmentation, and skin treatments. In-clinic and remote consultations with Dr. Anisha Sharma.",
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <JsonLd data={getClinicJsonLd()} />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
