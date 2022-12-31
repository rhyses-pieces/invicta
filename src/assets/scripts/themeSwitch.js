function toggleTheme() {
  const theme = document.getElementById('themeSwitch');
  let state = theme.getAttribute('aria-pressed');
  if (state == "true") {
    state = "false";
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    state = "true";
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  theme.setAttribute('aria-pressed', state);
}