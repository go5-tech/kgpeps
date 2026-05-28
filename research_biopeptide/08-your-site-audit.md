# Your Site Audit: peptidecentral.in
> Current state + what needs to change

---

## Current Site Status

| Property | Status |
|---|---|
| URL | http://peptidecentral.in |
| Platform | Static HTML (GitHub Pages) |
| Type | Single-page site (all anchor links) |
| Ordering | WhatsApp-based (+91 75052 21639) |
| Payments | UPI, Card, COD, NEFT |
| Products | 22+ peptides mentioned |
| Blog | None |
| Individual product pages | None |
| HTTPS | Not confirmed (http:// — needs fixing) |

---

## What Your Site Already Does Well

- Strong H2 sections: Body Map, Quality, FAQ, Testimonials, How To Order
- "COA With Every Order" — trust signal BioPeptide doesn't have
- "HPLC Verified Every Batch" — purity claim
- Customer testimonials section visible
- FAQ section (good for schema once moved to WordPress)
- 15% first-order discount (PCFIRST15)
- Pan-India delivery, COD available
- Good brand name: Peptide Central = exact match for "peptide central" searches
- WhatsApp ordering is frictionless for Indian buyers

---

## Critical SEO Problems Right Now

### 1. Single-Page Architecture — Biggest Issue
All navigation is anchor links (`#products`, `#faq`, `#purity`). This means:
- Google sees **one page**, not 22+ product pages
- Every peptide you sell has **zero dedicated URL**
- You cannot rank for "buy BPC-157 India" because there's no BPC-157 page
- Zero blog = zero long-tail keyword coverage
- All your SEO equity concentrated on one URL

### 2. Multiple H1 Tags
Two H1s detected:
- "HIGHEST QUALITY PEPTIDES IN INDIA"
- "Science-Grade Research Peptides"

Google expects exactly one H1 per page.

### 3. No Title Tag Confirmed
The browser/fetcher couldn't confirm a proper `<title>` tag. If missing, Google writes its own — uncontrolled.

### 4. No Meta Description
Google auto-generates from page content — unpredictable SERP snippet.

### 5. No Schema / JSON-LD
No Product, Organization, FAQ, or any other structured data.

### 6. No Open Graph Tags
Social shares show no image, no title preview.

### 7. HTTP not HTTPS
Site loads on `http://` — Google penalizes non-HTTPS sites in rankings. Browsers show "Not Secure" warning to visitors, killing trust.

### 8. No Sitemap
Nothing submitted to Google Search Console.

### 9. No Individual Product URLs
"Buy BPC-157 India" → should land on `/shop/bpc-157-peptide-india/`
Right now it lands on the homepage with no specific product context.

---

## Impact of Current Architecture on Rankings

| Keyword | Can You Rank Now? | Why |
|---|---|---|
| peptide central india | Maybe | Brand name match |
| buy bpc-157 india | No | No dedicated page |
| buy ghk-cu india | No | No dedicated page |
| buy tb-500 india | No | No dedicated page |
| research peptides india | Very unlikely | No content depth |
| where to buy peptides india | No | No blog posts |

---

## What Needs to Change (Priority Order)

### Priority 1 — Move to WordPress + WooCommerce
This is the single most impactful change. Everything else is secondary.
- Each peptide gets its own URL, title, meta, schema
- Blog becomes possible
- Sitemap auto-generated
- All the fixes from `04-tech-seo-checklist.md` become applicable

### Priority 2 — Fix HTTPS
Before anything else, enable HTTPS:
- If staying on GitHub Pages: Settings → Pages → Enforce HTTPS (tick the box)
- If moving to Hostinger hosting: SSL is included free, auto-enabled

### Priority 3 — Fix Title + Meta + H1 (even on current site)
Even on the static site, fix immediately:
```html
<title>Buy Research Peptides in India | 99.9% Purity | Peptide Central</title>
<meta name="description" content="Buy premium research peptides in India. 99.9% HPLC-verified purity, COA with every order, pan-India delivery. BPC-157, GHK-Cu, TB-500 and more.">
```
Remove the duplicate H1 — keep only one.

### Priority 4 — Google Search Console
Submit your site to GSC immediately even before the rebuild:
- Verify domain ownership
- Submit `peptidecentral.in` as a property
- See what Google already knows about you

### Priority 5 — Migrate to WordPress (full rebuild per 05-stack-setup.md)

---

## Your Biggest Advantage Over Both Competitors

| Advantage | peptidecentral.in | BioPeptide | peptidecentral.net |
|---|---|---|---|
| COA with every order | YES | Not confirmed | Yes (US) |
| India-based | YES | YES | No (US) |
| COD available | YES | No | No |
| WhatsApp support | YES | No | No |
| 22+ peptides (India) | YES | 13 | N/A (USD) |
| HPLC verified claim | YES | Claims 99% | Claims >99% |

**You're already ahead on trust signals.** The rebuild just makes Google able to find you.

---

## Recommended Next Steps

1. Enable HTTPS on current GitHub Pages site (5 minutes)
2. Fix title tag and meta description in your HTML (10 minutes)
3. Set up Google Search Console and submit the site
4. Start WordPress + WooCommerce build on Hostinger (use 05-stack-setup.md)
5. Migrate content from static site to WordPress
6. Add individual product pages for all 22+ peptides
7. Start blog with Month 1 content from 03-content-plan.md
