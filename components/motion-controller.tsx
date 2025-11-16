"use client";

import { useEffect } from "react";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

const initialOffsets: Record<
  string,
  {
    x: number;
    y: number;
  }
> = {
  "fade-up": { x: 0, y: 30 },
  "fade-down": { x: 0, y: -30 },
  "fade-left": { x: 40, y: 0 },
  "fade-right": { x: -40, y: 0 },
};

export default function MotionController() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          const delay = Number(target.dataset.delay ?? 0) * 1000;
          
          setTimeout(() => {
            target.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`;
            target.style.opacity = "1";
            target.style.transform = "translate3d(0, 0, 0)";
          }, delay);

          observer.unobserve(target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((el, index) => {
      const direction = el.dataset.animate ?? "fade-up";
      const offset = initialOffsets[direction] ?? initialOffsets["fade-up"];
      el.style.opacity = "0";
      el.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
      el.style.willChange = "opacity, transform";
      el.dataset.delay = (index * 0.05).toString();
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

