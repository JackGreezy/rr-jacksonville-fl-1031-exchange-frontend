import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import ExchangeCostEstimator from "@/components/tools/ExchangeCostEstimator";
import { Inter, Playfair_Display } from "next/font/google";

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

export const metadata: Metadata = {
  title: `Exchange Cost Estimator | ${COMPANY_NAME}`,
  description:
    "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange in Jacksonville, FL.",
  keywords:
    "1031 exchange costs, QI fees, escrow costs, title insurance, recording fees, 1031 exchange Jacksonville, Florida 1031 costs",
  openGraph: {
    title: `Exchange Cost Estimator | ${COMPANY_NAME}`,
    description:
      "Estimate total costs for your 1031 exchange including QI fees, escrow, title insurance, and recording fees.",
    type: "website",
    url: `${SITE_URL}/tools/exchange-cost-estimator`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools/exchange-cost-estimator`,
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Exchange Cost Estimator" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Exchange Cost Estimator | ${COMPANY_NAME}`,
  description:
    "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange.",
  url: `${SITE_URL}/tools/exchange-cost-estimator`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  },
  about: {
    "@type": "SoftwareApplication",
    name: "Exchange Cost Estimator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
};

export default function ExchangeCostEstimatorPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-20">
        <Breadcrumbs items={breadcrumbItems} />
        <h1
          className="text-3xl font-bold text-[#003366] md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Exchange Cost Estimator
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Estimate the total costs associated with your 1031 exchange, including Qualified
          Intermediary fees, escrow costs, title insurance premiums, and recording fees. Use this
          tool to budget for your exchange transaction.
        </p>

        <ExchangeCostEstimator />

        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <p className="text-sm text-gray-700">
            <strong>Educational content only.</strong> Not tax, legal, or investment advice.
            Results are estimates only. Consult a qualified intermediary and tax advisor before
            making decisions. Florida does not impose a state real estate transfer tax. Recording
            fees and title insurance premiums still apply.
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2
            className="text-2xl font-bold text-[#003366] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Related Resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services/" className="text-[#003366] underline hover:text-[#F5B800]">
                Exchange Services
              </Link>
            </li>
            <li>
              <Link
                href="/tools/boot-calculator"
                className="text-[#003366] underline hover:text-[#F5B800]"
              >
                Boot Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/tools/identification-rules-checker"
                className="text-[#003366] underline hover:text-[#F5B800]"
              >
                Identification Rules Checker
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Script id="exchange-cost-estimator-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}

