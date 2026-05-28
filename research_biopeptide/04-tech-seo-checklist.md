# Technical SEO Checklist
> WordPress + WooCommerce + RankMath setup

---

## Phase 1 — Foundation (Before Any Content)

### Hosting & Domain
- [ ] Register `.in` domain with "peptides" in name if available
- [ ] Host on LiteSpeed or Nginx server (Hostinger, Cloudways, RunCloud)
- [ ] Point domain to Cloudflare — enable proxying for CDN + security
- [ ] Install SSL (free via Cloudflare or Let's Encrypt)
- [ ] Set preferred domain in Cloudflare (www vs non-www) — pick one, stick to it

### WordPress Core Setup
- [ ] Install WordPress (latest version)
- [ ] Set permalink structure: `/blog/%postname%/` for posts, `/shop/%postname%/` for products
- [ ] Disable default WordPress sitemap (RankMath will replace it)
- [ ] Install and configure WooCommerce
- [ ] Set currency to INR (₹)
- [ ] Configure India-only shipping zones

### Plugins (Essential Only)
- [ ] **RankMath Pro** — SEO, sitemaps, schema, redirects, meta
- [ ] **WooCommerce** — e-commerce
- [ ] **LiteSpeed Cache** or **WP Rocket** — page caching + speed
- [ ] **Cloudflare** plugin — cache purging integration
- [ ] **WP Mail SMTP** — transactional email (order confirmations)
- [ ] **Smush** or **ShortPixel** — image compression + WebP conversion

---

## Phase 2 — RankMath Configuration

### General Settings
- [ ] Connect RankMath to Google Search Console
- [ ] Enable breadcrumbs (add to theme template)
- [ ] Set separator character for titles: `|`
- [ ] Enable 404 monitor
- [ ] Enable Redirections module

### Sitemap
- [ ] Enable XML sitemap
- [ ] Include: Posts, Pages, Products, Product Categories
- [ ] Exclude: Tags, Authors, Cart, Checkout, Account pages
- [ ] Submit sitemap to Google Search Console: `yourdomain.in/sitemap_index.xml`
- [ ] Submit to Bing Webmaster Tools

### robots.txt (via RankMath)
```
User-agent: *
Disallow: /wp-admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /wp-login.php
Disallow: /?s=
Disallow: /shop/?orderby=
Disallow: /shop/?filter_
Disallow: /shop/page/

User-agent: AhrefsBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

Sitemap: https://yourdomain.in/sitemap_index.xml
```

---

## Phase 3 — On-Page SEO (Per Page Type)

### Homepage
- [ ] Title: `Buy Research Peptides in India | 99% Pure | [Brand]`
- [ ] Meta description: 150-160 chars, include "buy peptides india" + trust signal
- [ ] H1: One H1 only, includes primary keyword
- [ ] Open Graph title + description + image (1200x630px)
- [ ] Twitter Card meta tags
- [ ] FAQ section at bottom → FAQ schema via RankMath

### Product Pages (WooCommerce)
- [ ] Unique title per product: `Buy [Product] [Dose] in India | 99% Purity | [Brand]`
- [ ] Unique meta description per product (not auto-generated)
- [ ] H1: Product name with dose and purity
- [ ] H2 structure: Key Features → What Is It? → Research Applications → Handling → Shipping
- [ ] Product schema (auto by WooCommerce + RankMath): name, price, availability, SKU
- [ ] Add `aggregateRating` schema once reviews come in
- [ ] Image alt text: descriptive (`BPC-157 5mg lyophilized peptide vial India research grade`)
- [ ] Internal links: category page + 2 related blog posts
- [ ] Add link to CoA/Lab Report page
- [ ] Canonical tag: set to self (RankMath auto handles)

### Category Pages (WooCommerce)
- [ ] Unique title per category
- [ ] Unique meta description
- [ ] Add 150-200 word category description (below products — good for SEO, not intrusive)
- [ ] H1: Category name
- [ ] Internal links to related blog posts in description
- [ ] All categories submitted in sitemap

### Blog Posts
- [ ] Unique title (with year if relevant)
- [ ] Unique meta description
- [ ] H1 matches or close to title
- [ ] H2/H3 hierarchy — no skipping levels
- [ ] Article schema (auto via RankMath)
- [ ] FAQ schema on every post (add FAQ block, RankMath detects it)
- [ ] Open Graph image (custom per post or auto)
- [ ] 2+ internal links to product pages
- [ ] 1+ internal link to related blog post
- [ ] Target word count: 1,200–1,800 words

---

## Phase 4 — Schema Markup

All handled via RankMath — just verify each is active:

| Schema Type | Where | Status |
|---|---|---|
| Organization | Homepage | Enable in RankMath Local SEO |
| WebSite + SearchAction | Homepage | Auto via RankMath |
| Product | All product pages | Auto via WooCommerce + RankMath |
| BreadcrumbList | All pages | Enable breadcrumbs in RankMath |
| Article | All blog posts | Auto via RankMath |
| FAQPage | Blog posts + FAQ page | Add FAQ blocks, RankMath auto-detects |
| AggregateRating | Product pages | Add after getting reviews |

---

## Phase 5 — Speed & Core Web Vitals

- [ ] Enable Cloudflare caching (Cache Everything rule for static pages)
- [ ] Enable LiteSpeed/WP Rocket page caching
- [ ] Convert all images to WebP (Smush or ShortPixel)
- [ ] Lazy load images below the fold
- [ ] Minify CSS + JS (LiteSpeed/WP Rocket setting)
- [ ] Use a lightweight theme: **GeneratePress**, **Blocksy**, or **Astra**
- [ ] Remove unused plugins
- [ ] Google Fonts: load locally or use system fonts
- [ ] Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## Phase 6 — Trust Signals (BioPeptide Doesn't Have These)

- [ ] Create `/lab-reports/` page with actual CoA images per product
- [ ] Link to CoA page from every product page
- [ ] Add FAQ page at `/faq/` with FAQ schema
- [ ] Add customer review section (WooCommerce native or Judge.me plugin)
- [ ] Add trust badges to product pages: "99% Purity Verified", "India Shipping", "Secure Payment"
- [ ] Add About Us page with founding story, mission, quality commitment
- [ ] Business address/contact in footer (helps local trust signals)

---

## Phase 7 — Tracking & Monitoring

- [ ] Google Search Console verified + sitemap submitted
- [ ] Google Analytics 4 installed (via GTM or RankMath)
- [ ] Set up conversion tracking: purchase event in GA4
- [ ] Bing Webmaster Tools verified + sitemap submitted
- [ ] Monitor Core Web Vitals in GSC monthly
- [ ] Set up weekly ranking check (Ahrefs, Semrush free tier, or Ubersuggest)

---

## agents.md (Optional — AI Commerce Future-Proofing)

BioPeptide added this. Copy their approach:

Create `/agents.md` describing your store's AI agent access protocol.
Create `/sitemap_agentic_discovery.xml` referencing it.

This signals to AI shopping agents (like the Shop skill) that your store is agent-ready. Low effort, emerging competitive edge.
