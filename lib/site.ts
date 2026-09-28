export const siteConfig = {
  name: "Tvachit Clinic",
  legalName: "Tvachit Dermatology & Neurology Clinic",
  url: "https://www.tvachit.com",
  phoneDisplay: "+91 63527 17046",
  phoneTel: "+916352717046",
  email: "tvachitclinic@gmail.com",
  instagram: "https://www.instagram.com/tvachit_clinic",
  mapsUrl: "https://maps.app.goo.gl/6z32WBDE3YrCv6m69",
  address: {
    street: "Anand Baug Society",
    locality: "Tarsali",
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390009",
    country: "IN",
    full: "Anand Baug Society, Tarsali, Vadodara, Gujarat",
  },
  geo: {
    latitude: 22.256756958242985,
    longitude: 73.20508805307608,
  },
  hours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:30",
      closes: "13:00",
    },
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  hoursDisplay: "Monday to Saturday: 10:30 AM – 1:00 PM | 5:00 PM – 8:00 PM",
  doctors: {
    dermatologist: {
      name: "Dr. Anisha Sharma",
      role: "Dermatologist & Cosmetologist",
      image: "/anisha-doc.png",
    },
    neurologist: {
      name: "Dr. Pankaj Sharma",
      role: "Neurologist",
      image: "/pankaj.png",
    },
  },
} as const;

export const ogImage = {
  url: `${siteConfig.url}/og-image.jpg`,
  width: 833,
  height: 625,
  type: "image/jpeg",
  alt: "Tvachit Clinic — skin and hair treatment",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const clinicFaqs = [
  {
    question: "Does Dr. Anisha Sharma offer remote consultations?",
    answer:
      "Yes. Dr. Anisha Sharma provides remote dermatology consultations in addition to in-clinic visits. Call +91 63527 17046 to book a video or phone consultation for acne, hair fall, pigmentation, and other skin concerns.",
  },
  {
    question: "What skin and hair treatments are available at Tvachit Clinic?",
    answer:
      "Tvachit offers acne treatment, hair fall and laser hair removal, anti-aging therapy, pigmentation care, mole and skin tag removal, medi-facials, and earlobe repair. Treatment is prescribed after a consultation — in clinic or remotely.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Call +91 63527 17046, visit Tvachit Clinic at Anand Baug Society, Tarsali, or message the clinic on Instagram @tvachit_clinic. You can book an in-person visit or a remote consultation with Dr. Anisha Sharma.",
  },
  {
    question: "What are Tvachit Clinic timings?",
    answer:
      "The clinic is open Monday to Saturday from 10:30 AM to 1:00 PM and 5:00 PM to 8:00 PM. It is closed on Sunday. Remote consultations can be scheduled during clinic hours.",
  },
];

export function getClinicJsonLd() {
  const clinicId = `${siteConfig.url}/#clinic`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
        "@id": clinicId,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteConfig.url,
        image: `${siteConfig.url}/og-image.jpg`,
        logo: `${siteConfig.url}/logo4.png`,
        description:
          "Dermatology and neurology clinic in Tarsali, Vadodara offering acne treatment, hair fall treatment, pigmentation care, laser hair removal, and skin rejuvenation.",
        telephone: siteConfig.phoneTel,
        email: siteConfig.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.street}, ${siteConfig.address.locality}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.mapsUrl,
        areaServed: [
          { "@type": "City", name: "Vadodara" },
          { "@type": "AdministrativeArea", name: "Tarsali" },
          { "@type": "State", name: "Gujarat" },
        ],
        medicalSpecialty: [
          "Dermatology",
          "CosmeticDermatology",
          "Neurology",
        ],
        openingHoursSpecification: siteConfig.hours.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
        sameAs: [siteConfig.instagram],
        employee: [
          {
            "@type": "Physician",
            name: siteConfig.doctors.dermatologist.name,
            jobTitle: siteConfig.doctors.dermatologist.role,
            image: `${siteConfig.url}${siteConfig.doctors.dermatologist.image}`,
            medicalSpecialty: "Dermatology",
            worksFor: { "@id": clinicId },
          },
          {
            "@type": "Physician",
            name: siteConfig.doctors.neurologist.name,
            jobTitle: siteConfig.doctors.neurologist.role,
            image: `${siteConfig.url}${siteConfig.doctors.neurologist.image}`,
            medicalSpecialty: "Neurology",
            worksFor: { "@id": clinicId },
          },
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "In-clinic dermatology consultation",
          },
          {
            "@type": "MedicalProcedure",
            name: "Remote dermatology consultation",
            procedureType: "Telemedicine",
          },
        ],
      },
    ],
  };
}

export function getHomeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: clinicFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
