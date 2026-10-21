// Point every [data-wa] button at a WhatsApp chat with Tusker, text pre-filled.
// The Tusker server is the source of truth; site-config.js is the fallback.
(async function () {
  const cfg = window.TUSKER || {};
  const links = document.querySelectorAll('[data-wa]');
  const digits = (v) => String(v || '').replace(/\D/g, '');

  let number = digits(cfg.whatsapp);
  let message = cfg.message || '';

  try {
    const res = await fetch((cfg.api || '') + '/api/site-config', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const remote = await res.json();
      if (digits(remote.whatsapp)) number = digits(remote.whatsapp);
      if (remote.message) message = remote.message;
    }
  } catch (err) {
    // Offline, opened from a file, or the server is down: use the fallback.
  }

  if (!number) {
    console.warn('No WhatsApp number from /api/site-config or web/site-config.js, so the WhatsApp buttons are inactive.');
    links.forEach((a) => { a.setAttribute('aria-disabled', 'true'); a.addEventListener('click', (e) => e.preventDefault()); });
    return;
  }
  const href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
  links.forEach((a) => { a.href = href; a.target = '_blank'; a.rel = 'noopener'; });
})();
