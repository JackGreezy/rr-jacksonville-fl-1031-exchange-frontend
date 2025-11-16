import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import IdentificationRulesChecker from "@/components/tools/IdentificationRulesChecker";
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
  title: `Identification Rules Checker | ${COMPANY_NAME}`,
  description:
    "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules for 1031 exchanges in Jacksonville, FL.",
  keywords:
    "1031 identification rules, 3 property rule, 200 percent rule, 95 percent rule, 1031 exchange Jacksonville, Florida 1031 identification",
  openGraph: {
    title: `Identification Rules Checker | ${COMPANY_NAME}`,
    description:
      "Validate your replacement property identification against IRS rules. Check 3-property, 200%, and 95% rules compliance.",
    type: "website",
    url: `${SITE_URL}/tools/identification-rules-checker`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools/identification-rules-checker`,
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Identification Rules Checker" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Identification Rules Checker | ${COMPANY_NAME}`,
  description:
    "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules for 1031 exchanges.",
  url: `${SITE_URL}/tools/identification-rules-checker`,
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
    name: "Identification Rules Checker",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
};

export default function IdentificationRulesCheckerPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-20">
        <Breadcrumbs items={breadcrumbItems} />
        <h1
          className="text-3xl font-bold text-[#003366] md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Identification Rules Checker
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Validate your replacement property identification against IRS rules. The IRS allows three
          methods for identifying replacement properties: the 3-property rule, the 200% rule, or
          the 95% rule. Use this tool to check if your identification complies with these rules.
        </p>

        <IdentificationRulesChecker />

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
                href="/tools/exchange-cost-estimator"
                className="text-[#003366] underline hover:text-[#F5B800]"
              >
                Exchange Cost Estimator
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Script id="identification-rules-checker-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}

