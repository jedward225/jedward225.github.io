// Run before styles are painted; storage is optional, including in restricted browsers.
(() => {
  const root = document.documentElement;
  let theme;
  try { theme = localStorage.getItem('theme'); } catch (_) { /* Use system preference. */ }
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.dataset.theme = theme;
})();
