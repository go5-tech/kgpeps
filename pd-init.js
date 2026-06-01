// Fetch products.json immediately (parallel with page load) to minimize image flash
(function() {
  var _pdFetch = fetch('/products.json?t=' + Date.now()).then(function(r) { return r.json(); }).catch(function() { return null; });

  function applyInit(p) {
    if (!p) return;
    // Update main image
    if (p.img) {
      var pi = document.querySelector('.pd-img-wrap img');
      if (pi) pi.src = p.img;
      _pimg = p.img;
    }
    // Update variants
    if (p.variants && p.variants.length) {
      _pdv = p.variants;
      var wrap = document.querySelector('.pd-vars');
      if (wrap) {
        wrap.innerHTML = p.variants.map(function(v, i) {
          var pct = v.origPrice > v.price ? Math.round((1 - v.price / v.origPrice) * 100) : 0;
          return '<button class="pd-var' + (i === 0 ? ' active' : '') + '" onclick="pdSelVar(' + i + ')">'
            + v.mg + '<small>₹' + v.price.toLocaleString('en-IN') + (pct ? ' · ' + pct + '% off' : '') + '</small></button>';
        }).join('');
      }
      if (typeof pdSelVar === 'function') {
        pdSelVar(0);
      } else {
        var v0 = p.variants[0];
        var priceNow = document.getElementById('pd-price-now');
        var priceOrig = document.getElementById('pd-price-orig');
        var savePct = document.getElementById('pd-save-pct');
        var waBtn = document.getElementById('pd-wa-btn');
        if (priceNow) priceNow.textContent = '₹' + v0.price.toLocaleString('en-IN');
        if (priceOrig) priceOrig.textContent = '₹' + v0.origPrice.toLocaleString('en-IN');
        if (savePct) {
          var pct = v0.origPrice > v0.price ? Math.round((1 - v0.price / v0.origPrice) * 100) : 0;
          savePct.textContent = pct ? 'Save ' + pct + '%' : '';
        }
        if (waBtn) waBtn.href = 'https://wa.me/918868034951?text=' + encodeURIComponent('Hi, I want to order ' + _pdn + ' – ' + v0.mg);
        if (v0.img) {
          var pi2 = document.querySelector('.pd-img-wrap img');
          if (pi2) pi2.src = v0.img;
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (typeof _pid === 'undefined') return;
    _pdFetch.then(function(data) {
      if (!data) return;
      var p = data.find(function(x) { return x.id === _pid; });
      applyInit(p);
    });

    // Inject BAC water calculator CTA before footer on every product page
    var footer = document.querySelector('footer');
    if (footer) {
      var div = document.createElement('div');
      div.innerHTML = '<div style="background:linear-gradient(135deg,#0a0f1e,#111935);padding:2.2rem 5%;text-align:center;margin-top:0">'
        + '<p style="font-family:var(--mono,monospace);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:#9fb4ee;margin-bottom:.6rem">Reconstitution Tool</p>'
        + '<h3 style="font-size:1.3rem;font-weight:700;color:#fff;margin-bottom:.5rem">How much BAC water do you need?</h3>'
        + '<p style="color:#aeb8d0;font-size:.9rem;max-width:480px;margin:0 auto .9rem">Enter your vial size and desired dose — get exact concentration, mcg/IU and syringe draw instantly.</p>'
        + '<a href="/bac-calculator/" style="display:inline-flex;align-items:center;gap:.5rem;background:#1d4ed8;color:#fff;padding:12px 26px;border-radius:10px;font-weight:700;font-size:.88rem;text-decoration:none;transition:.2s">'
        + '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>'
        + 'Open Reconstitution Calculator</a>'
        + '</div>';
      footer.parentNode.insertBefore(div, footer);
    }
  });
})();
