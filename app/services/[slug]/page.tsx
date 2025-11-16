import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import { servicesData } from "@/data/services";
import { getServiceBatchData } from "@/lib/batch-data";

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
const COMPANY_NAME = "1031 Exchange of Jacksonville";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | 1031 Exchange ${PRIMARY_CITY}`,
    description: service.short,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const batchData = getServiceBatchData(slug);
  const relatedServices = servicesData.slice(0, 4).filter((s) => s.slug !== service.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: service.name },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: PRIMARY_CITY,
      addressRegion: PRIMARY_STATE_ABBR,
    },
  };

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs items={breadcrumbItems} />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          {service.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          {service.short}
        </p>
        {batchData?.mainDescription && (
          <div 
            className="mt-6 text-[#1F2937]/80 leading-relaxed prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: batchData.mainDescription }}
          />
        )}
        {service.slug === "retail-nnn-property-identification" && (
          <div className="mt-8 rounded-3xl border border-[#E5E7EB] bg-white p-8">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Understanding Triple Net Lease Investments
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Triple net lease (NNN) commercial real estate investments represent one of the most stable income-producing property types available to investors. When you acquire a commercial building or land and lease it to a single tenant who agrees to cover net taxes, net insurance, net property maintenance, rent, utilities, and most operational expenses, that property qualifies as a triple net lease investment.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              These creditworthy tenants are typically essential retailers, dollar stores, quick-service restaurants, convenience stores with gas stations, pharmacies, and medical companies that maintain investment-grade credit ratings from S&P and Moody's.
            </p>
            <h3
              className={`${playfair.variable} mt-6 text-xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Types of Triple Net Leases
            </h3>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              There are two primary types of triple net leases: absolute NNN and standard NNN. A common misconception is that all triple net leases are absolute NNN, which is not accurate.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              <strong>Absolute NNN Lease:</strong> This is a long-term, corporate-guaranteed lease typically spanning 10 to 20+ years between you as the landlord and a creditworthy tenant who assumes responsibility for all property expenses. These costs include real estate taxes, insurance, common area maintenance (CAM), and other expenses such as capital expenditures. In an absolute triple net lease, the tenant bears all financial risk while you own the property with minimal responsibilities—simply collect rent and enjoy passive ownership.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Tenants that typically operate with absolute NNN leases are investment-grade corporations such as Dollar General, Walgreens, and Taco Bell. They seek full control over their brand and image, so they maintain properties as if they owned them. Absolute NNN leases enable you to own triple net properties anywhere in America without active management concerns.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              <strong>Standard NNN Lease:</strong> A standard NNN lease is also a long-term lease that includes you—the owner—paying 100% of taxes, insurance, and common area maintenance, but may not include all expenses. These corporate-guaranteed leases from companies like Starbucks, AutoZone, and DaVita may have clauses requiring the landlord to cover expenses such as parking lot maintenance, roof repairs, and structural repairs, meaning the landlord bears some responsibility, though that responsibility remains minimal.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Even though standard triple net lease properties may require some maintenance costs, they remain stable, income-producing investments that can be owned in any state, regardless of where you live.
            </p>
            <h3
              className={`${playfair.variable} mt-6 text-xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              NNN Ground Leases
            </h3>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              A NNN ground lease is a land-only rental arrangement lasting from 20 to 99 years. As the investor, you maintain fee-simple ownership, holding the title to the property. Similar to an absolute NNN lease, the tenant is responsible for all expenses related to property development and improvements, taxes, repairs and maintenance, insurance, and financing costs.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Regarding the lease structure, a ground lease should contain a clause that grants you possession of the building if the lease is terminated early. This provision helps ensure lease terms are fulfilled, and if the tenant vacates, the building and its improvements that enhance property value become yours. In this scenario, you not only own land that may have appreciated but also own a building that's ready for re-tenanting.
            </p>
            <h3
              className={`${playfair.variable} mt-6 text-xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Benefits of NNN Lease Investments
            </h3>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              The advantages of owning NNN lease investments extend beyond simple stock market investing or other commercial real estate investments like gross lease apartments and office space.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Triple net property tenants are significantly less likely to default, which means you face reduced owner risk. The value of NNN investments is not susceptible to wide swings and daily fluctuations, so you receive worry-free, consistent, stable monthly income that escalates over the course of the lease term. Then there are annual tax opportunities and the 1031 exchange tax code, which can further increase the value of your investment.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              <strong>Financial and Lifestyle Advantages:</strong>
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2 ml-4">
              <li>Low barrier to entry: Most NNN properties range from $1 million to $5 million, though smaller or higher-value properties exist</li>
              <li>Reliable, relatively low-risk investment that provides long-term monthly income</li>
              <li>Passive, predictable income shaped to fit financial, lifestyle, and geographical preferences</li>
              <li>A billion-dollar corporation tenanting your investment lowers ownership risk</li>
              <li>10 to 20+ years of reliable income with little to no landlord responsibility, as guaranteed by the lease</li>
              <li>Periodic rent escalations that help cover inflation or any unexpected costs</li>
              <li>Prime location: Tenant opens where demographically successful for their business, resulting in predictable sales and less risk of having to re-tenant</li>
              <li>Tangible asset that adds value to any portfolio, as well as possible leverage and great resale value</li>
              <li>Tax opportunities, such as the 1031 exchange and cost segregation depreciation, help increase your internal rate of return</li>
              <li>Diversifying by location, tenant type, asset class, lease type, and cap rate helps to build wealth</li>
              <li>Enjoy lifestyle and financial freedom without actively managing properties</li>
            </ul>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              With tax opportunities, rent escalations, possible leverage, the value of the tangible asset, and financing terms, your internal rate of return (IRR) can be as much as 7–10% or more, which aligns with gross lease investments and stock market returns without the management headaches.
            </p>
          </div>
        )}
        <div className="mt-8">
          <Link
            href={`/contact/?projectType=${encodeURIComponent(service.name)}`}
            className="inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
          >
            Get Started
          </Link>
        </div>
        {relatedServices.length > 0 && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Related Services
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={related.route}
                  className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#003366]">
                    {related.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                    {related.short}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        {batchData?.inclusions && batchData.inclusions.length > 0 && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              What We Include
            </h2>
            <ul className="mt-6 space-y-2">
              {batchData.inclusions.map((inclusion, index) => (
                <li key={index} className="flex items-start text-[#1F2937]/80">
                  <span className="mr-3 text-[#003366]">•</span>
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {batchData?.commonSituations && batchData.commonSituations.length > 0 && (
          <div className="mt-12">
            <h2
              className={`${playfair.variable} text-2xl font-semibold tracking-tight text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Common Situations
            </h2>
            <div className="mt-6 space-y-4">
              {batchData.commonSituations.map((situation, index) => (
                <div key={index} className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
                  <p className="text-[#1F2937]/80">{situation}</p>
                </div>
              ))}
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
        {batchData?.complianceNote && (
          <div className="mt-8 rounded-2xl bg-[#E8F5FF] p-6">
            <p className="text-sm text-[#1F2937]/80 italic">{batchData.complianceNote}</p>
          </div>
        )}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#003366] via-[#0F4C81] to-[#F5B800] p-8 text-white">
          <h2
            className={`${playfair.variable} text-2xl font-semibold tracking-tight`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Get Started with {service.name}?
          </h2>
          <p className="mt-4 text-white/80">
            Our Jacksonville-based team helps investors stay compliant, on time, and fully informed throughout the exchange process.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/contact/?projectType=${encodeURIComponent(service.name)}`}
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
      <Script id="service-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
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

