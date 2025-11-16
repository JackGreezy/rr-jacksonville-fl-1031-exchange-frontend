"use client";

import { Suspense } from "react";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "@/components/contact-form";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

function ContactPageContent() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1
              className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Contact Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
              Get in touch with our Jacksonville team to discuss your 1031 exchange property identification needs.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                  Phone
                </p>
                <a
                  href={`tel:${PHONE.dial}`}
                  className="mt-2 block text-lg font-semibold text-[#003366] hover:text-[#01264f]"
                >
                  {PHONE.formatted}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 block text-lg font-semibold text-[#003366] hover:text-[#01264f]"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                  Hours
                </p>
                <p className="mt-2 text-lg text-[#1F2937]/80">
                  24 hours a day, 7 days a week
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#003366] mb-2">{ADDRESS}</p>
              <div className="aspect-[3/1] w-full max-h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${ADDRESS}`}
                />
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
      <Script id="contact-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          description: `Contact ${COMPANY_NAME} for property identification services`,
        })}
      </Script>
    </Suspense>
  );
}

