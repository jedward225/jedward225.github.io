(function() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const body = document.body;

  // Function to apply the theme
  const applyTheme = (theme) => {
    body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  };

  // Check for saved theme in localStorage or user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = 'light'; // default theme

  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (prefersDark) {
    currentTheme = 'dark';
  }

  applyTheme(currentTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
})();

// Interests carousel
(function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!slides.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentIndex = index;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide((currentIndex + 1) % slides.length);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });
})();
