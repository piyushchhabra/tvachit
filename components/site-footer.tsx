import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xl font-bold text-teal-600">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              Acne, hair fall, pigmentation, and skin rejuvenation — in clinic
              or by remote consultation.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">Quick Links</p>
            <nav className="flex flex-col space-y-2" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-teal-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">Contact</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal-600" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal-600" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-teal-600" />
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {siteConfig.address.full}
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">Hours</p>
            <div className="space-y-2 text-sm">
              <p>{siteConfig.hoursDisplay}</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tvachit Dermatology Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
