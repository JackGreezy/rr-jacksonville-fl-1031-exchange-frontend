import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import ContactForm from "@/components/contact-form";
import {
  ArrowRight,
  Boxes,
  Briefcase,
  Building2,
  Calculator,
  CalendarClock,
  CheckCircle2,
  Compass,
  DollarSign,
  FileCheck2,
  Handshake,
  Layers3,
  LineChart,
  Map,
  MapPin,
  PhoneCall,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  TreePine,
  TrendingUp,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { inventorySpotlight01 } from "@/data/batches/inventory/batch-01";

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

const SITE_URL = "https://www.1031exchangeofjacksonville.com/";
const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

type LucideIconComponent = typeof ShieldCheck;

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIconComponent;
};

type ServiceCard = FeatureCard & { href: string };

type PropertyType = FeatureCard & { image?: string };

export const metadata: Metadata = {
  title: "Jacksonville 1031 Exchange Experts | Florida Qualified Intermediary Network",
  description:
    "1031 exchange guidance for investors across Jacksonville and North Florida. Local intermediary partnerships, CPA and attorney coordination, and IRS-compliant timelines.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Jacksonville 1031 Exchange Experts",
    description:
      "Trusted 1031 specialists for Florida real estate investors. Local expertise, precise execution, and transparent process management.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacksonville 1031 Exchange Experts",
    description:
      "Defer capital gains taxes with an IRS-compliant 1031 exchange. Serving Jacksonville, St. Augustine, and investors across Florida.",
    images: ["/og-image.png"],
  },
};

const trustItems: FeatureCard[] = [
  {
    title: "CPA Partner",
    description: "Audit-ready reporting",
    icon: FileCheck2,
  },
  {
    title: "Qualified Intermediary Network",
    description: "Bonded coverage",
    icon: ShieldCheck,
  },
  {
    title: "Attorney Coordination",
    description: "Florida compliance",
    icon: Scale,
  },
  {
    title: "Local Expertise",
    description: "North Florida advisors",
    icon: MapPin,
  },
  {
    title: "IRS-Compliant Process",
    description: "Tight deadline control",
    icon: CheckCircle2,
  },
];

const whyCards: FeatureCard[] = [
  {
    title: "Statewide Florida insight",
    description:
      "We speak the language of Jacksonville, Miami, Orlando, and every coastal submarket investors target.",
    icon: MapPin,
  },
  {
    title: "Qualified intermediary oversight",
    description:
      "Direct access to trusted QI partners safeguards escrow handling and Section 1031 documentation.",
    icon: ShieldCheck,
  },
  {
    title: "CPA and attorney collaboration",
    description:
      "Shared workspaces keep tax advisors, real estate counsel, and title teams aligned at each milestone.",
    icon: Scale,
  },
  {
    title: "Transparent milestones",
    description:
      "Countdown dashboards map the 45-day identification and 180-day closing checkpoints for every exchange.",
    icon: FileCheck2,
  },
  {
    title: "Local responsiveness",
    description:
      "Jacksonville-based coordinators keep investors informed in plain English, without jargon or surprises.",
    icon: PhoneCall,
  },
];

const processSteps: FeatureCard[] = [
  {
    title: "Sell your relinquished property",
    description:
      "Open escrow with a bonded Florida 1031 intermediary before closing funds are received.",
    icon: TrendingUp,
  },
  {
    title: "Identify replacement by Day 45",
    description:
      "Document up to three properties or use the 200 percent rule with written notices to your intermediary.",
    icon: Compass,
  },
  {
    title: "Close within 180 days",
    description:
      "Coordinate lenders, title, and counsel to fund the new purchase before the 180th day expires.",
    icon: CalendarClock,
  },
];

const topHomepageServices = servicesData.slice(0, 6);
const services: ServiceCard[] = topHomepageServices.map((service, index) => {
  const icons = [Layers3, Compass, ShieldCheck, CalendarClock, Handshake, LineChart];
  return {
    title: service.name,
    description: service.short,
    icon: icons[index % icons.length],
    href: service.route,
  };
});

