import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Best Dermatologist in Vadodara | Skin & Hair Treatment Center',
  description: 'Expert dermatologist in Vadodara offering advanced skin care and hair loss treatments. Book consultation with the best skin specialist in Vadodara for personalized solutions.',
  keywords: 'dermatologist in vadodara, skin specialist vadodara, best dermatologist vadodara, hair loss treatment vadodara, skin clinic vadodara',
  authors: [{ name: 'Tvachit Clinic' }],
  creator: 'Tvachit Clinic',
  publisher: 'Tvachit Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tvachit.com'),
  openGraph: {
    title: 'Best Dermatologist in Vadodara | Skin & Hair Treatment Center',
    description: 'Expert dermatologist in Vadodara offering advanced skin care and hair loss treatments. Book consultation with the best skin specialist in Vadodara for personalized solutions.',
    url: 'https://tvachit.com',
    siteName: 'Tvachit Clinic - Dermatologist in Vadodara',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tvachit Clinic - Best Dermatologist in Vadodara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dermatologist in Vadodara | Skin & Hair Treatment Center',
    description: 'Expert dermatologist in Vadodara offering advanced skin care and hair loss treatments. Book consultation with the best skin specialist in Vadodara for personalized solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tvachit.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Tvachit Clinic",
              "image": "https://tvachit.com/og-image.jpg",
              "description": "Expert dermatologist in Vadodara offering advanced skin care and hair loss treatments.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vadodara",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "url": "https://tvachit.com",
              "telephone": "YOUR_PHONE_NUMBER",
              "priceRange": "₹₹",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "YOUR_FACEBOOK_URL",
                "YOUR_INSTAGRAM_URL"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
