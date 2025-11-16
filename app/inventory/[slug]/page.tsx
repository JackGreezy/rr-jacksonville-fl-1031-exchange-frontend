import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import { inventoryCategories } from "@/data/inventory-categories";

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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return inventoryCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = inventoryCategories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Inventory Category Not Found",
    };
  }

  return {
    title: `${category.name} 1031 Exchange Properties | ${PRIMARY_CITY}`,
    description: `Browse ${category.name.toLowerCase()} properties available for 1031 exchange replacement properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    alternates: {
      canonical: `${SITE_URL}/inventory/${slug}`,
    },
  };
}

export default async function InventoryPage({ params }: Props) {
  const { slug } = await params;
  const category = inventoryCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "/inventory" },
    { label: category.name },
  ];

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      {category.heroImage && (
        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h1
              className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {category.name} 1031 Exchange Properties
            </h1>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {!category.heroImage && (
          <>
            <Breadcrumbs items={breadcrumbItems} />
            <h1
              className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {category.name} 1031 Exchange Properties
            </h1>
          </>
        )}
        {category.heroImage && <Breadcrumbs items={breadcrumbItems} className="mt-6" />}
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Browse {category.name.toLowerCase()} properties available for 1031 exchange replacement properties in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
        </p>
        {category.note && (
          <div className="mt-6 rounded-2xl bg-[#E8F5FF] p-6">
            <p className="text-sm text-[#1F2937]/80 italic">{category.note}</p>
          </div>
        )}
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
                What types of {category.name.toLowerCase()} properties are available for 1031 exchanges?
                <span className="ml-4 text-sm text-[#003366]/70">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                Investors can find {category.name.toLowerCase()} properties that qualify as like-kind replacement properties for 1031 exchanges. We provide nationwide property identification support to help you find qualified replacement properties within your 45 day identification deadline.
              </p>
            </details>
            <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                How do I identify {category.name.toLowerCase()} properties within the 45 day deadline?
                <span className="ml-4 text-sm text-[#003366]/70">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                You have 45 calendar days from your relinquished property sale to identify replacement properties. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.
              </p>
            </details>
            <details className="group rounded-3xl border border-[#E5E7EB] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[#003366]">
                What makes {category.name.toLowerCase()} properties attractive for 1031 exchanges?
                <span className="ml-4 text-sm text-[#003366]/70">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[#1F2937]/80">
                {category.name} properties offer diverse investment opportunities and can qualify as like-kind replacement properties for 1031 exchanges. We help investors identify replacement properties nationwide while maintaining local market knowledge.
              </p>
            </details>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/inventory"
            className="inline-block rounded-full border border-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#003366] hover:text-white"
          >
            View All Inventory Categories
          </Link>
          <Link
            href="/contact/"
            className="inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-16 rounded-3xl bg-[#003366] px-8 py-12 text-center">
          <h2
            className={`${playfair.variable} text-3xl font-semibold leading-tight text-white md:text-4xl`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Find Your Replacement Property?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Our nationwide property identification support helps you find qualified {category.name.toLowerCase()} replacement properties within your 45 day identification deadline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#F9FAFB]"
            >
              Contact Us
            </Link>
            <a
              href="tel:+19046649656"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
            >
              Call (904) 664-9656
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

