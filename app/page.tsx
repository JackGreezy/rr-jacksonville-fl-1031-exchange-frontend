import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { locationsData } from "@/data/locations";
import PropertyTypesCarousel from "@/components/property-types-carousel";
import ConnectButton from "@/components/connect-button";
import { ContactFormWrapper } from "./contact/contact-form";

const SITE_URL = "https://www.1031exchangeofjacksonville.com/";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const COMPANY_NAME = "1031 Exchange of Jacksonville";

export const metadata: Metadata = {
  title: "1031 Exchange Jacksonville | Free Consultation & Help",
  description:
    "Get free 1031 exchange guidance in Jacksonville. Plan a sale, find direct or DST replacement properties, and get help through closing. Call today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "1031 Exchange Jacksonville | Free Consultation & Help",
    description:
      "Get free Jacksonville 1031 exchange guidance for a planned sale, active contract, inherited property, replacement search, or passive DST options.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: ["/locations/jacksonville-1031-exchange.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange Jacksonville | Free Consultation & Help",
    description:
      "Get free Jacksonville 1031 exchange guidance from the planned sale through replacement closing.",
    images: ["/locations/jacksonville-1031-exchange.jpg"],
  },
};

const situations = [
  {
    title: "Planning to Sell",
    copy: "Start before closing so the exchange team, sale facts, and replacement priorities can be organized while every option is still open.",
    href: "/services/capital-gains-on-investment-property",
  },
  {
    title: "Already Under Contract",
    copy: "Bring the expected closing date, sale price, debt, equity, and current advisor team. We will help clarify the immediate next steps.",
    href: "/services/45-day-identification-strategy",
  },
  {
    title: "Inherited Investment Property",
    copy: "Sort through ownership, use, basis questions, co-owner goals, and whether a 1031 exchange may fit the planned disposition.",
    href: "/services/inherited-property-capital-gains",
  },
  {
    title: "Done With Property Management",
    copy: "Compare another direct property with net-lease real estate and professionally managed DST replacement options.",
    href: "/services/passive-real-estate-income",
  },
  {
    title: "Need Replacement Property",
    copy: "Build the search around exchange equity, debt, income, control, workload, risk, financing, and realistic closing probability.",
    href: "/services/multifamily-property-identification",
  },
  {
    title: "Want to Buy Before Selling",
    copy: "Explore reverse-exchange timing, title, parking, and financing when the right replacement appears before the current asset sells.",
    href: "/services/reverse-1031-exchange-explained",
  },
];

const exchangeHelp = [
  {
    title: "Understand the Sale",
    copy: "Clarify ownership, qualifying use, expected proceeds, current debt, timing, and the reason the property no longer fits.",
  },
  {
    title: "Assemble the Right Team",
    copy: "Connect the independent qualified intermediary, CPA, attorney, brokers, lender, title team, and other professionals the facts require.",
  },
  {
    title: "Find the Replacement",
    copy: "Compare direct property, net-lease real estate, and DST interests against the same income, control, workload, risk, and closing goals.",
  },
  {
    title: "Keep Backup Paths Visible",
    copy: "Track primary and backup candidates, diligence, financing, identification questions, and unresolved issues while the calendar moves.",
  },
  {
    title: "Move Through Closing",
    copy: "Keep title, inspections, insurance, lender needs, offering documents, funding directions, and advisor decisions aligned through closing.",
  },
  {
    title: "Get Answers Without Guessing",
    copy: "Whether this is the first exchange or another portfolio move, start with a free conversation about the actual property sale.",
  },
];

const ownershipPaths = [
  {
    title: "Direct Real Estate",
    copy: "Keep control over leasing, financing, improvements, and disposition while remaining responsible for operations and asset decisions.",
  },
  {
    title: "Net-Lease Property",
    copy: "Own the real estate while reviewing the tenant, guaranty, lease obligations, property condition, insurance exposure, and future reletting risk.",
  },
  {
    title: "DST Interest",
    copy: "Access professionally managed real estate without day-to-day landlord duties, subject to offering terms, fees, leverage, illiquidity, risk, eligibility, and suitability.",
  },
];

