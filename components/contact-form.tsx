"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/services";

// Get project types from services data, sorted alphabetically, plus "Other"
const projectTypes = [
  ...servicesData.map((s) => s.name).sort((a, b) => a.localeCompare(b)),
  "Other",
];

interface ContactFormProps {
  prefilledProjectType?: string;
  className?: string;
  showTitle?: boolean;
}

function ContactFormInner({ 
  prefilledProjectType: propPrefilledProjectType,
  className = "",
  showTitle = true 
}: ContactFormProps) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const projectTypeRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [projectTypeQuery, setProjectTypeQuery] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const prefilledProjectType = propPrefilledProjectType || searchParams?.get("projectType") || "";

  // Phone validation - only allow numbers
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove all non-digits
    e.target.value = value;
  };

  // Turnstile callback
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Set up Turnstile callback
    (window as any).turnstileCallback = (token: string) => {
      setTurnstileToken(token);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (prefilledProjectType) {
      setSelectedProjectType(prefilledProjectType);
      if (formRef.current) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [prefilledProjectType]);

  const filteredProjectTypes = projectTypeQuery
    ? projectTypes.filter((type) =>
        type.toLowerCase().includes(projectTypeQuery.toLowerCase())
      )
    : [];

  const handleProjectTypeChange = (value: string) => {
    setSelectedProjectType(value);
    setProjectTypeQuery(value);
    setShowSuggestions(false);
  };

  return (
    <form
      ref={formRef}
      action="/api/contact"
      method="POST"
      className={`rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-lg ${className}`}
      id="contact-form"
    >
      {showTitle && (
        <h2
          className="text-2xl font-semibold tracking-tight text-[#003366]"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Send us a message
        </h2>
      )}
      <div className={`${showTitle ? "mt-6" : ""} space-y-4`}>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Name *
          <input
            required
            aria-required="true"
            aria-label="Full name"
            name="name"
            type="text"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          />
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Company
          <input
            aria-label="Company name"
            name="company"
            type="text"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            Email *
            <input
              required
              aria-required="true"
              aria-label="Email"
              name="email"
              type="email"
              className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            Phone *
            <input
              ref={phoneInputRef}
              required
              aria-required="true"
              aria-label="Phone number"
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={handlePhoneInput}
              className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            />
          </label>
        </div>
        <label className="relative flex flex-col text-sm font-semibold text-[#003366]">
          Project Type *
          <input
            ref={projectTypeRef}
            required
            aria-required="true"
            aria-label="Project type"
            name="projectType"
            type="text"
            value={selectedProjectType || projectTypeQuery}
            onChange={(e) => {
              setProjectTypeQuery(e.target.value);
              setSelectedProjectType(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            autoComplete="off"
          />
          {showSuggestions && filteredProjectTypes.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-xl">
              <ul className="py-2">
                {filteredProjectTypes.map((type) => (
                  <li key={type}>
                    <button
                      type="button"
                      onClick={() => handleProjectTypeChange(type)}
                      className="w-full px-4 py-2 text-left text-sm text-[#1F2937] transition hover:bg-[#F9FAFB] hover:text-[#003366] focus-visible:bg-[#F9FAFB] focus-visible:text-[#003366] focus-visible:outline-none"
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Property Being Sold
          <input
            aria-label="Property being sold"
            name="property"
            type="text"
            placeholder="Include property type, location, and estimated value (optional)"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            Estimated Close Date
            <input
              aria-label="Estimated close date"
              name="estimatedCloseDate"
              type="date"
              className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            City
            <input
              aria-label="City"
              name="city"
              type="text"
              placeholder="Primary metro or submarket (optional)"
              className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            />
          </label>
        </div>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Timeline
          <select
            aria-label="Timeline"
            name="timeline"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (within 30 days)</option>
            <option value="45-days">Within 45 days</option>
            <option value="90-days">Within 90 days</option>
            <option value="180-days">Within 180 days</option>
            <option value="planning">Planning phase</option>
          </select>
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Details
          <textarea
            aria-label="Project details"
            name="details"
            rows={6}
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          />
        </label>
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          data-callback="turnstileCallback"
        />
        <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
        <button
          type="submit"
          className="w-full rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!turnstileToken}
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}

