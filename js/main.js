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

  document.querySelectorAll('[data-placeholder]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const text = link.dataset.placeholder;
      toast.textContent = `${text}: insira aqui o link oficial quando disponível.`;
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 3000);
    });
  });
})();
