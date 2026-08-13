# KinTenki Launch Site Design

## Purpose

Launch KinTenki with a confident, minimal web presence that establishes the brand before the studio has public game material to show. The page should feel complete as a brand statement, not like a placeholder or a generic “coming soon” template.

The site has one job: create a memorable first encounter with the KinTenki identity.

## Approved Direction

The site is a pure brand splash inspired by a cinematic storm archive or game title card.

Visible content is limited to:

- the KinTenki logo;
- a dark, atmospheric weather field with restrained motion; and
- a small `© 2026 KinTenki Studios` line.

The page will not visibly state that KinTenki is a game studio. That description belongs in the document title, search metadata, social preview metadata, and other machine-readable surfaces.

The page will not include a tagline, location, navigation, email form, social links, project grid, fake portfolio content, “coming soon” language, or explanatory marketing copy.

## Responsive Composition

Desktop and wide tablet layouts use the supplied horizontal logo:

`/Users/bretgold/Library/CloudStorage/Dropbox/KinTenki/logos/kinTenki_logo-main.png`

Mobile and narrow portrait layouts use the supplied square logo:

`/Users/bretgold/Library/CloudStorage/Dropbox/KinTenki/logos/kinTenki_logo-square.png`

Both logo files contain black artwork on transparency. They will be rendered white against the dark field without modifying the source files.

The logo is the dominant visual element. The copyright line remains subordinate and sits near a viewport edge with safe-area-aware spacing.

## Visual System

### Color

- `Night`: `#050708` — primary background
- `Pressure`: `#101619` — deep atmospheric midtone
- `Cloud`: `#46545D` — restrained cool highlight
- `Mist`: `#C2C7C9` — logo and copyright foreground
- `Black`: `#000000` — depth and grain

No bright accent color, colorful startup gradient, or decorative UI chrome is used.

### Typography

There is no display headline. Typography is deliberately reduced to the copyright line.

The copyright uses a compact, narrow utility face such as Barlow Condensed, with a system condensed fallback. It appears at a small but accessible size, with restrained uppercase styling and tracking. The font must remain visually secondary to the custom logo.

### Signature Element

The page’s single expressive gesture is a slow-moving pressure front: a layered, cloud-like field that shifts subtly over time. A very faint scan or light boundary may move through the field if it improves depth without reading as an interface element.

Film grain may be used sparingly to prevent the field from looking like a generic CSS gradient. It must not reduce logo clarity or create distracting shimmer.

## Motion and Interaction

Motion is ambient rather than interactive. The site does not require scrolling, clicking, dragging, or pointer-following effects.

The initial appearance is orchestrated as one quiet event: atmosphere becomes visible first, then the logo resolves cleanly. The copyright follows without a separate attention-grabbing animation.

`prefers-reduced-motion: reduce` receives a composed still frame with no essential information lost.

The layout must tolerate mobile browser chrome and safe-area insets without clipping the logo or copyright.

## Technical Shape

The implementation will be a small static Next.js site using the App Router and TypeScript. It requires no database, authentication, CMS, API routes, analytics, forms, or environment variables for launch.

The page will use CSS-driven atmosphere and motion where practical. A canvas or WebGL dependency is not justified for the approved effect unless a lightweight prototype proves that CSS cannot achieve the visual standard.

The supplied logos will be stored as optimized public assets while preserving their transparent originals. Metadata will identify KinTenki as an independent game studio and use the square mark for favicons and social imagery where appropriate.

## Accessibility and Quality

- The logo has useful alternative text.
- The copyright maintains readable contrast.
- Reduced-motion preferences are respected.
- The layout is verified at common desktop and mobile viewport sizes.
- The page does not create horizontal overflow.
- The production build completes without warnings that affect the launch.
- The live canonical domain is checked directly after deployment.

## Repository and Deployment

The source repository is `bsolidgold/kintenki` on the `main` branch.

A Vercel project named `kintenki` will be connected to the GitHub repository so commits to `main` deploy automatically to production and non-production branches receive preview deployments.

Domain behavior:

- `kintenkistudios.com` is the canonical production domain.
- `www.kintenkistudios.com` redirects to `kintenkistudios.com`.
- `kintenki.com` redirects permanently to `kintenkistudios.com`.
- `www.kintenki.com` redirects permanently to `kintenkistudios.com`.

DNS changes will be limited to the records Vercel requires. The live result is not considered verified until the custom domains resolve, HTTPS succeeds, redirects behave as specified, and the deployed page is visually checked on desktop and mobile.

## Out of Scope for Launch

- game pages or trailers;
- news, devlogs, or a CMS;
- newsletter or contact capture;
- social profiles;
- team biographies;
- analytics and session replay;
- localization;
- a reusable component library; and
- a Figma design system deliverable.

These can be added later when real content or a concrete product need exists.

## Acceptance Criteria

1. The initial viewport contains only the appropriate KinTenki logo, atmospheric field, and copyright line.
2. Desktop uses the horizontal logo; mobile uses the square logo.
3. No visible tagline, studio description, location, navigation, form, or filler content appears.
4. Motion is subtle and a reduced-motion still state is present.
5. The page is responsive, accessible, and visually verified at desktop and mobile sizes.
6. GitHub pushes to `main` trigger Vercel production deployments.
7. `kintenkistudios.com` serves the site as the canonical domain.
8. `kintenki.com` redirects permanently to `kintenkistudios.com`.
9. HTTPS works on both domains and their configured `www` variants.
