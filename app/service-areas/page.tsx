"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import SearchInput from "@/components/search-input";
import { Inter, Playfair_Display } from "next/font/google";
import { locationsData } from "@/data/locations";

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

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredLocations = searchQuery
    ? locationsData.filter((location) =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : locationsData;

  const handleNoResults = (query: string) => {
    router.push(`/contact/?projectType=${encodeURIComponent(`Other - ${query}`)}`);
  };

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Service Areas" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Service Areas
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          We help investors identify 1031 exchange replacement properties throughout {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} and surrounding communities.
        </p>
        <div className="mt-8">
          <SearchInput
            placeholder="Search locations..."
            items={locationsData.map((l) => ({ name: l.name, href: l.route }))}
            onNoResults={handleNoResults}
            className="max-w-md"
          />
        </div>
        {filteredLocations.length === 0 ? (
          <div className="mt-12 rounded-2xl bg-[#E8F5FF] p-8 text-center">
            <h2
              className={`${playfair.variable} text-2xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              We can help with "{searchQuery}"
            </h2>
            <p className="mt-4 text-[#1F2937]/80">
              Contact us to discuss property identification in your area.
            </p>
            <Link
              href={`/contact/?projectType=${encodeURIComponent(`Other - ${searchQuery}`)}`}
              className="mt-6 inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLocations.map((location) => {
              const locationImage = location.heroImage || `/locations/${location.slug}-1031-exchange.jpg`;
              return (
                <Link
                  key={location.slug}
                  href={location.route}
                  className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {locationImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={locationImage}
                        alt={`${location.name} 1031 Exchange Properties`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                      {location.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                      We help investors identify 1031 exchange replacement properties in {location.name}, {PRIMARY_STATE_ABBR}. Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#003366]">
                      Learn more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

