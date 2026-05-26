#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');

const WA_SVG = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.529 5.855L0 24l6.337-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.359-.213-3.724.882.943-3.614-.234-.371A9.818 9.818 0 1112 21.818z"/></svg>`;

const NAV_WA_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.529 5.855L0 24l6.337-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.359-.213-3.724.882.943-3.614-.234-.371A9.818 9.818 0 1112 21.818z"/></svg>`;

const NEW_NAV = `<nav class="pc-nav" id="pc-nav">
  <a class="logo" href="/"><img src="/favicon.svg" alt="Peptide Central" height="44" loading="lazy"></a>
  <ul class="pc-nav-links" id="pc-nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/products/">Peptides</a></li>
    <li><a href="/fat-loss-peptides/">Fat Loss</a></li>
    <li><a href="/recovery-peptides/">Recovery</a></li>
    <li><a href="/brain-peptides/">Brain</a></li>
    <li><a href="/longevity-peptides/">Longevity</a></li>
    <li><a href="/blog/">Blog</a></li>
    <li><a href="/request-peptide/">Request</a></li>
  </ul>
  <div class="pc-nav-right">
    <a class="pc-nav-wa" href="https://wa.me/919758888951" target="_blank" rel="noopener">${NAV_WA_SVG}Order on WhatsApp</a>
    <button class="pc-hamburger" onclick="pcToggleNav()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<script>function pcToggleNav(){var m=document.getElementById('pc-nav-links');if(m.style.display==='flex'){m.style.display='none';}else{m.style.display='flex';m.style.flexDirection='column';m.style.position='absolute';m.style.top='66px';m.style.left='0';m.style.right='0';m.style.background='rgba(255,255,255,.97)';m.style.borderBottom='1px solid #e2e8f0';m.style.boxShadow='0 8px 24px rgba(0,0,0,.08)';m.style.padding='1rem 5%';m.style.zIndex='9999';}}<\/script>`;

const NEW_FOOTER = `<footer class="pc-footer">
  <div class="pc-footer-grid">
    <div class="pc-footer-col">
      <img src="/logo.jpeg" alt="Peptide Central" style="height:40px;border-radius:6px;margin-bottom:.8rem;display:block">
      <p class="pc-footer-brand">India's most trusted source for research-grade peptides. Every batch HPLC-verified with COA included.</p>
      <div class="pc-footer-contact">
        <a href="https://wa.me/919758888951">📱 WhatsApp Order</a><br>
        <a href="mailto:info@peptidecentral.in">✉ info@peptidecentral.in</a>
      </div>
    </div>
    <div class="pc-footer-col">
      <h4>Categories</h4>
      <ul>
        <li><a href="/fat-loss-peptides/">Fat Loss Peptides</a></li>
        <li><a href="/recovery-peptides/">Recovery Peptides</a></li>
        <li><a href="/anti-aging-peptides/">Anti-Aging Peptides</a></li>
        <li><a href="/brain-peptides/">Brain Peptides</a></li>
        <li><a href="/longevity-peptides/">Longevity Peptides</a></li>
      </ul>
    </div>
    <div class="pc-footer-col">
      <h4>Top Products</h4>
      <ul>
        <li><a href="/bpc-157/">BPC-157</a></li>
        <li><a href="/ghk-cu/">GHK-Cu</a></li>
        <li><a href="/retatrutide/">Retatrutide</a></li>
        <li><a href="/tb-500/">TB-500</a></li>
        <li><a href="/semax/">Semax</a></li>
        <li><a href="/epitalon/">Epitalon</a></li>
      </ul>
    </div>
    <div class="pc-footer-col">
      <h4>Blog</h4>
      <ul>
        <li><a href="/blog/">All Articles</a></li>
        <li><a href="/blog/buy-peptides-online-india-2026/">Buy Peptides India</a></li>
        <li><a href="/blog/research-peptides-legal-india/">Legal in India?</a></li>
        <li><a href="/blog/top-10-best-peptides-india-2026/">Top 10 Peptides</a></li>
        <li><a href="/blog/best-peptides-fat-loss-india/">Fat Loss Guide</a></li>
      </ul>
    </div>
  </div>
  <div class="pc-footer-bot">
    <p>© 2026 Peptide Central. All products for in-vitro research use only. Not for human consumption.</p>
    <div class="pc-pay-icons">
      <span class="pc-pay">COD</span>
      <span class="pc-pay">UPI</span>
      <span class="pc-pay">IMPS</span>
    </div>
  </div>
</footer>
<div class="pc-wa-float">
  <a href="https://wa.me/919758888951" target="_blank" rel="noopener" aria-label="Order on WhatsApp">
    ${WA_SVG}
  </a>
</div>
<script src="/cart.js"></script>`;

const CSS_LINK = `<link rel="stylesheet" href="/shared.css">`;

