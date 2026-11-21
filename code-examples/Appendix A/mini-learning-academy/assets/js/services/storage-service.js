// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
const { courses } = Academy;
const { academyState } = Academy;

const STORAGE_KEY = "miniAcademyState";

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.enrolled)) {
      saved.enrolled.forEach((id) => {
        const course = courses.find((item) => item.id === id);
        if (!course) return;
        academyState.enrolledCourseIds.add(id);
        const progress = Number(saved.progress && saved.progress[id]) || 0;
        academyState.courseProgress.set(id, Math.min(100, Math.max(0, progress)));
      });
    }
    if (saved && saved.profile) academyState.learnerProfile = saved.profile;
  } catch (error) {
    console.warn("Saved academy data could not be read:", error);
  }
}

function saveState() {
  const progress = Object.fromEntries(academyState.courseProgress);
  const state = {
    enrolled: Array.from(academyState.enrolledCourseIds),
    progress,
    profile: academyState.learnerProfile
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
}
  Academy.loadSavedState = loadSavedState;
  Academy.saveState = saveState;
  Academy.clearSavedState = clearSavedState;
})(window.Academy = window.Academy || {});
