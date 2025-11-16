"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import SearchInput from "@/components/search-input";
import { Inter, Playfair_Display } from "next/font/google";
import { servicesData } from "@/data/services";

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

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredServices = searchQuery
    ? servicesData.filter((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : servicesData;

  const handleNoResults = (query: string) => {
    router.push(`/contact/?projectType=${encodeURIComponent(query)}`);
  };

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Our Services
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Comprehensive 1031 exchange property identification and coordination services for investors in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
        </p>
        <div className="mt-8">
          <SearchInput
            placeholder="Search services..."
            items={servicesData.map((s) => ({ name: s.name, href: s.route }))}
            onNoResults={handleNoResults}
            className="max-w-md"
          />
        </div>
        {filteredServices.length === 0 ? (
          <div className="mt-12 rounded-2xl bg-[#E8F5FF] p-8 text-center">
            <h2
              className={`${playfair.variable} text-2xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              We can help with "{searchQuery}"
            </h2>
            <p className="mt-4 text-[#1F2937]/80">
              Contact us to discuss your specific 1031 exchange needs.
            </p>
            <Link
              href={`/contact/?projectType=${encodeURIComponent(searchQuery)}`}
              className="mt-6 inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                  {service.short}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#003366]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

