# rr-1031-prompt-6

## CRITICAL: Contact Form Standardization

**All contact forms across the entire site MUST be exactly the same as the contact form on the contact page (`app/contact/contact-form.tsx`).** 

This includes:
- Home page form
- Service page forms
- Location page forms  
- Property type page forms
- Any other forms across the site

The standardized contact form must include these exact fields:
1. Name * (required)
2. Company (optional)
3. Email * (required)
4. Phone * (required)
5. Project Type * (required, with typeahead/autocomplete from services data)
6. Timeline (optional dropdown: Immediate, 45 days, 180 days, Planning phase)
7. Details (optional textarea)
8. Cloudflare Turnstile CAPTCHA (required)
9. Submit button (disabled until CAPTCHA completed)

**Do NOT create variations or simplified versions. Every form must match the contact page exactly.**

---

## CRITICAL: Services and Locations Pages Must Use Rich Batch Data

**ALL services and locations pages MUST use the rich batch data from `/data/batches/` directories.**

### Services Pages (`app/services/[slug]/page.tsx`)

**MUST ALWAYS:**
1. Import and use `getServiceBatchData()` from `@/lib/batch-data`
2. Display `mainDescription` from batch data (HTML content)
3. Display `inclusions` array as a bulleted list under "What We Include"
4. Display `commonSituations` array as cards under "Common Situations"
5. Display `faqs` array as expandable details under "Frequently Asked Questions"
6. Display `complianceNote` if present
7. Never hardcode content - always pull from batch data

**Example structure:**
```typescript
const batchData = getServiceBatchData(slug);

// Display mainDescription
{batchData?.mainDescription && (
  <div dangerouslySetInnerHTML={{ __html: batchData.mainDescription }} />
)}

// Display inclusions
{batchData?.inclusions && batchData.inclusions.length > 0 && (
  <div>
    <h2>What We Include</h2>
    <ul>
      {batchData.inclusions.map((inclusion, index) => (
        <li key={index}>{inclusion}</li>
      ))}
    </ul>
  </div>
)}

// Display FAQs
{batchData?.faqs && batchData.faqs.length > 0 && (
  <div>
    <h2>Frequently Asked Questions</h2>
    {batchData.faqs.map((faq, index) => (
      <details key={index}>
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>
    ))}
  </div>
)}
```

### Locations Pages (`app/service-areas/[slug]/page.tsx`)

**MUST ALWAYS:**
1. Import and use `getLocationBatchData()` from `@/lib/batch-data`
2. Display hero image in a hero section at the top of the page
3. Display `mainDescription` from batch data (HTML content)
4. Display `popularPaths` array as cards linking to services/property types
5. Display `faqs` array as expandable details
6. Never hardcode content - always pull from batch data

**Hero Image Requirements:**
- MUST display hero image at the top of every location page
- Use Next.js `Image` component with `fill` and `priority` props
- Hero image path: `/locations/{slug-without-fl-suffix}-1031-exchange.jpg`
- Fallback to `location.heroImage` from locations data if available
- Hero section should be 400px height on mobile, 500px on desktop
- Overlay gradient for text readability: `bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent`
- Breadcrumbs and title should overlay the hero image with white text

**Example structure:**
```typescript
const batchData = getLocationBatchData(slug);
const heroImage = location.heroImage || `/locations/${slug.replace(/-fl$/, "")}-1031-exchange.jpg`;

// Hero section with image
<div className="relative w-full h-[400px] md:h-[500px]">
  <Image
    src={heroImage}
    alt={`${location.name} 1031 Exchange Properties`}
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent" />
  <div className="absolute inset-0 flex items-end">
    {/* Breadcrumbs and title overlay */}
  </div>
</div>

// Display mainDescription
{batchData?.mainDescription && (
  <div dangerouslySetInnerHTML={{ __html: batchData.mainDescription }} />
)}

// Display popularPaths
{batchData?.popularPaths && batchData.popularPaths.length > 0 && (
  <div>
    <h2>Popular Property Identification Paths in {location.name}</h2>
    {batchData.popularPaths.map((path, index) => (
      <Link href={path.type === "service" ? `/services/${path.slug}` : `/property-types/${path.slug}`}>
        <h3>#{path.rank} {path.name}</h3>
        <p>{path.whyPopular}</p>
      </Link>
    ))}
  </div>
)}

// Display FAQs
{batchData?.faqs && batchData.faqs.length > 0 && (
  <div>
    <h2>Frequently Asked Questions</h2>
    {batchData.faqs.map((faq, index) => (
      <details key={index}>
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>
    ))}
  </div>
)}
```

