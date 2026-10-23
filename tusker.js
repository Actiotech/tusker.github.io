// Colour chapters: the bar takes the colour of the chapter beneath it, sections enter once,
// and the "message from the site" chapter turns what staff type into the enquiry's stage.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The bar matches whichever field sits under its middle.
  const bar = document.getElementById('bar');
  const fields = [...document.querySelectorAll('[data-field]')];
  let ticking = false;
  function paintBar() {
    ticking = false;
    const y = bar.offsetHeight / 2;
    const x = innerWidth / 2;
    let under = null;
    for (const el of fields) {
      const r = el.getBoundingClientRect();
      if (r.top <= y && r.bottom > y && r.left <= x && r.right > x) under = el;
    }
    if (!under) return;
    const cs = getComputedStyle(under);
    bar.style.setProperty('--bar-bg', cs.backgroundColor);
    bar.style.setProperty('--bar-ink', cs.color);
    bar.dataset.on = under.dataset.field;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(paintBar); } }, { passive: true });
  addEventListener('resize', paintBar);
  paintBar();

  // Entrances: the parts of each section rise in turn, once.
  const items = [...document.querySelectorAll('.reveal')];
  document.querySelectorAll('section, footer').forEach(section => {
    section.querySelectorAll('.reveal').forEach((el, i) => el.style.setProperty('--i', i));
  });
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }), { rootMargin: '0px' });
    items.forEach(el => io.observe(el));
    // Never leave content hidden: anything not yet shown appears after a few seconds.
    setTimeout(() => items.forEach(el => el.classList.add('in')), 3000);
  }

  // Team-size calculator: Tusker's plan for that size against Zoho CRM Standard at ₹1,300 per user.
  const size = document.getElementById('teamSize');
  if (size) {
    const inr = n => '₹' + new Intl.NumberFormat('en-IN').format(n);
    const $ = id => document.getElementById(id);
    const calc = () => {
      const n = Number(size.value);
      const tier = n <= 5 ? ['Starter', 1499] : n <= 15 ? ['Team', 2499] : ['Custom', 4999];
      const zoho = n * 1300;
      $('teamOut').textContent = n + (n === 1 ? ' person' : ' people');
      $('usPlan').textContent = tier[0];
      $('usPrice').textContent = (tier[0] === 'Custom' ? 'from ' : '') + inr(tier[1]);
      $('usNote').textContent = tier[0] === 'Custom' ? 'a month, with managed setup' : 'a month';
      $('themPrice').textContent = inr(zoho);
      if (tier[0] === 'Custom') { $('calcSave').textContent = 'Custom'; $('saveNote').textContent = 'pricing above 15 people'; }
      else { $('calcSave').textContent = inr(Math.max(0, zoho - tier[1])); $('saveNote').textContent = 'every month'; }
    };
    size.addEventListener('input', calc);
    calc();
  }

})();
