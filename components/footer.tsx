import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Company Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#c9a962] mb-2">1031 Exchange of Jacksonville</h2>
          <p className="text-white/80">Serving all of Florida from Jacksonville to the Keys.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-white mb-1">Address:</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone:</p>
                <a
                  href="tel:+19046649656"
                  className="text-[#c9a962] hover:underline"
                >
                  (904) 664-9656
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email:</p>
                <a
                  href="mailto:exchange@1031exchangeofjacksonville.com"
                  className="text-[#c9a962] hover:underline"
                >
                  exchange@1031exchangeofjacksonville.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Hours:</p>
                <p className="text-white/80">24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Location
            </h4>
            <div className="bg-white/10 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.659!2d-81.658!3d30.328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b6c5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2s200%20W%20Forsyth%20St%2C%20Jacksonville%2C%20FL%2032202%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1031 Exchange of Jacksonville Location"
              ></iframe>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Services
            </h4>
            <div className="space-y-1 text-sm">
              <Link href="/services/multifamily-property-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">Multifamily Property Identification</Link>
              <Link href="/services/industrial-warehouse-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">Industrial Warehouse Identification</Link>
              <Link href="/services/retail-nnn-property-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">Retail NNN Property Identification</Link>
              <Link href="/services/medical-office-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">Medical Office Identification</Link>
              <Link href="/services/self-storage-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">Self Storage Identification</Link>
              <Link href="/services/stnl-property-identification" className="block text-white/80 hover:text-[#c9a962] transition-colors">STNL Property Identification</Link>
              <Link href="/services/45-day-identification-strategy" className="block text-white/80 hover:text-[#c9a962] transition-colors">45 Day Identification Strategy</Link>
              <Link href="/services/three-property-rule-planning" className="block text-white/80 hover:text-[#c9a962] transition-colors">Three Property Rule Planning</Link>
              <Link href="/services/200-percent-rule-planning" className="block text-white/80 hover:text-[#c9a962] transition-colors">200 Percent Rule Planning</Link>
              <Link href="/services/reverse-exchange-coordination" className="block text-white/80 hover:text-[#c9a962] transition-colors">Reverse Exchange Coordination</Link>
              <Link href="/services/improvement-exchange-planning" className="block text-white/80 hover:text-[#c9a962] transition-colors">Improvement Exchange Planning</Link>
              <Link href="/services/dst-placement-assistance" className="block text-white/80 hover:text-[#c9a962] transition-colors">DST Placement Assistance</Link>
              <Link href="/services/rent-roll-analysis" className="block text-white/80 hover:text-[#c9a962] transition-colors">Rent Roll Analysis</Link>
              <Link href="/services/t12-financial-review" className="block text-white/80 hover:text-[#c9a962] transition-colors">T12 Financial Review</Link>
              <Link href="/services/capex-planning-support" className="block text-white/80 hover:text-[#c9a962] transition-colors">Capex Planning Support</Link>
              <Link href="/services/market-comp-analysis" className="block text-white/80 hover:text-[#c9a962] transition-colors">Market Comp Analysis</Link>
              <Link href="/services/lender-preflight-support" className="block text-white/80 hover:text-[#c9a962] transition-colors">Lender Preflight Support</Link>
              <Link href="/services/timeline-management" className="block text-white/80 hover:text-[#c9a962] transition-colors">Timeline Management</Link>
              <Link href="/services/qualified-intermediary-coordination" className="block text-white/80 hover:text-[#c9a962] transition-colors">Qualified Intermediary Coordination</Link>
              <Link href="/services/compliance-documentation" className="block text-white/80 hover:text-[#c9a962] transition-colors">Compliance Documentation</Link>
              <Link href="/services/boot-planning" className="block text-white/80 hover:text-[#c9a962] transition-colors">Boot Planning</Link>
              <Link href="/services/form-8824-preparation" className="block text-white/80 hover:text-[#c9a962] transition-colors">Form 8824 Preparation</Link>
              <Link href="/services/basis-calculation-support" className="block text-white/80 hover:text-[#c9a962] transition-colors">Basis Calculation Support</Link>
              <Link href="/services/depreciation-schedule-coordination" className="block text-white/80 hover:text-[#c9a962] transition-colors">Depreciation Schedule Coordination</Link>
              <Link href="/services/exchange-funds-tracking" className="block text-white/80 hover:text-[#c9a962] transition-colors">Exchange Funds Tracking</Link>
              <Link href="/services/identification-letter-preparation" className="block text-white/80 hover:text-[#c9a962] transition-colors">Identification Letter Preparation</Link>
              <Link href="/services" className="block text-[#c9a962] hover:underline font-medium">View All 26 Services →</Link>
            </div>
          </div>

          {/* Service Areas & Quick Links */}
          <div className="space-y-8">
            {/* Service Areas */}
            <div>
              <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
                Service Areas
              </h4>
              <div className="space-y-1 text-sm">
                <Link href="/service-areas/jacksonville-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Jacksonville</Link>
                <Link href="/service-areas/st-augustine-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">St. Augustine</Link>
                <Link href="/service-areas/orange-park-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Orange Park</Link>
                <Link href="/service-areas/ponte-vedra-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Ponte Vedra Beach</Link>
                <Link href="/service-areas/fernandina-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Fernandina Beach</Link>
                <Link href="/service-areas/atlantic-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Atlantic Beach</Link>
                <Link href="/service-areas/neptune-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Neptune Beach</Link>
                <Link href="/service-areas/jacksonville-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Jacksonville Beach</Link>
                <Link href="/service-areas/mandarin-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Mandarin</Link>
                <Link href="/service-areas/riverside-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Riverside</Link>
                <Link href="/service-areas/southside-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Southside</Link>
                <Link href="/service-areas/downtown-jacksonville-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Downtown Jacksonville</Link>
                <Link href="/service-areas/san-marco-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">San Marco</Link>
                <Link href="/service-areas/avondale-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Avondale</Link>
                <Link href="/service-areas/julington-creek-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Julington Creek</Link>
                <Link href="/service-areas/fleming-island-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Fleming Island</Link>
                <Link href="/service-areas/yulee-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Yulee</Link>
                <Link href="/service-areas/green-cove-springs-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Green Cove Springs</Link>
                <Link href="/service-areas/palatka-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Palatka</Link>
                <Link href="/service-areas/amelia-island-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Amelia Island</Link>
                <Link href="/service-areas/palm-coast-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Palm Coast</Link>
                <Link href="/service-areas/flagler-beach-fl" className="block text-white/80 hover:text-[#c9a962] transition-colors">Flagler Beach</Link>
                <Link href="/service-areas/nationwide" className="block text-white/80 hover:text-[#c9a962] transition-colors">Nationwide</Link>
                <Link href="/service-areas" className="block text-[#c9a962] hover:underline font-medium">View All 23 Service Areas →</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
                Quick Links
              </h4>
              <div className="space-y-1 text-sm">
                <Link href="/property-types" className="block text-white/80 hover:text-[#c9a962] transition-colors">Property Types</Link>
                <Link href="/blog" className="block text-white/80 hover:text-[#c9a962] transition-colors">Blog</Link>
                <Link href="/about" className="block text-white/80 hover:text-[#c9a962] transition-colors">About</Link>
                <Link href="/contact" className="block text-white/80 hover:text-[#c9a962] transition-colors">Contact</Link>
                <Link href="/privacy" className="block text-white/80 hover:text-[#c9a962] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-white/80 hover:text-[#c9a962] transition-colors">Terms of Service</Link>
                <Link href="/sitemap.xml" className="block text-white/80 hover:text-[#c9a962] transition-colors">Sitemap</Link>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
                Tools
              </h4>
              <div className="space-y-1 text-sm">
                <Link href="/tools/boot-calculator" className="block text-white/80 hover:text-[#c9a962] transition-colors">Boot Calculator</Link>
                <Link href="/tools/exchange-cost-estimator" className="block text-white/80 hover:text-[#c9a962] transition-colors">Exchange Cost Estimator</Link>
                <Link href="/tools/identification-rules-checker" className="block text-white/80 hover:text-[#c9a962] transition-colors">Identification Rules Checker</Link>
                <Link href="/tools" className="block text-[#c9a962] hover:underline font-medium">View All Tools →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-white/60 leading-relaxed">
              This site helps investors identify potential replacement properties for Section 1031 exchanges.
              <br />
              This site is not a Qualified Intermediary, law firm, broker, or CPA.
              <br />
              Users should consult a Qualified Intermediary and tax advisor before acting.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
