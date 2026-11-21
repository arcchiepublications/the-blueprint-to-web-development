// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Theme service: remembers the visitor's colour mode (light/dark) and visual
// style (flavor) in localStorage and applies them to the <html> element.
// CSS reacts to the data-mode / data-style attributes (see styles.css).
const STYLES = [
  { id: "aurora", label: "Aurora", note: "Modern indigo, rounded" },
  { id: "sunrise", label: "Sunrise", note: "Warm, playful, friendly" },
  { id: "editorial", label: "Editorial", note: "Serif, sharp, high contrast" }
];
const MODES = ["light", "dark"];

const THEME_KEY = "miniAcademyTheme";
const DEFAULT_STYLE = "aurora";
const root = document.documentElement;

function readSaved() {
  try { return JSON.parse(localStorage.getItem(THEME_KEY)) || {}; }
  catch (error) { return {}; }
}

function writeSaved(theme) {
  try { localStorage.setItem(THEME_KEY, JSON.stringify(theme)); }
  catch (error) { console.warn("Theme preference could not be saved:", error); }
}

// With no saved choice, follow the operating-system preference.
function systemMode() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getTheme() {
  const saved = readSaved();
  return {
    style: STYLES.some((s) => s.id === saved.style) ? saved.style : DEFAULT_STYLE,
    mode: MODES.includes(saved.mode) ? saved.mode : systemMode()
  };
}

function applyTheme(theme) {
  root.setAttribute("data-style", theme.style);
  root.setAttribute("data-mode", theme.mode);
  root.setAttribute("data-bs-theme", theme.mode); // lets Bootstrap components follow dark mode
}

function setTheme(partial) {
  const next = { ...getTheme(), ...partial };
  applyTheme(next);
  writeSaved(next);
  return next;
}
  Academy.STYLES = STYLES;
  Academy.MODES = MODES;
  Academy.getTheme = getTheme;
  Academy.applyTheme = applyTheme;
  Academy.setTheme = setTheme;
})(window.Academy = window.Academy || {});