const propertyTypes: PropertyType[] = [
  {
    title: "Multifamily communities",
    description:
      "Garden, mid-rise, and mixed-income properties across Duval, Clay, and St. Johns counties.",
    icon: Building2,
    image: "/inventory/multifamily-1031-exchange.jpg",
  },
  {
    title: "Retail and Triple Net Lease Properties",
    description:
      "Coastal strip centers, single-tenant triple net lease properties, and hospitality assets near ports and interstates. NNN investments feature creditworthy corporate tenants who cover property expenses, providing stable passive income with minimal landlord responsibilities.",
    icon: Store,
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    title: "Medical and professional office",
    description:
      "Health campuses, surgery centers, and professional condos with long-term credit tenants.",
    icon: Briefcase,
    image: "/inventory/medical-office-1031-exchange.jpg",
  },
  {
    title: "Industrial and logistics",
    description:
      "Warehouse, flex, and cold storage sites supporting JAXPORT, Cecil Commerce, and I-95 corridors.",
    icon: Boxes,
    image: "/inventory/industrial-1031-exchange.jpg",
  },
  {
    title: "Hospitality and resort assets",
    description:
      "Boutique hotels, marinas, and coastal resorts balancing leisure demand with operational controls.",
    icon: Map,
    image: "/inventory/hospitality-resort-1031-exchange.jpg",
  },
  {
    title: "Land and agricultural",
    description:
      "Timber, transitional land, and conservation swaps that demand precise eligibility guidance.",
    icon: TreePine,
    image: "/inventory/land-agricultural-1031-exchange.jpg",
  },
];

const irsResources = [
  {
    label: "IRS Form 8824",
    href: "https://www.irs.gov/forms-pubs/about-form-8824",
  },
  {
    label: "Like-Kind Property Rules",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips",
  },
  {
    label: "Rev. Proc. 2008-16 Safe Harbor",
    href: "https://www.irs.gov/irb/2008-04_IRB#RP-2008-16",
  },
];

const topHomepageLocations = [
  locationsData.find((l) => l.slug === "jacksonville-fl"),
  ...locationsData.filter((l) => l.slug !== "jacksonville-fl" && l.type !== "remote").slice(0, 7),
].filter(Boolean) as typeof locationsData;

const faqItems = [
  {
    question: "What are the 45 and 180 day deadlines?",
    answer:
      "You have 45 calendar days from the sale of your relinquished property to identify replacement properties in writing, and 180 calendar days to close on one or more of those properties. The federal deadline shortens if your tax filing is due sooner, so extensions may be required.",
  },
  {
    question: "Which properties qualify as like-kind?",
    answer:
      "Any real property held for investment or productive use in a trade or business is considered like-kind to any other qualifying real property within the United States. Primary residences and inventory do not qualify, while multifamily, retail, land, and commercial assets typically do.",
  },
  {
    question: "What is boot and how is it taxed?",
    answer:
      "Boot is any cash or non-like-kind property received in an exchange. Boot is taxable up to the amount of capital gain realized, so reinvesting the full net equity and replacing equal or greater debt is essential to defer 100 percent of the gain.",
  },
  {
    question: "Are transfer taxes deferred in Florida?",
    answer:
      "A 1031 exchange defers federal and Florida income tax on qualifying real property, but documentary stamp taxes, transfer fees, and local surtaxes are still due at closing per Florida law.",
  },
  {
    question: "Can I complete a reverse exchange?",
    answer:
      "Yes. A reverse or improvement exchange uses an Exchange Accommodation Titleholder (EAT) to hold the replacement property until your relinquished asset sells, provided all exchange funds are controlled by a qualified intermediary.",
  },
  {
    question: "How do I report with Form 8824?",
    answer:
      "Form 8824 summarizes the relinquished and replacement properties, dates, boot received, and gain deferred. Your CPA files it with your federal return and keeps backup schedules from your intermediary.",
  },
];

