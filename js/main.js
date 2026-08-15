(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#main-menu');
  const progress = document.querySelector('#progress-bar');
  const toast = document.querySelector('#toast');

  menuToggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded','false');
  }));

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = scrollable > 0 ? `${(window.scrollY / scrollable) * 100}%` : '0%';
  };
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });
})();

  // Feedback visual imediato ao clique/toque.
  document.querySelectorAll('.btn, .nav-cta').forEach(control => {
    control.addEventListener('pointerdown', event => {
      const rect = control.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      control.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    });
  });

  // Destaca no menu a seção atualmente visível.
  const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.remove('is-current'));
      const current = navLinks.find(link => link.getAttribute('href') === `#${entry.target.id}`);
      current?.classList.add('is-current');
    });
  }, {rootMargin:'-30% 0px -60% 0px', threshold:0});

  sections.forEach(section => navObserver.observe(section));
