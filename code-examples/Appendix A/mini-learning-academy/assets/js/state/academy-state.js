// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Shared in-memory state for the learning academy.
const academyState = {
  enrolledCourseIds: new Set(),
  courseProgress: new Map(),
  activeCategory: "All",
  learnerProfile: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false
};
  Academy.academyState = academyState;
})(window.Academy = window.Academy || {});
