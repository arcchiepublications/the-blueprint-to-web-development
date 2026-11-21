// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
const { courses } = Academy;
const { academyState } = Academy;

function renderCourses() {
  const searchTerm = $("#courseSearch").val().trim().toLowerCase();
  const selectedLevel = $("#levelFilter").val();
  const filteredCourses = courses.filter((course) => {
    const matchesText = (course.title + " " + course.description + " " + course.category).toLowerCase().includes(searchTerm);
    const matchesCategory = academyState.activeCategory === "All" || course.category === academyState.activeCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesText && matchesCategory && matchesLevel;
  });

  const courseGrid = $("#courseGrid").empty();
  filteredCourses.forEach((course) => {
    const enrolled = academyState.enrolledCourseIds.has(course.id);
    courseGrid.append(`
      <div class="col-md-6 col-lg-4">
        <article class="surface-card p-3">
          <div class="course-art ${course.art}">
            <span class="pill pill-on-art">${course.category}</span>
            <i class="bi ${course.icon} course-icon" aria-hidden="true"></i>
          </div>
          <div class="pt-3 px-1 pb-1">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="pill">${course.level}</span><span class="course-meta"><i class="bi bi-star-fill text-warning me-1"></i>${course.rating}</span>
            </div>
            <h5 class="fw-bold">${course.title}</h5>
            <p class="text-secondary small">${course.description}</p>
            <div class="d-flex gap-3 course-meta mb-3"><span><i class="bi bi-play-circle me-1"></i>${course.lessons} lessons</span><span><i class="bi bi-clock me-1"></i>${course.duration}</span></div>
            <button class="btn ${enrolled ? "btn-soft" : "btn-brand"} w-100 enroll-course-btn" data-course-id="${course.id}" ${enrolled ? "disabled" : ""}>
              ${enrolled ? '<i class="bi bi-check2 me-1"></i>Enrolled' : 'View & enrol <i class="bi bi-arrow-right ms-1"></i>'}
            </button>
          </div>
        </article>
      </div>`);
  });
  $("#noCourses").toggleClass("d-none", filteredCourses.length !== 0);
}
  Academy.renderCourses = renderCourses;
})(window.Academy = window.Academy || {});
