# KinTenki Launch Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a one-screen KinTenki brand splash with responsive logo selection, restrained atmospheric motion, and automatic GitHub-to-Vercel production deployments.

**Architecture:** A static Next.js App Router page renders one semantic main landmark containing a responsive logo and copyright. CSS owns the atmospheric field, responsive composition, and reduced-motion state; there are no client components, APIs, data stores, or runtime environment variables. Vercel connects directly to GitHub, serves `kintenkistudios.com` canonically, and redirects the shorter domain.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Modules/global CSS, Vitest, Testing Library, Vercel, GitHub

**Spec:** `docs/superpowers/specs/2026-08-12-kintenki-launch-site-design.md`

## Global Constraints

- The initial viewport contains only the KinTenki logo, atmospheric field, and `© 2026 KinTenki Studios`.
- Desktop uses `kinTenki_logo-main.png`; mobile uses `kinTenki_logo-square.png`.
- No visible tagline, studio description, location, navigation, form, social links, or filler content.
- Motion is subtle and `prefers-reduced-motion: reduce` receives a still state.
- `kintenkistudios.com` is canonical; `kintenki.com` permanently redirects to it.
- The launch has no database, authentication, CMS, API routes, analytics, forms, or environment variables.

---

### Task 1: Static Page Contract and Project Foundation

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `app/layout.tsx`
- Create: `app/page.test.tsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: a Next.js App Router project and a page-level test contract.
- Consumes: the approved visible-content rules from the spec.

- [ ] **Step 1: Create the package and test configuration**

Define scripts for `dev`, `build`, `lint`, and `test`; install Next.js, React, TypeScript, Vitest, jsdom, and Testing Library.

- [ ] **Step 2: Write the failing page contract test**

Test that the page renders a `main` landmark, a KinTenki image, and the copyright; assert that forbidden text such as `Independent game studio`, `Colorado`, `Utah`, `We make games`, and `Coming soon` is absent.

- [ ] **Step 3: Run the test and verify RED**

Run: `npm test -- --run app/page.test.tsx`

Expected: FAIL because `app/page.tsx` does not exist.

- [ ] **Step 4: Create the minimal layout and page shell**

Create `app/layout.tsx` with canonical metadata and `app/page.tsx` with only the semantic shell required by the test.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `npm test -- --run app/page.test.tsx`

Expected: PASS with all contract assertions satisfied.

### Task 2: Responsive Identity and Atmospheric Presentation

**Files:**
- Create: `public/kinTenki_logo-main.png`
- Create: `public/kinTenki_logo-square.png`
- Create: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/page.test.tsx`

**Interfaces:**
- Consumes: `HomePage` from `app/page.tsx` and the supplied transparent PNG logos.
- Produces: `.brand-mark-wide`, `.brand-mark-square`, `.atmosphere`, and `.copyright` styles used by the static page.

- [ ] **Step 1: Extend the test for responsive assets**

Assert that a `<picture>` contains a mobile `<source media="(max-width: 640px)">` using the square logo and a default `<img>` using the wide logo.

- [ ] **Step 2: Run the test and verify RED**

Run: `npm test -- --run app/page.test.tsx`

Expected: FAIL because the responsive `<picture>` contract is absent.

- [ ] **Step 3: Add the supplied logo assets and responsive picture**

Copy the two supplied PNGs into `public/`, then implement the `<picture>` and copyright line without adding other visible content.

- [ ] **Step 4: Add the atmospheric CSS**

Build the cloud field with layered pseudo-elements, cool charcoal colors, subtle grain, and a single slow pressure-front animation. Add safe-area-aware spacing, portrait composition, and a `prefers-reduced-motion: reduce` rule that disables animation.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `npm test -- --run app/page.test.tsx`

Expected: PASS.

### Task 3: Metadata, Production Build, and Visual Verification

**Files:**
- Create: `app/icon.png`
- Create: `app/opengraph-image.png`
- Modify: `app/layout.tsx`
- Modify: `README.md`

**Interfaces:**
- Consumes: the square logo as the favicon/social-image source.
- Produces: canonical metadata for `https://kintenki.com` and documented local commands.

- [ ] **Step 1: Add metadata assertions**

Assert exported metadata contains `metadataBase: new URL("https://kintenkistudios.com")`, canonical `/`, and a description identifying KinTenki as an independent game studio.

- [ ] **Step 2: Run the test and verify RED**

Run: `npm test -- --run app/page.test.tsx`

Expected: FAIL until the metadata export satisfies the contract.

- [ ] **Step 3: Implement metadata and image assets**

Add the canonical metadata and derive favicon/social artwork from the supplied square mark without changing the visible page.

- [ ] **Step 4: Verify locally**

Run: `npm test -- --run`, `npm run lint`, and `npm run build`.

Expected: all commands exit 0.

- [ ] **Step 5: Start the production server and inspect desktop/mobile**

Run `npm run start`, verify the page at 1440×900 and 390×844, check console errors, horizontal overflow, logo selection, motion, and reduced-motion behavior.

### Task 4: Commit, GitHub Integration, Vercel Project, and Domains

**Files:**
- Modify: `.vercel/project.json` locally through `vercel link` (ignored by Git)

**Interfaces:**
- Consumes: the verified `main` branch and the Vercel team `bretgolds-projects`.
- Produces: the `kintenki` Vercel project, GitHub auto-deploy connection, canonical domains, and redirect behavior.

- [ ] **Step 1: Review and commit the complete implementation**

Run `git diff --check`, inspect `git status -sb`, stage only the site, test, documentation, plan, and asset files, then commit `Build KinTenki launch site`.

- [ ] **Step 2: Push `main` to GitHub**

Run: `git push origin main`

Expected: the implementation commit appears on `bsolidgold/kintenki`.

- [ ] **Step 3: Create and link the Vercel project**

Create `kintenki` in the `bretgolds-projects` team, link the local checkout, and connect GitHub repository `bsolidgold/kintenki` with `main` as the production branch.

- [ ] **Step 4: Deploy and attach domains**

Deploy production, attach `kintenki.com`, `www.kintenki.com`, `kintenkistudios.com`, and `www.kintenkistudios.com`; configure `kintenki.com` and both `www` variants to permanently redirect to `https://kintenkistudios.com`.

- [ ] **Step 5: Verify live behavior**

Confirm the Vercel deployment is READY, `https://kintenkistudios.com` returns 200 with the approved page, `kintenki.com` and both `www` hosts redirect to the canonical URL, HTTPS is valid, and desktop/mobile browser screenshots match the approved design. Record any DNS action still required instead of claiming domain completion prematurely.
