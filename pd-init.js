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
  });
})();
