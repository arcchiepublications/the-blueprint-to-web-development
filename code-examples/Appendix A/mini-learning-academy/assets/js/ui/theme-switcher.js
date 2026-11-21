// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Theme switcher UI: dark-mode toggle button + visual-style dropdown.
const { STYLES, getTheme, setTheme, applyTheme } = Academy;
const { showToast } = Academy;

function refreshControls(theme) {
  const dark = theme.mode === "dark";
  $("#modeToggle")
    .attr({ "aria-pressed": dark, "aria-label": dark ? "Switch to light mode" : "Switch to dark mode" })
    .find("i").attr("class", dark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill");
  $("#modeToggle .mode-label").text(dark ? "Light" : "Dark");
  $("#styleMenu .theme-option").attr("aria-checked", function () {
    return $(this).data("style") === theme.style;
  });
  const current = STYLES.find((s) => s.id === theme.style);
  $("#styleCurrent").text(current ? current.label : "");
}

function renderStyleMenu() {
  const menu = $("#styleMenu").empty();
  STYLES.forEach((style) => {
    menu.append(`
      <li><button type="button" class="dropdown-item theme-option" role="menuitemradio"
          data-style="${style.id}" aria-checked="false">
        <span class="theme-swatch swatch-${style.id}" aria-hidden="true"></span>
        <span>${style.label}<small>${style.note}</small></span>
        <i class="bi bi-check2" aria-hidden="true"></i>
      </button></li>`);
  });
}

function initThemeSwitcher() {
  applyTheme(getTheme());
  renderStyleMenu();
  refreshControls(getTheme());

  $("#modeToggle").on("click", function () {
    const next = setTheme({ mode: getTheme().mode === "dark" ? "light" : "dark" });
    refreshControls(next);
  });

  $("#styleMenu").on("click", ".theme-option", function () {
    const id = $(this).data("style");
    const next = setTheme({ style: id });
    refreshControls(next);
    showToast(`${STYLES.find((s) => s.id === id).label} style applied.`);
  });
}
  Academy.initThemeSwitcher = initThemeSwitcher;
})(window.Academy = window.Academy || {});
