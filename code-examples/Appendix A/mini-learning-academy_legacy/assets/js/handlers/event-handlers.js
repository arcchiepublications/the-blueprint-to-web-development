import { courses } from "../data/courses.js";
import { quizQuestions } from "../data/quiz-questions.js";
import { academyState } from "../state/academy-state.js";
import { saveState, clearSavedState } from "../services/storage-service.js";
import { showToast } from "../ui/notifications.js";
import { renderCourses } from "../ui/course-view.js";
import { renderDashboard } from "../ui/dashboard-view.js";
import { renderQuiz } from "../ui/quiz-view.js";

function enrolInCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);
  if (!course || academyState.enrolledCourseIds.has(courseId)) return;
  academyState.enrolledCourseIds.add(courseId);
  academyState.courseProgress.set(courseId, 0);
  saveState();
  renderCourses();
  renderDashboard();
  showToast(`You are enrolled in ${course.title}. Happy learning!`);
}

function updateCourseProgress(courseId, increment) {
  if (!academyState.enrolledCourseIds.has(courseId)) return;
  const current = academyState.courseProgress.get(courseId) || 0;
  academyState.courseProgress.set(courseId, Math.min(100, current + increment));
  saveState();
  renderDashboard();
  showToast("Your learning progress has been updated.");
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
    $(form).addClass("was-validated");
    return;
  }
  academyState.learnerProfile = {
    name: $("#learnerName").val().trim(),
    email: $("#learnerEmail").val().trim(),
    interest: $("#learnerInterest").val()
  };
  saveState();
  form.reset();
  $(form).removeClass("was-validated");
  window.bootstrap.Modal.getInstance(document.getElementById("enrollModal")).hide();
  showToast(`Welcome, ${academyState.learnerProfile.name}! Your learner profile has been saved in this browser.`);
}

let quizFinished = false;

function handleNextQuestion() {
  if (quizFinished) {
    resetQuiz();
    return;
  }
  if (academyState.quizIndex < quizQuestions.length - 1) {
    academyState.quizIndex++;
    renderQuiz();
    return;
  }
  quizFinished = true;
  $("#quizQuestion").text(`Quiz complete! You scored ${academyState.quizScore} out of ${quizQuestions.length}.`);
  $("#quizOptions").empty();
  $("#quizFeedback").text(academyState.quizScore === quizQuestions.length ? "Excellent work!" : "Review the explanations and try again.")
    .addClass("text-success");
  $("#nextQuestionBtn").text("Try again").prop("disabled", false);
}

function resetQuiz() {
  quizFinished = false;
  academyState.quizIndex = 0;
  academyState.quizScore = 0;
  renderQuiz();
}

export function bindEventHandlers() {
  $("#courseSearch, #levelFilter").on("input change", renderCourses);

  $("#categoryFilters").on("click", ".filter-btn", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    academyState.activeCategory = $(this).data("category");
    renderCourses();
  });

  $("#courseGrid").on("click", ".enroll-course-btn", function () {
    enrolInCourse(Number($(this).data("course-id")));
  });

  $("#myCourses").on("click", ".progress-btn", function () {
    updateCourseProgress(Number($(this).data("course-id")), 20);
  });

  $("#enrollmentForm").on("submit", handleProfileSubmit);
  $("#nextQuestionBtn").on("click", handleNextQuestion);

  $("#resetProgressBtn").on("click", function () {
    if (!window.confirm("Reset all demo enrolments and progress on this browser?")) return;
    academyState.enrolledCourseIds.clear();
    academyState.courseProgress.clear();
    academyState.learnerProfile = null;
    clearSavedState();
    renderCourses();
    renderDashboard();
    showToast("Your demo learning data has been reset.");
  });

  $("#quizModal").on("show.bs.modal", resetQuiz);
}
