# Site Structure Plan
> Competing with biopeptide.in | Platform: WordPress + WooCommerce

---

## Domain Strategy

**Target domain pattern:** `[brandname]peptides.in` or `peptides[brand].in`
- `.in` TLD for India geo-signal (same as biopeptide.in)
- Include "peptides" in domain if possible — exact match keyword boost
- Keep it short and brandable

---

## Full URL Structure

```
yourdomain.in/
│
├── /shop/                                    ← Main product catalog (WooCommerce)
│   ├── /shop/ghk-cu-50mg-peptide-india/
│   ├── /shop/bpc-157-5mg-peptide-india/
│   ├── /shop/tb-500-5mg-peptide-india/
│   ├── /shop/retatrutide-5mg-peptide-india/
│   ├── /shop/cjc-1295-no-dac-5mg-india/
│   ├── /shop/ipamorelin-5mg-peptide-india/
│   ├── /shop/epithalon-10mg-peptide-india/
│   ├── /shop/selank-5mg-peptide-india/
│   ├── /shop/semax-5mg-peptide-india/
│   ├── /shop/semax-nasal-spray-10mg-india/
│   ├── /shop/dsip-5mg-peptide-india/
│   ├── /shop/kisspeptin-5mg-peptide-india/
│   ├── /shop/ghrp-6-5mg-peptide-india/      ← BioPeptide has blog but NO product here
│   ├── /shop/ghrp-2-5mg-peptide-india/      ← Gap product
│   ├── /shop/pt-141-bremelanotide-india/    ← Gap product
│   └── /shop/bacteriostatic-water-3ml/
│
├── /category/                               ← WooCommerce product categories
│   ├── /category/anti-aging-peptides/
│   ├── /category/fat-loss-peptides-india/
│   ├── /category/muscle-growth-peptides/
│   ├── /category/recovery-healing-peptides/
│   ├── /category/nootropic-peptides/        ← BioPeptide missing this silo
│   └── /category/hormonal-peptides/         ← BioPeptide missing this silo
│
├── /blog/                                   ← Content hub
│   ├── /blog/category/buying-guides/
│   ├── /blog/category/peptide-science/
│   ├── /blog/category/product-guides/
│   ├── /blog/category/legal-regulatory/
│   └── /blog/category/how-to-use/
│
├── /compare/                                ← Comparison pages (new silo BioPeptide lacks)
│   ├── /compare/bpc-157-vs-tb-500/
│   ├── /compare/ghk-cu-vs-epithalon/
│   ├── /compare/ipamorelin-vs-ghrp-6/
│   └── /compare/semax-vs-selank/
│
├── /pages/
│   ├── /about/
│   ├── /contact/
│   ├── /lab-reports/                        ← Certificate of Analysis pages (trust signal)
│   ├── /shipping-policy/
│   ├── /return-policy/
│   └── /faq/                               ← BioPeptide has no FAQ page
│
└── /sitemap.xml                             ← Auto by RankMath
```

---

## Page Priority Tiers

### Tier 1 — Money Pages (highest priority, max SEO effort)
- Homepage
- All product pages (each gets full schema, meta, unique description)
- Top 4 collection/category pages

### Tier 2 — Authority Pages (build topical trust)
- Blog posts targeting transactional + informational keywords
- Comparison pages (`/compare/`)
- FAQ page with FAQ schema

### Tier 3 — Trust Pages (conversion support)
- Lab reports / CoA pages
- About Us
- Refund/Shipping policy

---

## Key Structural Advantages Over BioPeptide

| Element | BioPeptide | Your Site |
|---|---|---|
| Product schema | Missing | Every product page |
| Meta descriptions | Missing | Every page |
| FAQ page | Missing | `/faq/` with schema |
| Compare pages | Missing | `/compare/` silo |
| Lab report pages | Missing | `/lab-reports/` |
| Nootropic category | Missing | `/category/nootropic-peptides/` |
| GHRP-6 product | Blog only, no product | Full product page |
| Collections in sitemap | 2 of 5 | All categories submitted |
| OG / Twitter Card | Missing | Every page |

---

## Homepage Structure

```
[H1] Buy Research Peptides in India | 99% Purity | [Brand]
[Hero] Trust signals: CoA verified, India shipping, X% purity

[H2] Shop by Category
  → Anti-Aging | Fat Loss | Muscle Growth | Recovery | Nootropic

[H2] Best Sellers
  → Top 6 products with price, badge, CTA

[H2] Why Choose [Brand]?
  → CoA reports, purity guarantee, India-based, fast dispatch

[H2] From the Research Blog
  → Latest 3 blog posts

[H2] Frequently Asked Questions
  → 5 FAQs with FAQ schema markup
```

---

## Internal Linking Rules

1. Every blog post links to **at least 2 product pages** relevant to the topic
2. Every product page links to **its category page** + **1-2 related blog posts**
3. Compare pages link to **both product pages** being compared
4. Homepage links to **all 6 categories** and **top 6 products**
5. FAQ page linked from footer on every page
6. Lab reports page linked from every product page (trust signal)
