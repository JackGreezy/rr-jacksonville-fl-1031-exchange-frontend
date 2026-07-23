import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { getLocationBatchData } from "@/lib/batch-data";

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

// Dynamic route - pages generated at request time for better build performance
export const dynamic = 'force-dynamic';

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

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const batchData = getLocationBatchData(slug);
  const locationServices = servicesData.slice(0, 6);
  const faqList =
    batchData?.richFaqs && batchData.richFaqs.length > 0
      ? batchData.richFaqs
      : batchData?.faqs;
  
  // Get hero image - prefer from location data, fallback to standard pattern
  const heroImage = location.heroImage || `/locations/${slug}-1031-exchange.jpg`;

  return (
    <div className="luxury-page">
      {/* Hero Section with Image */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={`${location.name} 1031 Exchange Properties`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Service Areas
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            {location.name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {batchData?.mainDescription && (
            <div 
              className="prose prose-lg max-w-none text-[#1a1a1a]/70 mb-8"
              dangerouslySetInnerHTML={{ __html: batchData.mainDescription }}
            />
          )}
          {!batchData?.mainDescription && (
            <p className="text-lg leading-relaxed text-[#1a1a1a]/80 mb-8">
              We help investors identify 1031 exchange replacement properties in {location.name}, {PRIMARY_STATE_ABBR}. Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
            </p>
          )}

          {batchData?.richSections && batchData.richSections.length > 0 && (
            <div className="mt-12 space-y-10">
              {batchData.richSections.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="font-display text-2xl md:text-3xl font-light tracking-tight text-[#1a1a1a] mb-4">
                      {section.heading}
                    </h2>
                  )}
                  <div
                    className="prose prose-lg max-w-none text-[#1a1a1a]/70"
                    dangerouslySetInnerHTML={{ __html: section.html }}
                  />
                </div>
              ))}
            </div>
          )}

          {batchData?.popularPaths && batchData.popularPaths.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
                Popular Property Identification Paths in {location.name}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {batchData.popularPaths.map((path, index) => {
                  const service = path.type === "service" 
                    ? servicesData.find(s => s.slug === path.slug)
                    : null;
                  const href = service?.route || `/property-types/${path.slug}`;
                  return (
                    <Link
                      key={index}
                      href={href}
                      className="bg-white/50 p-6 hover:bg-white transition-all"
                    >
                      <div className="text-sm font-semibold text-[#c9a962] mb-2">#{path.rank}</div>
                      <h3 className="font-display text-xl text-[#1a1a1a]">
                        {path.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/70">
                        {path.whyPopular}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {faqList && faqList.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <details key={index} className="group bg-white/50 p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-display font-medium text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                      {faq.question}
                      <span className="ml-4">+</span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/70">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {(!faqList || faqList.length === 0) && (
            <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group bg-white/50 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-display font-medium text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                    What types of properties are available for 1031 exchanges in {location.name}?
                    <span className="ml-4">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/70">
                    Investors in {location.name}, {PRIMARY_STATE_ABBR} can find multifamily properties, industrial warehouses, triple net lease commercial properties, medical office buildings, and self storage facilities. We provide nationwide property identification support to help you find qualified replacement properties.
                  </p>
                </details>
                <details className="group bg-white/50 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-display font-medium text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                    How do I identify properties in {location.name} within the 45 day deadline?
                    <span className="ml-4">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/70">
                    You have 45 calendar days from your relinquished property sale to identify replacement properties in {location.name}, {PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.
                  </p>
                </details>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services in Location */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Available Services
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-16">
            Services in {location.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
              >
                <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              <span>View All Service Areas</span>
              <ArrowIcon className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg"
          alt="Luxury Florida Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6 italic">
            Ready to Begin Your 1031 Exchange in {location.name}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our Jacksonville-based team helps investors stay compliant, on time, and fully informed throughout the exchange process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#1a1a1a] px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#f5f1eb] transition-all"
            >
              <span>Get Started</span>
              <ArrowIcon className="ml-3" />
            </Link>
            <a
              href={`tel:${PHONE.dial}`}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              {PHONE.formatted}
            </a>
          </div>
        </div>
      </section>

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
