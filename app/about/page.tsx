import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
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

export const metadata = {
  title: `About Us | 1031 Exchange ${PRIMARY_CITY} Property Identification`,
  description: `Learn how ${PRIMARY_CITY} 1031 Exchange helps investors identify replacement properties and coordinates with Qualified Intermediaries and tax professionals.`,
};

export default function AboutPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          About 1031 Exchange {PRIMARY_CITY}
        </h1>
        <div className="prose prose-lg mt-8 max-w-none">
          <p className="text-lg leading-relaxed text-[#1F2937]/80">
            This site is focused on helping you identify 1031 exchange properties. We can also help you get in touch with tax professionals and Qualified Intermediaries, but we are not a Qualified Intermediary.
          </p>
          <h2
            className={`${playfair.variable} mt-8 text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Secure Intake Process
          </h2>
          <p className="mt-4 text-[#1F2937]/80">
            When you submit a request through our contact form, your information is securely transmitted and stored. We use industry standard encryption to protect your data throughout the intake process.
          </p>
          <h2
            className={`${playfair.variable} mt-8 text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Property Matching Workflow
          </h2>
          <p className="mt-4 text-[#1F2937]/80">
            Our property matching workflow begins with understanding your investment criteria, timeline, and geographic preferences. We analyze available properties across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} and surrounding markets to identify potential replacement properties that meet your 1031 exchange requirements.
          </p>
          <p className="mt-4 text-[#1F2937]/80">
            We provide detailed property information including location, property type, estimated value, and key characteristics. This helps you make informed decisions during your 45 day identification period.
          </p>
          <h2
            className={`${playfair.variable} mt-8 text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Third Party Coordination
          </h2>
          <p className="mt-4 text-[#1F2937]/80">
            We coordinate with third party Qualified Intermediaries and lenders to ensure your exchange process stays on track. We do not provide Qualified Intermediary services directly, but we can connect you with bonded QI partners who handle escrow and documentation.
          </p>
          <p className="mt-4 text-[#1F2937]/80">
            Our team works with lenders to help facilitate financing for replacement properties. We coordinate timelines to ensure your 180 day closing deadline is met.
          </p>
          <h2
            className={`${playfair.variable} mt-8 text-2xl font-semibold tracking-tight text-[#003366]`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What We Do Not Provide
          </h2>
          <p className="mt-4 text-[#1F2937]/80">
            This site is not a Qualified Intermediary. We do not hold exchange funds or provide escrow services. We are not a law firm and do not provide legal advice. We are not a CPA firm and do not provide tax advice.
          </p>
          <p className="mt-4 text-[#1F2937]/80">
            Investors should consult with a Qualified Intermediary and tax advisor before proceeding with any 1031 exchange transaction.
          </p>
          <div className="mt-8 rounded-2xl bg-[#E8F5FF] p-6">
            <h3
              className={`${playfair.variable} text-xl font-semibold text-[#003366]`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Ready to Get Started?
            </h3>
            <p className="mt-2 text-[#1F2937]/80">
              Contact us today to discuss your 1031 exchange property identification needs.
            </p>
            <Link
              href="/contact/"
              className="mt-4 inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Script id="about-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About 1031 Exchange ${PRIMARY_CITY}`,
          description: `Learn how ${PRIMARY_CITY} 1031 Exchange helps investors identify replacement properties`,
        })}
      </Script>
    </div>
  );
}




