---
name: portfolio-design
description: Design taste and system for this Astro portfolio (ishak.io) — the feel, layout, typography, color, texture, motion, component patterns, and copy voice. Use when creating or editing any page, section, component, layout, CSS, theme, animation/background, or site copy in this repo, or when asked to "match the site", "make it look right", or restyle anything. Not for build config, CI, or non-visual logic.
---

# Portfolio design taste

This skill describes **how the site should feel and why**. It deliberately holds no pixel values, sizes, or timings. Those live in the code: tokens in `src/styles/global.css` (`:root` and `.dark`), and patterns in the components under `src/components/` and the pages under `src/pages/`. When you need a value, **read the existing code and reuse it**. Never invent a new number when a nearby pattern already has one.

## The feel

The site reads like a **quiet engineering document**: one narrow column, hairline rules, small monospace metadata, a serif voice for statements, and one or two living dither moments. It's calm, precise and a little playful, closer to a well-made README or a blueprint than to a landing page.

When something isn't covered here, ask: *does this make the page calmer and more document-like, or louder and more like a marketing site?* Choose calmer.

Influences, so you understand the intent:
- A single framed column with ruled separator bands and corner marks (Vitor Lostada).
- Serif statements, a changelog-style timeline, and mono labels with clear roles (Ben Moore).
- A personal, first-person tone with inline links and one handwritten touch (Leo).
- A dithered, pixel-textured hero moment (ParadeDB).

## Principles

### Layout: one column, framed
- Everything lives in **one centered narrow column**, with thin vertical rails running down both sides for the whole page. There are no multi-column grids and no full-bleed content.
- Full width is only for **background texture** around the column: the hero's noise band and the section separator bands.
- Sections are separated by **ruled bands**, not cards or boxes. Each section opens with `SectionHead`: a full-width band with hairline rules, a texture outside the column, the title inside, and small square **corner marks** where the rules meet the rails.
- Hairline rules stay **inside the rails**. Only the deliberate texture bands cross them.
- The hero sits in a bordered frame. Frames are rare and reserved for the hero.
- Keep the header slim and quiet, and never repeat what the hero says.

### Typography: every font has one job
- **Serif** carries statements: the hero intro and the line under it. It's never used for UI.
- **Sans** carries everything you read: body text, names, titles and section titles.
- **Mono** carries metadata: navigation, dates, roles, stats, badges, footer and handles. It's small, quiet and often uppercase. It's never used for paragraphs or section titles; tiny mono titles proved unreadable.
- **Handwritten** appears exactly once on a page, as a short phrase in the accent color. Right now that's "curious by nature".
- Hierarchy comes from **role, size and tone of gray**, never from heavy weights. Keep everything at regular or medium weight.

### Color: neutrals do the work
- Text uses a few steps of neutral (ink, muted, faint), and every border and rule uses the line color.
- **Violet is the only accent, and it's scarce**: the primary button, the "Latest" badge, the handwritten phrase, hover states, project icons, and the dither ink. Never use it for large text, section backgrounds, or content borders.
- Tints are mixes of existing tokens. **Never add new colors or tokens** without asking. Every token exists in both light and dark.

### Shape and depth
- Everything is **square**. The only round things are dots and timeline nodes.
- No shadows, gradients or glass effects. Depth comes from rules, frames and texture.

### Texture: dithercn only
- Every background, texture, noise or animated pixel effect comes from **dithercn** (https://dithercn.dev). **Never hand-roll** CSS patterns, noise or shaders. The user has asked for this explicitly.
- Signature moments are **animated** dithercn components in the accent color, used sparingly. Right now that's the hero fire.
- Quiet textures use the line color so they stay behind the content. The hero noise band is animated; the separator bands use the engine's **static** hatched fill, which needs no JavaScript. The user compared noise and lines for the separators and chose lines.
- Project icons are dithercn's generated `Avatar`, not uploaded images, unless real logos are provided.
- Keep animated canvases few, since each one costs a WebGL context. Prefer static fills for anything repeated.
- How to add a component: [reference/dithercn.md](reference/dithercn.md).

### Motion: almost none
- Motion belongs to the dither canvases. UI motion is limited to gentle hover color changes, plus a small sideways nudge on link rows.
- One **arrival cue**: when a link jumps to Connect, its title box glows briefly with a violet dither so it's clear where you landed. Only the title box glows, never the content under it, and the title stays readable.
- No scroll reveals, parallax or bouncing. Respect reduced-motion settings.

### Content patterns
- **Rows, never card grids.** Projects are full rows with a generated icon, name, a one-sentence description, a role line, and traction stats (stars and downloads, fetched live at build time) aligned to one right edge with the link arrow. Never show dates on projects, and never show weak numbers; fall back to the language instead.
- **Experience** is a changelog timeline, with the current role marked "Latest".
- **Connect** is plain rows where the whole row is the link.
- **Buttons** come in two styles: a solid violet primary and a quiet outlined secondary. Use at most one of each per section.
- External links open in a new tab; email and on-site links don't.
- Pattern intent and where each one lives: [reference/patterns.md](reference/patterns.md).

### Data, not hardcoded content
- Lists live in `src/data/`, and pages import them. **The order in those files is the user's curated order. Never re-sort it.**
- Unfinished sections (like Writing) are commented out with a `NOTE`, not deleted.

### Theme
Light and dark are both first-class, and every change must look right in both.

### Copy voice
First person, plain, specific and short, like talking to someone rather than reading a résumé. See [reference/voice.md](reference/voice.md).

### Tech constraints
- Astro components with scoped styles and plain CSS. **No Tailwind, UI kits or CSS-in-JS.** A tiny `cn()` exists only because dithercn expects it.
- React is used only for dithercn islands. Everything else ships zero client JavaScript.
- Add dependencies only when they're truly needed, and ask first.

## Before finishing any UI work
- [ ] Values reused from `global.css` and existing components, with no new colors, fonts or one-off numbers
- [ ] Content stays in the column; separators and frames follow the existing pattern
- [ ] Each font used only for its role; one handwritten phrase per page; no heavy weights
- [ ] Violet used only as a small accent
- [ ] Any texture or animation comes from dithercn
- [ ] Data comes from `src/data/` in the user's order
- [ ] Checked in light and dark, on desktop and phone widths
- [ ] Copy follows the voice
- [ ] `pnpm check` passes; preview with `astro dev --background` (`astro dev stop` when done)
