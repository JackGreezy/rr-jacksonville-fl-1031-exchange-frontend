# LOCATIONS Content Generation — BATCH 01  Items 1 to 8

## Your Mission
Generate SEO optimized content for 8 locations near Jacksonville, FL that help users find replacement properties nationwide.

**Critical**
- No boilerplate
- Include Jacksonville, FL once in each body
- Rank and rent compliant language only
- Emphasize nationwide property identification support
- Use the assigned layout key

## Research Requirements
1) Search "[Location] FL population 2024 2025"
2) Search "[Location] FL major employers industries"
3) Search "[Location] FL neighborhoods business districts"
4) Confirm map location and radius

## Locations In This Batch  8 total
1) jacksonville — Jacksonville, FL  Layout: map-first
2) st-augustine — St. Augustine, FL  Layout: classic
3) orange-park — Orange Park, FL  Layout: detailed
4) ponte-vedra-beach — Ponte Vedra Beach, FL  Layout: focused
5) fernandina-beach — Fernandina Beach, FL  Layout: grid
6) atlantic-beach — Atlantic Beach, FL  Layout: minimal
7) neptune-beach — Neptune Beach, FL  Layout: map-first
8) jacksonville-beach — Jacksonville Beach, FL  Layout: classic

## Content Requirements  for EACH Location
### 1. Main Description  180 to 260 words
- Local exchange drivers, asset types, any transfer or documentary tax notes
- One reference to Jacksonville, FL
- Mention national identification support
- Follow the assigned layout sections

### 2. Popular Paths  rank 1 to 6
- Order services or property types with 2 to 3 sentence rationale each

### 3. FAQs  4 items
- Include the location and state abbreviation in each answer

### 4. Example Capability
{ "disclaimer":"Example of the type of engagement we can handle", "location":"[Location, FL]", "situation":"...", "ourApproach":"...", "expectedOutcome":"..." }

## Output Format  TypeScript  write to /data/batches/locations/batch-01.ts
export const locationsBatch01 = {
  "[slug]": {
    layoutKey:"[layout-key]",
    mainDescription:"<p>...</p>",
    popularPaths:[{rank:1,type:"service or propertyType",slug:"...",name:"...",whyPopular:"..."}],
    faqs:[{question:"...",answer:"..."}],
    exampleCapability:{ ... }
  }
}




