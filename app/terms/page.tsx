import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";

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
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

export const metadata: Metadata = {
  title: `Terms of Service | 1031 Exchange ${PRIMARY_CITY}`,
  description: `Terms of service for 1031 Exchange ${PRIMARY_CITY}. Read our terms and conditions for using our website and services.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-[#1F2937]/60">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 prose prose-lg max-w-none">
          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Acceptance of Terms
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Use License
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Permission is granted to temporarily access the materials on {COMPANY_NAME}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Disclaimer
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              The materials on {COMPANY_NAME}'s website are provided on an 'as is' basis. {COMPANY_NAME} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed font-semibold">
              This website provides educational content only and is not a Qualified Intermediary, law firm, broker, or CPA. This site is not tax or legal advice. Users should consult a Qualified Intermediary and tax advisor before acting.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Limitations
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              In no event shall {COMPANY_NAME} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {COMPANY_NAME}'s website, even if {COMPANY_NAME} or a {COMPANY_NAME} authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Accuracy of Materials
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              The materials appearing on {COMPANY_NAME}'s website could include technical, typographical, or photographic errors. {COMPANY_NAME} does not warrant that any of the materials on its website are accurate, complete, or current. {COMPANY_NAME} may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Links
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              {COMPANY_NAME} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {COMPANY_NAME} of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Modifications
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              {COMPANY_NAME} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Contact Information
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#003366] hover:underline font-semibold">
                {EMAIL}
              </a>{" "}
              or call{" "}
              <a href={`tel:${PHONE.dial}`} className="text-[#003366] hover:underline font-semibold">
                {PHONE.formatted}
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <Link
            href="/contact/"
            className="inline-block rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

