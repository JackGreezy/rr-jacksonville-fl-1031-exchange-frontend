# Image Gathering Command - Enhanced Version

**CRITICAL UPDATE:** Enhanced filtering to prevent logos, watermarks, and text overlays from being downloaded.

---

## Enhanced URL Filtering Rules (Section 0.5 - UPDATED)

When extracting image URLs from Google Images or Bing Images search results, **STRICTLY REJECT** URLs that match any of these patterns:

**Map-related URLs** (reject if URL contains):
- "map", "Map", "googlemap", "GoogleMap", "satellite", "aerial"

**Watermarked/dated URLs** (reject if URL contains):
- "circa", date patterns like `\d{4}\.\d{2}\.\d{2}` (e.g., "2008.05.11")
- Historical year references (e.g., "1964", "1985")
- "fbsbx.com" (Facebook CDN)
- "downtown", "text", "overlay", "branding"

**Commercial real estate sites** (reject if URL contains):
- "commercialsearch", "loopnet", "crexi", "costar", "century21"
- "realtor.com", "zillow", "redfin", "proudcity", "listhub", "rdcpix"
- Any real estate listing site domain

**ENHANCED: Logo, watermark, and text overlay indicators** (reject if URL contains):
- "logo", "watermark", "stamp", "signature", "copyright", "©"
- "brand", "company", "corp", "inc.", "llc", "ltd"
- "template", "form", "document", "agreement" (for inventory images - these are document images, not property photos)

**Preferred sources** (accept these):
- "wikimedia.org", "unsplash.com", official tourism boards, reputable news outlets
- Construction company websites (often have clean property photos)
- Stock photo sites (freepik, alamy, dreamstime - but verify no watermarks in actual image)

---

## Enhanced JavaScript Filtering Code (Section 2, Step 3 - UPDATED)

**MUST use `browser_evaluate` with this ENHANCED JavaScript code:**

