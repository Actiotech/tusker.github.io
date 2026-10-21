// Plain JS, no build step: reveal chat messages as each scene scrolls into view.
// The story comes from the domain picked in domain.js (web/domains/<name>.js).
const story = window.TUSKER_STORY;
const SCRIPT = story.scenes.map((s) => s.chat);
const stageNames = story.board.stages;

// Fill in the section before anything below looks up its elements.
const setText = (id, text) => { document.getElementById(id).textContent = text; };
setText('storyEyebrow', story.eyebrow);
setText('storyTitle', story.title);
setText('storyNote', story.note);
setText('whoLabel', story.phone);
setText('boardTitle', story.board.title);
setText('boardCard', story.board.card);
setText('stageName', story.board.empty);
setText('flowTitle', story.board.flow);
setText('flowCardTitle', story.board.card);
setText('flowClient', story.board.client);
document.querySelector('.scenes').replaceChildren(...story.scenes.map((s, i) => {
  const el = document.createElement('article');
  el.className = 'scene';
  el.dataset.scene = i;
  const n = document.createElement('span'); n.className = 'n'; n.textContent = String(i + 1).padStart(2, '0');
  const h = document.createElement('h3'); h.textContent = s.title;
  const p = document.createElement('p'); p.textContent = s.body;
  el.append(n, h, p);
  return el;
}));
document.getElementById('steps').replaceChildren(...stageNames.map((name) => {
  const li = document.createElement('li'); li.append(document.createElement('i'), name); return li;
}));
document.getElementById('flowStages').replaceChildren(...stageNames.map((name) => {
  const li = document.createElement('li'); li.textContent = name; return li;
}));
document.querySelector('.flow-track').style.setProperty('--stages', stageNames.length);

const chat = document.getElementById('chat');
const stageName = document.getElementById('stageName');
const steps = document.querySelectorAll('#steps li');
const who = document.getElementById('whoLabel');
const startWho = who.textContent;
const startStage = stageName.textContent;
const flowCard = document.getElementById('flowCard');
const flowStages = document.querySelectorAll('#flowStages li');
const flowVoice = document.getElementById('flowVoice');
const flowBell = document.getElementById('flowBell');
const flowNotified = document.getElementById('flowNotified');
let voiceNotes = 0;
let stageNow = 0;
let notified = [];
let played = -1;

// The phone opens already showing the start of scene 1, so a visitor who never
// scrolls still sees a chat. Scene 1 adds the rest when it comes into view.
const PREVIEW = 3;
reset();

// Back to how the page loads: the first lines of scene 1 and nothing logged.
function reset() {
  chat.replaceChildren();
  who.textContent = startWho;
  stageName.textContent = startStage;
  steps.forEach((s) => s.classList.remove('done', 'now'));
  voiceNotes = 0;
  stageNow = 0;
  notified = [];
  flowNotified.replaceChildren();
  showFlow(0);
  SCRIPT[0].slice(0, PREVIEW).forEach(add);
  played = -1;
}

// The workflow beside the phone: the enquiry's card sits at its current stage
// (nothing until it is created), with a count of voice notes and who was told.
function showFlow(stage) {
  flowStages.forEach((s, i) => { s.classList.toggle('done', i < stage); s.classList.toggle('now', i === stage - 1); });
  flowCard.style.setProperty('--at', Math.max(0, stage - 1));
  flowCard.classList.toggle('on', stage > 0);
  flowVoice.textContent = voiceNotes;
  flowBell.textContent = notified.length;
}
function add(row) {
  const [kind, a, b, c] = row;
  if (kind === 'who') { who.textContent = a; return; }
  if (kind === 'notify') {
    if (!notified.includes(a)) {
      notified.push(a);
      const li = document.createElement('li');
      const dot = document.createElement('span'); dot.textContent = a[0];
      li.append(dot, a);
      flowNotified.append(li);
    }
    showFlow(stageNow);
    return;
  }
  if (kind === 'stage') {
    const at = stageNames.indexOf(a) + 1;
    stageNow = at;
    showFlow(at);
    steps.forEach((s, i) => { s.classList.toggle('done', i < at); s.classList.toggle('now', i === at - 1); });
    stageName.textContent = 'Stage: ' + a;
    const el = document.createElement('div'); el.className = 'stage'; el.textContent = 'Moved to ' + a; chat.append(el); return;
  }
  if (kind === 'me' && a.startsWith('🎙')) { voiceNotes++; showFlow(stageNow); }
  const el = document.createElement('div');
  if (kind === 'day') { el.className = 'day'; el.textContent = a; }
  else {
    el.className = 'msg' + (kind === 'me' ? ' me' : '');
    el.textContent = a;
    const t = document.createElement('span'); t.className = 't'; t.textContent = b + (kind === 'me' ? ' ✓✓' : ''); el.append(t);
    if (c) { const btn = document.createElement('span'); btn.className = 'btn'; btn.textContent = c; el.insertBefore(btn, t); }
  }
  chat.append(el);
  while (chat.children.length > 14) chat.firstChild.remove();
}
// Scrolling back to an earlier scene replays the chat from the start up to it,
// so the phone always matches the scene being read.
function playTo(n) {
  if (n === played) return;
  if (n < played) reset();
  for (let i = played + 1; i <= n; i++) (i === 0 ? SCRIPT[0].slice(PREVIEW) : SCRIPT[i]).forEach(add);
  played = n;
}
const scenes = document.querySelectorAll('.scene');
const narrow = window.matchMedia('(max-width: 860px)');

// Make scene n the one being read: highlight it and play the phone up to it.
function show(n) {
  scenes.forEach((s, i) => s.classList.toggle('on', i === n));
  playTo(n);
}

// Wide screens: a scene counts once it crosses the band in the middle.
let io;
function watchScenes() {
  if (io) io.disconnect();
  io = null;
  if (narrow.matches) { followHeadings(); return; }
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) show(+e.target.dataset.scene); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  scenes.forEach((s) => io.observe(s));
}

// Narrow screens: the phone is pinned above the text, so go by the headings.
// The scene being read is the last one whose heading is fully on screen or
// already scrolled past. It depends only on where the page is, so scrolling
// back up gives the same scene at the same place as scrolling down. Until the
// first heading comes on screen, the phone keeps its opening preview.
function followHeadings() {
  if (!narrow.matches) return;
  let n = -1;
  scenes.forEach((s, i) => { if (s.querySelector('h3').getBoundingClientRect().bottom <= window.innerHeight) n = i; });
  if (n >= 0) show(n);
}
let queued = false;
window.addEventListener('scroll', () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; followHeadings(); });
}, { passive: true });
watchScenes();
window.addEventListener('resize', watchScenes);

// Close the mobile menu after a link is tapped.
const menu = document.querySelector('.menu');
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { menu.open = false; }));
