"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";

const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

const propertyTypes = [
  { name: "Triple Net", href: "/property-types/triple-net" },
  { name: "Land", href: "/property-types/land" },
  { name: "Residential", href: "/property-types/residential" },
  { name: "Commercial", href: "/property-types/commercial" },
  { name: "Retail", href: "/property-types/retail" },
  { name: "Industrial", href: "/property-types/industrial" },
  { name: "Hospitality", href: "/property-types/hospitality" },
];

// Get top services for dropdown
const topServices = servicesData.slice(0, 8);

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[6px]">
      <span className="w-6 h-[1px] bg-white" />
      <span className="w-6 h-[1px] bg-white" />
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const propertiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const propertiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPropertiesOpen(false);
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handlePropertiesMouseEnter = () => {
    if (propertiesTimeoutRef.current) {
      clearTimeout(propertiesTimeoutRef.current);
    }
    setServicesOpen(false);
    setPropertiesOpen(true);
  };

  const handlePropertiesMouseLeave = () => {
    propertiesTimeoutRef.current = setTimeout(() => {
      setPropertiesOpen(false);
    }, 300);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setPropertiesOpen(false);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              ref={propertiesRef}
              className="relative"
              onMouseEnter={handlePropertiesMouseEnter}
              onMouseLeave={handlePropertiesMouseLeave}
            >
              <button
                type="button"
                aria-expanded={propertiesOpen}
                aria-haspopup="true"
                className="nav-link flex items-center"
              >
                Properties
                <ChevronDown />
              </button>
              {propertiesOpen && (
                <div
                  className="absolute left-0 top-full mt-4 w-56 bg-[#1a1a1a] border border-white/10 shadow-2xl"
                  onMouseEnter={handlePropertiesMouseEnter}
                  onMouseLeave={handlePropertiesMouseLeave}
                >
                  <div className="py-2">
                    {propertyTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setPropertiesOpen(false)}
                      >
                        {type.name}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <Link
                        href="/property-types"
                        className="block px-5 py-3 text-sm text-[#c9a962] hover:text-white transition-colors"
                        onClick={() => setPropertiesOpen(false)}
                      >
                        View All Types
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                className="nav-link flex items-center"
              >
                Services
                <ChevronDown />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 top-full mt-4 w-72 bg-[#1a1a1a] border border-white/10 shadow-2xl"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="py-2">
                    {topServices.map((service) => (
                      <Link
                        key={service.route}
                        href={service.route}
                        className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <Link
                        href="/services"
                        className="block px-5 py-3 text-sm text-[#c9a962] hover:text-white transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All {servicesData.length} Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/service-areas" className="nav-link">
              Service Areas
            </Link>
          </nav>

          {/* Center Logo */}
          <Link
            href="/"
            className="logo-cursive text-2xl md:text-3xl lg:text-4xl"
            aria-label="Jacksonville 1031 - Home"
          >
            Jacksonville 1031
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>

            <a href={`tel:${PHONE.dial}`} className="inline-flex shrink-0 items-center whitespace-nowrap border border-[#c9a962]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#c9a962] hover:text-[#1a1a1a]">
              Call {PHONE.formatted}
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="nav-link flex items-center gap-2"
              aria-label="Open menu"
            >
              Menu
              <HamburgerIcon />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Half-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Drawer - Opens from right, 50% width */}
          <div className="fixed right-0 top-0 bottom-0 w-[50vw] min-w-[300px] max-w-[500px] z-[101] bg-[#1a1a1a] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/10">
              <Link
                href="/"
                className="logo-cursive text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jacksonville 1031
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c9a962] transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Menu Content - Only Main Navigation */}
            <div className="px-8 py-12">
              <nav className="space-y-6">
                <Link
                  href="/"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/property-types"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Property Types
                </Link>
                <Link
                  href="/service-areas"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Service Areas
                </Link>
                <Link
                  href="/services"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/tools"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tools
                </Link>
                <Link
                  href="/blog"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block font-display text-3xl text-white hover:text-[#c9a962] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href={`tel:${PHONE.dial}`}
                  className="mt-8 block bg-[#c9a962] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#1a1a1a] transition hover:bg-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Consultation: {PHONE.formatted}
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
