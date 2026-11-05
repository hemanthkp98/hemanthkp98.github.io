(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function isDark() {
    var theme = root.dataset.theme;
    return theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark()));
    toggle.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.dataset.theme = next;
      toggle.setAttribute('aria-pressed', String(next === 'dark'));
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Storage can be blocked. The theme still applies for this page view.
      }
    });
  }
})();
