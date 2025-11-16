import type { PageLayoutVariant, LayoutAssignments } from "./types";
import { servicesData } from "./services";
import { locationsData } from "./locations";

export const serviceVariants: PageLayoutVariant[] = [
  {
    key: "classic",
    label: "Classic",
    description: "Traditional layout with hero, description, FAQs, and CTA",
    sections: ["hero", "description", "inclusions", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "detailed",
    label: "Detailed",
    description: "Comprehensive layout with TOC, multiple sections, and sidebar",
    sections: ["hero", "toc", "description", "inclusions", "commonSituations", "faqs", "compliance", "cta"],
    features: {
      toc: true,
      sidebar: true,
      heroStyle: "image",
      schema: ["Service", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "focused",
    label: "Focused",
    description: "Streamlined layout emphasizing key information",
    sections: ["hero", "description", "faqs", "cta"],
    features: {
      heroStyle: "abstract",
      stickyCta: false,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "comparison",
    label: "Comparison",
    description: "Layout comparing service options and alternatives",
    sections: ["hero", "description", "comparison", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "process",
    label: "Process",
    description: "Step-by-step process focused layout",
    sections: ["hero", "description", "process", "inclusions", "faqs", "cta"],
    features: {
      heroStyle: "abstract",
      stickyCta: true,
      schema: ["Service", "BreadcrumbList", "HowTo"],
    },
  },
  {
    key: "minimal",
    label: "Minimal",
    description: "Clean minimal layout with essential information",
    sections: ["hero", "description", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: false,
      schema: ["Service", "BreadcrumbList"],
    },
  },
];

export const locationVariants: PageLayoutVariant[] = [
  {
    key: "map-first",
    label: "Map First",
    description: "Map prominent layout with location details",
    sections: ["hero", "map", "description", "popularPaths", "faqs", "cta"],
    features: {
      heroStyle: "map",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "classic",
    label: "Classic",
    description: "Traditional location page layout",
    sections: ["hero", "description", "popularPaths", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "detailed",
    label: "Detailed",
    description: "Comprehensive location information layout",
    sections: ["hero", "description", "popularPaths", "services", "faqs", "cta"],
    features: {
      heroStyle: "image",
      sidebar: true,
      schema: ["Place", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "focused",
    label: "Focused",
    description: "Streamlined location page",
    sections: ["hero", "description", "popularPaths", "faqs", "cta"],
    features: {
      heroStyle: "abstract",
      stickyCta: false,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "grid",
    label: "Grid",
    description: "Grid-based layout showcasing multiple aspects",
    sections: ["hero", "description", "grid", "popularPaths", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "minimal",
    label: "Minimal",
    description: "Clean minimal location page",
    sections: ["hero", "description", "faqs", "cta"],
    features: {
      heroStyle: "gradient",
      stickyCta: false,
      schema: ["Place", "BreadcrumbList"],
    },
  },
];

function assignLayoutsRoundRobin<T extends { slug: string }>(
  items: T[],
  variants: PageLayoutVariant[]
): Record<string, string> {
  const assignments: Record<string, string> = {};
  let variantIndex = 0;

  items.forEach((item, index) => {
    if (index > 0 && index % variants.length === 0) {
      variantIndex = (variantIndex + 1) % variants.length;
    }
    assignments[item.slug] = variants[variantIndex].key;
    variantIndex = (variantIndex + 1) % variants.length;
  });

  return assignments;
}

export const assignments: LayoutAssignments = {
  services: assignLayoutsRoundRobin(servicesData, serviceVariants),
  locations: assignLayoutsRoundRobin(locationsData, locationVariants),
};




