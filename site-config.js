// Site settings. Edit this file; there is no build step and no secret here.
//
// When the Tusker server is reachable, it supplies the WhatsApp number and first
// message (GET /api/site-config) and the values below are only the fallback.
window.TUSKER = {
  // Base URL of the Tusker server. Leave empty when this site is served by the
  // Tusker server itself (at /web/). Set it for a copy hosted elsewhere,
  // e.g. 'https://app.example.com' (no trailing slash).
  api: 'https://tusker.app',

  // Fallback WhatsApp number: digits only, country code first, no "+" or spaces,
  // e.g. '919876543210'. The buttons in index.html carry the same number, so they work before this file and the server are consulted.
  whatsapp: '919446014972',

  // Fallback first message the visitor sends. Keep it to 4 words or fewer: the
  // onboarding agent treats a longer first message as the visitor's business description.
  message: 'Set up Tusker',
};
