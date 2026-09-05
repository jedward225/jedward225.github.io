function initTheme() {
  const button = document.getElementById('theme-toggle-btn');
  if (!button) return;
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let followsSystem = true;
  try { followsSystem = !['light', 'dark'].includes(localStorage.getItem('theme')); } catch (_) {}
  const apply = theme => {
    root.dataset.theme = theme;
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  };
  apply(root.dataset.theme || (preference.matches ? 'dark' : 'light'));
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    followsSystem = false;
    apply(theme);
    try { localStorage.setItem('theme', theme); } catch (_) { /* Keep working without persistence. */ }
  });
  preference.addEventListener('change', event => {
    if (followsSystem) apply(event.matches ? 'dark' : 'light');
  });
}

function initNews() {
  const list = document.getElementById('news-list');
  const button = document.getElementById('news-toggle');
  if (!list || !button) return;
  const older = Array.from(list.children).slice(5);
  if (!older.length) return;
  let expanded = false;
  const update = () => {
    older.forEach(item => { item.hidden = !expanded; });
    button.textContent = expanded ? 'Show Less' : 'Show More';
    button.setAttribute('aria-expanded', String(expanded));
  };
  update();
  button.hidden = false;
  button.addEventListener('click', () => { expanded = !expanded; update(); });
}

function initWeChat() {
  const disclosure = document.querySelector('.wechat-link');
  if (!disclosure) return;
  const summary = disclosure.querySelector('summary');
  const tooltip = disclosure.querySelector('.wechat-tooltip');
  let pinned = false;
  const position = () => {
    if (!disclosure.open) return;
    tooltip.style.setProperty('--tooltip-shift', '0px');
    const bounds = tooltip.getBoundingClientRect();
    const shift = Math.max(8 - bounds.left, Math.min(0, innerWidth - 8 - bounds.right));
    tooltip.style.setProperty('--tooltip-shift', `${shift}px`);
  };
  const close = () => { pinned = false; disclosure.open = false; };
  disclosure.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { disclosure.open = true; position(); }
  });
  disclosure.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && !pinned) disclosure.open = false;
  });
  summary.addEventListener('click', event => {
    event.preventDefault();
    pinned = !pinned;
    disclosure.open = pinned;
    position();
  });
  document.addEventListener('click', event => {
    if (!disclosure.contains(event.target)) close();
  });
  disclosure.addEventListener('keydown', event => {
    if (event.key === 'Escape') { close(); summary.focus(); }
  });
  window.addEventListener('resize', position);
}

function initPublicationVideos() {
  const videos = Array.from(document.querySelectorAll('.publication-image video'));
  if (!videos.length) return;
  const isVisible = video => {
    const bounds = video.getBoundingClientRect();
    return !document.hidden && bounds.width > 0 && bounds.height > 0 &&
      bounds.bottom > 0 && bounds.top < innerHeight && bounds.right > 0 && bounds.left < innerWidth;
  };
  const update = video => {
    if (!isVisible(video)) { video.pause(); return; }
    const source = video.querySelector('source[data-src]');
    if (source) {
      source.src = source.dataset.src;
      delete source.dataset.src;
      video.load();
    }
    video.muted = true;
    video.play().catch(() => { /* Leave the poster if the browser blocks autoplay. */ });
  };
  videos.forEach(video => {
    video.addEventListener('play', () => { if (!isVisible(video)) video.pause(); });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => update(entry.target));
    });
    videos.forEach(video => observer.observe(video));
  } else {
    window.addEventListener('scroll', () => videos.forEach(update), { passive: true });
    window.addEventListener('resize', () => videos.forEach(update));
    videos.forEach(update);
  }
  document.addEventListener('visibilitychange', () => videos.forEach(update));
}

function initPublications() {
  const section = document.getElementById('publications');
  if (!section) return;
  const controls = section.querySelector('.publication-filter');
  const buttons = section.querySelectorAll('.publication-filter-btn');
  if (!controls || !buttons.length) return;
  const filter = value => {
    section.dataset.filter = value;
    section.querySelectorAll('.publication-item').forEach(item => {
      const hidden = value === 'selected' && item.dataset.selected !== 'true';
      item.hidden = hidden;
      if (hidden) item.querySelectorAll('video').forEach(video => video.pause());
    });
    buttons.forEach(button => {
      const active = button.dataset.publicationFilter === value;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.publicationFilter)));
  filter('selected');
  controls.hidden = false;
}

function initCarousel() {
  const carousel = document.querySelector('.interests-carousel');
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const dots = Array.from(carousel.querySelectorAll('.dot'));
  const previous = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  if (!slides.length || !previous || !next) return;
  let current = 0;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
      slide.classList.toggle('active', i === current);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
  };
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  carousel.addEventListener('keydown', event => {
    if (!event.target.matches('.dot, .carousel-nav')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowLeft' ? -1 : 1));
      if (event.target.matches('.dot')) dots[current].focus();
    }
  });
  show(0);
  previous.hidden = next.hidden = false;
  carousel.querySelector('.carousel-dots').hidden = false;
}

// Independent listeners keep one component's failure from disabling the others.
[initTheme, initNews, initWeChat, initPublications, initPublicationVideos, initCarousel].forEach(initialize => {
  document.addEventListener('DOMContentLoaded', initialize);
});
