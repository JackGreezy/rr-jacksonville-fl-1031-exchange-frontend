# rr-biz-info

Take the information and make it the website name, address, google maps embed (in footer and on contact page), phone number, and email across the project. Replace placeholder values.

## Google Maps Embed Implementation

### Format
Use the simple Google Maps embed format (no API key required):
```
https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed
```

### Implementation Pattern

**Footer:**
```tsx
<div className="mt-8">
  <iframe
    src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title={`Map of ${ADDRESS}`}
    className="rounded-lg"
  />
</div>
```

**Contact Page:**
```tsx
<div className="mt-8">
  <p className="text-sm font-semibold text-[#003366] mb-2">{ADDRESS}</p>
  <div className="aspect-[3/1] w-full max-h-[300px] rounded-lg overflow-hidden">
    <iframe
      src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Map of ${ADDRESS}`}
    />
  </div>
</div>
```

### Required Attributes
- `src`: Use the format `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
- `width`: "100%"
- `height`: "100%" (when using aspect ratio container) or fixed height like "200" or "300"
- `style={{ border: 0 }}`: Remove iframe border
- `allowFullScreen`: Enable fullscreen mode
- `loading="lazy"`: Lazy load the iframe
- `referrerPolicy="no-referrer-when-downgrade"`: Privacy setting
- `title`: Descriptive title for accessibility

### Where to Add Maps
1. **Footer** - Always include a Google Maps embed in the footer
2. **Contact Page** - Include a larger map on the contact page
3. **Homepage** - Optionally include a map section if relevant

### Notes
- Do NOT use the Google Maps Embed API format that requires an API key
- Always use `encodeURIComponent()` to properly encode the address
- Use responsive containers with aspect ratios for better mobile experience
- Ensure the map has proper accessibility attributes (title, aria-label if needed)

This command will be available in chat with /rr-biz-info

