// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Central catalogue data. Add or edit course records here.
const courses = [
  { id: 1, title: "HTML & CSS Foundations", category: "Technology", level: "Beginner", duration: "4 weeks", lessons: 12, rating: "4.9", description: "Build well-structured web pages and style them with modern CSS.", icon: "bi-code-slash", art: "art-purple" },
  { id: 2, title: "JavaScript Essentials", category: "Technology", level: "Beginner", duration: "5 weeks", lessons: 15, rating: "4.8", description: "Make websites interactive with JavaScript, events and the DOM.", icon: "bi-braces", art: "art-blue" },
  { id: 3, title: "Responsive Web Design", category: "Design", level: "Intermediate", duration: "3 weeks", lessons: 10, rating: "4.7", description: "Create flexible layouts for phones, tablets and desktop screens.", icon: "bi-phone", art: "art-orange" },
  { id: 4, title: "Bootstrap UI Workshop", category: "Technology", level: "Beginner", duration: "2 weeks", lessons: 8, rating: "4.8", description: "Build polished interfaces using containers, grids and components.", icon: "bi-grid-1x2", art: "art-green" },
  { id: 5, title: "Creative Interface Design", category: "Design", level: "Intermediate", duration: "4 weeks", lessons: 11, rating: "4.6", description: "Learn visual hierarchy, colour, spacing and user-centred design.", icon: "bi-palette", art: "art-pink" },
  { id: 6, title: "Digital Project Basics", category: "Business", level: "Beginner", duration: "3 weeks", lessons: 9, rating: "4.7", description: "Plan a small digital project, define goals and present outcomes.", icon: "bi-rocket-takeoff", art: "art-dark" }
];
  Academy.courses = courses;
})(window.Academy = window.Academy || {});
