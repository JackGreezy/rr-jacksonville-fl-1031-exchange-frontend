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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccessModal(true);
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        setSelectedProjectType("");
        setProjectTypeQuery("");
        setTurnstileToken("");
        // Reset turnstile
        if ((window as any).turnstile) {
          (window as any).turnstile.reset();
        }
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#01264f] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        ref={formRef}
        className={`rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-lg ${className}`}
        id="contact-form" action="/api/contact" method="post">
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
          Name
          <input
            required
            aria-required="true"
            aria-label="Full name" name="name"
            type="text"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            Email
            <input
              required
              aria-required="true"
              aria-label="Email" name="email"
              type="email"
              className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none"
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-[#003366]">
            Phone Number
            <input
              ref={phoneInputRef}
              required
              aria-required="true"
              aria-label="Phone number" name="phone"
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

        <div className="grid gap-4 md:grid-cols-2">


        </div>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Have you completed a 1031 exchange before?
          <select aria-label="Timeline"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none" name="hasCompleted1031" required><option value="">Select yes or no</option><option value="Yes">Yes</option><option value="No">No</option></select>
        </label>
        <label className="flex flex-col text-sm font-semibold text-[#003366]">
          Notes
          <textarea aria-label="Project details"
            className="mt-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none" name="notes" rows={4} placeholder="Share any exchange questions or context"></textarea>
        </label>


        <button
          type="submit"
          className="w-full rounded-full bg-[#003366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#01264f] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
    </>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}

