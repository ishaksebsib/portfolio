---
name: portfolio-design
description: Design system for this Astro portfolio (ishak.io) — layout, typography, spacing, color tokens, dither backgrounds, component patterns, and copy voice. Use when creating or editing any page, section, component, layout, CSS, theme, animation/background, or site copy in this repo, or when asked to "match the site", "make it look right", or restyle anything. Not for build config, CI, or non-visual logic.
---

# Portfolio design system

The site reads like a quiet engineering document: one narrow column, hairline rules, monospace metadata, serif statements, and one or two animated dither moments. Everything below protects that feel. When a case isn't covered, ask: *does this make the page calmer and more document-like, or louder and more like a landing page?* Choose calmer.

**Source of truth for values:** the `:root` and `.dark` blocks in `src/styles/global.css`. Read them before styling. Never hardcode a hex, font name, or color — use the custom properties. The reference page is `src/pages/index.astro`; copy its patterns before inventing new ones.

## Core rules

### Layout
- **Single centered column, `--column` (640px) wide, `--gutter` (24px) side padding.** Thin `--line` rails run down both sides of the column for the full page height. No multi-column grids, no full-bleed content sections — the narrow column is the identity.
- Full width is allowed only for **background texture bands**: the hero's NoiseField band and the section separator bands. Content always stays inside the column.
- The hero lives in a **bordered frame** with small square corner marks (the global `.corner .tl/.tr/.bl/.br` classes). Frames are for the hero or one special moment.
- **Every content section starts with `<SectionHead label="…" />`** (`src/components/SectionHead.astro`). It's a full-width band with 1px `--line` rules top and bottom, dithercn's static `hatched` fill outside the column (lines, not noise: the user compared both and chose lines), the section title inside, and corner marks where the rules meet the rails. Content follows in a `.column.body` block. Don't use cards, boxes, or other dividers.
- See [reference/patterns.md](reference/patterns.md) for exact spacing values and copy-ready markup.

### Typography — every font has one job
| Role | Font var | Use for |
|---|---|---|
| Statement | `--font-serif` (Newsreader) | Hero sentences, rare large statements. Weight 400. |
| Body | `--font-sans` (Inter) | All reading text, names, titles, and **section titles** (16px, 500, `--foreground`, sentence case). Weights 400 / 500 only. |
| Meta | `--font-mono` (JetBrains Mono) | Dates, tags, badges, status line, footer, handles. Small, often uppercase with letter-spacing. Never for section titles: the tiny mono labels were unreadable. |
| Accent | `--font-hand` (Caveat) | At most **one** short phrase per page, in `--primary`. |

Don't use the serif for UI or body text, the mono for paragraphs, or bold (600+) anywhere — hierarchy comes from font role, size, and `--muted`/`--faint` color, not weight. Base size is 15px / 1.6.

### Color
- Neutrals do almost all the work: `--foreground` for primary text, `--muted` for secondary text and descriptions, `--faint` for dates/meta, `--line` for every border and rule, `--surface` for rare filled chips.
- `--primary` (violet) is the **only** accent and is scarce: the solid primary button, the "Latest" badge, the hand-written phrase, row hover, avatar initials, and dither ink. Never use it for large text, section backgrounds, or borders of content. The one filled exception is the solid `.button` (primary action).
- Tints come from `color-mix(in oklch, var(--primary) 12–20%, transparent)` — no new color values.
- **Don't add new colors or tokens** without asking. Any new token must be defined in both `:root` and `.dark`.

### Shape and depth
- Square corners everywhere (`border-radius: 0`). The only round things are status dots and timeline nodes.
- No drop shadows, gradients, or glassmorphism. The only "glow" is the accent dot halo (`box-shadow: 0 0 0 3px` tinted primary).
- Borders are always `1px solid var(--line)`.

### Rows, never card grids
- **Projects** use `<ProjectRow project={…} />` (`src/components/ProjectRow.astro`). Each one is a row with a `--line` rule under it, only inside the column (never full width), plus corner marks. Inside the column it has a dithercn `Avatar` icon (square, `color="--primary"`, 44px), the name (16px/500), a muted description (14px), stats (★ stars, ↓ downloads; live GitHub/crates.io numbers fetched at build time by `src/lib/stats.ts`; stars under 50 hidden) right-aligned on the name line next to the ↗ arrow, and a mono role line underneath. Never show dates. The whole row is a link with a `--surface` hover. The home page shows `featuredProjects`, then a centered **View all projects** button linking to `/projects`.
- **Experience** uses the changelog **timeline**. **Writing / Connect** use simple text rows: name, dim one-line description, right-aligned mono meta.
- Never use card grids, rounded cards, or floating boxes. Project icons come from dithercn `Avatar`, not uploaded images, unless the user provides logos.

