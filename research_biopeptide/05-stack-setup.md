# Stack Setup Guide
> WordPress + WooCommerce + RankMath | Competing with biopeptide.in (Shopify)

---

## Full Stack

| Layer | Tool | Cost/mo |
|---|---|---|
| Domain | `.in` registrar (GoDaddy, Namecheap, BigRock) | ~₹800/yr |
| DNS + CDN | Cloudflare Free | Free |
| Hosting | Hostinger Business or Cloudways DigitalOcean | ₹300–800 |
| CMS | WordPress (self-hosted) | Free |
| E-commerce | WooCommerce | Free |
| SEO | RankMath Pro | ~$69/yr |
| Caching | LiteSpeed Cache (free if on LiteSpeed host) | Free |
| Image optimization | ShortPixel | ~$5/mo |
| Email (transactional) | Brevo (formerly Sendinblue) free tier | Free |
| Payment gateway | Razorpay or Cashfree | % per transaction |
| **Total** | | ~₹800–1,500/mo |

vs. Shopify Basic: ~₹1,994/mo + 2% transaction fees + SEO King app costs

---

## Hosting Recommendation

**Option A — Budget:** Hostinger Business Plan (~₹300/mo)
- LiteSpeed web server (best for WordPress speed)
- LiteSpeed Cache plugin is free and excellent
- 1-click WordPress install
- Free SSL
- Good for starting out

**Option B — Performance:** Cloudways + DigitalOcean ($12/mo)
- Managed server, easy scaling
- Better performance under traffic
- Choose when getting consistent traffic

---

## Initial Setup Steps

### 1. Domain + Cloudflare
```
1. Register yourdomain.in
2. Add site to Cloudflare (free plan)
3. Change nameservers at registrar to Cloudflare's
4. In Cloudflare: SSL/TLS → Full (strict)
5. In Cloudflare: Speed → Auto Minify → enable CSS, JS, HTML
6. In Cloudflare: Caching → Browser Cache TTL → 1 month
```

### 2. WordPress Installation
```
1. Install WordPress via hosting control panel (1-click)
2. Delete default plugins: Akismet, Hello Dolly
3. Delete default themes except one (Twenty Twenty-Four as fallback)
4. Install theme: GeneratePress (free) or Blocksy (free)
5. Settings → Permalinks → Custom: /blog/%postname%/
6. Settings → General → set correct timezone (India — Kolkata)
```

### 3. WooCommerce Setup
```
1. Install WooCommerce plugin
2. Run setup wizard:
   - Country: India
   - Currency: Indian Rupee (₹)
   - Selling: Physical products
3. Products → Settings → set "sold individually" as default
4. Shipping → add India flat rate or free shipping zone
5. Payments → install Razorpay for WooCommerce (official plugin)
6. WooCommerce → Settings → Products → enable reviews
```

### 4. RankMath Setup
```
1. Install RankMath Pro
2. Run setup wizard → Advanced mode
3. Connect to Google Search Console
4. Sitemap: enable, include Products + Product Categories + Posts + Pages
5. Schema: set default Post schema → Article
6. Schema: set default Product schema → Product (auto from WooCommerce)
7. General → Links → enable Breadcrumbs
8. Titles & Meta → set title separator: |
9. Local SEO → enable, add business info
```

### 5. Product Category Structure
Create these WooCommerce categories before adding products:
```
Shop (root)
├── Anti-Aging Peptides          slug: anti-aging-peptides
├── Fat Loss Peptides             slug: fat-loss-peptides-india
├── Muscle Growth Peptides        slug: muscle-growth-peptides
├── Recovery & Healing Peptides   slug: recovery-healing-peptides
└── Nootropic Peptides            slug: nootropic-peptides-india
```

### 6. Product Page Template
For each product, fill in:
```
Product Name: [Peptide] [Dose] Peptide - 99% Purity
Slug: /shop/[peptide-name]-[dose]-peptide-india/
Category: [assign correct category]
Price: [actual] | Sale Price: [sale]
Short Description: 2-3 lines, include "99% purity", "research grade", "India shipping"
Long Description: full H2 structured content (see keyword strategy doc)
Images: alt text = "[Peptide] [Dose] research grade peptide vial India [Brand]"
```

### 7. RankMath Per-Product SEO Fields
```
Focus Keyword: buy [peptide] india
SEO Title: Buy [Peptide] [Dose] in India | 99% Purity | [Brand]
Meta Description: [150-160 chars, include keyword + purity + CTA]
Schema: Product (auto) → verify price, availability, name populated
```

---

## Theme Recommendations

### GeneratePress (Free + Premium)
- Extremely lightweight (~10kb base CSS)
- Best Core Web Vitals scores of any WordPress theme
- Highly customizable via Customizer
- GeneratePress Premium: ~$59 one-time

### Blocksy (Free + Pro)
- Modern design, good WooCommerce integration
- Free tier covers most needs
- Easy header/footer builder

**Avoid:** Avada, Divi, Elementor-heavy themes — too slow, too much JS.

---

## Payment Gateway

**Razorpay** is the go-to for India:
- Supports UPI, Net Banking, Cards, Wallets
- Free WooCommerce plugin (official)
- 2% fee per transaction (standard)
- Instant settlement available
- Easy KYC for new businesses

**Cashfree** is an alternative with slightly lower fees at volume.

---

## Advantage Over Shopify Build

| Factor | Shopify (BioPeptide) | Your WordPress Build |
|---|---|---|
| Monthly cost | ₹1,994+ | ₹800–1,500 |
| Transaction fee | 2% (non-Shopify gateway) | 0% (only Razorpay %) |
| Schema control | App-dependent | Full control via RankMath |
| Meta descriptions | Missing (they didn't add) | Enforced via RankMath |
| Custom pages | Limited templates | Unlimited |
| robots.txt | App-managed | Full manual control |
| Plugin ecosystem | Shopify apps (expensive) | WordPress plugins (mostly free) |
| SEO ceiling | Limited without expensive apps | Unlimited |
