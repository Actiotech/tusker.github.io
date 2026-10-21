// SWITCHED OFF (2026-10-21): the site is English only for now, and index.html no
// longer loads this file. The translations are kept for when it comes back. To turn
// it on: restore the <script src="i18n.js" defer> tag and the two data-lang buttons
// in the hero's language row (see git history), and give the story section's
// elements data-i18n keys again. The story is now drawn from web/domains/, so the
// story.* and s1.*–s4.* keys below no longer match any element.
//
// Plain JS, no build step: switch the page between English and Malayalam.
// English is the page as written in index.html. Each element with
// data-i18n="key" takes ML[key] in Malayalam, and data-i18n-label does the
// same for its aria-label. The WhatsApp demo stays in English, because that is
// what Tusker sends, and so do the buttons' pre-filled first message.
const ML = {
  'title': 'Tusker: വാട്സ്ആപ്പിൽ എൻക്വയറിയും ലീഡ് ട്രാക്കിങ്ങും',
  'skip': 'ഉള്ളടക്കത്തിലേക്ക് പോകുക',
  'menu': 'മെനു',
  'langs': 'വോയ്സ് നോട്ട് ഭാഷകൾ',
  'nav.story': 'പ്രവർത്തനം കാണുക',
  'nav.faq': 'ചോദ്യങ്ങൾ',
  'nav.start': 'വാട്സ്ആപ്പിൽ തുടങ്ങുക',
  'cta': 'വാട്സ്ആപ്പിൽ സെറ്റ് അപ്പ് ചെയ്യുക',

  'hero.eyebrow': 'സെയിൽസ്, ലീഡ് ട്രാക്കിങ്',
  'hero.title': 'ഓരോ എൻക്വയറിയും എവിടെയെത്തി എന്ന് വാട്സ്ആപ്പിൽ തന്നെ അറിയാം.',
  'hero.lead': 'നിങ്ങളുടെ ടീം ഇപ്പോൾ ഉപയോഗിക്കുന്ന വാട്സ്ആപ്പിൽ നിന്നുതന്നെ ഓരോ എൻക്വയറിയും രേഖപ്പെടുത്തി മുന്നോട്ട് നീക്കുന്നു. ഒരു ഫോൺ കോൾ പോലുമില്ലാതെ ഓരോന്നും എവിടെയെത്തി എന്ന് നിങ്ങൾക്ക് കാണാം.',
  'hero.watch': 'ഒരു എൻക്വയറി കാണുക',

  'story.eyebrow': 'വാട്സ്ആപ്പിൽ ഒരു എൻക്വയറി',
  'story.title': 'മൂന്നു പേരുടെ ഫോണുകളിൽ നിന്ന് ഒരൊറ്റ റെക്കോർഡിലേക്ക്.',
  'story.note': 'ഡെമോ: ഒരു ഇന്റീരിയർ സ്റ്റുഡിയോയിലെ എൻക്വയറി ഡെസ്ക്. Tusker-ന്റെ മറുപടികൾ ഇംഗ്ലീഷിലാണ്.',
  's1.title': 'കുറച്ചു മറുപടികളിൽ രേഖപ്പെടുത്തി',
  's1.body': 'ഒരു റഫറൽ എൻക്വയറി അനിത വോയ്സ് നോട്ടിലൂടെ രേഖപ്പെടുത്തുന്നു. ആവർത്തിച്ചു വന്ന നമ്പർ Tusker കണ്ടെത്തുന്നു, വിഷ്ണുവിനോട് വിളിക്കാൻ പറയുന്നു.',
  's2.title': '5 മണിയായിട്ടും ആരും വിളിച്ചില്ലേ? ചോദിച്ചാൽ മതി.',
  's2.body': 'ഇപ്പോഴും പുതിയതായി കിടക്കുന്ന എൻക്വയറികൾ ഏതൊക്കെയെന്ന് ഉടമ ചോദിക്കുന്നു, ലിസ്റ്റ് കിട്ടുന്നു. ഡെസ്കിലേക്ക് വിളിക്കേണ്ടതില്ല.',
  's3.title': 'ഓരോ കോളും വിസിറ്റും എൻക്വയറിയെ മുന്നോട്ട് നീക്കുന്നു',
  's3.body': 'കോളിനു ശേഷം വിഷ്ണു വോയ്സിലൂടെ എൻക്വയറി മുന്നോട്ട് നീക്കുന്നു, പിന്നെ സൈറ്റ് നോട്ട് സേവ് ചെയ്യുന്നു. ഓരോന്നിനും Confirm-ൽ ഒരു ടാപ്പ് മാത്രം.',
  's4.title': 'പ്രധാനപ്പെട്ടത് ഉടമ അറിയുന്നു',
  's4.body': 'അളവെടുപ്പ് കഴിഞ്ഞാൽ ഒരു മെസ്സേജ്. വിഷ്ണുവിന്റെ നോട്ട് ഒരു ചോദ്യം ചോദിച്ചാൽ കിട്ടും.',

  'take.eyebrow': 'ഞങ്ങൾ മനസ്സിലാക്കിയത്',
  'take.title': 'എൻക്വയറി നഷ്ടപ്പെട്ടിരുന്നില്ല. അത് തെറ്റായ സ്ഥലത്തായിരുന്നു.',
  // The English figure was approved by the customer; re-check this one with them too.
  'proof.eyebrow': 'ഒരു കസ്റ്റമറുടെ ഡാറ്റയിൽ നിന്ന്',
  'proof.unit': 'എൻക്വയറികൾ ഒരു മാസം',
  'proof.text': 'ഒരു കോർഡിനേറ്ററും ആറ് ഫീൽഡ് സ്റ്റാഫും ചേർന്ന് ഒരു കസ്റ്റമർ മാസം ഏകദേശം 200 എൻക്വയറികൾ ട്രാക്ക് ചെയ്യുന്നു.',

  'for.eyebrow': 'ആർക്കു വേണ്ടി',
  'for.title': 'പല സ്ഥലങ്ങളിലായി ടീമുകൾ പ്രവർത്തിക്കുന്ന മേഖലകൾക്ക്.',
  'solar': 'സോളാർ',
  'solar.note': 'എൻക്വയറി, സൈറ്റ് വിസിറ്റ്, ക്വട്ടേഷൻ, ഇൻസ്റ്റലേഷൻ',
  'interiors': 'ഇന്റീരിയർ',
  'interiors.note': 'എൻക്വയറി, സൈറ്റ് അളവെടുപ്പ്, ഡിസൈൻ, ക്വട്ടേഷൻ',
  'construction': 'കൺസ്ട്രക്ഷൻ',
  'construction.note': 'എൻക്വയറി, സൈറ്റ് സർവേ, എസ്റ്റിമേറ്റ്, കരാർ',
  'similar': 'സമാനമായ ഫീൽഡ് ടീമുകൾ',
  'similar.note': 'പല സ്ഥലങ്ങളിലായി വിൽപന നടത്തുന്നവർ',
  'setup.eyebrow': 'സെറ്റ് അപ്പ് എങ്ങനെ',
  'step1': '01 ഞങ്ങൾക്ക് മെസ്സേജ് അയയ്ക്കുക',
  'step1.note': 'എൻക്വയറികൾ എങ്ങനെ വരുന്നു, ആരാണ് തിരിച്ചു വിളിക്കുന്നത് എന്ന് പറയുക.',
  'step2': '02 നിങ്ങളുടെ പ്രോസസ് ഞങ്ങൾ സെറ്റ് ചെയ്യുന്നു',
  'step2.note': 'നിങ്ങളുടെ ഘട്ടങ്ങളും ചോദ്യങ്ങളും. ആദ്യം നിങ്ങൾ പരിശോധിക്കും.',
  'step3': '03 ടീം തുടങ്ങുന്നു',
  'step3.note': 'അവരുടെ നമ്പറുകൾ ഞങ്ങൾ ചേർക്കും. ഒന്നും ഇൻസ്റ്റാൾ ചെയ്യേണ്ട.',

  'faq.eyebrow': 'ചോദ്യങ്ങൾ',
  'faq.title': 'തുടങ്ങുന്നതിനു മുമ്പ്',
  'q1': 'എന്റെ ടീമിന് പുതിയ ആപ്പ് വേണോ?',
  'a1': 'വേണ്ട. ഓരോരുത്തരും ഇപ്പോഴുള്ള വാട്സ്ആപ്പ് തന്നെ ഉപയോഗിക്കുന്നു.',
  'q2': 'ഇത് ഇന്റീരിയറിന് മാത്രമാണോ?',
  'a2': 'അല്ല. എൻക്വയറി വഴി വിൽക്കുന്ന ഏതു ടീമിനും പറ്റും. നിങ്ങൾക്ക് പറ്റില്ലെങ്കിൽ ഞങ്ങൾ പറയും.',
  'q3': 'ക്ലയന്റുകൾക്ക് ഈ നമ്പറിൽ മെസ്സേജ് ചെയ്യാമോ?',
  'a3': 'ഇല്ല. Tusker-ന്റെ നമ്പർ നിങ്ങളുടെ സ്റ്റാഫിന് മാത്രമാണ്. ക്ലയന്റുകൾ ഇപ്പോഴത്തെ പോലെ തന്നെ നിങ്ങളെ ബന്ധപ്പെടും.',

  'close.eyebrow': 'നിങ്ങൾ തയ്യാറാകുമ്പോൾ',
  'close.title': 'ടീമിന് ചാറ്റ്. നിങ്ങൾക്ക് റെക്കോർഡ്.',
  'footer': 'tusker. · വാട്സ്ആപ്പിൽ പ്രവർത്തിക്കുന്ന വർക്ക്ഫ്ലോകൾ',
};

