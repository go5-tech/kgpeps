# Peptide Central India — Master SEO & Build Plan
> Domain: peptidecentral.in | Prepared: May 2026

---

## Context

The user owns **peptidecentral.in** — a research peptides e-commerce brand targeting India. The site currently exists as a static single-page HTML site hosted on GitHub Pages. The goal is to rebuild it on WordPress + WooCommerce and execute a full SEO strategy to rank for Indian peptide keywords and outcompete existing players.

---

## Competitor Landscape

### 1. BioPeptide India (biopeptide.in) — Primary India Competitor
- Platform: Shopify
- Products: 13 (INR pricing)
- Blog: 28 AI-generated posts targeting "peptide + India" keywords
- SEO: Basic — keyword-first titles, geo-targeted slugs, intent-based categories
- Missing: Product schema, meta descriptions, Open Graph, canonical tags, reviews, FAQ page
- Strategy: Bulk AI content + Shopify auto-sitemaps + low-competition niche

### 2. Peptide Central NET (peptidecentral.net) — US Competitor, Same Name
- Platform: WordPress + WooCommerce (Yoast SEO)
- Products: 80+ (USD pricing — US market only, not India competition)
- Blog: None
- Shows up when searching "peptide central" due to name overlap — not a direct competitor
- Has capsule format products and 5-vial combo packs worth copying for India

