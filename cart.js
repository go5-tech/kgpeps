/* Shared cart — injected on all sub-pages (.pc-nav) */
(function(){
'use strict';
var WA='919758888951';

var CSS=[
'.pc-cart-btn{position:relative;background:#f1f5f9;border:1px solid #e2e8f0;color:#374151;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.25s;flex-shrink:0}',
'.pc-cart-btn:hover{border-color:#1d4ed8;color:#1d4ed8}',
'.pc-cart-cnt{position:absolute;top:-6px;right:-6px;background:#1d4ed8;color:#fff;font-size:.6rem;font-weight:800;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0;transition:.2s}',
'.pc-cart-cnt.show{opacity:1}',
'.pc-cov{position:fixed;inset:0;z-index:5000;background:rgba(0,0,0,.4);backdrop-filter:blur(4px);opacity:0;visibility:hidden;transition:.3s}',
'.pc-cov.show{opacity:1;visibility:visible}',
'.pc-cpanel{position:fixed;top:0;right:0;bottom:0;width:420px;max-width:95vw;background:#fff;border-left:1px solid #e2e8f0;z-index:5001;transform:translateX(100%);transition:.35s ease;display:flex;flex-direction:column;box-shadow:-4px 0 30px rgba(0,0,0,.08)}',
'.pc-cpanel.show{transform:translateX(0)}',
'.pc-ch{padding:1.4rem 1.5rem;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between}',
'.pc-ch h3{font-size:1rem;font-weight:800;color:#0f172a;margin:0}',
'.pc-cc{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;padding:5px 10px;cursor:pointer;font-size:.85rem;color:#64748b;transition:.2s}',
'.pc-cc:hover{color:#1d4ed8;border-color:#1d4ed8}',
'.pc-ci-list{flex:1;overflow-y:auto;padding:1rem 1.5rem;display:flex;flex-direction:column;gap:.8rem}',
'.pc-cempty{text-align:center;padding:3rem 1rem;color:#94a3b8}',
'.pc-cempty svg{margin-bottom:.8rem;opacity:.4;display:block;margin-left:auto;margin-right:auto}',
'.pc-ci{display:flex;gap:.9rem;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.8rem}',
'.pc-ci-img{width:54px;height:54px;border-radius:7px;object-fit:cover;background:#e2e8f0;flex-shrink:0}',
'.pc-ci-body{flex:1;min-width:0}',
'.pc-ci-name{font-weight:700;font-size:.85rem;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.pc-ci-var{font-size:.72rem;color:#64748b;margin-bottom:.3rem}',
'.pc-ci-price{font-size:.88rem;font-weight:800;color:#1d4ed8}',
'.pc-ci-rm{background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1rem;padding:0 2px;transition:.2s}',
'.pc-ci-rm:hover{color:#dc2626}',
'.pc-ci-right{display:flex;flex-direction:column;align-items:flex-end;gap:.4rem;flex-shrink:0}',
'.pc-ci-qty{display:flex;align-items:center;gap:5px}',
'.pc-ci-qty-btn{background:#f1f5f9;border:1px solid #e2e8f0;color:#374151;width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.95rem;padding:0;line-height:1;transition:.2s}',
'.pc-ci-qty-btn:hover{border-color:#1d4ed8;color:#1d4ed8}',
'.pc-ci-qty-num{font-size:.82rem;font-weight:700;color:#0f172a;min-width:18px;text-align:center}',
'.pc-cfoot{padding:1.2rem 1.5rem;border-top:1px solid #e2e8f0}',
'.pc-ctotal{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}',
'.pc-ctotal span{font-size:.85rem;color:#64748b}',
'.pc-ctotal strong{font-size:1.2rem;font-weight:900;color:#0f172a}',
'.pc-cwa{width:100%;background:linear-gradient(130deg,#25d366,#1a9e4e);color:#fff;border:none;padding:13px;border-radius:10px;font-weight:700;font-size:.9rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:.25s}',
'.pc-cwa:hover{box-shadow:0 4px 18px rgba(37,211,102,.4);transform:translateY(-1px)}'
].join('');

var WA_SVG='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.529 5.855L0 24l6.337-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.359-.213-3.724.882.943-3.614-.234-.371A9.818 9.818 0 1112 21.818z"/></svg>';

var cart=[];

window.pcUpdateCartFromStorage=function(){
  cart=JSON.parse(localStorage.getItem('kg_cart')||'[]');
  pcUpdateCount();
};

function pcUpdateCount(){
  var n=cart.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('pc-cart-cnt');
  if(el){el.textContent=n;el.classList.toggle('show',n>0)}
  localStorage.setItem('kg_cart',JSON.stringify(cart));
}

window.pcOpenCart=function(){
  document.getElementById('pc-cov').classList.add('show');
  document.getElementById('pc-cpanel').classList.add('show');
  pcRenderCart();
};
window.pcCloseCart=function(){
  document.getElementById('pc-cov').classList.remove('show');
  document.getElementById('pc-cpanel').classList.remove('show');
};
window.pcRemove=function(i){
  cart.splice(i,1);pcUpdateCount();pcRenderCart();
};
window.pcChangeQty=function(i,delta){
  if(!cart[i])return;
  cart[i].qty+=delta;
  if(cart[i].qty<1)cart.splice(i,1);
  pcUpdateCount();pcRenderCart();
};
window.pcSendCart=function(){
  if(!cart.length)return;
  var lines=cart.map(function(i){return '• '+i.name+' '+i.variant+(i.qty>1?' ×'+i.qty:'')+' — ₹'+(i.price*i.qty).toLocaleString('en-IN')});
  var total=cart.reduce(function(s,i){return s+(i.price*i.qty)},0);
  var msg='Hi Peptide Central! I\'d like to order:\n\n'+lines.join('\n')+'\n\nTotal: ₹'+total.toLocaleString('en-IN')+'\n\nPlease share payment details. Thanks!';
  window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank');
};

function pcRenderCart(){
  var el=document.getElementById('pc-ci-list');
  var foot=document.getElementById('pc-cfoot');
  if(!cart.length){
    el.innerHTML='<div class="pc-cempty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg><p>Your cart is empty</p></div>';
    foot.style.display='none';return;
  }
  el.innerHTML=cart.map(function(item,i){
    return '<div class="pc-ci"><img class="pc-ci-img" src="'+item.img+'" alt="'+item.name+'" onerror="this.style.display=\'none\'"><div class="pc-ci-body"><div class="pc-ci-name">'+item.name+'</div><div class="pc-ci-var">'+item.variant+'</div><div class="pc-ci-qty"><button class="pc-ci-qty-btn" onclick="pcChangeQty('+i+',-1)">−</button><span class="pc-ci-qty-num">'+item.qty+'</span><button class="pc-ci-qty-btn" onclick="pcChangeQty('+i+',1)">+</button></div></div><div class="pc-ci-right"><div class="pc-ci-price">₹'+(item.price*item.qty).toLocaleString('en-IN')+'</div><button class="pc-ci-rm" onclick="pcRemove('+i+')">✕</button></div></div>';
  }).join('');
  var total=cart.reduce(function(s,i){return s+(i.price*i.qty)},0);
  document.getElementById('pc-ctotal-amt').textContent='₹'+total.toLocaleString('en-IN');
  foot.style.display='block';
}

document.addEventListener('DOMContentLoaded',function(){
  // Inject CSS
  var s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s);

  // Inject cart button into .pc-nav-right (before hamburger)
  var navRight=document.querySelector('.pc-nav-right');
  if(navRight&&!document.getElementById('pc-cart-cnt')){
    var btn=document.createElement('button');
    btn.className='pc-cart-btn';
    btn.setAttribute('onclick','pcOpenCart()');
    btn.setAttribute('aria-label','View cart');
    btn.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg><span class="pc-cart-cnt" id="pc-cart-cnt">0</span>';
    var hamburger=navRight.querySelector('.pc-hamburger');
    if(hamburger)navRight.insertBefore(btn,hamburger);else navRight.appendChild(btn);
  }

  // Inject cart panel into body
  var wrap=document.createElement('div');
  wrap.innerHTML='<div class="pc-cov" id="pc-cov" onclick="pcCloseCart()"></div><div class="pc-cpanel" id="pc-cpanel"><div class="pc-ch"><h3>Your Cart</h3><button class="pc-cc" onclick="pcCloseCart()">✕ Close</button></div><div class="pc-ci-list" id="pc-ci-list"></div><div class="pc-cfoot" id="pc-cfoot" style="display:none"><div class="pc-ctotal"><span>Total</span><strong id="pc-ctotal-amt">₹0</strong></div><button class="pc-cwa" onclick="pcSendCart()">'+WA_SVG+' Send Order via WhatsApp</button></div></div>';
  while(wrap.firstChild)document.body.appendChild(wrap.firstChild);

  // Load cart from localStorage
  cart=JSON.parse(localStorage.getItem('kg_cart')||'[]');
  pcUpdateCount();
});

})();