```javascript
() => {
     const allUrls = new Set();
     
     // Method 1: Look for img tags with src/data-src attributes
     document.querySelectorAll('img').forEach(img => {
       const src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
       if (src && src.startsWith('http') && !src.includes('googleusercontent.com') && !src.includes('gstatic.com')) {
         allUrls.add(src);
       }
     });
     
     // Method 2: Look for links with imgurl parameter (IMPROVED VERSION)
     document.querySelectorAll('a').forEach(link => {
       const href = link.getAttribute('href');
       if (href && (href.includes('/imgres') || href.includes('imgurl'))) {
         const imgurlMatch = href.match(/[?&]imgurl=([^&]+)/);
         if (imgurlMatch) {
           try {
             const decoded = decodeURIComponent(imgurlMatch[1]);
             if (decoded.startsWith('http') && !decoded.includes('gstatic.com') && !decoded.includes('googleusercontent.com')) {
               allUrls.add(decoded);
             }
           } catch(e) {
             if (imgurlMatch[1].startsWith('http') && !imgurlMatch[1].includes('gstatic.com')) {
               allUrls.add(imgurlMatch[1]);
             }
           }
         }
         
         const imgurlEncodedMatch = href.match(/[?&]imgurl%3D([^&]+)/);
         if (imgurlEncodedMatch) {
           try {
             const decoded = decodeURIComponent(imgurlEncodedMatch[1]);
             if (decoded.startsWith('http') && !decoded.includes('gstatic.com') && !decoded.includes('googleusercontent.com')) {
               allUrls.add(decoded);
             }
           } catch(e) {
             if (imgurlEncodedMatch[1].includes('http')) {
               try {
                 const doubleDecoded = decodeURIComponent(decodeURIComponent(imgurlEncodedMatch[1]));
                 if (doubleDecoded.startsWith('http')) {
                   allUrls.add(doubleDecoded);
                 }
               } catch(e2) {}
             }
           }
         }
       }
     });
     
     // Method 3: Look for data attributes on any element
     document.querySelectorAll('[data-src], [data-imgurl]').forEach(el => {
       const src = el.getAttribute('data-src') || el.getAttribute('data-imgurl');
       if (src && src.startsWith('http') && !src.includes('gstatic.com') && !src.includes('googleusercontent.com')) {
         allUrls.add(src);
       }
     });
     
     // Method 4: Look for data-ou attribute (Google's alternative URL storage)
     document.querySelectorAll('[data-ved], [data-ou]').forEach(el => {
       const ou = el.getAttribute('data-ou');
       if (ou && ou.startsWith('http') && !ou.includes('gstatic.com') && !ou.includes('googleusercontent.com')) {
         allUrls.add(ou);
       }
     });
     
     // ENHANCED FILTERING - Reject logos, watermarks, text overlays, and document images
     const filtered = Array.from(allUrls).filter(url => {
       const lower = url.toLowerCase();
       
       // Reject maps
       if (lower.includes('map') || lower.includes('googlemap') || lower.includes('satellite') || lower.includes('aerial')) return false;
       
       // Reject commercial real estate sites
       if (lower.includes('commercialsearch') || lower.includes('loopnet') || lower.includes('crexi') || lower.includes('costar') || 
           lower.includes('century21') || lower.includes('realtor.com') || lower.includes('zillow') || lower.includes('redfin') ||
           lower.includes('proudcity') || lower.includes('listhub') || lower.includes('rdcpix') || lower.includes('cbre')) return false;
       
       // Reject watermarked/dated images
       if (lower.includes('circa') || lower.match(/\d{4}\.\d{2}\.\d{2}/) || lower.includes('fbsbx.com') ||
           lower.includes('downtown') || lower.includes('text') || lower.includes('overlay') || lower.includes('branding')) return false;
       
       // ENHANCED: Reject URLs with logo, watermark, or text overlay indicators
       if (lower.includes('logo') || lower.includes('watermark') || lower.includes('stamp') || 
           lower.includes('signature') || lower.includes('copyright') || lower.includes('©') ||
           lower.includes('brand') || lower.includes('company') || lower.includes('corp') ||
           lower.includes('inc.') || lower.includes('llc') || lower.includes('ltd')) return false;
       
       // ENHANCED: Reject document/form images (for inventory/property type images)
       // These are legal documents, not property photos
       if (lower.includes('template') || lower.includes('form') || lower.includes('document') || 
           lower.includes('agreement') || lower.includes('contract') || lower.includes('lease-agreement') ||
           lower.includes('sample') || lower.includes('preview') || lower.includes('legal')) return false;
       
       return true;
     });
     
     return filtered.slice(0, 15); // Return first 15 valid URLs
   }
```

---

## Enhanced Bing Images Filtering Code (Section 2.7 - UPDATED)

**MUST use `browser_evaluate` with this ENHANCED JavaScript code for Bing Images:**