**Batch Data Helper (`lib/batch-data.ts`):**
- This file merges all batch data files (batch-01, batch-02, batch-03) for both services and locations
- Always use `getServiceBatchData(slug)` and `getLocationBatchData(slug)` helper functions
- Never import batch files directly in page components

---

## Triple Net Lease Content Updates

Update the content on the services pages and locations that talk about triple net lease to have content that has to do with the below but DO NOT COPY IT EXACTLY, THE COPY HAS TO BE IRREFUTABLY DIFFERENT. BUT MAKE SURE TO GET THE POINT ACROSS:

Commercial real estate (CRE) passive income pro or complete novice, you may not be aware of the unique benefits and security that triple net lease (NNN) properties offer. NNN lease investments are truly one of the most stable income-producing investment options available.

So what is a NNN lease investment and why should you add one to your investment strategy?

Understanding "NNN" Lease Investments
NNN is the abbreviation of the term "triple net" lease. When you purchase a commercial building and/or the land it sits on and lease it back to a single tenant who agrees to pay net taxes, net insurance, net property maintenance, rent, utilities, and most other expenses, that kind of property is considered a NNN lease. These creditworthy tenants tend to be essential retailers, dollar stores, fast-food restaurants, gas station c-store combos, drug stores, and medical companies with investment-grade S&P and Moody ratings.

Types of Triple Net Leases
There are two types of triple net leases: absolute NNN and regular NNN. A big misunderstanding in the NNN market is that all triple net leases are absolute NNN, which isn't the case.

Absolute NNN Lease
An absolute NNN lease is a long-term, corporate-guaranteed lease (10 to 20+ years) between the landlord (you) and a creditworthy tenant who pays all expenses associated with the property. These costs include real estate taxes, insurance, common area maintenance (CAM), and other expenses, such as capital expenditures. In an absolute triple net lease, the tenant assumes all financial risk while you own the property with zero responsibilities; simply collect rent and live your life.

Tenants that like to operate with absolute NNN leases are typically investment-grade corporations such as Dollar General, Walgreens, and Taco Bell. They want full control over their brand and image, so they take care of the properties as if they own them. Absolute NNN leases make it easy to own a triple net property anywhere in America without worry.

Regular NNN Lease
A regular NNN lease is also a long-term lease that still includes you – the owner – paying 100% of the taxes, insurance, and common area maintenance but may not include ALL expenses. These corporate-guaranteed leases from companies like Starbucks, Auto Zone, DaVita, and others, may have clauses that require the landlord to cover expenses such as parking lot, roof, and structure, in which case the landlord bears some responsibility, though that responsibility is minimal.

Even though regular triple net lease properties may require some maintenance costs, they are still a stable, income-producing investment that can be owned in any state, no matter where you live.

NNN Ground Lease
A NNN ground lease is a land-only rental that lasts from 20 to 99 years. As the investor, you have fee-simple ownership, holding the title on the property. Just like with an absolute NNN lease, the tenant is responsible for all expenses related to the development and improvement of the property, taxes, repair in addition to maintenance, insurance, and financing costs.

In regards to the lease, a ground lease should contain a lease clause that gives you possession of the building if the lease is canceled early. This provision helps ensure the terms of the lease are fulfilled, and, if the tenant vacates, the building and its improvements that make the property more valuable, become yours. In this case, you not only own land that may have appreciated but you also own a building that's re-tenantable.

NNN Leases & Sale-Leasebacks
Which Businesses Use a Triple Net Lease?
Triple net lease properties are typically recession-proof, pandemic-proof businesses tied to lifestyle trends and necessity versus those tied solely to economic cycles. NNN tenants commonly fit the three most important triple net investing criteria

Tenant creditworthiness,
Location
Lease type/duration
NNN lease tenants have proven, even in the toughest economic times, their ability to stay profitable. Though most NNN properties are tenanted by multibillion-dollar brands, some are also manufacturing, industrial, and other types of businesses.

