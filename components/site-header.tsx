"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo4.png"
            alt="Tvachit Skin and Neurology Clinic"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden text-sm text-muted-foreground md:inline-block">
            Skin & Neurology Clinic
          </span>
        </Link>
        <nav
          className="hidden md:flex md:items-center md:gap-6"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center gap-2 text-sm"
          >
            <Phone className="h-4 w-4 text-teal-600" />
            {siteConfig.phoneDisplay}
          </a>
          <Button size="sm" asChild>
            <a href={`tel:${siteConfig.phoneTel}`}>Book Appointment</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-50 bg-white p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center gap-2 py-2"
              >
                <Phone className="h-4 w-4 text-teal-600" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <Button className="mt-2 w-full" asChild>
                <a href={`tel:${siteConfig.phoneTel}`}>Book Appointment</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
