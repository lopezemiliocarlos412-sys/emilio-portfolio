# Milio — Amazon VA Portfolio

Multi-page portfolio built with React + Vite, React Router, Tailwind CSS v4, and DaisyUI.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

All editable copy lives in `src/data/`:

- `profile.js` — name, tagline, contact info, hero stats
- `services.js` — service cards
- `skills.js` — skill groups
- `experience.js` — work history / timeline
- `projects.js` — featured projects (add your government platform project here)

Search the project for `[ADD:` to find every placeholder that needs a real value.

## Resume

Drop your resume PDF at `public/resume.pdf` — the navbar's Resume button links to `/resume.pdf`.
