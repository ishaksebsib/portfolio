# Patterns

What each building block is for and where it lives. Exact values are in the code. Open the file and reuse what's there.

## Contents
- Page shell
- Header
- Hero
- Section head
- Project rows
- Changelog timeline
- Link rows (Connect)
- Buttons
- Footer
- Sub-pages

## Page shell
Every page is `Base` → `.rails` → `SiteHeader` → content → `SiteFooter`. The rails and column are global classes in `global.css`. The rails make the page feel like a single framed sheet.

## Header (`src/components/SiteHeader.astro`)
A single quiet line. On the left is the `ishak.io` wordmark linking home. On the right are the section links and a bare theme icon. It never repeats the name, title or avatar, because the hero introduces me. Section navigation lives here, never as chips in the hero. Links are root-relative so they work from sub-pages.

## Hero (`src/pages/index.astro`)
A framed block sitting on a full-width animated noise band. It reads top to bottom as a short story:
1. **Who:** a one-line serif intro ("I'm Ishak, …").
2. **Why and what:** a smaller muted serif line that carries the handwritten phrase as the reason for my range.
3. **Now:** a small sans note on what I'm doing right now, with real names linked inline. Names and links live here, never in the big serif lines.
4. **Actions:** the primary "Book a call" button and a quiet "Send a message" that scrolls to Connect.
5. **Signature moment:** the dithercn fire rising from the bottom of the frame, with a thin noise strip under it.

The first section head sits flush against the hero, so their rules merge into one line.

## Section head (`src/components/SectionHead.astro`)
A full-width band with a hatched texture outside the column and a readable sans title inside it, plus corner marks. The title is sentence case; use "/" to combine ideas ("Changelog / Experience"). Never use a big display heading or tiny mono. The component also supports a back arrow for sub-pages and the arrival glow.

## Project rows (`src/components/ProjectRow.astro`, data in `src/data/projects.ts`)
A whole-row link with these parts:
- a generated dither icon
- the name, with the stats and arrow on the same line, all sharing one right edge
- a one-sentence description
- a quiet role line underneath

Stats prove traction: stars and downloads, fetched at build time by `src/lib/stats.ts`. Weak numbers are hidden, and the language shows instead. Icons in the stats are real SVGs, never text glyphs. Never show dates, never reserve empty slots, and never put stats in a separate column, because each of these breaks the alignment. The home page shows the featured projects and a "View all projects" button that links to the full list.

## Changelog timeline (data in `src/data/experience.ts`)
Each entry has dates, a node on a vertical line, then **Role · Company** and a one-sentence outcome. The current role is highlighted and marked "Latest". Summaries lead with impact and scale, not tech stacks.

## Link rows (Connect)
Plain rows with the platform name on the left and the handle on the right. The whole row is the link, and it nudges slightly on hover.

## Buttons (global `.button` in `global.css`)
Square and compact. The solid violet button is the one primary action; the outlined `ghost` button is the quiet second action. Never use more than one of each in a section.

## Footer (`src/components/SiteFooter.astro`)
One quiet mono line: copyright on the left, location and timezone on the right.

## Sub-pages
Open with `SectionHead` with a back arrow, which also serves as the page's main heading. See `src/pages/projects.astro`.
