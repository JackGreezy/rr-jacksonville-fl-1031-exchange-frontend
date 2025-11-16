# SERVICES Content Generation — BATCH 01  Items 1 to 8

## Your Mission
Generate SEO optimized content for 8 services in Jacksonville, FL. The site prioritizes nationwide replacement property identification and compliant guidance.

=========
Your task is to assemble the Property Types list for a 1031 exchange NNN website with smart variation while keeping focus on core single tenant retail. Use clear, plain English. No em dashes. No contractions.

## Services In This Batch  8 total
1) multifamily-property-identification — Multifamily Property Identification  Layout: classic
2) industrial-warehouse-identification — Industrial Warehouse Identification  Layout: detailed
3) retail-nnn-property-identification — Retail NNN Property Identification  Layout: focused
4) medical-office-identification — Medical Office Identification  Layout: comparison
5) self-storage-identification — Self Storage Identification  Layout: process
6) stnl-property-identification — STNL Property Identification  Layout: minimal
7) 45-day-identification-strategy — 45 Day Identification Strategy  Layout: classic

## Content Requirements  for EACH Service
### 1. Main Description  220 to 300 words
- Who it is for, what is included, forty five day and one hundred eighty day timing
- Mention Qualified Intermediary and qualified escrow at a high level
- Mention Jacksonville, FL once
- Follow the assigned layout sections

### 2. FAQs  4 to 6
- Include Jacksonville, FL in every answer
- Include at least one identification rules question and one boot question

### 3. What We Include
- 5 to 8 bullet points

### 4. Common Situations
- 3 short examples framed as examples we can handle

### 5. Compliance and Limits
- Educational content only. Not tax, legal, or investment advice.
- 1031 defers income tax on qualifying real property and does not remove transfer or documentary taxes.

### 6. Example Capability
{ "disclaimer":"Example of the type of engagement we can handle", "serviceType":"[Service Name]", "location":"Jacksonville, FL", "scope":"...", "clientSituation":"...", "ourApproach":"...", "expectedOutcome":"...", "contactCTA":"Contact us to discuss your situation in Jacksonville, FL. We can share references upon request." }

## Output Format  TypeScript  write to /data/batches/services/batch-01.ts
export const servicesBatch01 = {
  "[slug]": {
    layoutKey:"[layout-key]",
    mainDescription:"<p>...</p>",
    faqs:[{question:"...",answer:"..."}],
    inclusions:["..."],
    commonSituations:["..."],
    complianceNote:"Educational content only. Not tax, legal, or investment advice.",
    exampleCapability:{ ... }
  }
}




