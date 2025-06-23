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

// Image gallery for interests page
(function() {
  const gallery = document.querySelector('.interests-gallery');
  if (!gallery) return; // Only run on a page with a gallery

  const images = gallery.querySelectorAll('.gallery-image');
  if (images.length <= 1) return;

  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 4000); // Change image every 4 seconds
})(); 