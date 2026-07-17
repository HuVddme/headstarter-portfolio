# Valentine Ezikeoha — Portfolio

A modern, responsive personal portfolio built with **React** and **Vite**. Minimal black &
white design with smooth animations, a mobile-friendly navigation menu, and section-based
scrolling.

## Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server and optimized build
- **Framer Motion** — scroll and entrance animations
- **React Icons** — iconography
- **CSS Modules** — scoped, maintainable styling with a shared design-token layer

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (opens http://localhost:5173)
npm run dev

# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── index.html                # App entry HTML (Vite)
├── vite.config.js            # Vite + React configuration
├── public/                   # Static assets served as-is
│   ├── headshot.jpg
│   ├── resume.jpg
│   └── favicon.svg
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component / page composition
    ├── index.css             # Global styles + design tokens
    ├── data/
    │   └── portfolio.js      # Single source of content (edit text here)
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

## Editing Content

All personal content (name, roles, about text, resume path, and social links) lives in
`src/data/portfolio.js`. Update that file to change what appears on the site — no component
edits required.
