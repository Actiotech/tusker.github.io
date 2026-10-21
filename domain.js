// Pick which trade the story section shows: ?d=solar picks web/domains/solar.js.
// No parameter, or one that names no domain, gives interiors. story.js reads
// window.TUSKER_STORY.
(function () {
  const domains = window.TUSKER_DOMAINS || {};
  const asked = (new URLSearchParams(location.search).get('d') || '').trim().toLowerCase();
  const name = /^[a-z][a-z0-9-]*$/.test(asked) && Object.hasOwn(domains, asked) ? asked : 'interiors';
  window.TUSKER_DOMAIN = name;
  window.TUSKER_STORY = domains[name].story;
})();
