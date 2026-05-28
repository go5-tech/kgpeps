// Syncs product page image + variants from products.json at runtime
// so admin changes take effect without touching HTML files
document.addEventListener('DOMContentLoaded', function() {
  if (typeof _pid === 'undefined') return;
  fetch('/products.json?t=' + Date.now())
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var p = data.find(function(x) { return x.id === _pid; });
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
        // Re-render variant buttons
        var wrap = document.querySelector('.pd-vars');
        if (wrap) {
          wrap.innerHTML = p.variants.map(function(v, i) {
            var pct = v.origPrice > v.price ? Math.round((1 - v.price / v.origPrice) * 100) : 0;
            return '<button class="pd-var' + (i === 0 ? ' active' : '') + '" onclick="pdSelVar(' + i + ')">'
              + v.mg + '<small>₹' + v.price.toLocaleString('en-IN') + (pct ? ' · ' + pct + '% off' : '') + '</small></button>';
          }).join('');
        }
        // Apply first variant
        if (typeof pdSelVar === 'function') pdSelVar(0);
      }
    })
    .catch(function() {});
});
