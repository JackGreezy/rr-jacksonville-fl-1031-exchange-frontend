"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

export default function StickyCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <Link
            href="/contact/"
            className="block w-full rounded-full bg-[#003366] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition hover:bg-[#01264f]"
          >
            Get Started With Your 1031 Exchange
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        {isExpanded ? (
          <div className="bg-[#003366] px-6 py-4 shadow-lg">
            <div className="mx-auto flex max-w-md flex-col gap-3">
              <Link
                href="/contact/"
                className="block w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#003366] transition hover:bg-[#F9FAFB]"
                onClick={() => setIsExpanded(false)}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${PHONE.dial}`}
                className="block w-full rounded-full border border-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
                onClick={() => setIsExpanded(false)}
              >
                Call {PHONE.formatted}
              </a>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="mt-2 text-center text-xs text-white/80"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-md px-6 py-4">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="w-full rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition hover:bg-[#01264f]"
              aria-label="Open contact options"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </>
  );
}




