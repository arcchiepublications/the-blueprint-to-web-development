// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
const { courses } = Academy;
const { academyState } = Academy;

function renderDashboard() {
  const enrolledCourses = courses.filter((course) => academyState.enrolledCourseIds.has(course.id));
  const totalLessons = enrolledCourses.reduce((sum, course) =>
    sum + Math.round(course.lessons * (academyState.courseProgress.get(course.id) || 0) / 100), 0);
  const totalPoints = enrolledCourses.reduce((sum, course) =>
    sum + Math.round((academyState.courseProgress.get(course.id) || 0) / 10), 0);
  const average = enrolledCourses.length
    ? Math.round(enrolledCourses.reduce((sum, course) => sum + (academyState.courseProgress.get(course.id) || 0), 0) / enrolledCourses.length)
    : 0;

  $("#enrolledCount").text(enrolledCourses.length);
  $("#lessonsCount").text(totalLessons);
  $("#pointsCount").text(totalPoints);
  $("#averageProgress").text(average + "%");

  const myCourses = $("#myCourses").empty();
  if (enrolledCourses.length === 0) {
    myCourses.html('<div class="empty-state"><i class="bi bi-journal-bookmark fs-2 d-block mb-2"></i>You have not enrolled in a course yet. Explore the course catalogue to get started.</div>');
    return;
  }

  enrolledCourses.forEach((course) => {
    const progress = academyState.courseProgress.get(course.id) || 0;
    myCourses.append(`
      <div class="py-3 border-bottom">
        <div class="d-flex align-items-center gap-3">
          <span class="feature-icon"><i class="bi ${course.icon}"></i></span>
          <div class="flex-grow-1"><strong class="d-block">${course.title}</strong><span class="small text-secondary">${course.lessons} lessons · ${course.duration}</span></div>
          <strong class="small">${progress}%</strong>
        </div>
        <div class="progress my-3"><div class="progress-bar" role="progressbar" style="width:${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100" aria-label="${course.title} progress"></div></div>
        <div class="d-flex justify-content-between align-items-center"><span class="small text-secondary">${progress === 100 ? "Course completed!" : "Keep going – you are making progress."}</span><button class="btn btn-sm btn-soft progress-btn" data-course-id="${course.id}" ${progress === 100 ? "disabled" : ""}>${progress === 100 ? "Completed" : "Complete next lesson"}</button></div>
      </div>`);
  });
}
  Academy.renderDashboard = renderDashboard;
})(window.Academy = window.Academy || {});
