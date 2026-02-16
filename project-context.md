# Project Context — nassimnabi

## Overview
Personal portfolio site with project documentation pages. Static SPA deployed to GitHub Pages at `/nassimnabi/`.

## Stack
- **Framework:** React 18 + TypeScript, Vite 4
- **Routing:** react-router-dom 7 (BrowserRouter, basename `/nassimnabi/`)
- **Styling:** Tailwind CSS 3 (utility-first, class-based dark mode)
- **Animation:** Framer Motion 12
- **3D:** @react-three/fiber + drei (Hero particle scene)
- **Icons:** lucide-react
- **No backend / no database** — static site, GitHub API fetched client-side

## Folder Structure
```
src/
├── assets/              # Images, resume PDF
├── components/
│   ├── layout/          # Header, Footer
│   ├── motion/          # FadeIn, ScrollReveal, SlideIn wrappers
│   ├── pages/           # ProjectDocsPage (route-level)
│   ├── sections/        # Hero, About, Experience, Projects, Skills, Contact
│   ├── three/           # HeroScene, ParticleField (R3F)
│   └── ui/              # Button, ProjectCard, SkillCard, ThemeToggle, etc.
├── context/             # ThemeContext (light/dark, persisted to localStorage)
├── hooks/               # useGitHubProjects, useMousePosition, useScrollProgress, useTheme
├── lib/                 # constants.ts (all static data), github.ts (API fetch)
├── styles/              # index.css (Tailwind directives + custom utilities)
├── types/               # project.ts, github.ts
├── App.tsx              # Routes: "/" → HomePage, "/project/:slug" → ProjectDocsPage
└── main.tsx             # Entry: BrowserRouter + ThemeProvider
```

## Key Design Decisions
- **Single source of truth:** All project/experience/skill data lives in `lib/constants.ts` as typed arrays — no CMS, no markdown files.
- **GitHub enrichment at runtime:** `useGitHubProjects` hook fetches stars/forks/language from GitHub API and merges into `CURATED_PROJECTS` → `EnrichedProject[]`.
- **Class-based dark mode:** ThemeContext toggles `dark` class on `<html>`. Tailwind `dark:` variants handle all theming. System preference detected on first visit, then persisted to localStorage.
- **Project docs are inline data:** `docs` field on `CuratedProject` stores about/features/installation/usage as plain text strings — no markdown parser.
- **Path alias:** `@/` → `./src/` via tsconfig paths + Vite alias.

## Coding Conventions
- **Components:** Named exports, PascalCase files, functional components only.
- **Types:** Separate `types/` directory. Interfaces preferred over type aliases. `import type` used.
- **Styling:** Inline Tailwind classes. Custom utilities (`.gradient-text`, `.glass`) defined in `index.css` via `@apply`. No CSS modules.
- **Animation:** Framer Motion `motion.*` components with `whileInView`, `whileHover`, `AnimatePresence` patterns.
- **State:** React Context for theme only. No global state library. Hooks for data fetching.
- **Imports:** Absolute `@/` paths. clsx for conditional classes.

## API Style
- **GitHub REST API** (unauthenticated): `fetchRepoStats(owner, repo)` → `{ stars, forks, language }`. Rate-limited to 60 req/hr.
- No other external APIs.

## Constraints
- **GitHub Pages SPA:** Base path `/nassimnabi/`. No server-side routing — needs 404.html redirect for direct URL access.
- **No auth, no server, no database.**
- **Unauthenticated GitHub API** — 60 requests/hour rate limit.
- **Bundle size:** Single chunk ~1.2MB (three.js is the bulk). Consider code-splitting R3F.

## Future Scalability
- Add `404.html` with redirect script for GitHub Pages SPA routing.
- Code-split Three.js/R3F with `React.lazy` to reduce initial bundle.
- Add markdown parsing (e.g. react-markdown) if docs content grows beyond plain text.
- Consider moving project data to `.md` files or a headless CMS if project count scales.
- Add dynamic `<title>` per route (react-helmet or useEffect).
