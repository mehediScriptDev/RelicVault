# RelicVault — Project Structure

This repo uses Vite + React (TypeScript). The layout follows a professional, scalable structure designed for clarity and growth.

Recommended structure

- `src/`
  - `assets/` — images, fonts, static assets
  - `components/` — small, reusable UI components (already present)
  - `pages/` — route/page-level components
  - `lib/` — context providers, API wrappers, auth (already present)
  - `hooks/` — custom React hooks
  - `styles/` — global styles, design tokens, and component styles
    - `components/` — per-component style files
  - `utils/` — pure utility functions
  - `types/` — shared TypeScript types

Key changes made
- Added `tsconfig.json` with `@/*` path mapping to `src/*` for cleaner imports.
- Created folders: `src/assets`, `src/hooks`, `src/utils`, `src/styles/components`, `src/types`.

How to use aliases

You can import using the `@` alias from anywhere in the project, for example:

```ts
import Button from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
```

Next recommendations
- Move images into `src/assets` and small helpers into `src/utils`.
- Add ESLint + Prettier and a `husky` pre-commit hook for consistent code style.
- Split big style files into `styles/tokens.css`, `styles/base.css`, and `styles/components/*.css`.

If you want, I can move specific files into the new folders now (e.g., images, helpers), wire up ESLint/Prettier, or split `globals.css` into smaller files. Tell me which actions to take next.

  
