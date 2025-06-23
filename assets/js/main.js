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