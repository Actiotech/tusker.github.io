// Release-only GA4 tracking. Local and staging previews must not send visits.
(() => {
  if (!['www.tusker.app', 'tusker.app'].includes(window.location.hostname)) return;

  const measurementId = 'G-83FRFRDNQ6';
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.append(tag);
})();
