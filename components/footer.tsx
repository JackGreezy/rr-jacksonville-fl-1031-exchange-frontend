import Link from "next/link";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

export default function Footer() {
  return (
    <footer className="bg-[#0C1E2E] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            {COMPANY_NAME}
          </p>
          <p className="mt-3 text-sm text-white/70">
            Serving all of Florida from Jacksonville to the Keys.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="text-white/70">Address:</span> <span className="font-semibold text-white">{ADDRESS}</span>
            </p>
            <p>
              Phone: <a href={`tel:${PHONE.dial}`} className="font-semibold text-white hover:text-[#F5B800]">{PHONE.formatted}</a>
            </p>
            <p>
              Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-white hover:text-[#F5B800]">{EMAIL}</a>
            </p>
            <p>Hours: 24 hours a day, 7 days a week</p>
          </div>
          <div className="mt-8">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${ADDRESS}`}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-6 text-sm">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#F5B800] mb-3">
              Services
            </p>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={service.route}
                  className="text-white/80 hover:text-white text-xs"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/services/"
              className="mt-2 inline-block text-white/80 hover:text-white text-xs font-semibold"
            >
              View All {servicesData.length} Services →
            </Link>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#F5B800] mb-3">
              Service Areas
            </p>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
              {locationsData.map((location) => (
                <Link
                  key={location.slug}
                  href={location.route}
                  className="text-white/80 hover:text-white text-xs"
                >
                  {location.name}
                </Link>
              ))}
            </div>
            <Link
              href="/service-areas/"
              className="mt-2 inline-block text-white/80 hover:text-white text-xs font-semibold"
            >
              View All {locationsData.length} Service Areas →
            </Link>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#F5B800] mb-3">
              Quick links
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/property-types/" className="text-white/80 hover:text-white text-xs">
                Property Types
              </Link>
              <Link href="/blog/" className="text-white/80 hover:text-white text-xs">
                Blog
              </Link>
              <Link href="/about/" className="text-white/80 hover:text-white text-xs">
                About
              </Link>
              <Link href="/contact/" className="text-white/80 hover:text-white text-xs">
                Contact
              </Link>
              <Link href="/privacy/" className="text-white/80 hover:text-white text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="text-white/80 hover:text-white text-xs">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-white/80 hover:text-white text-xs">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#F5B800]">
            Tools
          </p>
          <div className="space-y-2">
            <Link href="/tools/boot-calculator" className="block text-white/80 hover:text-white">
              Boot Calculator
            </Link>
            <Link href="/tools/exchange-cost-estimator" className="block text-white/80 hover:text-white">
              Exchange Cost Estimator
            </Link>
            <Link href="/tools/identification-rules-checker" className="block text-white/80 hover:text-white">
              Identification Rules Checker
            </Link>
            <Link href="/tools" className="block pt-2 text-white/80 hover:text-white font-semibold">
              View All Tools →
            </Link>
          </div>
          <div className="mt-8 space-y-3 text-sm text-white/60">
            <p>
              This site helps investors identify potential replacement properties for Section 1031 exchanges.
            </p>
            <p>
              This site is not a Qualified Intermediary, law firm, broker, or CPA.
            </p>
            <p>
              Users should consult a Qualified Intermediary and tax advisor before acting.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-white/50 md:px-10">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}




