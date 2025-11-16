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

export const metadata = {
  title: `1031 Exchange Property Inventory | ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
  description: `Browse our comprehensive inventory of 1031 exchange replacement properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. Find qualified like-kind replacement properties across multiple asset classes.`,
  alternates: {
    canonical: `${SITE_URL}/inventory`,
  },
};

export default function InventoryPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Inventory" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          1031 Exchange Property Inventory
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Browse our comprehensive inventory of 1031 exchange replacement properties in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inventoryCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.route}
              className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {category.heroImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={category.heroImage}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                  {category.name}
                </h3>
                <span className="mt-4 inline-block text-sm font-semibold text-[#003366]">
                  Browse {category.name} →
                </span>
                {category.note && (
                  <p className="mt-3 text-xs text-[#1F2937]/60 italic">
                    {category.note}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 rounded-3xl bg-[#003366] px-8 py-12 text-center">
          <h2
            className={`${playfair.variable} text-3xl font-semibold leading-tight text-white md:text-4xl`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ready to Find Your Replacement Property?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Our nationwide property identification support helps you find qualified replacement properties within your 45 day identification deadline.
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

