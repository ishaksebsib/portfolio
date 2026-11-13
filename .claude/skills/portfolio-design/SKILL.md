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
- Full width is allowed only for **background texture bands** (e.g. the hero's NoiseField band). Content always stays inside the column.
- The hero lives in a **bordered frame** with small square corner marks (7px, `--faint` border, `--background` fill). Frames are for the hero or one special moment, not every section.
- Sections are separated by whitespace (56px), not by cards, boxes, or dividers.
- See [reference/patterns.md](reference/patterns.md) for exact spacing values and copy-ready markup.

### Typography — every font has one job
| Role | Font var | Use for |
|---|---|---|
| Statement | `--font-serif` (Newsreader) | Hero sentences, rare large statements. Weight 400. |
| Body | `--font-sans` (Inter) | All reading text, names, titles. Weights 400 / 500 only. |
| Meta | `--font-mono` (JetBrains Mono) | Section labels, dates, tags, badges, footer, handles. Small, often uppercase with letter-spacing. |
| Accent | `--font-hand` (Caveat) | At most **one** short phrase per page, in `--primary`. |

Don't use the serif for UI or body text, the mono for paragraphs, or bold (600+) anywhere — hierarchy comes from font role, size, and `--muted`/`--faint` color, not weight. Base size is 15px / 1.6.

### Color
- Neutrals do almost all the work: `--foreground` for primary text, `--muted` for secondary text and descriptions, `--faint` for labels/dates/meta, `--line` for every border and rule, `--surface` for rare filled chips.
- `--primary` (violet) is the **only** accent and is scarce: the status dot, the "Latest" badge, the hand-written phrase, row hover, avatar initials, and dither ink. Never use it for large text, backgrounds, or borders of content.
- Tints come from `color-mix(in oklch, var(--primary) 12–20%, transparent)` — no new color values.
- **Don't add new colors or tokens** without asking. Any new token must be defined in both `:root` and `.dark`.

### Shape and depth
- Square corners everywhere (`border-radius: 0`). The only round things are status dots and timeline nodes.
- No drop shadows, gradients, or glassmorphism. The only "glow" is the accent dot halo (`box-shadow: 0 0 0 3px` tinted primary).
- Borders are always `1px solid var(--line)`.

### Lists over cards
Content is presented as text rows, not card grids: **name** + dim one-line description + right-aligned mono meta (Projects, Writing, Connect), or the changelog **timeline** for experience. No thumbnails or images in lists unless asked.

### Dither backgrounds — dithercn only
- All animated/texture backgrounds come from **dithercn** (https://dithercn.dev) components. **Never hand-roll** CSS hatching, noise, SVG patterns, or custom shaders — pick a dithercn component instead.
- Currently used: `Fire` (hero, bottom of frame) and `NoiseField` (full-width band behind the hero, and thin strips). Installed files live in `src/components/dithercn/`; the engine is in `src/lib/dither/`.
- Always hydrate with `client:visible`, size with `style` (height), and color via tokens (`--dither-ink` = `--primary`; quiet textures use `color="--line"`). Keep at most ~3 dither canvases per page.
- To add another component, follow [reference/dithercn.md](reference/dithercn.md).

### Motion
Motion belongs to the dither canvases. UI motion is limited to 0.15s color / border-color / underline transitions on hover. No scroll-triggered reveals, parallax, or bouncing.

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
- [ ] Any background/texture is a dithercn component with `client:visible`
- [ ] Checked in **both** light and dark, at desktop and ~390px phone width
- [ ] Copy follows the voice rules
- [ ] `pnpm check` passes; preview with `astro dev --background` (`astro dev stop` when done)
