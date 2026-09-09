# Sami Bachiri — Portfolio

A multi-page developer portfolio built with React + TypeScript (Vite), Bootstrap and
React Router, styled as a minimal, black, code-editor-inspired theme (editor tabs as
navigation, a small supporting code snippet, terminal-style contact block).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/` — you can deploy that folder to Netlify, Vercel,
GitHub Pages, or any static host.

## Structure

```
src/
  main.tsx            entry point, wraps the app in BrowserRouter
  index.css           design system (colors, type, IDE-window/terminal styles)
  App.tsx             route definitions
  pages/
    Home.tsx           "/" — minimal hero + about
    ExperiencePage.tsx "/experience"
    EducationPage.tsx  "/education"
    SkillsPage.tsx      "/skills"
    Projects.tsx        "/projects" — Mountain App, Dokan karate club site
    ContactPage.tsx     "/contact"
  components/
    TabNav.tsx          sticky "editor tabs" navigation (routes between pages)
    Hero.tsx            minimal name/heading + small supporting code snippet
    About.tsx           summary + quick facts
    Experience.tsx       work history timeline
    Education.tsx        education timeline
    Skills.tsx            skills grouped as "import" modules
    Contact.tsx           terminal-style contact block
```

Each page is a separate route (via React Router), navigated through the tab bar at
the top — clicking a tab feels like switching files in an editor.

## Deploying

The site is a client-side-routed SPA, so your host needs to fall back to
`index.html` for unknown paths (otherwise refreshing `/projects` gives a 404):

- **Netlify**: already handled by `public/_redirects`.
- **Vercel**: already handled by `vercel.json`.
- **GitHub Pages / other static hosts**: check their SPA-fallback docs.

## Customizing

- **Colors / fonts**: edit the `:root` variables at the top of `src/index.css`.
- **Content**: each page's text lives as plain data in its component file (e.g. the
  `roles` array in `Experience.tsx`, the `projects` array in `pages/Projects.tsx`) —
  edit those arrays to update content.
- **LinkedIn link**: update the `href` in `Contact.tsx` if your LinkedIn URL differs
  from `linkedin.com/in/sami-bachiri`.
- **More projects**: add another object to the `projects` array in
  `src/pages/Projects.tsx`.