const hasStaffedOffice = false;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}og-image.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE.dial,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: "en",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`h-16 w-full text-[#E6F2FF] ${flip ? "rotate-180" : ""}`}
    >
      <path
        fill="currentColor"
        d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32V80H1360C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80H0Z"
      />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5B800]">
      {children}
    </p>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIconComponent }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-[#003366] shadow-sm ring-1 ring-white/50">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#003366] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div
        className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}
      >
        <main id="main-content">
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#E4F1FF] to-[#F9FAFB] pb-24 pt-16"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#C9E6FF]/30 to-transparent" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:px-10">
            <div
              className="flex-1 space-y-8"
              data-animate="fade-right"
            >
              <SectionEyebrow>Florida coastal confidence</SectionEyebrow>
              <h1
                className={`${playfair.className} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
              >
                Jacksonville 1031 Exchange Experts
              </h1>
              <p className="text-lg leading-relaxed text-[#1F2937]/80">
                Florida investors rely on us to navigate every stage of a 1031 exchange, from
                structuring relinquished sales to coordinating qualified intermediaries and keeping the
                45-day identification and 180-day closing deadlines on track.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#lead-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#003366] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-[#003366]/25 transition hover:bg-[#01264f]"
                >
                  Start My Exchange
                </Link>
                <a
                  href={`tel:${PHONE.dial}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#003366] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-white/80"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Call {PHONE.formatted}
                </a>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#003366]">
                45 day identification. 180 day closing. We help you stay on schedule.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#F5B800] shadow">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#003366]">Florida 1031 intermediary</p>
                    <p className="text-sm text-[#1F2937]/70">
                      Jacksonville-based coordinators and statewide partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#003366] shadow">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#003366]">Qualified intermediary Jacksonville</p>
                    <p className="text-sm text-[#1F2937]/70">
                      Bonded partners with segregated escrow and E&O coverage.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-[#0b3b64]/10 lg:hidden"
                data-animate="fade-up"
              >
                <p className="text-sm text-[#1F2937]/80">
                  Need to send details from your phone? Email{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-[#003366]"
                  >
                    {EMAIL}
                  </a>{" "}
                  or call {PHONE.formatted}. A coordinator will return a secure intake link.
                </p>
              </div>
            </div>
            <div className="flex flex-1 justify-end">
              <div
                id="lead-form"
                className="hidden w-full max-w-lg rounded-3xl border border-white/50 bg-white/85 p-8 shadow-2xl shadow-[#0b3b64]/20 backdrop-blur-2xl lg:block"
                data-animate="fade-left"
              >
                <h2
                  className={`${playfair.className} text-2xl font-semibold tracking-tight text-[#003366]`}
                >
                  Request 1031 guidance
                </h2>
                <p className="mt-2 text-sm text-[#1F2937]/70">
                  Educational content only. Not tax or legal advice.
                </p>
                <div className="mt-6">
                  <ContactForm showTitle={false} className="!border-0 !shadow-none !p-0" />
                </div>
              </div>
            </div>
          </div>
          <WaveDivider />
        </section>

        <section className="bg-[#003366] py-8 text-white" data-animate="fade-up">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 md:px-10">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <IconBadge icon={item.icon} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5B800]">
                    {item.title}
                  </p>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl space-y-4" data-animate="fade-right">
              <SectionEyebrow>Why Florida investors choose us</SectionEyebrow>
              <h2
                className={`${playfair.className} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366]`}
              >
                Florida clarity, transparent milestones, and coastal confidence
              </h2>
              <p className="text-lg text-[#1F2937]/80">
                We orchestrate the full exchange lifecycle so investors can focus on acquisitions.
                Every deliverable is documented, every partner looped in, and every escrow protected.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-[#E5E7EB] bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  data-animate="fade-up"
                >
                  <IconBadge icon={card.icon} />
                  <h3 className="mt-4 text-xl font-semibold text-[#003366]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10 rounded-2xl bg-[#F9FAFB] p-6 text-sm text-[#1F2937]/80">
              A 1031 exchange defers federal and Florida income tax on qualifying real property. It
              does not remove documentary stamp or transfer fees.{" "}
              <a
                href="https://floridarevenue.com/taxes/taxesfees/pages/doc_stamp.aspx"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#003366] underline decoration-[#F5B800] decoration-2 underline-offset-4"
              >
                Review Florida transfer tax guidance
              </a>
              .
            </p>
          </div>
        </section>

        <section id="process" className="bg-[#F9FAFB] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl" data-animate="fade-right">
              <SectionEyebrow>How a 1031 works</SectionEyebrow>
              <h2
                className={`${playfair.className} mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#003366]`}
              >
                Horizontal clarity for every deadline
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
                  data-animate="fade-up"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <IconBadge icon={step.icon} />
                    <span className="text-3xl font-semibold text-[#E5E7EB]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#003366]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-[#003366]">
              {irsResources.map((resource) => (
                <a
                  key={resource.label}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#003366]/30 px-5 py-2 transition hover:border-[#003366] hover:bg-white"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div data-animate="fade-right">
                <SectionEyebrow>Our exchange services</SectionEyebrow>
                <h2
                  className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
                >
                  Modular support for every exchange scenario
                </h2>
              </div>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center rounded-full border border-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#003366] hover:text-white"
              >
                View All {servicesData.length} Services
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex h-full flex-col rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm"
                  data-animate="fade-up"
                >
                  <IconBadge icon={service.icon} />
                  <h3 className="mt-4 text-xl font-semibold text-[#003366]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1F2937]/80">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#003366]"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div data-animate="fade-right">
                <SectionEyebrow>Exchange tools</SectionEyebrow>
                <h2
                  className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
                >
                  Free calculators and checkers
                </h2>
              </div>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full border border-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#003366] hover:text-white"
              >
                See all tools
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link
                href="/tools/boot-calculator"
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-[#003366] to-[#16486C] p-8 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                data-animate="fade-up"
              >
                <Calculator className="mb-4 h-12 w-12 text-[#F5B800]" />
                <h3 className="mb-2 text-2xl font-semibold">Boot Calculator</h3>
                <p className="text-gray-100">
                  Calculate boot and estimate tax implications for your 1031 exchange.
                </p>
              </Link>
              <Link
                href="/tools/exchange-cost-estimator"
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-[#003366] to-[#16486C] p-8 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                data-animate="fade-up"
              >
                <DollarSign className="mb-4 h-12 w-12 text-[#F5B800]" />
                <h3 className="mb-2 text-2xl font-semibold">Exchange Cost Estimator</h3>
                <p className="text-gray-100">
                  Estimate QI fees, escrow costs, title insurance, and recording fees.
                </p>
              </Link>
              <Link
                href="/tools/identification-rules-checker"
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-[#003366] to-[#16486C] p-8 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                data-animate="fade-up"
              >
                <CheckCircle2 className="mb-4 h-12 w-12 text-[#F5B800]" />
                <h3 className="mb-2 text-2xl font-semibold">Identification Rules Checker</h3>
                <p className="text-gray-100">
                  Validate your replacement property identification against IRS rules.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section id="inventory" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div data-animate="fade-right">
                <SectionEyebrow>Property inventory</SectionEyebrow>
                <h2
                  className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
                >
                  Browse replacement property types
                </h2>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inventorySpotlight01.map((item) => (
                <Link
                  key={item.type}
                  href={item.href}
                  className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  data-animate="fade-up"
                >
                  {item.heroImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.heroImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                      {item.copy}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#003366]">
                      {item.ctaLabel} →
                    </span>
                    {item.note && (
                      <p className="mt-3 text-xs text-[#1F2937]/60 italic">
                        {item.note}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="property-types" className="relative bg-[#E8F5FF] pb-20 pt-16 md:py-28">
          <div className="absolute top-0 left-0 right-0">
            <WaveDivider flip />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10">
            <SectionEyebrow>Property types</SectionEyebrow>
            <h2
              className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
            >
              Layered horizontal coverage for every asset class
            </h2>
            <p className="mt-3 text-[#1F2937]/80">
              From multifamily towers to specialty land, our team vets each deal for like-kind
              eligibility and timeline fit.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {propertyTypes.map((type) => (
                <article
                  key={type.title}
                  className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  data-animate="fade-up"
                >
                  {type.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <IconBadge icon={type.icon} />
                    <h3 className="mt-4 text-xl font-semibold text-[#003366]">
                      {type.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#1F2937]/80">{type.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/property-types/"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] shadow-sm"
              >
                Explore property types
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div
              className="rounded-[2rem] border border-[#E5E7EB] bg-gradient-to-br from-white via-[#E9F5FF] to-[#FFF9E6] p-8 shadow-lg"
              data-animate="fade-right"
            >
              <SectionEyebrow>Florida coverage</SectionEyebrow>
              <h2
                className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
              >
                Providing 1031 exchange coordination statewide
              </h2>
              <p className="mt-4 text-[#1F2937]/80">
                Jacksonville, St. Augustine, and every Florida metro trust our local relationships,
                QI partners, and compliance workflows.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {topHomepageLocations.slice(0, 6).map((location) => {
                  const locationImage = location.heroImage || `/locations/${location.slug}-1031-exchange.jpg`;
                  return (
                    <Link
                      key={location.slug}
                      href={location.route}
                      className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      {locationImage && (
                        <div className="relative h-32 w-full overflow-hidden">
                          <Image
                            src={locationImage}
                            alt={`${location.name} 1031 Exchange Properties`}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-[#003366] group-hover:text-[#01264f]">
                          {location.name}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/service-areas/"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#003366] hover:text-white"
              >
                View All {locationsData.length} Service Areas
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="max-w-3xl" data-animate="fade-right">
              <SectionEyebrow>Frequently asked questions</SectionEyebrow>
              <h2
                className={`${playfair.className} mt-3 text-3xl font-semibold tracking-tight text-[#003366]`}
              >
                Answers grounded in IRS guidance and Florida practice
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6"
                  data-animate="fade-up"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                    {item.question}
                    <span className="ml-4 text-sm text-[#003366]/70">
                      <ArrowRight
                        className="h-5 w-5 transition group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <SectionEyebrow>Our Location</SectionEyebrow>
                <h2
                  className={`${playfair.className} mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#003366]`}
                >
                  Visit Our Jacksonville Office
                </h2>
                <p className="mt-4 text-lg text-[#1F2937]/80">
                  Located in the heart of downtown Jacksonville, our team is ready to assist with your 1031 exchange needs.
                </p>
                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
                      Address
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#003366]">{ADDRESS}</p>
                  </div>
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
                </div>
              </div>
              <div>
                <div className="aspect-[3/2] w-full rounded-lg overflow-hidden border border-[#E5E7EB]">
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
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#003366] via-[#0F4C81] to-[#F5B800] py-20 text-white md:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center md:px-10">
            <SectionEyebrow>Ready to begin</SectionEyebrow>
            <h2
              className={`${playfair.className} text-3xl font-semibold leading-tight tracking-tight`}
            >
              Ready To Begin Your 1031 Exchange?
            </h2>
            <p className="text-lg text-white/80">
              Our Jacksonville-based team helps investors stay compliant, on time, and fully informed
              throughout the exchange process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366]"
              >
                Start My Exchange
              </Link>
              <a
                href={`tel:${PHONE.dial}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call {PHONE.formatted}
              </a>
            </div>
          </div>
        </section>
        </main>
      </div>
      <Script id="organization-jsonld" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="website-jsonld" type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </>
  );
}