// Standard processing: strip inline CSS + Google Fonts, add shared.css, swap nav + footer
function processStandard(filepath) {
  let html = fs.readFileSync(filepath, 'utf8');

  // Remove Google Fonts links
  html = html.replace(/<link[^>]+fonts\.googleapis\.com[^>]*>\n?/g, '');
  html = html.replace(/<link[^>]+fonts\.gstatic\.com[^>]*>\n?/g, '');

  // Replace <style>...</style> with shared.css link
  html = html.replace(/<style>[\s\S]*?<\/style>/, CSS_LINK);

  // Replace first <nav...>...</nav>
  html = html.replace(/<nav[\s\S]*?<\/nav>/, NEW_NAV);

  // Replace first <footer...>...</footer> + any trailing pc-wa-float div
  html = html.replace(/<footer[\s\S]*?<\/footer>(\s*<div class="pc-wa-float">[\s\S]*?<\/div>)?(\s*<script[^>]*cart\.js[^>]*><\/script>)?/, NEW_FOOTER);

  fs.writeFileSync(filepath, html);
  console.log('✓', filepath.replace(BASE + '/', ''));
}

// Special: 404.html needs body flex override so the 404 layout works
function process404(filepath) {
  processStandard(filepath);
  let html = fs.readFileSync(filepath, 'utf8');
  // Add 404-specific overrides after shared.css link
  html = html.replace(
    CSS_LINK,
    CSS_LINK + '\n<style>body{min-height:100vh;display:flex;flex-direction:column}.hero{flex:1;background:var(--bg);border:none;display:flex;flex-direction:column;align-items:center;justify-content:center}</style>'
  );
  fs.writeFileSync(filepath, html);
  console.log('  (404 overrides added)');
}

// Special: products/index.html — keep its complex inline CSS, just fix colors + nav/footer
function processProductsCatalog(filepath) {
  let html = fs.readFileSync(filepath, 'utf8');

  // Remove Google Fonts
  html = html.replace(/<link[^>]+fonts\.googleapis\.com[^>]*>\n?/g, '');
  html = html.replace(/<link[^>]+fonts\.gstatic\.com[^>]*>\n?/g, '');

  // Patch CSS variables: teal → blue
  html = html
    .replace(/--cyan:#0ea5a0/g, '--cyan:#1d4ed8')
    .replace(/--purple:#0e7490/g, '--purple:#1e40af')
    .replace(/rgba\(14,165,160,/g, 'rgba(29,78,216,')
    .replace(/rgba\(14,116,144,/g, 'rgba(30,64,175,')
    .replace(/'Inter'/g, "'Segoe UI'");

  // Inject shared.css BEFORE the <style> tag so inline CSS wins the cascade (idempotent)
  if (!html.includes(CSS_LINK)) html = html.replace('<style>', CSS_LINK + '\n<style>');

  // Replace nav and footer
  html = html.replace(/<nav[\s\S]*?<\/nav>/, NEW_NAV);
  html = html.replace(/<footer[\s\S]*?<\/footer>(\s*<div class="pc-wa-float">[\s\S]*?<\/div>)?(\s*<script[^>]*cart\.js[^>]*><\/script>)?/, NEW_FOOTER);

  fs.writeFileSync(filepath, html);
  console.log('✓ products/index.html (catalog — vars patched)');
}

// File lists
const productSlugs = [
  'ghk-cu','retatrutide','mots-c','klow-blend','bpc-157','tb-500',
  'kpv','tirzepatide','aod-9604','tesamorelin','cjc-1295-no-dac',
  'ipamorelin','cjc-ipamorelin-blend','semax','selank','pinealon',
  'epitalon','ss-31'
];
const categorySlugs = [
  'fat-loss-peptides','recovery-peptides','anti-aging-peptides',
  'brain-peptides','longevity-peptides'
];
const blogSlugs = [
  'blog',
  'blog/buy-peptides-online-india-2026',
  'blog/research-peptides-legal-india',
  'blog/top-10-best-peptides-india-2026',
  'blog/best-peptides-fat-loss-india',
  'blog/bpc-157-complete-guide-india',
  'blog/retatrutide-vs-tirzepatide-india',
  'blog/best-longevity-peptides-india',
  'blog/ghk-cu-complete-guide-india',
];

const standardFiles = [
  ...productSlugs.map(s => path.join(BASE, s, 'index.html')),
  ...categorySlugs.map(s => path.join(BASE, s, 'index.html')),
  ...blogSlugs.map(s => path.join(BASE, s, 'index.html')),
];

console.log('Applying shared.css to all sub-pages...\n');
standardFiles.forEach(processStandard);
process404(path.join(BASE, '404.html'));
processProductsCatalog(path.join(BASE, 'products', 'index.html'));
console.log(`\nDone — ${standardFiles.length + 2} pages updated.`);