```javascript
() => {
     const allUrls = new Set();
     
     // PRIMARY METHOD: Extract mediaurl parameter from Bing's image links
     document.querySelectorAll('a[href*="mediaurl="]').forEach(link => {
       const href = link.getAttribute('href');
       if (href) {
         const mediaurlMatch = href.match(/mediaurl=([^&]+)/);
         if (mediaurlMatch) {
           try {
             const decoded = decodeURIComponent(mediaurlMatch[1]);
             if (decoded.startsWith('http') && !decoded.includes('bing.com') && !decoded.includes('bing.net')) {
               allUrls.add(decoded);
             }
           } catch(e) {
             try {
               const doubleDecoded = decodeURIComponent(decodeURIComponent(mediaurlMatch[1]));
               if (doubleDecoded.startsWith('http') && !doubleDecoded.includes('bing.com') && !doubleDecoded.includes('bing.net')) {
                 allUrls.add(doubleDecoded);
               }
             } catch(e2) {}
           }
         }
       }
     });
     
     // ENHANCED FILTERING - Reject logos, watermarks, text overlays, and document images
     const filtered = Array.from(allUrls).filter(url => {
       const lower = url.toLowerCase();
       
       // Reject maps
       if (lower.includes('map') || lower.includes('googlemap') || lower.includes('satellite') || lower.includes('aerial')) return false;
       
       // Reject commercial real estate sites
       if (lower.includes('commercialsearch') || lower.includes('loopnet') || lower.includes('crexi') || lower.includes('costar') || 
           lower.includes('century21') || lower.includes('realtor.com') || lower.includes('zillow') || lower.includes('redfin') ||
           lower.includes('proudcity') || lower.includes('listhub') || lower.includes('rdcpix') || lower.includes('cbre')) return false;
       
       // Reject watermarked/dated images
       if (lower.includes('circa') || lower.match(/\d{4}\.\d{2}\.\d{2}/) || lower.includes('fbsbx.com') ||
           lower.includes('downtown') || lower.includes('text') || lower.includes('overlay') || lower.includes('branding')) return false;
       
       // ENHANCED: Reject URLs with logo, watermark, or text overlay indicators
       if (lower.includes('logo') || lower.includes('watermark') || lower.includes('stamp') || 
           lower.includes('signature') || lower.includes('copyright') || lower.includes('©') ||
           lower.includes('brand') || lower.includes('company') || lower.includes('corp') ||
           lower.includes('inc.') || lower.includes('llc') || lower.includes('ltd')) return false;
       
       // ENHANCED: Reject document/form images (for inventory/property type images)
       // These are legal documents, not property photos
       if (lower.includes('template') || lower.includes('form') || lower.includes('document') || 
           lower.includes('agreement') || lower.includes('contract') || lower.includes('lease-agreement') ||
           lower.includes('sample') || lower.includes('preview') || lower.includes('legal')) return false;
       
       return true;
     });
     
     return filtered.slice(0, 15); // Return first 15 valid URLs
   }
```

---

## Enhanced Quality Gate (Section 5 - UPDATED)

- Verify the file via `ls -lh public/locations | grep ${slug}` to confirm size and extension.
- **Verify image dimensions**: Confirm width >= height (square or landscape only). Portrait images must be rejected and replaced.
- **Verify no map images**: Check that the image is an actual photo of buildings, streets, or cityscapes - NOT a map, satellite view, or aerial map.
- **ENHANCED: Verify no watermarks, logos, or text overlays**: 
  - Visually inspect for date stamps (e.g., "2008.05.11"), camera watermarks, text overlays, large branding text, city name text, commercial real estate watermarks (e.g., "CommercialSearch", "LoopNet", "Century21"), or any visible watermarks in corners or edges.
  - **CRITICAL:** Check for logos of other companies, real estate agencies, or branding overlays.
  - **CRITICAL:** Check for text overlays with property information, addresses, or promotional text.
  - Images with watermarks, large text overlays, prominent text graphics, logos, or any branding must be rejected and replaced.
- Manually spot-check at least one image per batch in the browser (open `http://localhost:3000/locations/${slug}` once pages exist, or temporarily render it via a Storybook-like test).
- Ensure no map screenshots, AI renders, watermarks, logos, or text overlays slipped through. Re-pick if necessary.
- Confirm alt text plan: when wiring up the page, derive `alt` as `${City}, ${State} skyline for ${serviceName.replace('-', ' ')}`.

---

## Summary of Changes

1. **Enhanced URL filtering** to reject:
   - Logos, watermarks, stamps, signatures, copyright symbols
   - Brand, company, corp, inc., llc, ltd indicators
   - Template, form, document, agreement, contract, sample, preview, legal (for inventory images)

2. **Enhanced JavaScript filtering code** for both Google Images and Bing Images to include the new rejection patterns

3. **Enhanced quality gate** with explicit checks for logos, watermarks, and text overlays

4. **Document image rejection** - Added specific filtering for legal documents, forms, and templates that appear in search results for property types but are not actual property photos

---

**Note:** This enhanced version should be integrated into the main `/image-gathering` command to prevent downloading images with logos, watermarks, or text overlays.