Businesses that commonly use NNN leases:

Auto parts stores
Convenience stores
Child care/early learning centers
Car washes
Dollar stores
Drug stores
Fast-food restaurants
Gas stations
Medical clinics
Pet & veterinary clinics
Quick-service restaurants (QSRs)
NNN Lease Investment Benefits
The benefits to owning a NNN lease investment go beyond simple stock market investing or other CRE investments, like gross lease apartments and office space.

Triple net property tenants are significantly less likely to default, which means you face a reduced owner risk. The value of NNN investments is not susceptible to wide swings and daily fluctuations, so you receive worry-free, consistent, stable monthly income that escalates over the course of the lease term. Then there are the annual tax opportunities and the 1031 exchange tax code, which can further increase the value of your investment.

Triple Net Financial & Lifestyle Advantages
Low barrier to entry: Most NNN properties range from so million to works! million, though smaller or higher-value properties exist.
Reliable, relatively low-risk investment that provides long-term monthly income
Passive, predictable income shaped to fit financial, lifestyle, and geographical preferences
A billion-dollar corporation tenanting your investment lowers ownership risk 10 to 20+ years of reliable income with little to no landlord responsibility, as guaranteed by the lease
Periodic rent escalations that help cover inflation or any unexpected costs
Prime location: Tenant opens where demographically successful for their business, resulting in predictable sales and less risk of having to re-tenant
Tangible asset that adds value to any portfolio, as well as possible leverage and great resale value
Tax opportunities, such as the 1031 exchange and cost segregation depreciation, help increase your internal rate of return to that realized by other investments
Diversifying by location, tenant type, asset class, lease type, and cap rate helps to build wealth
Enjoy lifestyle and financial freedom without actively managing properties
With the tax opportunities, rent escalations, possible leverage, the value of the tangible asset, and financing terms, your internal rate of return (IRR) can be as much as 7–10% or more, which is in line with gross lease investments and stock market returns without the headaches.

Are There Any Drawbacks to NNN Investments?
If you like to "manage" properties, one drawback would be the lack of property management. Since NNN tenants take care of CAM, other than possible roof, structure, and parking lot responsibilities, as the landlord, you have very little to do or manage hands-on.

Another drawback for you might be that the rent is capped by the lease for a specified amount of time. However, some tenants offer annual rent increases, while others offer increases every five years, and so on. These increases can be as much as ten percent, depending on the corporation that's renting the property. When you factor in the lack of maintenance and management, tax advantages, and the value of the land, the rent cap doesn't end up being much of a factor in internal rate of return.

How to Qualify for NNN
"NNN investments offer a unique blend of stability, passive income, and long-term growth that few other asset classes can match. Whether someone is looking to diversify their portfolio, secure reliable cash flow, or leverage a 1031 exchange for tax advantages, these properties provide a low-risk path to building wealth. At Westwood Net Lease Advisors, we specialize in helping investors navigate this market to find the right opportunities that align with their financial goals." — Jason Simon, Vice President, Westwood Net Lease Advisors

NNN Investments Offer Security Not Found in Other Investments
Now that you know what a NNN lease investment is, you might be thinking it sounds too good to be true. Westwood Net Lease Advisors assure you that what you see is what you get. NNN investments are straightforward, easy to own, income-producing, profitable investments that offer a level of security not found in other investments.

Whether you buy with all cash or obtain debt to purchase, or if you're looking to use a 1031 exchange to trade high-maintenance properties for something less time-consuming and virtually expense-free, NNN lease properties are one of the best investment options available.

If you're ready to learn more, contact our team today for a no-obligation conversation about how low-risk triple net lease investments can help you build wealth. We walk you through the process from before the property search through closing and thereafter, at no cost to you

---

## Summary

**ALWAYS REMEMBER:**
1. All contact forms must match `app/contact/contact-form.tsx` exactly
2. Services pages MUST use `getServiceBatchData()` and display all batch data fields
3. Locations pages MUST use `getLocationBatchData()` and display hero images + all batch data fields
4. Never hardcode content - always pull from batch data files
5. Hero images MUST display on every location page with proper overlay and styling
6. Triple net lease content must be rewritten (not copied) but convey the same points

