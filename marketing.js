// Pricing mode, FAQ tabs and mobile navigation.
(() => {
  const controls = [...document.querySelectorAll('input[name="setupMode"]')];
  const format = value => '₹' + new Intl.NumberFormat('en-IN').format(value);
  function chooseSetup(mode) {
    controls.forEach(input => { input.checked = input.value === mode; });
    document.querySelector('.pricing-grid').dataset.setup = mode;
    document.getElementById('setupSummary').textContent = mode === 'managed'
      ? 'Choose Starter, Team or Custom. A one-time setup fee is added to your first month.'
      : 'Choose Starter or Team. No setup charge.';
    document.querySelectorAll('.price-card').forEach(card => {
      const isCustom = card.dataset.plan === 'Custom';
      card.hidden = isCustom && mode !== 'managed';
      const managed = mode === 'managed' || isCustom;
      const fee = managed ? Number(card.dataset.managed) : 0;
      card.querySelector('.setup-fee-label').textContent = managed ? 'Managed setup · one time' : 'Self-serve setup';
      card.querySelector('.setup-fee').textContent = (isCustom && fee ? 'From ' : '') + format(fee);
      card.querySelector('.first-month-total').textContent = format(Number(card.dataset.monthly) + fee);
      const cta = card.querySelector('.plan-cta');
      const message = isCustom ? 'Custom setup' : mode === 'managed' ? 'Managed ' + card.dataset.plan + ' setup' : 'Start ' + card.dataset.plan;
      cta.dataset.waMessage = message;
      cta.href = window.TuskerSite.whatsappLink(message);
      cta.setAttribute('aria-label', (managed ? 'Discuss managed ' : 'Start self-serve ') + card.dataset.plan + ' on WhatsApp');
    });
  }
  controls.forEach(input => input.addEventListener('change', () => chooseSetup(input.value)));
  document.querySelectorAll('[data-choose-setup]').forEach(link => link.addEventListener('click', () => chooseSetup(link.dataset.chooseSetup)));
  chooseSetup('self');
  // FAQ tabs keep every answer in the page and support standard keyboard navigation.
  const faqTabs = [...document.querySelectorAll('.faq-tabs [role="tab"]')];
  function chooseFAQ(tab, focus = false) {
    faqTabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  faqTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => chooseFAQ(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % faqTabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + faqTabs.length) % faqTabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = faqTabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); chooseFAQ(faqTabs[next], true);
    });
  });
  document.querySelectorAll('.menu-panel a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.menu').open = false;
  }));
})();
