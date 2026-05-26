#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
const products = JSON.parse(fs.readFileSync(path.join(BASE, 'products.json'), 'utf8'));
const WA_NUM = '919758888951';

// Normalize product id to match directory slug
function normalizeId(id) {
  return id.replace(/[()]/g, '').replace(/-{2,}/g, '-');
}
const productMap = {};
products.forEach(p => { productMap[normalizeId(p.id)] = p; });

const WA_SVG20 = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.529 5.855L0 24l6.337-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.359-.213-3.724.882.943-3.614-.234-.371A9.818 9.818 0 1112 21.818z"/></svg>`;
const WA_SVG18 = WA_SVG20.replace('width="20" height="20"', 'width="18" height="18"');
const WA_SVG15 = WA_SVG20.replace('width="20" height="20"', 'width="15" height="15"');

const NEW_NAV = `<nav class="pc-nav" id="pc-nav">
  <a class="logo" href="/"><img src="/logo.jpeg" alt="Peptide Central" height="44" loading="lazy"></a>
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
    <a class="pc-nav-wa" href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener">${WA_SVG15}Order on WhatsApp</a>
    <button class="pc-hamburger" onclick="var m=document.getElementById('pc-nav-links');m.style.display=m.style.display==='flex'?'none':'flex'" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>`;

const NEW_FOOTER = `<footer class="pc-footer">
  <div class="pc-footer-grid">
    <div class="pc-footer-col">
      <img src="/logo.jpeg" alt="Peptide Central" style="height:40px;border-radius:6px;margin-bottom:.8rem;display:block">
      <p class="pc-footer-brand">India's most trusted source for research-grade peptides. Every batch HPLC-verified with COA included.</p>
      <div class="pc-footer-contact">
        <a href="https://wa.me/${WA_NUM}">📱 WhatsApp Order</a><br>
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
  <a href="https://wa.me/${WA_NUM}" target="_blank" rel="noopener" aria-label="Order on WhatsApp">
    ${WA_SVG20}
  </a>
</div>`;

