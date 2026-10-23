// Turns a domain story (see domains/README.md) into the updates the demo plays.
// Pure data in, data out: no DOM, so node can test it. flow-demo.js draws it.
(function (root) {
  const START = { stage: -1, next: 'Record the customer’s enquiry', label: '', notify: null };

  // One "update" per record change: what was said, what Tusker asked, what got saved.
  function buildModel(story) {
    const units = [];
    let rec = START;
    story.scenes.forEach((scene, si) => {
      let from = 0;
      scene.beats.forEach(beat => {
        const stage = beat.stage ?? scene.stage;
        const prev = rec;
        rec = { stage, next: beat.next || scene.next, label: beat.label, notify: stage === scene.stage ? scene.notification || null : null };
        const rows = scene.chat.slice(from, beat.after + 1);
        from = beat.after + 1;
        const mine = rows.filter(r => r.type === 'me');
        const say = mine.find(r => r.text.length > 12) || mine[0] || rows.find(r => r.type !== 'day');
        const bots = rows.slice(rows.indexOf(say) + 1).filter(r => r.type === 'bot');
        const conf = bots.find(r => r.buttons) || bots[0] || null;
        units.push({ si, scene, rows, say, conf, prev, rec });
      });
    });
    // Each update plays as three screens: say it (0), Tusker confirms (1), it is in the app (2).
    const screens = units.flatMap((unit, ui) => [0, 1, 2].map(part => ({ unit, ui, part })));
    const dayOf = si => (story.scenes[si].chat.find(r => r.type === 'day') || {}).text || '';
    const firstScreen = si => screens.findIndex(s => s.unit.si === si);
    return { story, units, screens, dayOf, firstScreen, start: START };
  }

  const api = { buildModel };
  root.TuskerFlowModel = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
