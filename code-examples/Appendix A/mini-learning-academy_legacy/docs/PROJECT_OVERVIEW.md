# Mini Learning Academy — Project Overview

Mini Learning Academy is a browser-based front-end learning platform demonstration designed for undergraduate students. It brings together a course catalogue, learner dashboard, enrolment form, progress tracking and a short knowledge quiz.

## Architecture and Separation of Concerns

The project uses plain HTML, CSS and JavaScript ES modules. Each layer has a focused responsibility:

- **HTML (`index.html`)** — page structure and content.
- **CSS (`assets/css/styles.css`)** — presentation and responsive styling.
- **Data (`assets/js/data/`)** — course records and quiz questions.
- **State (`assets/js/state/`)** — in-memory application state.
- **Services (`assets/js/services/`)** — browser storage operations.
- **UI (`assets/js/ui/`)** — functions that render courses, dashboard and quiz.
- **Handlers (`assets/js/handlers/`)** — user interactions and application events.
- **Entry point (`assets/js/app.js`)** — starts the application and connects the modules.

## Important scope note

This is an educational front-end prototype. It does not include a server, database, secure user authentication, payment processing or cross-device synchronisation. Learner data is stored in the current browser using `localStorage`.
