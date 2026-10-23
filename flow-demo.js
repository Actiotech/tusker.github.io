// "See Tusker in action": plays the story from window.TUSKER_STORY as a phone and the Tusker app.
// The data shaping lives in flow-model.js; this file only draws and times it.
(() => {
  const story = window.TUSKER_STORY;
  const trade = window.TUSKER_DOMAIN;
  const root = document.getElementById('story');
  if (!story || !root) return;
  const model = window.TuskerFlowModel.buildModel(story);
  const { screens, dayOf, firstScreen } = model;
  const $ = id => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const firstName = viewer => viewer.replace(/’s WhatsApp.*/, '');

  // ---- static content
  document.querySelectorAll('[data-trade]').forEach(a => {
    const active = a.dataset.trade === trade;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
  });
  $('fdName').textContent = story.customer; $('fdIni').textContent = story.customer[0];
  $('fdProj').textContent = story.project; $('fdKey').textContent = story.key; $('fdValue').textContent = story.value;
  $('fdSteps').style.setProperty('--n', story.stages.length);
  story.stages.forEach(name => { const d = el('div', 'fd-st'); d.append(el('i'), document.createTextNode(name)); $('fdSteps').append(d); });
  const dayButtons = story.scenes.map((scene, si) => {
    const b = el('button', 'fd-day'); b.type = 'button';
    const name = dayOf(si).split(',')[0] + ' · ' + scene.nav;
    b.append(el('i'), document.createTextNode(name));
    b.addEventListener('click', () => goto(firstScreen(si)));
    $('fdDays').append(b); return b;
  });

  // ---- chat bubbles
  function voiceEl(duration) {
    const v = el('div', 'fd-voice'); v.append(el('b', '', '●'));
    const bars = el('span'); [5, 10, 16, 9, 20, 13, 8, 18, 22, 12, 7, 15, 19, 10, 6, 14].forEach(h => { const i = el('i'); i.style.height = h + 'px'; bars.append(i); });
    v.append(bars, el('small', '', duration)); return v;
  }
  function bubble(row, animate) {
    if (row.type === 'day') return el('div', 'fd-cday', row.text);
    const m = el('div', 'fd-msg' + (row.type === 'me' ? ' me' : '') + (animate ? ' enter' : ''));
    if (row.voice) m.append(voiceEl(row.voice), el('small', 'fd-vlabel', 'Voice note · transcript'));
    m.append(el('div', '', row.text), el('span', 't', row.time || ''));
    if (row.buttons) { const b = el('div', 'fd-btns'); row.buttons.forEach(t => b.append(el('span', '', t))); m.append(b); }
    return m;
  }
  let shown = { ui: -1, n: 0 };
  function visibleRows(u, part) {
    const si = u.rows.indexOf(u.say), ci = u.conf ? u.rows.indexOf(u.conf) : si;
    const upto = part === 0 ? si : part === 1 ? ci : u.rows.length - 1;
    return u.rows.map((r, i) => ({ r, i })).filter(({ r, i }) => i <= upto && !(r.type === 'day' && i > si));
  }
  // New messages slide in and the older ones glide up (FLIP), instead of snapping.
  function renderChat(u, part, animate, ui) {
    const chat = $('fdChat'), vis = visibleRows(u, part);
    const incremental = animate && shown.ui === ui && vis.length > shown.n && !reduce;
    const make = (v, anim) => { const n = bubble(v.r, anim); n.dataset.i = v.i; return n; };
    if (incremental) {
      const kids = [...chat.children], before = kids.map(k => k.getBoundingClientRect().top);
      vis.slice(shown.n).forEach(v => chat.append(make(v, true)));
      kids.forEach((k, n) => {
        const d = before[n] - k.getBoundingClientRect().top; if (!d) return;
        k.style.transition = 'none'; k.style.transform = 'translateY(' + d + 'px)';
        requestAnimationFrame(() => requestAnimationFrame(() => { k.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1)'; k.style.transform = ''; }));
      });
    } else chat.replaceChildren(...vis.map(v => make(v, false)));
    shown = { ui, n: vis.length };
    chat.querySelectorAll('.hit').forEach(n => n.classList.remove('hit'));
    if (part === 1 && u.conf && u.conf.buttons) chat.querySelector('[data-i="' + u.rows.indexOf(u.conf) + '"] .fd-btns span')?.classList.add('hit');
    if (!incremental) chat.scrollTop = chat.scrollHeight;
  }

  // ---- the Tusker app
  function setApp(rec, who, flash) {
    const lead = $('fdLead'), won = rec.stage === story.stages.length - 1, empty = rec.stage < 0;
    lead.className = 'fd-lead' + (empty ? ' empty' : '') + (won ? ' won' : '') + (flash ? ' flash' : '');
    if (flash) setTimeout(() => lead.classList.remove('flash'), 1400);
    [...$('fdSteps').querySelectorAll('.fd-st')].forEach((s, i) => { s.className = 'fd-st' + (i < rec.stage ? ' d' : i === rec.stage ? ' n' : ''); });
    $('fdFill').style.width = empty ? '0' : 'calc((100% - 100% / ' + story.stages.length + ') * ' + (rec.stage / (story.stages.length - 1)) + ')';
    $('fdNext').textContent = rec.next; 
    const feed = $('fdFeed'); feed.className = 'fd-feed' + (empty ? ' empty' : '') + (flash ? ' pop' : '');
    $('fdFeedB').textContent = empty ? 'Waiting for the first WhatsApp update' : who + ' updated this via WhatsApp';
    $('fdFeedT').textContent = empty ? 'It will appear here' : rec.label;
    $('fdFeedTime').textContent = empty ? '' : flash ? 'just now' : 'earlier';
  }

  // A pill with the update's label glides along the arrow from the phone to the app, so the hand-off is visible.
  const FLIGHT = 2400; // ms: slow enough to follow
  function fly(label, done) {
    if (reduce || innerWidth <= 1060) return done(); // narrow screens show one surface at a time
    const stage = $('fdStage').getBoundingClientRect(), a = $('fdPhone').getBoundingClientRect(), b = $('fdApp').getBoundingClientRect();
    const chip = el('div', 'fd-packet'), img = document.createElement('img'); img.src = 'assets/logos/whatsapp.svg'; img.alt = '';
    chip.append(img, document.createTextNode(label)); $('fdStage').append(chip);
    const w = chip.offsetWidth, h = chip.offsetHeight;
    const y = a.top + a.height / 2;                                 // the arrow sits at the phone's vertical centre
    const x0 = a.right - 10, x1 = b.left + 14;                      // phone's edge to the app's edge
    const at = x => 'translate(' + (x - stage.left - w / 2) + 'px,' + (y - stage.top - h / 2) + 'px)';
    $('fdStage').classList.add('fd-sending');
    // one smooth glide, with the fade handled separately so the movement never changes pace
    chip.animate([{ transform: at(x0) }, { transform: at(x1) }], { duration: FLIGHT, easing: 'cubic-bezier(.45,0,.3,1)', fill: 'both' });
    chip.animate([{ opacity: 0 }, { opacity: 1, offset: .16 }, { opacity: 1, offset: .84 }, { opacity: 0 }], { duration: FLIGHT, easing: 'linear', fill: 'both' })
      .onfinish = () => { chip.remove(); $('fdStage').classList.remove('fd-sending'); };
    setTimeout(done, FLIGHT * .86); // the app lights up as the pill reaches it
  }
  function setText(id, html) {
    const e = $(id); if (e.innerHTML === html) return;
    e.classList.remove('fd-swap'); void e.offsetWidth; e.innerHTML = html;
    if (!reduce) e.classList.add('fd-swap');
  }

  // ---- one screen at a time
  let k = 0, playing = false, timer = null, token = 0;
  function show(i, animate) {
    const { unit: u, part, ui } = screens[i], sc = u.scene, who = firstName(sc.viewer), mine = ++token;
    document.querySelectorAll('.fd-packet').forEach(n => n.remove()); $('fdStage').classList.remove('fd-sending');
    dayButtons.forEach((b, n) => { b.classList.toggle('now', n === u.si); b.classList.toggle('past', n < u.si); });
    $('fdStage').dataset.focus = part === 2 ? 'app' : 'phone';
    $('fdWho').textContent = sc.viewer + ' · ' + sc.role;
    const ask = !!(u.conf && u.conf.buttons);
    if (part === 0) { setText('fdLine', who + ' sends a <em>WhatsApp</em> message'); setText('fdSub', 'No app to open. Just a message, or a voice note.'); }
    else if (part === 1) { setText('fdLine', ask ? 'Tusker asks to confirm' : 'Tusker replies on WhatsApp'); setText('fdSub', ask ? 'Nothing is saved until someone taps Confirm.' : 'The answer comes straight back in the chat.'); }
    else { setText('fdLine', 'Now it’s in the <em>Tusker app</em>'); setText('fdSub', u.rec.label.replace(/ ·.*/, '') + '. Everyone on the team can see it.'); }
    renderChat(u, part, animate, ui);
    if (part < 2) setApp(u.prev, who, false);
    else if (animate) { setApp(u.prev, who, false); fly(u.rec.label.replace(/ ·.*/, ''), () => { if (mine === token) setApp(u.rec, who, true); }); }
    else setApp(u.rec, who, false);
    $('fdBack').disabled = i === 0;
    $('fdFwd').textContent = i === screens.length - 1 ? 'Restart ↻' : 'Next →';
  }
  // How long each screen stays: long enough to read, short enough never to feel stuck.
  const dwell = i => {
    const { unit: u, part } = screens[i];
    if (part === 0) return 2200 + Math.min(1200, u.say.text.length * 18) + (u.say.voice ? 500 : 0);
    if (part === 1) return 2600;
    return FLIGHT + 2300; // the glide, then a moment to see the app update
  };
  function tick() {
    if (!playing) return;
    if (k >= screens.length - 1) { setPlaying(false); return; }
    k++; show(k, true); timer = setTimeout(tick, reduce ? 3000 : dwell(k));
  }
  function setPlaying(v) {
    playing = v; clearTimeout(timer);
    $('fdPlay').dataset.state = v ? 'playing' : 'ready';
    $('fdPlay').setAttribute('aria-pressed', String(v));
    $('fdPlayL').textContent = v ? 'Pause' : k >= screens.length - 1 ? 'Replay' : k > 0 ? 'Resume' : 'Play';
    if (v) timer = setTimeout(tick, dwell(k));
  }
  function goto(n) {
    $('fdStage').classList.remove('fresh'); setPlaying(false);
    const next = (n + screens.length) % screens.length, forward = next === k + 1;
    k = next; show(k, forward); setPlaying(false);
  }
  function begin() {
    $('fdStage').classList.remove('fresh');
    if (!playing && k >= screens.length - 1) { k = 0; show(0, false); }
    setPlaying(true);
  }

  $('fdPlay').addEventListener('click', () => { if (playing) setPlaying(false); else begin(); });
  $('fdStart').addEventListener('click', e => { e.stopPropagation(); if (!reduce) $('fdStage').scrollIntoView({ block: 'center', behavior: 'smooth' }); k = 0; show(0, true); begin(); });
  $('fdBack').addEventListener('click', () => goto(k - 1));
  $('fdFwd').addEventListener('click', () => goto(k + 1));
  $('fdStage').addEventListener('click', e => { if (!e.target.closest('.fd-go,button,a')) goto(k + 1); });
  $('fdStage').addEventListener('keydown', e => { if (e.target === $('fdStage') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); goto(k + 1); } });
  addEventListener('keydown', e => {
    if (e.target.closest && e.target.closest('input,textarea,select')) return;
    const r = root.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
    if (e.key === 'ArrowRight') goto(k + 1); else if (e.key === 'ArrowLeft') goto(k - 1);
  });
  // The hero and header "Watch the demo" links jump here and start playing.
  document.querySelectorAll('[data-play-demo]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); history.replaceState(null, '', '#story');
    root.scrollIntoView({ block: 'start', behavior: 'instant' }); k = 0; show(0, true); begin();
  }));
  document.querySelector('.menu')?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { document.querySelector('.menu').open = false; }));

  show(0, false);
  setPlaying(false);
  if (location.hash) document.fonts.ready.then(() => requestAnimationFrame(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }));
})();
