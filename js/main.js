(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const desktop = window.matchMedia('(min-width: 801px)');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const logo = document.querySelector('.site-header .logo');
  let previousFocus;
  let scrollPosition = 0;
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  function closeMenu(restoreFocus = true) {
    if (!isOpen()) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    main.inert = footer.inert = logo.inert = false;
    document.body.classList.remove('menu-open');
    window.scrollTo({top: scrollPosition, behavior: 'instant'});
    if (restoreFocus && previousFocus) previousFocus.focus({preventScroll: true});
  }
  function openMenu() {
    previousFocus = document.activeElement;
    scrollPosition = window.scrollY;
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    main.inert = footer.inert = logo.inert = true;
    document.body.classList.add('menu-open');
    menu.querySelector('a').focus({preventScroll: true});
  }
  toggle.hidden = false;
  toggle.addEventListener('click', () => isOpen() ? closeMenu() : openMenu());
  document.addEventListener('keydown', event => {
    if (!isOpen()) return;
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(); }
    if (event.key === 'Tab') {
      const controls = [toggle, ...menu.querySelectorAll('a')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu(false);
    const href = link.getAttribute('href');
    const target = href.startsWith('#') ? document.getElementById(href.slice(1)) : null;
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
    }
  });
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
  document.querySelectorAll('[data-demo]').forEach(button => {
    button.addEventListener('click', () => {
      const statusId = button.getAttribute('aria-controls') || 'demo-status';
      document.getElementById(statusId).textContent = button.dataset.demo;
    });
  });
})();