function getAbbr(name) {
  const words = name.split(/[\s\-+]+/).filter(Boolean);
  if (words.length === 1) return name.substring(0, 3).toUpperCase();
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function getImgSrc(img) {
  if (!img) return null;
  if (img.includes('drive.google.com')) return null;
  if (!img.startsWith('http')) return '/' + img;
  return img;
}

function extractHead(html) {
  const s = html.indexOf('<head>');
  const e = html.indexOf('</head>');
  if (s === -1 || e === -1) return '';
  return html.substring(s + 6, e);
}

function extractContent(html) {
  const startMark = '<div class="content">';
  const endMark = '<footer class="pc-footer">';
  const s = html.indexOf(startMark);
  if (s === -1) return '';
  const e = html.indexOf(endMark);
  let raw = (e !== -1)
    ? html.substring(s + startMark.length, e)
    : html.substring(s + startMark.length);
  raw = raw.trimEnd().replace(/\s*<\/div>\s*$/, '');
  raw = removeSectionBlock(raw, 'Pricing');
  // Strip previously injected order CTA to prevent duplication on re-runs
  raw = raw.replace(/<div class="section-block" style="text-align:center">\s*<h2>Order [^<]+ in India<\/h2>[\s\S]*?<\/div>/g, '');
  // Strip old ymal section (now generated statically outside content div)
  raw = raw.replace(/<section class="ymal-section"[\s\S]*?<\/section>/g, '');
  return raw.trim();
}

function extractBreadcrumbSchema(html) {
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m, last = '';
  while ((m = regex.exec(html)) !== null) {
    if (m[1].includes('"BreadcrumbList"')) last = m[0];
  }
  return last;
}

function removeSectionBlock(content, heading) {
  const h2Idx = content.search(new RegExp('<h2>' + heading + '<\\/h2>'));
  if (h2Idx === -1) return content;
  const openDiv = '<div class="section-block">';
  const blockStart = content.lastIndexOf(openDiv, h2Idx);
  if (blockStart === -1) return content;
  let pos = blockStart + openDiv.length;
  let depth = 1;
  while (pos < content.length && depth > 0) {
    const no = content.indexOf('<div', pos);
    const nc = content.indexOf('</div>', pos);
    if (nc === -1) break;
    if (no !== -1 && no < nc) { depth++; pos = no + 4; }
    else { depth--; pos = nc + 6; }
  }
  return content.substring(0, blockStart).trimEnd() + '\n\n' + content.substring(pos).trimStart();
}

function buildHero(p) {
  const imgSrc = getImgSrc(p.img);
  const v0 = p.variants[0];
  const savePct = v0.origPrice > v0.price ? Math.round((1 - v0.price / v0.origPrice) * 100) : 0;
  const waMsg0 = encodeURIComponent('Hi, I want to order ' + p.name + ' – ' + v0.mg);

  const imgHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name} – Peptide Central India" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="pd-img-fb" style="display:none;position:absolute;inset:0">
        <span class="pd-fb-abbr">${getAbbr(p.name)}</span>
        <span class="pd-fb-cat">${p.cat} Peptide</span>
      </div>`
    : `<div class="pd-img-fb">
        <span class="pd-fb-abbr">${getAbbr(p.name)}</span>
        <span class="pd-fb-cat">${p.cat} Peptide</span>
      </div>`;

  return `
<div class="breadcrumb"><a href="/">Home</a> › ${p.name}</div>

<div class="pd-hero">
  <div class="pd-col-img">
    <div class="pd-img-wrap">
      ${imgHtml}
    </div>
    <div class="pd-badges-row">
      <div class="pd-badge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>HPLC Verified</div>
      <div class="pd-badge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>COA Included</div>
      <div class="pd-badge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Pan-India</div>
      <div class="pd-badge-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>COD Available</div>
    </div>
  </div>

  <div class="pd-col-info">
    <div class="pd-cat-tag">${p.cat} Peptide</div>
    <h1>Buy ${p.name} in India</h1>
    <div class="pd-purity-bar">${p.purity} Purity &nbsp;·&nbsp; HPLC Verified &nbsp;·&nbsp; COA Included</div>
    <p class="pd-tagline">${p.desc}</p>
    <hr class="pd-divider">

    <div class="pd-price-box">
      <span class="pd-price-orig" id="pd-price-orig">₹${v0.origPrice.toLocaleString('en-IN')}</span>
      <span class="pd-price-now" id="pd-price-now">₹${v0.price.toLocaleString('en-IN')}</span>
      ${savePct > 0 ? `<span class="pd-save-tag" id="pd-save-pct">Save ${savePct}%</span>` : ''}
    </div>

    ${p.variants.length > 1 ? buildVariants(p) : ''}

    <a class="pd-btn-order" id="pd-wa-btn" href="https://wa.me/${WA_NUM}?text=${waMsg0}" target="_blank" rel="noopener">
      ${WA_SVG20} Order ${p.name} on WhatsApp
    </a>
    <div id="pd-precart">
      <button class="pd-btn-cart" onclick="pdAddToCart()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
        Add to Cart
      </button>
    </div>
    <div class="pd-incart-ctl" id="pd-incart" style="display:none">
      <button class="pd-incart-btn" onclick="pdCartDec()">−</button>
      <span class="pd-incart-qty" id="pd-incart-qty">1</span>
      <button class="pd-incart-btn" onclick="pdCartInc()">+</button>
    </div>
    <p class="pd-ship-note">Ships within 24h &nbsp;·&nbsp; COD Available &nbsp;·&nbsp; Discreet Packaging</p>

    <div class="pd-meta-row">
      <div class="pd-meta-item"><strong>Dose</strong>${p.dose}</div>
      <div class="pd-meta-item"><strong>Half-life</strong>${p.half}</div>
      <div class="pd-meta-item"><strong>Target</strong>${p.tgt}</div>
    </div>
  </div>
</div>`;
}

function buildVariants(p) {
  const pills = p.variants.map((v, i) => {
    const d = v.origPrice > v.price ? Math.round((1 - v.price / v.origPrice) * 100) : 0;
    return `<button class="pd-var${i === 0 ? ' active' : ''}" onclick="pdSelVar(${i})">${v.mg}<small>₹${v.price.toLocaleString('en-IN')}${d > 0 ? ' · ' + d + '% off' : ''}</small></button>`;
  }).join('\n      ');
  return `<div class="pd-variant-label">Select Size:</div>
    <div class="pd-variants">
      ${pills}
    </div>`;
}

function buildProductScript(p) {
  const varData = JSON.stringify(p.variants.map(v => ({ mg: v.mg, price: v.price, origPrice: v.origPrice })));
  const imgSrc = getImgSrc(p.img) || '';
  const selVarFn = p.variants.length > 1 ? `
  function pdSelVar(i){
    document.querySelectorAll('.pd-var').forEach(function(e,j){e.classList.toggle('active',i===j)});
    var v=_pdv[i];
    document.getElementById('pd-price-now').textContent='₹'+v.price.toLocaleString('en-IN');
    document.getElementById('pd-price-orig').textContent='₹'+v.origPrice.toLocaleString('en-IN');
    var s=v.origPrice>v.price?Math.round((1-v.price/v.origPrice)*100):0;
    var st=document.getElementById('pd-save-pct');if(st)st.textContent='Save '+s+'%';
    document.getElementById('pd-wa-btn').href='https://wa.me/${WA_NUM}?text='+encodeURIComponent('Hi, I want to order '+_pdn+' – '+v.mg);
    pdSyncCartBtn();
  }` : '';
  return `<script>
  var _pdv=${varData},_pdn=${JSON.stringify(p.name)},_pid=${JSON.stringify(p.id)},_pimg=${JSON.stringify(imgSrc)},_pcat=${JSON.stringify(p.cat)};${selVarFn}
  function pdCurVi(){var vi=Array.from(document.querySelectorAll('.pd-var')).findIndex(function(e){return e.classList.contains('active')});return vi<0?0:vi;}
  function pdSyncCartBtn(){
    var vi=pdCurVi();
    var c=JSON.parse(localStorage.getItem('kg_cart')||'[]');
    var ex=c.find(function(i){return i.pid===_pid&&i.vi===vi});
    var pre=document.getElementById('pd-precart');
    var inc=document.getElementById('pd-incart');
    if(ex&&ex.qty>0){pre.style.display='none';inc.style.display='flex';document.getElementById('pd-incart-qty').textContent=ex.qty;}
    else{pre.style.display='block';inc.style.display='none';}
  }
  function pdCartInc(){
    var vi=pdCurVi();var v=_pdv[vi]||_pdv[0];
    var c=JSON.parse(localStorage.getItem('kg_cart')||'[]');
    var ex=c.find(function(i){return i.pid===_pid&&i.vi===vi});
    if(ex){ex.qty++;}else{c.push({pid:_pid,name:_pdn,img:_pimg,variant:v.mg,price:v.price,vi:vi,qty:1});}
    localStorage.setItem('kg_cart',JSON.stringify(c));
    if(window.pcUpdateCartFromStorage)window.pcUpdateCartFromStorage();
    pdSyncCartBtn();
  }
  function pdCartDec(){
    var vi=pdCurVi();
    var c=JSON.parse(localStorage.getItem('kg_cart')||'[]');
    var idx=c.findIndex(function(i){return i.pid===_pid&&i.vi===vi});
    if(idx>=0){c[idx].qty--;if(c[idx].qty<1)c.splice(idx,1);}
    localStorage.setItem('kg_cart',JSON.stringify(c));
    if(window.pcUpdateCartFromStorage)window.pcUpdateCartFromStorage();
    pdSyncCartBtn();
  }
  function pdAddToCart(){
    var vi=pdCurVi();var v=_pdv[vi]||_pdv[0];
    var c=JSON.parse(localStorage.getItem('kg_cart')||'[]');
    var ex=c.find(function(i){return i.pid===_pid&&i.vi===vi});
    if(ex){ex.qty++;}else{c.push({pid:_pid,name:_pdn,img:_pimg,variant:v.mg,price:v.price,vi:vi,qty:1});}
    localStorage.setItem('kg_cart',JSON.stringify(c));
    if(window.pcUpdateCartFromStorage)window.pcUpdateCartFromStorage();
    pdSyncCartBtn();
  }
  document.addEventListener('DOMContentLoaded',function(){
    pdSyncCartBtn();
  });
<\/script>`;
}

function buildYmalHtml(p) {
  let related = products.filter(q => q.id !== p.id && q.cat === p.cat);
  const others = products.filter(q => q.id !== p.id && q.cat !== p.cat);
  related = related.concat(others).slice(0, 4);
  if (!related.length) return '';
  const cards = related.map(q => {
    const v0 = q.variants[0];
    const img = getImgSrc(q.img) || '';
    return `<a href="/${q.id}/" class="ymal-card">`
      + `<div class="ymal-img-wrap">${img ? `<img src="${img}" alt="${q.name}" loading="lazy">` : ''}</div>`
      + `<div class="ymal-body"><div class="ymal-cat">${q.cat}</div>`
      + `<div class="ymal-name">${q.name}</div>`
      + `<div class="ymal-price">from ₹${v0.price.toLocaleString('en-IN')}</div>`
      + `</div></a>`;
  }).join('\n  ');
  return `<section class="ymal-section">
  <div class="ymal-hd"><h2>You May Also Like</h2></div>
  <div class="ymal-grid">
  ${cards}
  </div>
</section>`;
}

function redesignProduct(slug) {
  const fp = path.join(BASE, slug, 'index.html');
  if (!fs.existsSync(fp)) { console.warn('  skip (no file):', slug); return; }
  const p = productMap[slug];
  if (!p) { console.warn('  skip (no data):', slug); return; }

  const html = fs.readFileSync(fp, 'utf8');
  const head = extractHead(html);
  const contentInner = extractContent(html);
  const bcSchema = extractBreadcrumbSchema(html);
  const heroHtml = buildHero(p);
  const productScript = buildProductScript(p);
  const waOrderMsg = encodeURIComponent('Hi, I want to order ' + p.name);

  const ymalHtml = buildYmalHtml(p);
  const out = `<!DOCTYPE html>
<html lang="en">
<head>${head}
</head>
<body>
${NEW_NAV}
${heroHtml}

${ymalHtml}

<div class="content">
${contentInner}
</div>

${NEW_FOOTER}
${productScript}
<div class="pd-cart-toast" id="pd-cart-toast" style="display:none">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
  <span>Added to cart!</span>
  <a href="/">View Cart &rarr;</a>
</div>
${bcSchema}
</body>
</html>`;

  fs.writeFileSync(fp, out);
  console.log('✓', slug);
}

const productSlugs = [
  'ghk-cu','retatrutide','mots-c','klow-blend','bpc-157','tb-500',
  'kpv','tirzepatide','aod-9604','tesamorelin','cjc-1295-no-dac',
  'ipamorelin','cjc-ipamorelin-blend','semax','selank','pinealon',
  'epitalon','ss-31'
];

console.log('Redesigning product pages (Shopify style)...\n');
productSlugs.forEach(redesignProduct);
console.log('\nDone — ' + productSlugs.length + ' pages updated.');
