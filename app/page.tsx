"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Menu, Instagram, X } from "lucide-react"

import { Button } from "@/components/ui/button"

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#home" className="text-lg font-medium hover:text-teal-600" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#treatments" className="text-lg font-medium hover:text-teal-600" onClick={closeMenu}>
              Treatments
            </Link>
            <Link href="#doctors" className="text-lg font-medium hover:text-teal-600" onClick={closeMenu}>
              Doctors
            </Link>
            <Link href="#about" className="text-lg font-medium hover:text-teal-600" onClick={closeMenu}>
              About
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-teal-600" onClick={closeMenu}>
              Contact
            </Link>
            <div className="pt-4">
              <div className="flex items-center gap-2 py-2">
                <Phone className="h-4 w-4 text-teal-600" />
                <span>+91 6352717046</span>
              </div>
              <Button className="mt-2 w-full">Book Appointment</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-1">
            <Image
              src="/logo4.png"
              alt="Tvachit Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            {/* <span className="text-xl font-bold text-teal-600">Tvachit</span> */}
            <span className="hidden text-sm text-muted-foreground md:inline-block">Skin & Neurology Clinic</span>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-teal-600">
              Home
            </Link>
            <Link href="#treatments" className="text-sm font-medium hover:text-teal-600">
              Treatments
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-teal-600">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-teal-600">
              Contact
            </Link>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-600" />
              <span className="text-sm">+91 6352717046</span>
            </div>
            <Link href="tel:+916352717046">
              <Button size="sm">Book Appointment</Button>
            </Link>
          </div>
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button> */}
              <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Expert Neurology and Skin Care at <span className="text-teal-600">Tvachit</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Specialized skin treatments with personalized care for all your dermatological needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="tel:+916352717046">
                    <Button>Book a Consultation</Button>
                  </Link>
                  <Link href="#treatments">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/hero1.png?height=400&width=400"
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

        {/* Treatments Section */}
        <section id="treatments" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Treatments</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive dermatological services for all skin conditions
                </p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{treatment.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

             {/* Doctors Section */}
             <section id="doctors" className="bg-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Doctors</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Meet our experienced specialists dedicated to your skin health
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/anisha-doc.png?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Dr. Anisha Sharma"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Dr. Anisha Sharma</h3>
                  <p className="text-sm font-medium text-teal-600">Dermatologist & Cosmetologist</p>
                  <p className="text-sm text-muted-foreground">
                    A dedicated dermatologist committed to providing personalized and effective skincare solutions. With years of experience and a passion for dermatology, I aim to help you achieve healthy, beautiful skin through comprehensive and innovative treatments. Whether you're seeking solutions for hair loss, acne, anti-aging, or skin rejuvenation, I am here to guide you on your journey to optimal skin health..
                  </p>
                </div>
                {/* <Button variant="outline" size="sm">
                  View Profile
                </Button> */}
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/pankaj.png?height=160&width=160"
                    width={160}
                    height={160}
                    alt="Dr. Rajesh Patel"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Dr. Pankaj Sharma</h3>
                  <p className="text-sm font-medium text-teal-600">Neurologist</p>
                  <p className="text-sm text-muted-foreground">
                  Dr. Sharma is a neurologist based in Vadodara. He has an overall experience of six years in the field, specializing in various neurological conditions. He completed his MBBS from S.S.G. Hospital & Medical College Baroda in 2018, followed by an MD in General Medicine from LG Hospital, Ahmedabad in 2021, and a DM in Neurology from Sawai Mansingh Medical College, Jaipur in 2023
                  </p>
                </div>
                {/* <Button variant="outline" size="sm">
                  View Profile
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-slate-50 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex items-center justify-center">
                <Image
                  src="/doctors.webp?height=400&width=400"
                  width={400}
                  height={400}
                  alt="About Tvachit"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Tvachit</h2>
                  <p className="text-muted-foreground">
                    Tvachit is a premier dermatology and neurology clinic dedicated to providing exceptional skin care and neurology services. Our
                    team of experienced doctors are committed to helping you achieve healthy, beautiful skin and a healthy mind.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                      <Clock className="h-4 w-4 text-teal-600" />
                    </div>
                    <span>Open Monday to Saturday, 9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                      <MapPin className="h-4 w-4 text-teal-600" />
                    </div>
                    <a 
                        href="https://maps.app.goo.gl/6z32WBDE3YrCv6m69" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black hover:text-teal-600 hover:underline"
                    >
                        View Location on Google Maps
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                      <Phone className="h-4 w-4 text-teal-600" />
                    </div>
                    <a href="tel:+916352717046" className="text-black hover:text-teal-600 hover:underline">+91 63527 17046</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                      <Instagram className="h-4 w-4 text-teal-600" />
                    </div>
                    <span><a href="https://www.instagram.com/tvachit_clinic" target="_blank" rel="noopener noreferrer">tvachit_clinic</a></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                      <Mail className="h-4 w-4 text-teal-600" />
                    </div>
                    <span>tvachitclinic@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="max-w-[600px] text-muted-foreground">
                  Have questions or want to schedule an appointment? Reach out to us.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-md space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Phone className="h-6 w-6 text-teal-600" />
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 63527 17046 </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <Mail className="h-6 w-6 text-teal-600" />
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">tvachitclinic@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground">Anand Baug Society, Tarsali, Vadodara</p>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-medium">Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday to Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-teal-600">Tvachit</span>
              </div>
              <p className="text-sm text-muted-foreground">Expert dermatological care for all your skin concerns.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#home" className="text-sm hover:text-teal-600">
                  Home
                </Link>
                <Link href="#treatments" className="text-sm hover:text-teal-600">
                  Treatments
                </Link>
                <Link href="#about" className="text-sm hover:text-teal-600">
                  About
                </Link>
                <Link href="#contact" className="text-sm hover:text-teal-600">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span>+91 6352717046
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>tvachitclinic@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span>Anand Baug Society, Tarsali, Vadodara</span>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Hours</h3>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tvachit Dermatology Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
// image: "/placeholder.svg?height=400&width=400",
const treatments = [
  {
    title: "Acne Treatment",
    description: "Effective solutions for all types of acne, from mild to severe cases.",
    image: "/cmeel.png?height=400&width=400",
  },
  {
    title: "Anti-Aging Therapy",
    description: "Rejuvenate your skin with our advanced anti-aging treatments.",
    image: "/aging.png?height=400&width=400",
  },
  {
    title: "Hair Treatements & Laser Hair Removal",
    description: "Permanent hair reduction using state-of-the-art laser technology.",
    image: "/hair.png?height=400&width=400",
  },
  {
    title: "Mole / Skintag Removal",
    description: "Expert mole and skin tag removal services using safe and effective methods.",
    image: "/mole.png?height=400&width=400",
  },
  {
    title: "Medi-Facials",
    description: "Hydrafacial treatment for deep cleansing, hydration, and a radiant complexion.",
    image: "/1.webp?height=400&width=400",
  },
  {
    title: "Earlobe Repair & Ear Piercing",
    description: "Restore and enhance your earlobes with our professional ear lobe repair and piercing services.",
    image: "/earlobe.png?height=400&width=400",
  },
]
