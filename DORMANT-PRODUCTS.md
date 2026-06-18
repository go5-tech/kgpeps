# Dormant Products

Products listed here are hidden from the site but fully preserved. All files remain intact.

---

## Retatrutide

**Dormanted:** 2026-06-18  
**Reason:** Temporarily unavailable  
**Product page:** `/retatrutide/index.html`  
**products.json:** `"active": false`

### To re-enable:

1. **products.json** — change `"active": false` to `"active": true` (or remove the field) for the `"id": "retatrutide"` entry

2. **Nav sidebar** — add back to all pages:
   ```html
   <li><a href="/retatrutide/">Retatrutide</a></li>
   ```
   (Appears in the `<ul>` product list inside `.pc-nav-links` on every page)

3. **fat-loss-peptides/index.html** — add back the product card with `<a href="/retatrutide/" class="btn">View Product</a>`

4. **YMAL cards** — add back on: mots-c, semax, selank, pinealon, aod-9604, tirzepatide, ss-31, epitalon:
   ```html
   <a href="/retatrutide/" class="ymal-card"><div class="ymal-img-wrap"><img src="/images/vials/retatrutide_10mg.webp" alt="Retatrutide" loading="lazy"></div><div class="ymal-body"><div class="ymal-cat">Fat Loss</div><div class="ymal-name">Retatrutide</div><div class="ymal-price">from ₹4,999</div></div></a>
   ```

5. **Homepage & buy-peptides-india SEO section** — add back:
   ```html
   <a href="/retatrutide/">Buy Retatrutide in India <span>→</span></a>
   ```

6. **Google Reviews banner** — swap Tirzepatide vial back to Retatrutide vial:
   - In `index.html`, find `tirzepatide_10mg.webp` in the Google Reviews banner section
   - Replace with `/images/vials/retatrutide_5mg.webp` and `alt="Retatrutide"`
