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
  title: `Privacy Policy | 1031 Exchange ${PRIMARY_CITY}`,
  description: `Privacy policy for 1031 Exchange ${PRIMARY_CITY}. Learn how we collect, use, and protect your information.`,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#1F2937]/60">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 prose prose-lg max-w-none">
          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Introduction
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              Welcome to {COMPANY_NAME}. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Information We Collect
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company information</li>
              <li>Property and transaction details</li>
              <li>Any other information you choose to provide through our contact forms</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              How We Use Your Information
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Information Sharing
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights</li>
              <li>With your consent</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Security
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Cookies and Tracking
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Your Rights
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              You have the right to:
            </p>
            <ul className="mt-4 list-disc list-inside text-[#1F2937]/80 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Contact Us
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#003366] hover:underline font-semibold">
                {EMAIL}
              </a>{" "}
              or call{" "}
              <a href={`tel:${PHONE.dial}`} className="text-[#003366] hover:underline font-semibold">
                {PHONE.formatted}
              </a>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className={`${playfair.variable} text-2xl font-semibold text-[#003366]`} style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Changes to This Policy
            </h2>
            <p className="mt-4 text-[#1F2937]/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