const neighborhoods = [
  { name: "Jacksonville", slug: "jacksonville-fl", image: "/locations/jacksonville-1031-exchange.jpg" },
  { name: "St. Augustine", slug: "st-augustine-fl", image: "/locations/st-augustine-fl-1031-exchange.jpg" },
  { name: "Ponte Vedra Beach", slug: "ponte-vedra-beach-fl", image: "/locations/ponte-vedra-beach-fl-1031-exchange.jpg" },
  { name: "Amelia Island", slug: "amelia-island-fl", image: "/locations/amelia-island-1031-exchange.jpg" },
  { name: "San Marco", slug: "san-marco-fl", image: "/locations/san-marco-1031-exchange.jpg" },
  { name: "Riverside", slug: "riverside-fl", image: "/locations/riverside-1031-exchange.jpg" },
];

const faqItems = [
  {
    question: "Can you help if I have never completed a 1031 exchange?",
    answer:
      "Yes. Start with the planned sale, current ownership, timing, expected proceeds, debt, and what you want from the next investment. We can explain the process in plain language and help bring the appropriate independent professionals into the conversation.",
  },
  {
    question: "Can you help if my Jacksonville property is already under contract?",
    answer:
      "Yes. Call as soon as possible with the expected closing date and current transaction details. The independent qualified intermediary generally needs to be engaged before the relinquished-property sale closes and before proceeds can reach the seller.",
  },
  {
    question: "What if I want income without managing another property?",
    answer:
      "You can compare direct real estate, net-lease property, and Delaware Statutory Trust interests. DSTs may remove day-to-day landlord work, but offerings vary in income assumptions, fees, leverage, property risk, liquidity, eligibility, and suitability.",
  },
  {
    question: "Can I request a current list of replacement properties?",
    answer:
      "Yes. Submit the short form or call to request current property options. The replacement brief should consider exchange equity, debt, income goals, control, preferred workload, geography, diligence, financing, and closing feasibility.",
  },
  {
    question: "Can inherited real estate be part of a 1031 exchange?",
    answer:
      "It may be possible when the property and transaction meet the applicable requirements, but ownership, basis, qualifying use, estate questions, co-owner goals, and timing should be reviewed with the owner’s CPA and attorney before the sale advances.",
  },
  {
    question: "Is the initial Jacksonville 1031 consultation free?",
    answer:
      "Yes. The initial conversation is free. Tell us what you are selling, where the transaction stands, and what you want the replacement investment to accomplish.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: PHONE.dial,
    contactType: "customer service",
    areaServed: "US-FL",
    availableLanguage: "en",
  }],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <section className="video-hero relative flex min-h-[760px] items-center overflow-hidden lg:min-h-[820px]">
          <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="/locations/jacksonville-1031-exchange.jpg">
            <source src="/jags lova.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962] md:text-sm">
                Whatever brought you here, start with a free conversation.
              </p>
              <h1 className="font-display text-5xl font-light leading-[0.98] text-white md:text-7xl lg:text-[5.4rem]">
                Turnkey 1031 Exchange Help in Jacksonville, Florida
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Planning a sale, already under contract, inheriting property, searching for a replacement, or ready to leave property management behind? Call now. We will help you understand the next move and guide the exchange from the sale through replacement closing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={`tel:${PHONE.dial}`} className="inline-flex items-center justify-center bg-[#c9a962] px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#1a1a1a] transition hover:bg-white">
                  Free Consultation: {PHONE.formatted}
                </a>
                <Link href="/contact#contact-form" className="inline-flex items-center justify-center border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#1a1a1a]">
                  Tell Us About the Sale
                </Link>
              </div>
              <div className="mt-8 grid max-w-3xl gap-3 text-sm text-white/80 sm:grid-cols-3">
                <p className="border-l border-[#c9a962] pl-3">Free 1031 guidance</p>
                <p className="border-l border-[#c9a962] pl-3">Direct and passive options</p>
                <p className="border-l border-[#c9a962] pl-3">Jacksonville and nationwide search</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#1a1a1a] py-8 text-white">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-10">
            <p className="font-display text-2xl font-light md:text-3xl">You do not need to know every rule before asking for help.</p>
            <a href={`tel:${PHONE.dial}`} className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-[#c9a962] transition hover:text-white">Call {PHONE.formatted} →</a>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20 text-[#1a1a1a] md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="max-w-4xl">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-[60px] bg-[#c9a962]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#9a7834]">Help for the situation you are in now</span>
              </div>
              <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">Every exchange begins with a different problem to solve.</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg">The right first step depends on the property, the sale, the owner, and what needs to change after closing. Choose the situation that sounds closest—or call and explain it in your own words.</p>
            </div>
            <div className="mt-12 grid gap-px bg-black/15 md:grid-cols-2 lg:grid-cols-3">
              {situations.map((situation) => (
                <Link key={situation.title} href={situation.href} className="group bg-white p-7 transition hover:bg-[#1a1a1a] md:p-8">
                  <div className="mb-5 h-px w-12 bg-[#c9a962]" />
                  <h3 className="font-display text-2xl text-[#1a1a1a] transition group-hover:text-white">{situation.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 transition group-hover:text-white/70">{situation.copy}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7834] transition group-hover:text-[#c9a962]">See how we can help →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-[#1a1a1a]">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            <div className="relative min-h-[480px] lg:min-h-full">
              <Image src="/locations/downtown-jacksonville-1031-exchange.jpg" alt="Jacksonville investment property and skyline" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-x-0 bottom-0 bg-[#1a1a1a]/95 p-7 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">The real question after the sale</p>
                <p className="mt-2 font-display text-3xl font-light">What should this equity do next?</p>
              </div>
            </div>
            <div className="flex items-center px-8 py-16 md:px-14 lg:px-16 xl:px-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7834]">A property sale should solve something</p>
                <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">Build the exchange around life after the property.</h2>
                <p className="mt-6 text-base leading-relaxed text-black/65">A Jacksonville owner may be selling to retire, leave difficult tenants, simplify inherited real estate, reduce insurance and storm-preparation work, improve income, diversify concentrated equity, or move into an asset that better fits the next stage of life.</p>
                <p className="mt-4 text-base leading-relaxed text-black/65">Bring the sale, equity, debt, timing, ownership, and management concerns. We help turn those facts into a practical exchange path and connect the independent professionals needed to carry it out.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${PHONE.dial}`} className="bg-[#1a1a1a] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c9a962] hover:text-[#1a1a1a]">Call for Free Guidance</a>
                  <Link href="/contact#contact-form" className="border border-[#1a1a1a] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-[#1a1a1a] hover:text-white">Tell Us What Is Happening</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">Turnkey 1031 exchange help</p>
                <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">One place to start. The whole transaction kept in view.</h2>
              </div>
              <p className="text-base leading-relaxed text-white/65 md:text-lg">A 1031 exchange may require several independent professionals, but the owner should not have to assemble the entire journey alone. We help organize the questions, introductions, replacement search, and handoffs from the first call through closing.</p>
            </div>
            <div className="mt-14 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {exchangeHelp.map((item) => (
                <article key={item.title} className="border-t border-[#c9a962]/70 pt-5">
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-14 flex flex-col gap-5 border border-white/15 p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <p className="font-display text-3xl font-light">Not sure what kind of help you need?</p>
                <p className="mt-2 text-sm text-white/60">That is exactly what the free consultation is for.</p>
              </div>
              <a href={`tel:${PHONE.dial}`} className="shrink-0 bg-[#c9a962] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#1a1a1a] transition hover:bg-white">Call {PHONE.formatted}</a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 md:py-32">
          <Image src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg" alt="Professionally managed replacement real estate" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/72" />
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-6 text-white md:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">Leave the landlord job behind</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">Income-focused real estate without another set of tenants, toilets, and trash.</h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">A Delaware Statutory Trust may give qualified investors access to professionally managed, institutional-quality real estate without personally handling tenants, leasing, maintenance, renovations, insurance claims, or storm preparation.</p>
              <ul className="mt-7 space-y-3 text-sm text-white/85">
                <li className="border-l border-[#c9a962] pl-4">No day-to-day property management</li>
                <li className="border-l border-[#c9a962] pl-4">Potential access to larger institutional-quality assets</li>
                <li className="border-l border-[#c9a962] pl-4">Some current offerings may accept investments beginning around $100,000</li>
              </ul>
            </div>
            <div className="border border-white/20 bg-black/35 p-8 backdrop-blur-sm md:p-10">
              <h3 className="font-display text-3xl font-light">See current replacement options.</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">Request a free property list or call to compare DST interests with direct and net-lease real estate. Availability, projected income, sponsor and asset risk, fees, leverage, liquidity limits, investor eligibility, and suitability vary.</p>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact?request=properties#contact-form" className="bg-[#c9a962] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1a1a1a] transition hover:bg-white">Get a Free Property List</Link>
                <a href={`tel:${PHONE.dial}`} className="border border-white/60 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#1a1a1a]">Call for a Free Consultation</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20 text-[#1a1a1a] md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7834]">Compare before choosing</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">Find the ownership path that fits life after the sale.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ownershipPaths.map((path) => (
                <article key={path.title} className="border border-black/10 bg-white p-8">
                  <div className="mb-5 h-px w-12 bg-[#c9a962]" />
                  <h3 className="font-display text-2xl">{path.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-black/60">{path.copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/contact#contact-form" className="inline-flex items-center gap-3 bg-[#1a1a1a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c9a962] hover:text-[#1a1a1a]">Help Me Compare My Options <ArrowIcon /></Link>
            </div>
          </div>
        </section>

        <PropertyTypesCarousel />

        <section className="bg-white py-20 text-[#1a1a1a] md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7834]">Jacksonville roots. Nationwide possibilities.</p>
                <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">Local markets we serve.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/service-areas" className="border border-[#1a1a1a] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-[#1a1a1a] hover:text-white">View All {locationsData.length} Areas</Link>
                <Link href="/contact?request=properties#contact-form" className="bg-[#1a1a1a] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c9a962] hover:text-[#1a1a1a]">Get a Free Property List</Link>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={area.image} alt={`${area.name} 1031 exchange services`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-2xl text-white">{area.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a962]">Explore this market →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20 text-[#1a1a1a] md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7834]">Questions property owners ask first</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">Jacksonville 1031 exchange FAQs</h2>
            <div className="mt-10 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group border-b border-black/15 bg-white px-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg transition hover:text-[#9a7834] md:text-xl">
                    {item.question}
                    <span className="text-2xl font-light text-[#c9a962] transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-6 leading-relaxed text-black/60">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={`tel:${PHONE.dial}`} className="inline-flex bg-[#1a1a1a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#c9a962] hover:text-[#1a1a1a]">Ask Your Question: {PHONE.formatted}</a>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-[1450px] gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">Free Jacksonville 1031 consultation</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">Tell us what you are selling and what you need help with.</h2>
              <p className="mt-6 text-base leading-relaxed text-white/65">Use the short form for exchange guidance, a current property list, or help thinking through a planned sale. If the situation is urgent, call now.</p>
              <a href={`tel:${PHONE.dial}`} className="mt-8 inline-flex bg-[#c9a962] px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#1a1a1a] transition hover:bg-white">Call {PHONE.formatted}</a>
            </div>
            <ContactFormWrapper />
          </div>
        </section>
      </main>

      <ConnectButton />
      <Script id="organization-jsonld" type="application/ld+json">{JSON.stringify(organizationJsonLd)}</Script>
      <Script id="website-jsonld" type="application/ld+json">{JSON.stringify(websiteJsonLd)}</Script>
      <Script id="faq-jsonld" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>
    </>
  );
}
