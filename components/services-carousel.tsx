"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame (opposite direction from property types)

    const animate = () => {
      scrollPosition -= scrollSpeed; // Negative for opposite direction
      
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (Math.abs(scrollPosition) >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const homepageServices = servicesData.filter(
    (service) => !/(?:three-property|200-percent|95-percent)/.test(service.slug),
  );
  // Double the visitor-focused services array for infinite scroll
  const doubledServices = [...homepageServices, ...homepageServices];

  return (
    <section className="bg-[#1a1a1a] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="section-divider" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
            Expert Guidance
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Our Services
          </h2>
          <Link
            href="/services"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm text-[#c9a962] hover:text-white transition-colors tracking-[0.15em] uppercase"
          >
            <span>View All {servicesData.length} Services</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animated Services Carousel */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {doubledServices.map((service, index) => (
            <Link
              key={`${service.slug}-${index}`}
              href={service.route}
              className="group flex-shrink-0 w-[280px] md:w-[320px] bg-[#2a2a2a] hover:bg-[#333] transition-all duration-300"
            >
              <div className="p-6 h-full">
                <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