### Pages and shared pieces
- Every page is `<Base>` → `<div class="rails">` → `<SiteHeader />` → content → `<SiteFooter />`. `.rails` and `.column` are global (`global.css`).
- A sub-page starts with `<SectionHead label="…" backHref="/" />`, which renders the back arrow and makes the title the page's `h1`. See `src/pages/projects.astro`.
- Content data lives in `src/data/` (e.g. `projects.ts`: array order is the display order, curated by the user — never re-sort it; `featured` flag). Pages import it and never hardcode lists.
- **Buttons** (global `.button` in `global.css`): square, 13.5px/500 sans, `6px 14px` padding (~32px tall). `.button` = solid `--primary` (violet) with `--background` text for the primary action; `.button.ghost` = `--line` border on `--background` for the quiet second action. At most one solid button per section; pair it with at most one ghost. Hero actions: **Book a call** (cal.com/ishak, new tab) + **Send a message** (ghost, scrolls to `#connect`).
- **Header** (`SiteHeader`): identity on the left; on the right, mono uppercase section links (`/#projects`, `/#work`, `/#connect`, root-relative so they work from sub-pages) then the theme toggle. On phones (≤520px) the links and toggle wrap to their own line. Section navigation lives here, never as chips in the hero.

### Dither backgrounds — dithercn only
- All animated/texture backgrounds come from **dithercn** (https://dithercn.dev) components. **Never hand-roll** CSS hatching, noise, SVG patterns, or custom shaders — pick a dithercn component instead.
- Currently used: `Fire` (hero, bottom of frame), `NoiseField` (the full-width band behind the hero, plus a thin strip), the engine's static `fillStyle("hatched", …)` (section separator bands), and `Avatar` (project icons). `Avatar` is static SVG, so render it in `.astro` with **no** `client:` directive (zero JS). Its rounded corners come from Tailwind classes we don't load, so it stays square. Installed files live in `src/components/dithercn/`, and the engine is in `src/lib/dither/`.
- **Animated** components (WebGL canvases): always hydrate with `client:visible`, size them with `style` (height), and color them with tokens (`--dither-ink` = `--primary`; quiet textures use `color="--line"`). Keep it to about 3 canvases per page.
- **Static** textures (repeated bands, fills): use `fillStyle()` from `@/lib/dither` as an inline style in `.astro`. It renders on the server with zero JS and doesn't count toward the canvas budget.
- To add another component, follow [reference/dithercn.md](reference/dithercn.md).

### Motion
Motion belongs to the dither canvases. UI motion is limited to 0.15s color / border-color / underline / background transitions on hover, plus one allowed movement: link rows (e.g. Connect) nudge `translateX(4px)` over 0.2s ease-out, disabled under `prefers-reduced-motion`. No scroll-triggered reveals, parallax, or bouncing.

**Links:** external `http(s)` links open in a new tab (`target="_blank" rel="noopener noreferrer"`); `mailto:` and on-site links stay in the same tab.

### Theme
Light and dark are both first-class. Theme is the `.dark` class on `<html>`, toggled by the header button and persisted in `localStorage`. Every change must look right in both.

### Copy voice
First person, plain, specific, short. What I'm building now, then "Before that: …". Concrete outcomes ("cut p95 latency by 60%") over adjectives ("passionate", "innovative"). See [reference/voice.md](reference/voice.md).

### Tech constraints
- Astro components with scoped `<style>` and plain CSS. **No Tailwind, no UI kits, no CSS-in-JS.** `src/lib/utils.ts` has a tiny `cn()` only because dithercn expects it.
- React is used **only** for dithercn islands. Static markup stays `.astro` with zero client JS.
- Ship only what's needed — don't add dependencies without asking.

## Before finishing any UI work
- [ ] Only tokens from `global.css` — no new hex, rgb, or font names
- [ ] Content stays inside the 640px column; spacing matches [reference/patterns.md](reference/patterns.md)
- [ ] Each font used only for its role; no weight above 500; hand font used at most once
- [ ] `--primary` used only for small accents
- [ ] Any background/texture is dithercn: an animated component with `client:visible`, or static `fillStyle()`
- [ ] New sections start with `<SectionHead />`; new pages use `SiteHeader`, `SiteFooter` and data from `src/data/`
- [ ] Checked in **both** light and dark, at desktop and ~390px phone width
- [ ] Copy follows the voice rules
- [ ] `pnpm check` passes; preview with `astro dev --background` (`astro dev stop` when done)
