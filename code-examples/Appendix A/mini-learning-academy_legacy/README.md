# Mini Learning Academy

A beginner-friendly front-end project for undergraduate students to explore how HTML, CSS, Bootstrap, JavaScript, and jQuery work together to build an interactive learning website.

## Project Overview

**Mini Learning Academy** is a responsive, front-end demonstration of a small online learning platform. It brings together a course catalogue, learner dashboard, enrolment form, learning-progress tracker, learning resources, and a short knowledge-check quiz in one web application.

The supplied version is implemented as a single HTML file containing page structure, embedded CSS, application data, and JavaScript behaviour. This repository is intended to help students understand the application and progressively reorganise it using the **Separation of Concerns (SoC)** principle—placing structure, presentation, data, and behaviour in appropriate files and modules.

> **Project status:** Educational front-end prototype. It is not a production Learning Management System (LMS). It has no server, database, authentication, payment processing, or cross-device synchronisation.

## Key Features

- **Responsive interface:** Navigation, hero section, feature highlights, course catalogue, dashboard, resources, about section, FAQ, and footer.
- **Course discovery:** Search courses and filter them by category and learning level.
- **Course enrolment:** Enrol in a course from the catalogue and prevent duplicate enrolments.
- **Learning dashboard:** View enrolled courses, estimated lessons completed, learning points, and average progress.
- **Progress tracking:** Update course progress through the demonstration lesson-completion action.
- **Learner profile:** Enter a name, email address, and area of interest using a validated form.
- **Knowledge check:** Answer a short multiple-choice quiz and view feedback and a score.
- **Browser-based persistence:** Save the learner profile, enrolments, and progress in the browser's `localStorage`.
- **UI components:** Use Bootstrap components such as the responsive navigation, modal dialogs, carousel, accordion, and toast notifications.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and content |
| CSS3 | Custom styling, theme variables, and responsive adjustments |
| Bootstrap 5.3 | Responsive grid, layout, and interface components |
| Bootstrap Icons | Interface icons |
| JavaScript (ES6+) | Course data, application state, quiz logic, and interactions |
| jQuery 3.7 | DOM selection, event handling, and UI updates |
| Browser `localStorage` | Demonstration-only persistence on the current browser/device |

The current HTML file loads Bootstrap, Bootstrap Icons, jQuery, and Bootstrap's JavaScript bundle through public CDNs. An internet connection is therefore required when running this version.

## Suggested Repository Structure

The following structure is a **recommended refactoring target**, not a claim that the supplied single-file project has already been split into these files.

```text
mini-learning-academy/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── components.css
│   ├── js/
│   │   ├── app.js
│   │   ├── data/
│   │   │   ├── courses.js
│   │   │   └── quiz-questions.js
│   │   ├── services/
│   │   │   └── storage-service.js
│   │   ├── state/
│   │   │   └── academy-state.js
│   │   ├── ui/
│   │   │   ├── course-view.js
│   │   │   ├── dashboard-view.js
│   │   │   ├── quiz-view.js
│   │   │   └── notifications.js
│   │   └── handlers/
│   │       └── event-handlers.js
│   └── images/
├── docs/
│   └── PROJECT_OVERVIEW.md
└── .gitignore
```

### Separation of Concerns

- **HTML (`index.html`):** Keep the page's semantic structure and connect the required stylesheets and scripts.
- **CSS (`assets/css/`):** Move embedded styles into external stylesheets. Keep global theme rules separate from reusable component styles where useful.
- **Data (`assets/js/data/`):** Store course records and quiz questions separately from the code that displays or processes them.
- **State (`assets/js/state/`):** Manage enrolments, progress, the learner profile, and the active course filter.
- **Services (`assets/js/services/`):** Encapsulate reading from and writing to `localStorage`.
- **UI (`assets/js/ui/`):** Render or update the course catalogue, dashboard, quiz, and notifications.
- **Handlers (`assets/js/handlers/`):** Connect user actions—such as searching, filtering, enrolling, and submitting forms—to application functions.
- **Application entry point (`app.js`):** Initialise the application and coordinate the modules.

Students can begin with this structure and introduce ES modules (`import`/`export`) as they refactor. Keep the first refactoring small: extract CSS, course data, and quiz data before separating state, storage, rendering, and event handling.

## Run the Project

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Ensure the browser has an internet connection so the CDN-hosted libraries can load.

After the code is refactored into JavaScript modules, run it through a local development server (for example, the VS Code Live Server extension). Browsers may restrict JavaScript modules when an HTML file is opened directly using a `file://` URL.

## Learning Outcomes

By exploring and refactoring this project, undergraduate students can practise:

- Building semantic and responsive web pages.
- Using Bootstrap's grid system and common UI components.
- Working with JavaScript arrays, objects, functions, events, and DOM updates.
- Using jQuery selectors and event delegation.
- Managing simple application state and browser storage.
- Applying Separation of Concerns and organising a small codebase.
- Using Git and GitHub to track changes and collaborate.

## Scope and Limitations

This project uses sample courses, sample testimonials, and demonstration learning resources. Learner information and progress are stored only in the current browser; they are not transmitted to a server or protected by a real account system. The course-progress action is illustrative and does not represent a complete lesson-management workflow. Replace sample content and external media with approved material when adapting the project.

**Suggested future enhancements:** Add a backend API and database, secure authentication, role-based access, real lesson content, course administration, persistent progress across devices, automated tests, and deployment.

## Contributing

Undergraduate students can contribute by fixing issues, improving accessibility, adding sample courses or quiz questions, refactoring one responsibility at a time, and documenting their changes. Use clear commit messages and describe the purpose of each pull request.

## License

No licence is specified in the supplied project. Add a `LICENSE` file before granting others explicit permission to reuse, modify, or distribute the code.
