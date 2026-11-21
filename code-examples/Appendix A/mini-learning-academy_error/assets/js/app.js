// Application entry point: initialise services, views and event handlers.
import { loadSavedState } from "./services/storage-service.js";
import { renderCourses } from "./ui/course-view.js";
import { renderDashboard } from "./ui/dashboard-view.js";
import { initThemeSwitcher } from "./ui/theme-switcher.js";
import { bindEventHandlers } from "./handlers/event-handlers.js";

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
