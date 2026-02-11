## Repo summary

This is a small single-page portfolio built with React + Vite. It has no backend; pages and assets live under `src/` and `public/`. The project uses Vite for dev server / build and ESLint for linting.

## Quick commands
- Start dev server with HMR: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`
- Run linter: `npm run lint`

These scripts are defined in `package.json`.

## Entry points & architecture
- App entry: `src/main.jsx` (creates root and renders `<App />`)
- Main app: `src/App.jsx` — top-level layout and sections (landing, projects, experience, socials)
- Components: `src/components/*` (e.g. `src/components/carousel/Carousel.jsx`)
- Static assets: `src/assets/*` (import images directly, Vite handles bundling)
- Styles: global/top-level CSS files `src/index.css` and `src/App.css` are used by the app. New component styles in this repo have been added to these files (there are no per-component CSS files currently).

Why this matters to an AI assistant: change the few top-level CSS files rather than adding scattered CSS files unless adding a clear component-local file and importing it from the component.

## Notable patterns & conventions (explicit)
- Functional React components with React hooks (see `Carousel.jsx` using `useState`). Prefer hooks and small components.
- Default exports for components (e.g. `export default Carousel`).
- Component filenames use PascalCase and live under `src/components/<component>/`.
- Images are imported with relative paths, e.g. `import profilePicture from './assets/IMG_7443-modified.png'` in `src/App.jsx`.
- Icons use `react-icons`, specifically imports like `react-icons/fa6` (see `Carousel.jsx`). Keep that import style when adding new icons.

## Linting & coding rules
- ESLint config: `eslint.config.js` — extends `@eslint/js` recommended and includes `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` rules. The project lints `**/*.{js,jsx}` and ignores `dist`.
- Rule of note: `'no-unused-vars'` is configured with `varsIgnorePattern: '^[A-Z_]'`, so names starting with capital letters or underscores may be ignored by the rule.

## Build and dev notes for AI changes
- Use `npm run dev` locally for fast iterations (HMR via Vite). Edits to React components and CSS refresh without full rebuild.
- Import static assets directly from `src/assets` — Vite resolves those imports.
- There are no unit tests or CI configuration present; avoid creating references to tests that don't exist unless you add them and update `package.json`.

## Integration & external dependencies
- External packages: `react`, `react-dom`, `react-icons`. Dev-time: `vite`, `@vitejs/plugin-react`, `eslint` and related plugins. No server-side or API integrations found.

## Example patterns to mimic
- Carousel navigation (stateful, small UI logic): `src/components/carousel/Carousel.jsx` — use simple `useState` and conditional rendering for slides.
- App layout: `src/App.jsx` imports top-level CSS and assets, and composes components. Follow this composition for new sections.

## When in doubt
- Prefer minimal changes that follow the established file layout: components under `src/components`, assets under `src/assets`, and global styles in `src/index.css` or `src/App.css`.
- If adding a new package, add it to `package.json` and mention it in the PR description.

---
If you want, I can also:
- add a short CONTRIBUTING.md with component and CSS rules, or
- add a small example component with local CSS and a test/harness.
Please tell me if any sections should be expanded or if you want a different level of detail.
