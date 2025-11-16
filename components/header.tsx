"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const COMPANY_NAME = "1031 Exchange of Jacksonville";

import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

// Get top services - prioritize property identification services
const propertyIdentificationServices = servicesData.filter((s) => 
  s.category === "Property Paths"
).slice(0, 6);
const otherTopServices = servicesData
  .filter((s) => s.category !== "Property Paths")
  .slice(0, 2);
const topServices = [...propertyIdentificationServices, ...otherTopServices].slice(0, 8);
const services = topServices.map((s) => ({
  name: s.name,
  href: s.route,
}));

// Get top locations - Jacksonville first, then most populous cities
const topLocations = [
  locationsData.find((l) => l.slug === "jacksonville-fl"),
  ...locationsData
    .filter((l) => l.slug !== "jacksonville-fl" && l.type === "city")
    .slice(0, 5),
  ...locationsData
    .filter((l) => l.slug !== "jacksonville-fl" && l.type !== "city" && l.type !== "remote")
    .slice(0, 2),
].filter(Boolean).slice(0, 8) as typeof locationsData;
const locations = topLocations.map((l) => ({
  name: l.name,
  href: l.route,
}));

const totalServicesCount = servicesData.length;
const totalLocationsCount = locationsData.length;

const tools = [
  { name: "Boot Calculator", href: "/tools/boot-calculator" },
  { name: "Exchange Cost Estimator", href: "/tools/exchange-cost-estimator" },
  { name: "Identification Rules Checker", href: "/tools/identification-rules-checker" },
];

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toolsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setLocationsOpen(false);
        setToolsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 500);
  };

  const handleLocationsMouseEnter = () => {
    if (locationsTimeoutRef.current) {
      clearTimeout(locationsTimeoutRef.current);
    }
    setLocationsOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsOpen(false);
    }, 500);
  };

  const handleToolsMouseEnter = () => {
    if (toolsTimeoutRef.current) {
      clearTimeout(toolsTimeoutRef.current);
    }
    setToolsOpen(true);
  };

  const handleToolsMouseLeave = () => {
    toolsTimeoutRef.current = setTimeout(() => {
      setToolsOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label={`${COMPANY_NAME} home`}
        >
          <Image
            src="/1031-exchange-of-jacksonville-logo.png"
            alt={`${COMPANY_NAME} logo`}
            width={200}
            height={60}
            className="h-auto w-auto max-h-16"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-[#1F2937] md:flex"
          aria-label="Primary"
        >
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="hover:text-[#003366] focus-visible:text-[#003366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] focus-visible:ring-offset-2"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
            </button>
            {servicesOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-[#E5E7EB] bg-white shadow-xl"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="max-h-96 overflow-y-auto p-4">
                  <ul className="space-y-1">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-lg px-4 py-2 text-sm text-[#1F2937] transition hover:bg-[#F9FAFB] hover:text-[#003366] focus-visible:bg-[#F9FAFB] focus-visible:text-[#003366] focus-visible:outline-none"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                    <Link
                      href="/services/"
                      className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#003366] transition hover:bg-[#F9FAFB] focus-visible:bg-[#F9FAFB] focus-visible:outline-none"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All {totalServicesCount} Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            ref={locationsRef}
            className="relative"
            onMouseEnter={handleLocationsMouseEnter}
            onMouseLeave={handleLocationsMouseLeave}
          >
            <button
              type="button"
              aria-expanded={locationsOpen}
              aria-haspopup="true"
              className="hover:text-[#003366] focus-visible:text-[#003366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] focus-visible:ring-offset-2"
              onClick={() => setLocationsOpen(!locationsOpen)}
            >
              Service Areas
            </button>
            {locationsOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[#E5E7EB] bg-white shadow-xl"
                onMouseEnter={handleLocationsMouseEnter}
                onMouseLeave={handleLocationsMouseLeave}
              >
                <div className="p-4">
                  <ul className="space-y-1">
                    {locations.map((location) => (
                      <li key={location.href}>
                        <Link
                          href={location.href}
                          className="block rounded-lg px-4 py-2 text-sm text-[#1F2937] transition hover:bg-[#F9FAFB] hover:text-[#003366] focus-visible:bg-[#F9FAFB] focus-visible:text-[#003366] focus-visible:outline-none"
                          onClick={() => setLocationsOpen(false)}
                        >
                          {location.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                    <Link
                      href="/service-areas/"
                      className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#003366] transition hover:bg-[#F9FAFB] focus-visible:bg-[#F9FAFB] focus-visible:outline-none"
                      onClick={() => setLocationsOpen(false)}
                    >
                      View All Locations
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            ref={toolsRef}
            className="relative"
            onMouseEnter={handleToolsMouseEnter}
            onMouseLeave={handleToolsMouseLeave}
          >
            <button
              type="button"
              aria-expanded={toolsOpen}
              aria-haspopup="true"
              className="hover:text-[#003366] focus-visible:text-[#003366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366] focus-visible:ring-offset-2"
              onClick={() => setToolsOpen(!toolsOpen)}
            >
              Tools
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-[#E5E7EB] bg-white shadow-xl">
                <div className="p-4">
                  <ul className="space-y-1">
                    {tools.map((tool) => (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          className="block rounded-lg px-4 py-2 text-sm text-[#1F2937] transition hover:bg-[#F9FAFB] hover:text-[#003366] focus-visible:bg-[#F9FAFB] focus-visible:text-[#003366] focus-visible:outline-none"
                          onClick={() => setToolsOpen(false)}
                        >
                          {tool.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                    <Link
                      href="/tools"
                      className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#003366] transition hover:bg-[#F9FAFB] focus-visible:bg-[#F9FAFB] focus-visible:outline-none"
                      onClick={() => setToolsOpen(false)}
                    >
                      View All Tools
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/property-types/"
            className="hover:text-[#003366] focus-visible:text-[#003366]"
          >
            Property Types
          </Link>
          <Link
            href="/blog/"
            className="hover:text-[#003366] focus-visible:text-[#003366]"
          >
            Blog
          </Link>
          <Link
            href="/about/"
            className="hover:text-[#003366] focus-visible:text-[#003366]"
          >
            About
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-full bg-[#003366] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#01264f]"
          >
            Contact
          </Link>
        </nav>
        <a
          href={`tel:${PHONE.dial}`}
          className="inline-flex items-center gap-2 rounded-full border border-[#003366] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#003366] transition hover:bg-[#003366] hover:text-white md:hidden"
        >
          Call {PHONE.formatted}
        </a>
      </div>
    </header>
  );
}

