"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import SearchInput from "@/components/search-input";
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

const propertyTypes = [
  {
    name: "Multifamily Communities",
    description: "Garden, mid-rise, and mixed-income properties across Duval, Clay, and St. Johns counties.",
    href: "/services/multifamily-property-identification",
  },
  {
    name: "Industrial and Logistics",
    description: "Warehouse, flex, and cold storage sites supporting JAXPORT, Cecil Commerce, and I-95 corridors.",
    href: "/services/industrial-warehouse-identification",
  },
  {
    name: "Retail and NNN Pads",
    description: "Coastal strip centers, single-tenant NNN, and hospitality assets near ports and interstates.",
    href: "/services/retail-nnn-property-identification",
  },
  {
    name: "Medical and Professional Office",
    description: "Health campuses, surgery centers, and professional condos with long-term credit tenants.",
    href: "/services/medical-office-identification",
  },
  {
    name: "Self Storage",
    description: "Climate-controlled and drive-up self storage facilities across Jacksonville and surrounding markets.",
    href: "/services/self-storage-identification",
  },
  {
    name: "STNL Properties",
    description: "Single tenant net lease properties with credit tenants and long-term lease structures.",
    href: "/services/stnl-property-identification",
  },
  {
    name: "Flex Space",
    description: "Office-warehouse combinations and flex properties suitable for light industrial and office uses.",
    href: "/services/flex-space-identification",
  },
  {
    name: "Hospitality and Resort Assets",
    description: "Boutique hotels, marinas, and coastal resorts balancing leisure demand with operational controls.",
    href: "/services/hospitality-property-identification",
  },
  {
    name: "Land and Agricultural",
    description: "Timber, transitional land, and conservation swaps that demand precise eligibility guidance.",
    href: "/services/land-agricultural-identification",
  },
  {
    name: "Mixed Use",
    description: "Properties combining residential, retail, and office uses in urban and suburban settings.",
    href: "/services/mixed-use-property-identification",
  },
];

export default function PropertyTypesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredTypes = searchQuery
    ? propertyTypes.filter((type) =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : propertyTypes;

  const handleNoResults = (query: string) => {
    router.push(`/contact/?projectType=${encodeURIComponent(query)}`);
  };

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Property Types" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Property Types
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Explore property types available for 1031 exchange replacement properties in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
        </p>
        <div className="mt-8">
          <SearchInput
            placeholder="Search property types..."
            items={propertyTypes.map((t) => ({ name: t.name, href: t.href }))}
            onNoResults={handleNoResults}
            className="max-w-md"
          />
        </div>
        {filteredTypes.length === 0 ? (
          <div className="mt-12 rounded-2xl bg-[#E8F5FF] p-8 text-center">
            <h2
              className={`${playfair.variable} text-2xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              We can help with "{searchQuery}"
            </h2>
            <p className="mt-4 text-[#1F2937]/80">
              Contact us to discuss property identification for this property type.
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
            {filteredTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                  {type.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                  {type.description}
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




