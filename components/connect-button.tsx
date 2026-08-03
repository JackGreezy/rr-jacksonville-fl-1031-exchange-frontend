"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";

function ChevronUp() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl overflow-hidden mb-2 min-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <a
            href={`tel:${PHONE.dial}`}
            className="flex items-center gap-3 px-5 py-4 text-[#1a1a1a] hover:bg-[#f5f1eb] transition-colors border-b border-gray-100"
          >
            <PhoneIcon />
            <span className="text-sm font-medium">{PHONE.formatted}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 px-5 py-4 text-[#1a1a1a] hover:bg-[#f5f1eb] transition-colors border-b border-gray-100"
          >
            <EmailIcon />
            <span className="text-sm font-medium">Email Us</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-5 py-4 text-[#1a1a1a] hover:bg-[#f5f1eb] transition-colors"
          >
            <ContactIcon />
            <span className="text-sm font-medium">Contact Form</span>
          </Link>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="connect-btn"
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        aria-expanded={isOpen}
      >
        <span>Free Consultation</span>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>
    </div>
  );
}
