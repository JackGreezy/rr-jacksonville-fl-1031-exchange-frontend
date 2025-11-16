import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { getLocationBatchData } from "@/lib/batch-data";

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
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.name} 1031 Exchange Properties | ${PRIMARY_CITY}`,
    description: `1031 exchange property identification services in ${location.name}, ${PRIMARY_STATE_ABBR}. Find replacement properties for your 1031 exchange.`,
    alternates: {
      canonical: `${SITE_URL}/service-areas/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const batchData = getLocationBatchData(slug);
  const locationServices = servicesData.slice(0, 6);
  
  // Get hero image - prefer from location data, fallback to standard pattern
  const heroImage = location.heroImage || `/locations/${slug}-1031-exchange.jpg`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: location.name },
  ];

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      {/* Hero Section with Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={heroImage}
          alt={`${location.name} 1031 Exchange Properties`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 pb-12 md:px-10">
            <Breadcrumbs items={breadcrumbItems} className="text-white/90" />
            <h1
              className={`${playfair.variable} mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {location.name} 1031 Exchange Properties
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {batchData?.mainDescription && (
          <div 
            className="text-[#1F2937]/80 leading-relaxed prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: batchData.mainDescription }}
          />
        )}
        {!batchData?.mainDescription && (
          <p className="mb-8 text-lg leading-relaxed text-[#1F2937]/80">
            We help investors identify 1031 exchange replacement properties in {location.name}, {PRIMARY_STATE_ABBR}. Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
          </p>
        )}
        {batchData?.popularPaths && batchData.popularPaths.length > 0 && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Popular Property Identification Paths in {location.name}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {batchData.popularPaths.map((path, index) => {
                const service = path.type === "service" 
                  ? servicesData.find(s => s.slug === path.slug)
                  : null;
                const href = service?.route || `/property-types/${path.slug}`;
                return (
                  <Link
                    key={index}
                    href={href}
                    className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="text-sm font-semibold text-[#F5B800] mb-2">#{path.rank}</div>
                    <h3 className="text-xl font-semibold text-[#003366]">
                      {path.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                      {path.whyPopular}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {batchData?.faqs && batchData.faqs.length > 0 && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {batchData.faqs.map((faq, index) => (
                <details key={index} className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                    {faq.question}
                    <span className="ml-4 text-sm text-[#003366]/70">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}
        {!batchData?.faqs && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                  What types of properties are available for 1031 exchanges in {location.name}?
                  <span className="ml-4 text-sm text-[#003366]/70">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                  Investors in {location.name}, {PRIMARY_STATE_ABBR} can find multifamily properties, industrial warehouses, triple net lease commercial properties, medical office buildings, and self storage facilities. Triple net lease (NNN) investments offer stable, passive income streams with creditworthy corporate tenants who cover property expenses including taxes, insurance, and maintenance. These properties typically feature long-term leases (10-20+ years) with investment-grade tenants like dollar stores, quick-service restaurants, pharmacies, and convenience stores. We provide nationwide property identification support to help you find qualified replacement properties.
                </p>
              </details>
              <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                  How do I identify properties in {location.name} within the 45 day deadline?
                  <span className="ml-4 text-sm text-[#003366]/70">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                  You have 45 calendar days from your relinquished property sale to identify replacement properties in {location.name}, {PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.
                </p>
              </details>
              <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                  What makes {location.name} attractive for 1031 exchanges?
                  <span className="ml-4 text-sm text-[#003366]/70">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                  {location.name}, {PRIMARY_STATE_ABBR} offers diverse property types and investment opportunities. We help investors identify replacement properties nationwide while maintaining local market knowledge.
                </p>
              </details>
              <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                  How do I coordinate exchanges in {location.name}?
                  <span className="ml-4 text-sm text-[#003366]/70">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                  We help coordinate 1031 exchanges in {location.name}, {PRIMARY_STATE_ABBR} by providing property identification services, coordinating with Qualified Intermediaries, and managing timelines to ensure compliance with IRS deadlines.
                </p>
              </details>
            </div>
          </div>
        )}
        <div className="mt-12">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Services Available in {location.name}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locationServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#003366]">
                  {service.name}
                </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                    {service.short}
                  </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/service-areas/"
            className="inline-block rounded-full border border-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#003366] hover:text-white"
          >
            View All {locationsData.length} Service Areas
          </Link>
        </div>
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#003366] via-[#0F4C81] to-[#F5B800] p-8 text-white">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Begin Your 1031 Exchange in {location.name}?
          </h2>
          <p className="mt-4 text-white/80">
            Our Jacksonville-based team helps investors stay compliant, on time, and fully informed throughout the exchange process.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-white/90"
            >
              Get Started
            </Link>
            <a
              href={`tel:${PHONE.dial}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
            >
              Call {PHONE.formatted}
            </a>
          </div>
        </div>
      </div>
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href
              ? `${SITE_URL}${item.href}`
              : undefined,
          })),
        })}
      </Script>
      <Script id="location-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: `${location.name} 1031 Exchange Services`,
          description: `1031 exchange property identification services in ${location.name}, ${PRIMARY_STATE_ABBR}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: location.name,
            addressRegion: PRIMARY_STATE_ABBR,
            addressCountry: "US",
          },
          areaServed: {
            "@type": "City",
            name: location.name,
            addressRegion: PRIMARY_STATE_ABBR,
          },
        })}
      </Script>
    </div>
  );
}

