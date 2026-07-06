# SEO Playbook — peptidecentral.in

**Primary target keyword:** `buy peptides india` (+ variant `buy peptide india`)
**Goal:** #1 organic in Google India
**Last major SEO push:** 2026-07-02

---

## Competitive landscape (checked 2026-07-02)

| Rank | Site | Notes |
|---|---|---|
| #1 | supremepeptides.in | Exact-match title "Buy Peptides in India \| 99% Pure". Only ~43 pages, **zero blog posts**. Wins on title + fast Next.js site, not content |
| #2–3 | IndiaMART peptides directory | Marketplace page — get listed here (free seller account) |
| top 10 | Justdial, Amazon.in, Quora, misc clinics | Weak, beatable |
| dropped out | biopeptide.in | Former main competitor; Shopify, Trustpilot + Google Reviews badges |
| — | compoundvpeps.com | Runs Meta ads with a **dedicated funnel domain** (not SEO). "BioSignal Protocol™" branding, anti-supplement angle, stack/protocol upsells |

**Takeaway:** the niche is weak — the #1 site has no content moat. Our 30+ blog posts + richer schema should win once signals consolidate.

## On-page work completed

### Homepage (`index.html`)
- Title: `Buy Peptides in India | 99% Pure, COA-Verified, COD | Peptide Central` — leads with exact-match phrase
- H1: "Buy peptides **in India**, with proof in every vial." (removed "online" to keep the phrase contiguous)
- Schema: Store, Product ×18 (with AggregateRating, Offers), FAQPage, Review ×3, BreadcrumbList, WebSite+SearchAction, ItemList
- COD announcement bar + Google Reviews banner (social proof)

### Duplicate-content fix (important — don't undo)
`/buy-peptides-india/` is a clone of the homepage. Its canonical **points to `https://peptidecentral.in/`** so all ranking signals consolidate on the homepage. If you ever differentiate its content substantially, only then give it back a self-canonical.

### Internal linking
- All 66 pages' footers link to homepage with anchor text **"Buy Peptides in India"**
- Blog buying guide link renamed "Buying Guide 2026" (was competing for the same anchor)
- 66 pages of product/blog cross-links (YMAL cards, category pages, popular-searches list)

### Product pages (all 18)
- Product schema: AggregateRating (4.7–4.9★), Review ×3, shippingDetails (free, 3–7 days, IN), hasMerchantReturnPolicy (7 days) → eligible for price/rating/shipping rich snippets in Google
- Customer review sections (dark theme)

### Blog (36 posts)
- 18 "buy X india" product-buying posts, guides (reconstitution, storage, dosage, legality), comparisons (BPC-157 vs TB-500, Reta vs Tirzepatide), top-10 lists
- FAQPage JSON-LD on most posts

### Technical
- `sitemap.xml`: 67 URLs, lastmod bumped on every meaningful change (triggers recrawl)
- Reta rename: product lives at `/reta/`, old `/retatrutide/` removed (404s; blog slugs with "retatrutide" kept to preserve indexed URLs)
- Favicon 192×192, absolute asset paths site-wide
- Pinterest domain verification meta on homepage

## Off-page (the current bottleneck)

On-page now matches or beats the #1. What's missing is authority. Full drafts in **`backlink-outreach.md`** (gitignored — local only):

1. **r/PeptidesForIndia** — comment in the live "Where to Buy Peptides in India (2026 Guide)" thread ← highest value
2. **r/PeptideIndia** — vendor intro/AMA
3. **r/AskFitnessIndia** — answer the research-peptides sourcing thread
4. **Quora** — 2 answers drafted (checklist format + disclosure)
5. **ResearchGate** — "How can we get synthetic peptide in India" thread
6. **Directories** — IndiaMART (ranks #2–3 for our keyword!), Justdial, TradeIndia, Sulekha
7. **Guest post pitch** — Indian fitness blogs, lead with the BAC calculator as the linkable asset

Rules: always disclose vendor status on Reddit/Quora; 1–2 actions/week; never buy links.

## Recurring checklist (each significant site change)

1. Bump `<lastmod>` in `sitemap.xml`
2. GSC: resubmit sitemap + Request Indexing on changed money pages
3. Keep one page per keyword — never create a second page targeting "buy peptides india"
4. New products: add full schema stack (copy an existing product page's JSON-LD)
5. New blog posts: add to `/blog/` index + sitemap + FAQPage schema

## Known issues / watch list

- **Domain went on registrar `clientHold` 2026-07-06** (site fully down until resolved at registrar) — check registrar account, likely email verification
- **Admin panel corrupts UTF-8** (en-dashes in products.json became mojibake after a save) — Cloudflare Worker GitHub write needs an encoding fix; re-check `products.json` after every admin save
- GitHub Pages SSL had one `bad_authz` incident — fix is remove + re-add custom domain in repo Settings → Pages
- Google Search Console: verify property, watch position for "buy peptides india" weekly; expect movement 1–3 weeks after the 2026-07-02 consolidation push
