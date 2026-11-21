// Shared in-memory state for the learning academy.
export const academyState = {
  enrolledCourseIds: new Set(),
  courseProgress: new Map(),
  activeCategory: "All",
  learnerProfile: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false
};