### 3. Current Site (peptidecentral.in) — Audit
- Platform: Static HTML, GitHub Pages
- Products: 22+ peptides mentioned but ZERO individual product pages
- Architecture: Single-page (all anchor links — #products, #faq, #purity)
- HTTPS: Not enforced (http://)
- Title tag: Not optimized
- Meta description: Missing
- Schema: None
- Open Graph: None
- Blog: None
- Ordering: WhatsApp-based
- Payments: UPI, COD, Card, NEFT
- Trust signals already present: COA with every order, HPLC verified, customer testimonials, 15% first-order discount (PCFIRST15)

**Core problem:** Google sees 1 URL. BioPeptide has 13 product pages + 28 blog posts and is winning purely because they have individual URLs for Google to index.

---

## Target Stack

| Layer | Tool |
|---|---|
| Hosting | Hostinger Business (already has domain there) |
| CMS | WordPress |
| E-commerce | WooCommerce |
| SEO | RankMath Pro |
| CDN | Cloudflare Free |
| Caching | LiteSpeed Cache |
| Theme | GeneratePress or Blocksy |
| Payments | Razorpay (UPI + COD + Cards) |
| Images | ShortPixel (WebP compression) |

---

## Site Architecture

```
peptidecentral.in/
├── /shop/                              ← WooCommerce product catalog
│   ├── /shop/bpc-157-peptide-india/
│   ├── /shop/ghk-cu-50mg-peptide-india/
│   ├── /shop/tb-500-peptide-india/
│   ├── /shop/retatrutide-5mg-peptide-india/
│   ├── /shop/cjc-1295-no-dac-peptide-india/
│   ├── /shop/ipamorelin-5mg-peptide-india/
│   ├── /shop/epithalon-10mg-peptide-india/
│   ├── /shop/semax-5mg-peptide-india/
│   ├── /shop/selank-5mg-peptide-india/
│   ├── /shop/dsip-5mg-peptide-india/
│   ├── /shop/kisspeptin-5mg-peptide-india/
│   ├── /shop/ghrp-6-peptide-india/       ← Gap: BioPeptide blog only, no product
│   ├── /shop/ghrp-2-peptide-india/       ← Gap: nobody in India has this
│   ├── /shop/pt-141-peptide-india/       ← Gap: nobody in India has this
│   ├── /shop/semaglutide-peptide-india/  ← High demand, no India vendor
│   ├── /shop/tirzepatide-peptide-india/  ← High demand, no India vendor
│   └── /shop/bacteriostatic-water-india/
│
├── /category/                          ← WooCommerce categories
│   ├── /category/anti-aging-peptides/
│   ├── /category/fat-loss-peptides-india/
│   ├── /category/muscle-growth-peptides/
│   ├── /category/recovery-healing-peptides/
│   └── /category/nootropic-peptides/    ← BioPeptide missing this
│
├── /blog/                              ← Content hub (30 posts over 90 days)
├── /compare/                           ← Comparison pages (BioPeptide missing)
│   ├── /compare/bpc-157-vs-tb-500/
│   ├── /compare/ipamorelin-vs-ghrp-6/
│   └── /compare/semax-vs-selank/
│
├── /lab-reports/                       ← COA pages per product (unique trust content)
├── /faq/                               ← FAQ page with FAQ schema
├── /about/
└── /contact/
```

---

## Product List (Launch with These)

| Product | URL Slug | Category |
|---|---|---|
| BPC-157 5mg/10mg | bpc-157-peptide-india | Recovery |
| GHK-Cu 50mg | ghk-cu-50mg-peptide-india | Anti-Aging |
| TB-500 5mg | tb-500-peptide-india | Recovery |
| Retatrutide 5mg | retatrutide-5mg-peptide-india | Fat Loss |
| CJC-1295 No DAC 5mg | cjc-1295-no-dac-peptide-india | Muscle Growth |
| Ipamorelin 5mg | ipamorelin-5mg-peptide-india | Muscle Growth |
| Epithalon 10mg | epithalon-10mg-peptide-india | Anti-Aging |
| Semax 5mg | semax-5mg-peptide-india | Nootropic |
| Selank 5mg | selank-5mg-peptide-india | Nootropic |
| DSIP 5mg | dsip-5mg-peptide-india | Recovery |
| Kisspeptin 5mg | kisspeptin-5mg-peptide-india | Hormonal |
| GHRP-6 5mg | ghrp-6-peptide-india | Muscle Growth |
| Bacteriostatic Water 3ml | bacteriostatic-water-india | Accessories |

---

## On-Page SEO Rules (Apply to Every Page)

### Title Tag Format
- Homepage: `Buy Research Peptides in India | 99.9% Pure | Peptide Central`
- Products: `Buy [Product] [Dose] in India | 99.9% Purity | Peptide Central`
- Categories: `[Category Name] Peptides India | Peptide Central`
- Blog: `[Post Title] | Peptide Central`

### Meta Description
- Every page needs a unique meta description (150–160 chars)
- Include primary keyword + trust signal + CTA
- Never leave auto-generated

### Schema (via RankMath)
- Product pages: Product schema (name, price, availability, SKU)
- Blog posts: Article + FAQ schema
- Homepage: Organization + WebSite + FAQ schema
- Category pages: BreadcrumbList
- After reviews come in: AggregateRating schema

### H1/H2 Structure (Product Pages)
```
H1: [Product Name] [Dose] — 99.9% Purity
H2: Key Features
H2: What Is [Peptide]?
H2: Research Applications
H2: Packaging & Handling
H2: Shipping & Returns
H2: Frequently Asked Questions
```

### Internal Linking Rules
- Every blog post → links to 2+ product pages
- Every product page → links to category + 2 related blog posts
- Every product page → links to /lab-reports/ page
- Compare pages → links to both products being compared
- FAQ page linked from every page footer

---

## Content Plan — 30 Blog Posts in 90 Days

### Month 1 — Buying Guides + Legal/Trust (TOFU)
1. Are Research Peptides Legal in India? A 2026 Complete Guide
2. Where to Buy Peptides in India Safely in 2026
3. How to Buy Peptides Online in India: Avoiding Fakes and Low Purity
4. What is a Certificate of Analysis (CoA) and Why it Matters for Peptides
5. How to Store and Handle Peptides Safely: India Climate Guide
6. Lyophilized vs Injectable Peptides: Which Should You Choose?
7. How to Reconstitute Peptides with Bacteriostatic Water: Step-by-Step
8. Top 10 Research Peptides Available in India in 2026
9. Best Peptides for Anti-Aging Research: India Buyer's Guide
10. What to Look for When Buying Peptides Online in India

### Month 2 — Product Deep-Dives (MOFU)
11. GHK-Cu Peptide India: Benefits, Research, and Where to Buy
12. BPC-157 Peptide: What the Research Says and How to Source It in India
13. TB-500 Peptide India: Research Overview and Buying Guide
14. Retatrutide Peptide India: The New Weight Loss Research Compound Explained
15. Ipamorelin Peptide India: Growth Hormone Research Guide
16. Epithalon Peptide India: Longevity Research and Availability
17. Semax Peptide India: Nootropic Research Overview
18. Selank Peptide India: Anxiolytic Research and Buyer Guide
19. GHRP-6 Peptide India: Muscle Research Guide and Where to Buy
20. CJC-1295 No DAC Peptide India: Research Guide

### Month 3 — Comparisons + How-To (BOFU)
21. BPC-157 vs TB-500: Which Recovery Peptide is Right for Your Research?
22. Ipamorelin vs GHRP-6: Comparing Growth Hormone Releasing Peptides
23. Semax vs Selank: Two Nootropic Peptides Compared
24. GHK-Cu vs Epithalon: Anti-Aging Peptides Research Comparison
25. Best Peptides for Fat Loss Research in India 2026
26. Best Peptides for Muscle Growth Research in India 2026
27. How to Safely Use Injectable Research Peptides: A First-Timer's Guide
28. Peptide Dosage Research Reference: Common Protocols Explained
29. Why 99% Purity Matters in Research Peptides: Understanding CoA Results
30. Peptide Central vs BioPeptide India: Honest Comparison for Researchers ← captures competitor traffic

**Publishing rule:** 2–3 posts per week. Never dump all on the same day (BioPeptide's mistake — 27 posts on Feb 28, 2026).

---

## Keyword Targets

### Homepage
- buy peptides in india
- research peptides india
- 99% pure peptides india
- peptide central india

### Product Pages (per product)
- buy [peptide name] india
- [peptide name] peptide india
- [peptide name] [dose] india

### Category Pages
- anti aging peptides india
- fat loss peptides india
- muscle growth peptides india
- nootropic peptides india

### Blog (long-tail)
- where to buy peptides in india
- are research peptides legal in india
- how to store peptides india
- bpc-157 vs tb-500
- best peptides for fat loss india 2026

---

## Technical SEO Checklist

### Immediate (Before Rebuild — Current GitHub Site)
- [ ] Enable HTTPS: GitHub repo → Settings → Pages → Enforce HTTPS
- [ ] Fix to single H1: `<h1>Buy Research Peptides in India | 99.9% Pure | Peptide Central</h1>`
- [ ] Add title tag: `<title>Buy Research Peptides in India | 99.9% Pure | Peptide Central</title>`
- [ ] Add meta description
- [ ] Verify Google Search Console and submit site

### WordPress Setup
- [ ] Install WordPress on Hostinger (1-click)
- [ ] Set permalinks: `/shop/%postname%/` for products, `/blog/%postname%/` for posts
- [ ] Install WooCommerce → set INR currency, India shipping zone
- [ ] Install Razorpay WooCommerce plugin
- [ ] Install RankMath Pro
- [ ] Install LiteSpeed Cache
- [ ] Point domain to Hostinger nameservers (update in Hostinger domain panel)
- [ ] Enable Cloudflare (optional but recommended for CDN + SSL)

### RankMath Config
- [ ] Connect to Google Search Console
- [ ] Enable XML sitemap — include Products + Categories + Posts + Pages
- [ ] Exclude: cart, checkout, account, login pages from sitemap
- [ ] Enable breadcrumbs
- [ ] Set title separator: |
- [ ] Enable Article schema for posts
- [ ] Enable Product schema for WooCommerce products
- [ ] Enable FAQ schema detection

### Per Product Page
- [ ] Unique title tag
- [ ] Unique meta description
- [ ] Single H1
- [ ] H2 structure (Features → What Is → Research → Handling → Shipping → FAQ)
- [ ] Product schema verified (name, price, availability)
- [ ] Descriptive image alt text (not just product name)
- [ ] Internal link to category page
- [ ] Internal link to 2 blog posts
- [ ] Internal link to /lab-reports/ page
- [ ] FAQ section at bottom (3–5 Qs) → FAQ schema

### Trust Pages to Build
- [ ] `/lab-reports/` — upload actual COA images, one section per product
- [ ] `/faq/` — 15–20 FAQs with FAQ schema
- [ ] `/about/` — brand story, quality commitment, India-based
- [ ] `/contact/` — WhatsApp link, email, response time promise

---

## Advantages Over BioPeptide to Emphasise

| Trust Signal | Peptide Central | BioPeptide |
|---|---|---|
| COA with every order | YES — promote heavily | Not confirmed |
| HPLC verified | YES | Claims 99% |
| COD available | YES | No |
| WhatsApp support | YES | No |
| India-based | YES | YES |
| Lab report pages | Build these | None |
| Customer reviews | Collect actively | Zero visible |

---

## Competitive Gaps to Fill First

These are keywords/products with real demand but zero Indian competition:

| Gap | Action |
|---|---|
| GHRP-6 — blog exists on BioPeptide, no product | Add product + blog post |
| PT-141 — no India vendor | Add product |
| Semaglutide — massive demand, no India peptide vendor | Add product |
| Tirzepatide — same as above | Add product |
| Nootropic peptides category | Create category silo |
| /compare/ pages | No competitor has these |
| /lab-reports/ page | No competitor has this |
| FAQ page with FAQ schema | BioPeptide has none |
| Capsule format peptides | No India vendor has oral peptides |

---

## Priority Order for the Agent

1. Fix current static site HTTPS + title + meta (quick wins, current GitHub site)
2. Set up WordPress + WooCommerce on Hostinger (05-stack-setup.md has exact steps)
3. Configure RankMath (04-tech-seo-checklist.md)
4. Create all product category pages first (5 categories)
5. Create all product pages (13 minimum, target 18 with gap products)
6. Create trust pages: /lab-reports/, /faq/, /about/, /contact/
7. Start blog Month 1 content (10 posts, 2–3/week)
8. Submit sitemap to Google Search Console
9. Blog Month 2 (product deep-dives)
10. Build /compare/ pages
11. Blog Month 3 (comparison + how-to posts)
12. Collect reviews → enable AggregateRating schema

---

## Reference Files in This Folder

| File | Contents |
|---|---|
| 01-site-structure.md | Full URL architecture + internal linking rules |
| 02-keyword-strategy.md | All keyword tiers + geo-targeting + content velocity |
| 03-content-plan.md | All 30 blog posts with titles, URLs, templates |
| 04-tech-seo-checklist.md | Full RankMath + robots.txt + speed + schema setup |
| 05-stack-setup.md | WordPress + WooCommerce + Cloudflare + Razorpay setup |
| 06-competitor-gaps.md | Product gaps, content gaps, backlink strategy |
| 07-peptidecentral-net-analysis.md | Full analysis of peptidecentral.net (US competitor) |
| 08-your-site-audit.md | Audit of current peptidecentral.in — problems + fixes |
| biopeptide-seo-analysis.md | Full SEO teardown of biopeptide.in (main India competitor) |
