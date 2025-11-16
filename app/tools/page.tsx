import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import { Calculator, DollarSign, CheckCircle2 } from "lucide-react";

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

const SITE_URL = "https://www.1031exchangeofjacksonville.com";

export const metadata: Metadata = {
  title: "1031 Exchange Tools | Calculators & Checkers | Jacksonville, FL",
  description:
    "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, check identification rules, and more.",
  keywords:
    "1031 exchange tools, 1031 calculator, boot calculator, exchange cost estimator, identification rules checker, 1031 exchange Jacksonville",
  openGraph: {
    title: "1031 Exchange Tools | Calculators & Checkers",
    description:
      "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, and check identification rules.",
    type: "website",
    url: `${SITE_URL}/tools`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools" },
];

const tools = [
  {
    name: "Boot Calculator",
    slug: "boot-calculator",
    description:
      "Calculate boot (cash received, mortgage relief, non-like-kind property) and estimate tax implications for your 1031 exchange.",
    icon: Calculator,
    href: "/tools/boot-calculator",
  },
  {
    name: "Exchange Cost Estimator",
    slug: "exchange-cost-estimator",
    description:
      "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange.",
    icon: DollarSign,
    href: "/tools/exchange-cost-estimator",
  },
  {
    name: "Identification Rules Checker",
    slug: "identification-rules-checker",
    description:
      "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules.",
    icon: CheckCircle2,
    href: "/tools/identification-rules-checker",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "1031 Exchange Tools | Calculators & Checkers",
  description:
    "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, and check identification rules.",
  url: `${SITE_URL}/tools`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  },
};

export default function ToolsPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mb-12">
          <h1
            className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            1031 Exchange Tools
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
            Free calculators and tools to help you navigate your 1031 exchange. Calculate boot,
            estimate costs, check identification rules, and more. All tools are for educational
            purposes only and should not replace professional tax or legal advice.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.href}
                className="group flex h-full flex-col rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003366]/10 text-[#003366]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-[#003366] group-hover:text-[#F5B800] transition">
                  {tool.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1F2937]/80">
                  {tool.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#003366] group-hover:text-[#F5B800] transition">
                  Use Tool →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2
            className="text-2xl font-semibold text-[#003366] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Important Disclaimer
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Educational content only.</strong> Not tax, legal, or investment advice.
            Results are estimates only. Consult a qualified intermediary and tax advisor before
            making decisions. Florida does not impose a state real estate transfer tax. Recording
            fees and title insurance premiums still apply.
          </p>
          <p className="text-sm text-gray-700">
            These tools are provided for illustrative purposes only. Actual tax implications,
            costs, and rules compliance should be verified with qualified professionals including
            your Qualified Intermediary, CPA, and tax attorney.
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2
            className="text-2xl font-semibold text-[#003366] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Need Professional Help?
          </h2>
          <p className="text-[#1F2937]/80 mb-6">
            While these tools can help you estimate and understand your 1031 exchange, professional
            guidance is essential for a successful exchange. Our team can connect you with
            qualified intermediaries, CPAs, and attorneys throughout Florida.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Script id="tools-page-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}

