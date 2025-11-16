import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import { propertyTypesData } from "@/data/property-types";
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
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

// Map batch data property-type slugs to service routes
const propertyTypeToServiceMap: Record<string, string> = {
  "retail-nnn": "/services/retail-nnn-property-identification",
  "multifamily": "/services/multifamily-property-identification",
  "self-storage": "/services/self-storage-identification",
  "industrial": "/services/industrial-warehouse-identification",
  "hospitality": "/services/hospitality-property-identification",
  "mixed-use": "/services/mixed-use-property-identification",
  "medical-office": "/services/medical-office-identification",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return propertyTypesData.map((type) => ({
    slug: type.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const propertyType = propertyTypesData.find((t) => t.slug === slug);

  if (!propertyType) {
    // Check if it's a batch data slug that should redirect
    if (propertyTypeToServiceMap[slug]) {
      return {
        title: "Redirecting...",
      };
    }
    return {
      title: "Property Type Not Found",
    };
  }

  return {
    title: `${propertyType.name} 1031 Exchange Properties | ${PRIMARY_CITY}`,
    description: `Find ${propertyType.name} properties for your 1031 exchange replacement property identification in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    alternates: {
      canonical: `${SITE_URL}/property-types/${slug}`,
    },
  };
}

export default async function PropertyTypePage({ params }: Props) {
  const { slug } = await params;
  const propertyType = propertyTypesData.find((t) => t.slug === slug);

  // If slug is a batch data property-type that maps to a service, redirect
  if (!propertyType && propertyTypeToServiceMap[slug]) {
    redirect(propertyTypeToServiceMap[slug]);
  }

  if (!propertyType) {
    notFound();
  }

  // Find related service if it exists
  const relatedService = servicesData.find((s) =>
    s.name.toLowerCase().includes(propertyType.name.toLowerCase()) ||
    propertyType.name.toLowerCase().includes(s.name.toLowerCase())
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Property Types", href: "/property-types/" },
    { label: propertyType.name },
  ];

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs items={breadcrumbItems} />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          {propertyType.name} 1031 Exchange Properties
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Find {propertyType.name} properties for your 1031 exchange replacement property identification in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We help investors identify qualified replacement properties within the 45 day identification deadline.
        </p>
        
        {relatedService && (
          <div className="mt-8">
            <Link
              href={relatedService.route}
              className="inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
            >
              Learn About {relatedService.name}
            </Link>
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-[#E5E7EB] bg-white p-8">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            About {propertyType.name} Properties
          </h2>
          <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
            {propertyType.name} properties can qualify as like-kind replacement properties for 1031 exchanges. These properties offer investors opportunities to defer capital gains taxes while diversifying their real estate portfolios.
          </p>
          <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
            We provide nationwide property identification support to help investors find qualified {propertyType.name} replacement properties within the 45 day identification deadline. Our team coordinates with Qualified Intermediaries and tax advisors throughout the exchange process.
          </p>
        </div>

        <div className="mt-12">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Related Property Types
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {propertyTypesData
              .filter((t) => t.slug !== propertyType.slug)
              .slice(0, 6)
              .map((type) => (
                <Link
                  key={type.slug}
                  href={type.route}
                  className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#003366]">
                    {type.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#003366] via-[#0F4C81] to-[#F5B800] p-8 text-white">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Find {propertyType.name} Replacement Properties?
          </h2>
          <p className="mt-4 text-white/80">
            Our Jacksonville-based team helps investors stay compliant, on time, and fully informed throughout the exchange process.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/contact/?projectType=${encodeURIComponent(propertyType.name)}`}
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
    </div>
  );
}