(function () {
  const texts = [...document.querySelectorAll('[data-i18n]')].map((el) => [el, el.textContent]);
  const labels = [...document.querySelectorAll('[data-i18n-label]')].map((el) => [el, el.getAttribute('aria-label')]);
  const title = document.title;
  const buttons = document.querySelectorAll('[data-lang]');

  function apply(lang) {
    const ml = lang === 'ml';
    document.documentElement.lang = ml ? 'ml' : 'en';
    document.title = ml ? ML.title : title;
    texts.forEach(([el, en]) => { el.textContent = ml ? ML[el.dataset.i18n] || en : en; });
    labels.forEach(([el, en]) => el.setAttribute('aria-label', ml ? ML[el.dataset.i18nLabel] || en : en));
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  // The choice is remembered on this device; ?lang=ml links straight to Malayalam.
  let saved = null;
  try { saved = localStorage.getItem('tusker-lang'); } catch (err) { /* storage blocked */ }
  const asked = new URLSearchParams(location.search).get('lang');
  const start = asked || saved;
  if (start === 'ml') apply('ml');

  buttons.forEach((b) => b.addEventListener('click', () => {
    apply(b.dataset.lang);
    try { localStorage.setItem('tusker-lang', b.dataset.lang); } catch (err) { /* storage blocked */ }
  }));
})();
