# BAC Water Reconstitution Calculator

**Live URL:** https://peptidecentral.in/bac-calculator/
**Source:** `bac-calculator/index.html` (single self-contained file — HTML, CSS, and vanilla JS, no dependencies)

A free tool that tells researchers exactly how many IU to draw on an insulin syringe for a target peptide dose. Works for any vendor's vials, which makes it the site's best linkable asset for SEO and outreach.

---

## What it does

The user picks a peptide and vial size, enters how much bacteriostatic (BAC) water they added, and their desired dose in mcg. The calculator instantly shows:

| Output | Meaning |
|---|---|
| **Concentration** | mg/ml (or mcg/ml when under 1 mg/ml) after reconstitution |
| **Per IU** | how many mcg are in one IU (0.01 ml) of solution |
| **Draw amount** | the headline result — how many IU to pull on a U-100 insulin syringe, plus the ml equivalent |
| **Doses per vial** | how many doses of the chosen size the vial yields |

## Inputs

1. **Peptide** — dropdown populated live from `/products.json`, so the catalogue stays in sync automatically; no calculator update needed when products change
2. **Vial Size** — variants of the selected peptide (e.g. 10mg / 20mg / 30mg for Reta)
3. **BAC Water Added** — free number input (0.1–10 ml) with quick-select buttons for 1 / 2 / 3 / 5 ml
4. **Desired Dose** — in micrograms (mcg)

## The math

```
concentration (mg/ml) = vial mg ÷ BAC water ml
mcg per IU            = concentration × 1000 × 0.01     (1 IU = 0.01 ml on a U-100 syringe)
draw (IU)             = desired dose mcg ÷ mcg per IU
doses per vial        = floor(vial mcg ÷ dose mcg)
```

**Worked example:** BPC-157 10mg vial + 2 ml BAC water = 5 mg/ml → 50 mcg per IU. A 500 mcg dose = **draw to 10 IU** (0.1 ml). The vial gives ~20 doses.

## Implementation notes

- **Data source:** fetches `/products.json` at load; only `active` products appear (a dormanted product drops out of the dropdown automatically)
- **Blend vials:** the mg parser sums all numbers in the size string, so a `"5+5mg"` blend variant correctly counts as 10mg total
- **No backend:** everything runs client-side; the page works even if the cart/config APIs are down
- **Below the tool:** a step-by-step "How to Reconstitute a Peptide Vial" guide plus FAQ content targeting reconstitution search keywords

## Key functions (all in the inline `<script>`)

| Function | Role |
|---|---|
| `onPeptideChange()` | fills the vial-size dropdown for the selected peptide |
| `setBac(v)` / `syncBacBtns()` | quick-select buttons ↔ number input sync |
| `calc()` | parses inputs, runs the math, renders results |
| `resetOutput()` | hides results, shows the placeholder when inputs are incomplete |

## Marketing / SEO role

- Ranked internal page targeting "peptide reconstitution calculator India", "BAC water calculator" queries
- Linked from every product page and the blog's reconstitution guide (`/blog/how-to-reconstitute-peptides-bac-water/`)
- Used as the lead offer in outreach (see `backlink-outreach.md`) — "useful even if you buy elsewhere" framing
- Referenced in FAQ JSON-LD answers across the blog, so it appears in Google rich results
