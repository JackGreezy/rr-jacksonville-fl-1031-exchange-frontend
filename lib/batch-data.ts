import { serviceBatches01, serviceBatches02, serviceBatches03 } from "@/data";
import { locationBatches01, locationBatches02, locationBatches03, locationBatches04 } from "@/data";

// Merge all service batch data
const allServiceBatches = {
  ...serviceBatches01.servicesBatch01,
  ...serviceBatches02.servicesBatch02,
  ...serviceBatches03.servicesBatch03,
};

// Merge all location batch data
const allLocationBatches = {
  ...locationBatches01.locationsBatch01,
  ...locationBatches02.locationsBatch02,
  ...locationBatches03.locationsBatch03,
  ...locationBatches04.locationsBatch04,
};

export function getServiceBatchData(slug: string) {
  return allServiceBatches[slug as keyof typeof allServiceBatches] || null;
}

export function getLocationBatchData(slug: string) {
  // Normalize slug - remove -fl suffix if present for batch lookup
  const normalizedSlug = slug.replace(/-fl$/, "");
  return allLocationBatches[normalizedSlug as keyof typeof allLocationBatches] || null;
}

