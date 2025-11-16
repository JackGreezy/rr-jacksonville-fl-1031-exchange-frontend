const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  relatedServices: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "multifamily-property-identification",
    name: "Multifamily Property Identification",
    shortDescription: "Find garden, mid-rise, and mixed-income multifamily properties across Duval, Clay, and St. Johns counties.",
    description: `Our multifamily property identification service helps investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} locate garden apartments, mid-rise buildings, and mixed-income properties that qualify for 1031 exchanges. We cover Duval, Clay, and St. Johns counties, providing detailed property information including unit counts, rent rolls, and market positioning.`,
    relatedServices: [
      "industrial-warehouse-identification",
      "retail-nnn-property-identification",
      "medical-office-identification",
    ],
    faqs: [
      {
        question: "What types of multifamily properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Garden apartments, mid-rise buildings, and mixed-income properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if they are held for investment purposes. Properties must be located within the United States and cannot be your primary residence.`,
      },
      {
        question: "How do I identify multifamily properties within the 45 day deadline?",
        answer: `You have 45 calendar days from the sale of your relinquished property to identify up to three multifamily properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} or use the 200 percent rule. Written identification notices must be delivered to your Qualified Intermediary before the deadline expires.`,
      },
      {
        question: "What information do you provide about multifamily properties?",
        answer: `We provide property addresses, unit counts, current rent rolls, property age, location details, and market positioning for multifamily properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This information helps you make informed identification decisions during your 45 day window.`,
      },
    ],
  },
  {
    slug: "industrial-warehouse-identification",
    name: "Industrial Warehouse Identification",
    shortDescription: "Locate warehouse, flex, and cold storage sites supporting JAXPORT, Cecil Commerce, and I-95 corridors.",
    description: `Industrial warehouse identification for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors includes distribution centers, flex space, and cold storage facilities near JAXPORT, Cecil Commerce Center, and major interstate corridors. We help identify properties that support logistics operations and qualify for 1031 exchanges.`,
    relatedServices: [
      "multifamily-property-identification",
      "flex-space-identification",
      "self-storage-identification",
    ],
    faqs: [
      {
        question: "What industrial properties qualify for 1031 exchanges near Jacksonville?",
        answer: `Warehouse, distribution, flex space, and cold storage properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties near JAXPORT, Cecil Commerce, and I-95 corridors are popular choices for investors seeking industrial assets.`,
      },
      {
        question: "How do I identify industrial properties within 45 days?",
        answer: `You must identify industrial warehouse properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.`,
      },
      {
        question: "What details do you provide about industrial warehouse properties?",
        answer: `We provide property addresses, square footage, ceiling heights, dock doors, location details, and tenant information for industrial properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "retail-nnn-property-identification",
    name: "Retail NNN Property Identification",
    shortDescription: "Find coastal strip centers, single-tenant NNN, and hospitality assets near ports and interstates.",
    description: `Retail NNN property identification helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors locate single-tenant net lease properties, strip centers, and retail assets with credit tenants. We focus on properties with long-term leases and minimal landlord responsibilities.`,
    relatedServices: [
      "stnl-property-identification",
      "multifamily-property-identification",
      "medical-office-identification",
    ],
    faqs: [
      {
        question: "What retail NNN properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Single-tenant net lease retail properties, strip centers, and retail assets in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties with credit tenants and long-term leases are popular choices.`,
      },
      {
        question: "How do I identify retail NNN properties within the 45 day deadline?",
        answer: `You have 45 calendar days from your relinquished property sale to identify retail NNN properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written identification notices.`,
      },
      {
        question: "What information do you provide about retail NNN properties?",
        answer: `We provide property addresses, tenant names, lease terms, rent amounts, location details, and property characteristics for retail NNN properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "medical-office-identification",
    name: "Medical Office Identification",
    shortDescription: "Locate health campuses, surgery centers, and professional condos with long-term credit tenants.",
    description: `Medical office identification for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors includes health campuses, ambulatory surgery centers, and medical professional condominiums. We help identify properties with healthcare tenants and long-term lease structures.`,
    relatedServices: [
      "retail-nnn-property-identification",
      "multifamily-property-identification",
      "flex-space-identification",
    ],
    faqs: [
      {
        question: "What medical office properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Health campuses, surgery centers, medical office buildings, and professional condos in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties with healthcare tenants are popular choices for investors.`,
      },
      {
        question: "How do I identify medical office properties within 45 days?",
        answer: `You must identify medical office properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.`,
      },
      {
        question: "What details do you provide about medical office properties?",
        answer: `We provide property addresses, tenant information, lease terms, square footage, location details, and property characteristics for medical office properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "self-storage-identification",
    name: "Self Storage Identification",
    shortDescription: "Find climate-controlled and drive-up self storage facilities across Jacksonville and surrounding markets.",
    description: `Self storage property identification helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors locate climate-controlled facilities, drive-up units, and storage properties with strong occupancy rates. We provide property details including unit mix, occupancy, and market positioning.`,
    relatedServices: [
      "industrial-warehouse-identification",
      "flex-space-identification",
      "mixed-use-property-identification",
    ],
    faqs: [
      {
        question: "What self storage properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Climate-controlled and drive-up self storage facilities in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties with strong occupancy rates and good locations are popular choices.`,
      },
      {
        question: "How do I identify self storage properties within 45 days?",
        answer: `You have 45 calendar days from your relinquished property sale to identify self storage properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written identification notices.`,
      },
      {
        question: "What information do you provide about self storage properties?",
        answer: `We provide property addresses, unit counts, occupancy rates, unit mix, location details, and market positioning for self storage properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "stnl-property-identification",
    name: "STNL Property Identification",
    shortDescription: "Locate single tenant net lease properties with credit tenants and long-term lease structures.",
    description: `STNL property identification for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors focuses on single tenant net lease properties with credit tenants, long-term leases, and minimal landlord responsibilities. We help identify properties that provide stable income streams.`,
    relatedServices: [
      "retail-nnn-property-identification",
      "medical-office-identification",
      "hospitality-property-identification",
    ],
    faqs: [
      {
        question: "What STNL properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Single tenant net lease properties with credit tenants in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties with long-term leases and minimal landlord responsibilities are popular choices.`,
      },
      {
        question: "How do I identify STNL properties within 45 days?",
        answer: `You must identify STNL properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.`,
      },
      {
        question: "What details do you provide about STNL properties?",
        answer: `We provide property addresses, tenant names, credit ratings, lease terms, rent amounts, location details, and property characteristics for STNL properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "flex-space-identification",
    name: "Flex Space Identification",
    shortDescription: "Find office-warehouse combinations and flex properties suitable for light industrial and office uses.",
    description: `Flex space identification helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors locate office-warehouse combinations and flex properties that accommodate both office and light industrial uses. We provide property details including unit sizes, ceiling heights, and use restrictions.`,
    relatedServices: [
      "industrial-warehouse-identification",
      "medical-office-identification",
      "self-storage-identification",
    ],
    faqs: [
      {
        question: "What flex space properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Office-warehouse combinations and flex properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties that accommodate both office and light industrial uses are popular choices.`,
      },
      {
        question: "How do I identify flex space properties within 45 days?",
        answer: `You have 45 calendar days from your relinquished property sale to identify flex space properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written identification notices.`,
      },
      {
        question: "What information do you provide about flex space properties?",
        answer: `We provide property addresses, unit sizes, ceiling heights, office percentages, location details, and use restrictions for flex space properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "hospitality-property-identification",
    name: "Hospitality Property Identification",
    shortDescription: "Locate boutique hotels, marinas, and coastal resorts balancing leisure demand with operational controls.",
    description: `Hospitality property identification for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors includes boutique hotels, marinas, and coastal resort properties. We help identify properties that balance leisure demand with operational requirements and qualify for 1031 exchanges.`,
    relatedServices: [
      "stnl-property-identification",
      "mixed-use-property-identification",
      "land-agricultural-identification",
    ],
    faqs: [
      {
        question: "What hospitality properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Boutique hotels, marinas, and coastal resort properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties that balance leisure demand with operational controls are popular choices.`,
      },
      {
        question: "How do I identify hospitality properties within 45 days?",
        answer: `You must identify hospitality properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.`,
      },
      {
        question: "What details do you provide about hospitality properties?",
        answer: `We provide property addresses, room counts, amenities, location details, and operational information for hospitality properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "land-agricultural-identification",
    name: "Land and Agricultural Identification",
    shortDescription: "Find timber, transitional land, and conservation swaps that demand precise eligibility guidance.",
    description: `Land and agricultural property identification helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors locate timber land, transitional properties, and conservation easement opportunities. We provide detailed eligibility guidance for land transactions that qualify for 1031 exchanges.`,
    relatedServices: [
      "hospitality-property-identification",
      "mixed-use-property-identification",
      "flex-space-identification",
    ],
    faqs: [
      {
        question: "What land and agricultural properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Timber land, transitional properties, and agricultural land in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment or productive use in a trade or business. Conservation easements may also qualify under certain circumstances.`,
      },
      {
        question: "How do I identify land properties within 45 days?",
        answer: `You have 45 calendar days from your relinquished property sale to identify land and agricultural properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. You can identify up to three properties or use the 200 percent rule with written identification notices.`,
      },
      {
        question: "What information do you provide about land and agricultural properties?",
        answer: `We provide property addresses, acreage, zoning, use restrictions, location details, and eligibility guidance for land and agricultural properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "mixed-use-property-identification",
    name: "Mixed Use Property Identification",
    shortDescription: "Locate properties combining residential, retail, and office uses in urban and suburban settings.",
    description: `Mixed use property identification for ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors includes properties that combine residential, retail, and office uses. We help identify properties in urban and suburban settings that qualify for 1031 exchanges.`,
    relatedServices: [
      "multifamily-property-identification",
      "retail-nnn-property-identification",
      "medical-office-identification",
    ],
    faqs: [
      {
        question: "What mixed use properties qualify for 1031 exchanges in Jacksonville?",
        answer: `Properties combining residential, retail, and office uses in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} qualify as like-kind replacement properties if held for investment. Properties in urban and suburban settings are popular choices for investors.`,
      },
      {
        question: "How do I identify mixed use properties within 45 days?",
        answer: `You must identify mixed use properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. You can identify up to three properties or use the 200 percent rule with written notices to your Qualified Intermediary.`,
      },
      {
        question: "What details do you provide about mixed use properties?",
        answer: `We provide property addresses, use mix, square footage breakdowns, location details, and property characteristics for mixed use properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. This helps you evaluate properties during your identification period.`,
      },
    ],
  },
  {
    slug: "45-day-identification-strategy",
    name: "45 Day Identification Strategy",
    shortDescription: "Develop a strategic approach to identifying replacement properties within the 45 day deadline.",
    description: `45 day identification strategy planning helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors develop systematic approaches to identifying replacement properties within the IRS deadline. We provide guidance on property selection criteria, identification letter preparation, and deadline management.`,
    relatedServices: [
      "three-property-rule-planning",
      "200-percent-rule-planning",
      "timeline-management",
    ],
    faqs: [
      {
        question: "How do I develop a 45 day identification strategy in Jacksonville?",
        answer: `A 45 day identification strategy in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} should include property search criteria, identification letter templates, Qualified Intermediary coordination, and deadline tracking. We help investors develop systematic approaches to meet the deadline.`,
      },
      {
        question: "What happens if I miss the 45 day identification deadline?",
        answer: `If you miss the 45 day identification deadline in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, your 1031 exchange may fail and you will be required to pay capital gains taxes. It is critical to identify properties in writing before the deadline expires.`,
      },
      {
        question: "Can I change my identification after submitting it?",
        answer: `Once you identify properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within the 45 day period, you generally cannot change your identification. However, you can close on fewer properties than identified if you follow the three property or 200 percent rules.`,
      },
    ],
  },
  {
    slug: "three-property-rule-planning",
    name: "Three Property Rule Planning",
    shortDescription: "Plan your identification strategy using the three property rule for maximum flexibility.",
    description: `Three property rule planning helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors understand and implement the IRS rule that allows identification of up to three replacement properties regardless of value. We provide guidance on property selection and identification letter preparation.`,
    relatedServices: [
      "45-day-identification-strategy",
      "200-percent-rule-planning",
      "timeline-management",
    ],
    faqs: [
      {
        question: "How does the three property rule work in Jacksonville?",
        answer: `The three property rule allows investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to identify up to three replacement properties regardless of their combined value. You can close on one, two, or all three of the identified properties within the 180 day deadline.`,
      },
      {
        question: "What are the requirements for the three property rule?",
        answer: `To use the three property rule in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, you must identify no more than three replacement properties in writing within 45 days of your relinquished property sale. The properties can be of any value, but you must close on at least one within 180 days.`,
      },
      {
        question: "Can I identify more than three properties?",
        answer: `If you want to identify more than three properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, you must use the 200 percent rule instead. The three property rule limits you to exactly three properties, regardless of their combined value.`,
      },
    ],
  },
  {
    slug: "200-percent-rule-planning",
    name: "200 Percent Rule Planning",
    shortDescription: "Plan your identification strategy using the 200 percent rule for multiple property options.",
    description: `200 percent rule planning helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors understand and implement the IRS rule that allows identification of unlimited replacement properties if their combined value does not exceed 200 percent of the relinquished property value.`,
    relatedServices: [
      "three-property-rule-planning",
      "45-day-identification-strategy",
      "timeline-management",
    ],
    faqs: [
      {
        question: "How does the 200 percent rule work in Jacksonville?",
        answer: `The 200 percent rule allows investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to identify unlimited replacement properties if their combined fair market value does not exceed 200 percent of the relinquished property value. This provides flexibility for investors seeking multiple properties.`,
      },
      {
        question: "What are the requirements for the 200 percent rule?",
        answer: `To use the 200 percent rule in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}, you must identify replacement properties in writing within 45 days. The combined fair market value of identified properties cannot exceed 200 percent of your relinquished property value.`,
      },
      {
        question: "Can I use both the three property and 200 percent rules?",
        answer: `No, you must choose either the three property rule or the 200 percent rule in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. You cannot combine both approaches. The three property rule is simpler but limits you to three properties, while the 200 percent rule allows more properties but requires value calculations.`,
      },
    ],
  },
  {
    slug: "reverse-exchange-coordination",
    name: "Reverse Exchange Coordination",
    shortDescription: "Coordinate reverse exchanges where replacement property is acquired before the relinquished property is sold.",
    description: `Reverse exchange coordination helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors structure exchanges where the replacement property is acquired before the relinquished property is sold. We coordinate with Exchange Accommodation Titleholders and Qualified Intermediaries.`,
    relatedServices: [
      "improvement-exchange-planning",
      "qualified-intermediary-coordination",
      "timeline-management",
    ],
    faqs: [
      {
        question: "What is a reverse exchange in Jacksonville?",
        answer: `A reverse exchange in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} allows you to acquire the replacement property before selling your relinquished property. An Exchange Accommodation Titleholder holds the replacement property until your relinquished property sells.`,
      },
      {
        question: "How long can a reverse exchange last?",
        answer: `Reverse exchanges in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} typically have a 180 day timeline from when the replacement property is acquired. You must sell your relinquished property and complete the exchange within this period.`,
      },
      {
        question: "What are the costs of a reverse exchange?",
        answer: `Reverse exchanges in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} involve additional costs including Exchange Accommodation Titleholder fees, holding costs, and potentially bridge financing. We help coordinate these costs with your Qualified Intermediary and lenders.`,
      },
    ],
  },
  {
    slug: "improvement-exchange-planning",
    name: "Improvement Exchange Planning",
    shortDescription: "Plan improvement exchanges where replacement property is enhanced before the exchange completes.",
    description: `Improvement exchange planning helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors structure exchanges where replacement property improvements are made before the exchange completes. We coordinate with Exchange Accommodation Titleholders and contractors.`,
    relatedServices: [
      "reverse-exchange-coordination",
      "qualified-intermediary-coordination",
      "timeline-management",
    ],
    faqs: [
      {
        question: "What is an improvement exchange in Jacksonville?",
        answer: `An improvement exchange in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} allows you to acquire replacement property and make improvements before completing the exchange. An Exchange Accommodation Titleholder holds the property during construction.`,
      },
      {
        question: "What improvements qualify for an improvement exchange?",
        answer: `Qualifying improvements in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} include construction, renovations, and property enhancements that increase the replacement property value. The improvements must be completed before the exchange closes within the 180 day deadline.`,
      },
      {
        question: "How do I coordinate an improvement exchange?",
        answer: `Improvement exchanges in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} require coordination with an Exchange Accommodation Titleholder, contractors, lenders, and your Qualified Intermediary. We help manage timelines and ensure compliance with IRS requirements.`,
      },
    ],
  },
  {
    slug: "dst-placement-assistance",
    name: "DST Placement Assistance",
    shortDescription: "Get assistance identifying Delaware Statutory Trust opportunities for 1031 exchange placement.",
    description: `DST placement assistance helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors identify Delaware Statutory Trust opportunities for 1031 exchange placement. We provide information about DST structures, minimum investments, and placement options.`,
    relatedServices: [
      "45-day-identification-strategy",
      "three-property-rule-planning",
      "qualified-intermediary-coordination",
    ],
    faqs: [
      {
        question: "What is a Delaware Statutory Trust for 1031 exchanges in Jacksonville?",
        answer: `A Delaware Statutory Trust in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} is a fractional ownership structure that allows multiple investors to own interests in large commercial properties. DST interests qualify as like-kind replacement properties for 1031 exchanges.`,
      },
      {
        question: "What are the minimum investment requirements for DSTs?",
        answer: `DST minimum investments in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} vary by sponsor and property type, typically ranging from $25,000 to $100,000 or more. We help identify DST opportunities that match your exchange proceeds and investment criteria.`,
      },
      {
        question: "How do I identify DST opportunities within 45 days?",
        answer: `You must identify specific DST interests in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} within 45 calendar days of your relinquished property sale. We provide information about available DST opportunities and help coordinate identification with your Qualified Intermediary.`,
      },
    ],
  },
  {
    slug: "rent-roll-analysis",
    name: "Rent Roll Analysis",
    shortDescription: "Analyze rent rolls for replacement properties to verify income and occupancy before identification.",
    description: `Rent roll analysis helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors verify income, occupancy, and tenant information for replacement properties before identification. We provide detailed analysis of rent rolls to support investment decisions.`,
    relatedServices: [
      "t12-financial-review",
      "market-comp-analysis",
      "lender-preflight-support",
    ],
    faqs: [
      {
        question: "What information does a rent roll analysis provide in Jacksonville?",
        answer: `Rent roll analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} provides tenant names, lease terms, rent amounts, occupancy rates, and lease expiration dates. This information helps investors evaluate replacement properties before identification.`,
      },
      {
        question: "Why is rent roll analysis important for 1031 exchanges?",
        answer: `Rent roll analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} helps investors verify income streams and occupancy before committing to replacement property identification. This reduces risk and supports informed decision-making during the 45 day identification period.`,
      },
      {
        question: "How quickly can you provide rent roll analysis?",
        answer: `Rent roll analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} can typically be completed within a few days of receiving property information. We prioritize analysis for investors approaching their 45 day identification deadline.`,
      },
    ],
  },
  {
    slug: "t12-financial-review",
    name: "T12 Financial Review",
    shortDescription: "Review trailing twelve month financial statements for replacement properties before identification.",
    description: `T12 financial review helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors analyze trailing twelve month income and expense statements for replacement properties. We provide detailed financial analysis to support identification decisions.`,
    relatedServices: [
      "rent-roll-analysis",
      "market-comp-analysis",
      "lender-preflight-support",
    ],
    faqs: [
      {
        question: "What does a T12 financial review include in Jacksonville?",
        answer: `T12 financial review in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} includes analysis of trailing twelve month income, expenses, net operating income, and cash flow. This helps investors evaluate replacement property financial performance before identification.`,
      },
      {
        question: "Why is T12 financial review important for 1031 exchanges?",
        answer: `T12 financial review in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} helps investors verify replacement property income and expenses before committing to identification. This supports informed decision-making and reduces investment risk during the 45 day period.`,
      },
      {
        question: "How quickly can you complete a T12 financial review?",
        answer: `T12 financial review in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} can typically be completed within a few days of receiving financial statements. We prioritize reviews for investors approaching their 45 day identification deadline.`,
      },
    ],
  },
  {
    slug: "capex-planning-support",
    name: "Capex Planning Support",
    shortDescription: "Plan capital expenditures for replacement properties to ensure adequate reserves and budgeting.",
    description: `Capex planning support helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors plan capital expenditures for replacement properties, ensuring adequate reserves and budgeting. We provide guidance on capex requirements and reserve planning.`,
    relatedServices: [
      "t12-financial-review",
      "lender-preflight-support",
      "market-comp-analysis",
    ],
    faqs: [
      {
        question: "What is capex planning for 1031 exchanges in Jacksonville?",
        answer: `Capex planning in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} involves budgeting for capital expenditures on replacement properties, including roof replacements, HVAC updates, and major system repairs. Adequate capex reserves are important for property maintenance and lender requirements.`,
      },
      {
        question: "Why is capex planning important for replacement properties?",
        answer: `Capex planning in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} helps investors budget for future capital expenditures and maintain adequate reserves. Lenders often require capex reserves, and proper planning supports long-term property performance.`,
      },
      {
        question: "How do you help with capex planning?",
        answer: `We help investors in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} analyze replacement property condition, estimate future capex needs, and plan reserve requirements. This supports informed decision-making during the 45 day identification period.`,
      },
    ],
  },
  {
    slug: "market-comp-analysis",
    name: "Market Comp Analysis",
    shortDescription: "Analyze comparable sales and rental rates for replacement properties to verify market value.",
    description: `Market comp analysis helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors analyze comparable sales and rental rates for replacement properties. We provide detailed market analysis to verify property values and support identification decisions.`,
    relatedServices: [
      "rent-roll-analysis",
      "t12-financial-review",
      "lender-preflight-support",
    ],
    faqs: [
      {
        question: "What does market comp analysis include in Jacksonville?",
        answer: `Market comp analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} includes comparable sales data, rental rate analysis, and market positioning for replacement properties. This helps investors verify property values and make informed identification decisions.`,
      },
      {
        question: "Why is market comp analysis important for 1031 exchanges?",
        answer: `Market comp analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} helps investors verify replacement property values before identification. This supports informed decision-making and reduces risk during the 45 day identification period.`,
      },
      {
        question: "How quickly can you provide market comp analysis?",
        answer: `Market comp analysis in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} can typically be completed within a few days of receiving property information. We prioritize analysis for investors approaching their 45 day identification deadline.`,
      },
    ],
  },
  {
    slug: "lender-preflight-support",
    name: "Lender Preflight Support",
    shortDescription: "Prepare replacement property information for lender underwriting to expedite financing approval.",
    description: `Lender preflight support helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors prepare replacement property information for lender underwriting. We coordinate property details, financial statements, and documentation to expedite financing approval.`,
    relatedServices: [
      "rent-roll-analysis",
      "t12-financial-review",
      "market-comp-analysis",
    ],
    faqs: [
      {
        question: "What is lender preflight support for 1031 exchanges in Jacksonville?",
        answer: `Lender preflight support in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} involves preparing replacement property information, financial statements, and documentation for lender underwriting. This helps expedite financing approval and supports timely closing within the 180 day deadline.`,
      },
      {
        question: "Why is lender preflight support important?",
        answer: `Lender preflight support in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} helps investors secure financing quickly, which is critical for meeting the 180 day closing deadline. Proper preparation reduces underwriting delays and supports successful exchanges.`,
      },
      {
        question: "What information do lenders need for replacement properties?",
        answer: `Lenders in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} typically need property information, rent rolls, T12 financial statements, property condition reports, and market analysis. We help compile this information for lender underwriting.`,
      },
    ],
  },
  {
    slug: "timeline-management",
    name: "Timeline Management",
    shortDescription: "Manage 45 day identification and 180 day closing deadlines with coordinated tracking and alerts.",
    description: `Timeline management helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors track 45 day identification and 180 day closing deadlines. We provide coordinated tracking, alerts, and milestone management to ensure deadlines are met.`,
    relatedServices: [
      "45-day-identification-strategy",
      "qualified-intermediary-coordination",
      "compliance-documentation",
    ],
    faqs: [
      {
        question: "How do you help manage 1031 exchange timelines in Jacksonville?",
        answer: `Timeline management in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} includes tracking 45 day identification and 180 day closing deadlines, coordinating with Qualified Intermediaries and lenders, and providing alerts for critical milestones. This helps ensure deadlines are met.`,
      },
      {
        question: "What happens if I miss a deadline?",
        answer: `Missing deadlines in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} can cause your 1031 exchange to fail, resulting in capital gains tax liability. We help track deadlines and coordinate with all parties to ensure timely completion.`,
      },
      {
        question: "How do you coordinate with Qualified Intermediaries and lenders?",
        answer: `We coordinate with Qualified Intermediaries and lenders in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to track identification letters, closing dates, and documentation requirements. This ensures all parties are aligned and deadlines are met.`,
      },
    ],
  },
  {
    slug: "qualified-intermediary-coordination",
    name: "Qualified Intermediary Coordination",
    shortDescription: "Coordinate with bonded Qualified Intermediaries to ensure proper escrow handling and documentation.",
    description: `Qualified Intermediary coordination helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors work with bonded QI partners to ensure proper escrow handling, documentation, and compliance. We coordinate identification letters, closing coordination, and reporting.`,
    relatedServices: [
      "timeline-management",
      "compliance-documentation",
      "reverse-exchange-coordination",
    ],
    faqs: [
      {
        question: "What is a Qualified Intermediary for 1031 exchanges in Jacksonville?",
        answer: `A Qualified Intermediary in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} is a third party that holds exchange proceeds in escrow and facilitates the 1031 exchange process. QIs must be bonded and cannot be related parties or agents of the investor.`,
      },
      {
        question: "How do you coordinate with Qualified Intermediaries?",
        answer: `We coordinate with Qualified Intermediaries in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to ensure identification letters are properly submitted, escrow accounts are established, and documentation is complete. This supports compliance and timely exchange completion.`,
      },
      {
        question: "What documentation do Qualified Intermediaries need?",
        answer: `Qualified Intermediaries in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} need identification letters, exchange agreements, closing documents, and reporting information. We help coordinate this documentation to ensure compliance.`,
      },
    ],
  },
  {
    slug: "compliance-documentation",
    name: "Compliance Documentation",
    shortDescription: "Ensure all 1031 exchange documentation meets IRS requirements and compliance standards.",
    description: `Compliance documentation support helps ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} investors ensure all 1031 exchange documentation meets IRS requirements. We coordinate identification letters, exchange agreements, and reporting to support compliance.`,
    relatedServices: [
      "qualified-intermediary-coordination",
      "timeline-management",
      "45-day-identification-strategy",
    ],
    faqs: [
      {
        question: "What documentation is required for 1031 exchanges in Jacksonville?",
        answer: `Required documentation in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} includes identification letters, exchange agreements, closing documents, and Form 8824 for tax reporting. We help coordinate this documentation to ensure compliance.`,
      },
      {
        question: "How do you ensure documentation compliance?",
        answer: `We review documentation in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} to ensure it meets IRS requirements, coordinate with Qualified Intermediaries and tax advisors, and provide guidance on compliance standards. This supports successful exchanges.`,
      },
      {
        question: "What happens if documentation is incomplete?",
        answer: `Incomplete documentation in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} can cause exchange failures and tax liability. We help ensure all required documentation is complete and properly submitted to support compliance.`,
      },
    ],
  },
];




