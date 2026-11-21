// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Application entry point: initialise services, views and event handlers.
const { loadSavedState } = Academy;
const { renderCourses } = Academy;
const { renderDashboard } = Academy;
const { initThemeSwitcher } = Academy;
const { bindEventHandlers } = Academy;

$(function () {
  initThemeSwitcher();
  loadSavedState();
  renderCourses();
  renderDashboard();
  bindEventHandlers();
  $("#currentYear").text(new Date().getFullYear());

  // Small jQuery effect: gently reveal the feature cards.
  $(".surface-card").hide().fadeIn(450);
});
})(window.Academy = window.Academy || {});
