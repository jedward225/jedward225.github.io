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
  const dots = gallery.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (images.length <= 1) return;

  let currentIndex = 0;
  let autoPlayInterval;

  function showImage(index) {
    // Remove active class from all images and dots
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current image and dot
    images[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    
    currentIndex = index;
  }

  function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function showPrevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(showNextImage, 4000); // Change image every 4 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showNextImage();
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showPrevImage();
      resetAutoPlay();
    });
  }

  // Dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
      resetAutoPlay();
    });
  });

  // Start auto-play
  startAutoPlay();

  // Pause auto-play on hover
  gallery.addEventListener('mouseenter', stopAutoPlay);
  gallery.addEventListener('mouseleave', startAutoPlay);
})(); 