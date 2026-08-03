import Link from "next/link";

const services = [
  ["Replacement Property Search", "/services/multifamily-property-identification"],
  ["Passive Real Estate Income", "/services/passive-real-estate-income"],
  ["DST Replacement Options", "/services/dst-placement-assistance"],
  ["Inherited Property Questions", "/services/inherited-property-capital-gains"],
  ["Qualified Intermediary Role", "/services/the-qualified-intermediary-role"],
  ["45-Day Identification Help", "/services/45-day-identification-strategy"],
  ["Reverse Exchange Help", "/services/reverse-1031-exchange-explained"],
  ["Capital Gains on Investment Property", "/services/capital-gains-on-investment-property"],
];

const areas = [
  ["Jacksonville", "/service-areas/jacksonville-fl"],
  ["St. Augustine", "/service-areas/st-augustine-fl"],
  ["Orange Park", "/service-areas/orange-park-fl"],
  ["Ponte Vedra Beach", "/service-areas/ponte-vedra-beach-fl"],
  ["Jacksonville Beach", "/service-areas/jacksonville-beach-fl"],
  ["Amelia Island", "/service-areas/amelia-island-fl"],
  ["San Marco", "/service-areas/san-marco-fl"],
  ["Nationwide", "/service-areas/nationwide"],
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 border-b border-white/10 pb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">Free 1031 exchange guidance</p>
          <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">1031 Exchange of Jacksonville</h2>
          <p className="mt-3 text-white/65">Serving Jacksonville, Northeast Florida, and property owners searching nationwide.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:+19046649656" className="bg-[#c9a962] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#1a1a1a] transition hover:bg-white">Call (904) 664-9656</a>
            <Link href="/contact#contact-form" className="border border-white/50 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#1a1a1a]">Start My Exchange</Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[#c9a962]">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              <p>Phone guidance available 24/7</p>
              <a href="tel:+19046649656" className="block text-[#c9a962] transition hover:text-white">(904) 664-9656</a>
              <a href="mailto:exchange@1031exchangeofjacksonville.com" className="block break-words text-[#c9a962] transition hover:text-white">exchange@1031exchangeofjacksonville.com</a>
              <div className="pt-3">
                <Link href="/contact?request=properties#contact-form" className="text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:text-[#c9a962]">Request a Property List →</Link>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[#c9a962]">Location</h3>
            <div className="mt-5 h-52 overflow-hidden rounded-lg bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.659!2d-81.658!3d30.328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b6c5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s200%20W%20Forsyth%20St%2C%20Jacksonville%2C%20FL%2032202%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1031 Exchange of Jacksonville Location"
              />
            </div>
          </section>

          <section>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[#c9a962]">How We Help</h3>
            <nav className="mt-5 space-y-2 text-sm">
              {services.map(([label, href]) => (
                <Link key={href} href={href} className="block text-white/70 transition hover:text-[#c9a962]">{label}</Link>
              ))}
              <Link href="/services" className="block pt-2 font-medium text-[#c9a962] transition hover:text-white">View All Services →</Link>
            </nav>
          </section>

          <section>
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-[#c9a962]">Markets & Resources</h3>
            <nav className="mt-5 space-y-2 text-sm">
              {areas.map(([label, href]) => (
                <Link key={href} href={href} className="block text-white/70 transition hover:text-[#c9a962]">{label}</Link>
              ))}
              <Link href="/service-areas" className="block pt-2 font-medium text-[#c9a962] transition hover:text-white">View All Areas →</Link>
            </nav>
            <nav className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/55">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/tools" className="hover:text-white">Tools</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </nav>
          </section>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-white/50">Educational information only. Tax, legal, qualified-intermediary, brokerage, lending, and securities work must be handled by the appropriate independent professionals. DST interests are securities and involve risk, fees, illiquidity, eligibility, and suitability considerations.</p>
        </div>
      </div>
    </footer>
  );
}
