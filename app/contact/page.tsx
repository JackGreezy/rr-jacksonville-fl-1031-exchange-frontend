import { ContactFormWrapper } from "./contact-form";

const PHONE = { formatted: "(904) 664-9656", dial: "+19046649656" };

export const metadata = {
  title: "Free 1031 Exchange Consultation | Jacksonville",
  description: "Call or submit the short form for free Jacksonville 1031 exchange guidance, replacement property options, and help planning a sale.",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-16 text-center">
          <span className="subheading mb-4 block">Free Exchange Guidance</span>
          <h1 className="heading-display text-white">
            Tell Us What You Need Help With
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Planning a sale, already under contract, inheriting property, or searching for a replacement? Start with a free conversation. The form is intentionally short.
          </p>
          <a href={`tel:${PHONE.dial}`} className="mt-7 inline-flex border border-brand-copper bg-brand-copper px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-black transition hover:bg-brand-copper-light">
            Call {PHONE.formatted}
          </a>
        </div>
        <ContactFormWrapper />
      </div>
    </main>
  );
}
