# Patterns and spacing

Exact values used in `src/pages/index.astro`. Reuse them so sections share one rhythm. If a value you need isn't here, pick the nearest one rather than a new number.

## Contents
- Spacing scale
- Type sizes
- Section title
- Text rows (projects / writing / links)
- Changelog timeline
- Tags
- Status line
- Hero frame
- Footer

## Spacing scale
| Use | Value |
|---|---|
| Column side padding | `var(--gutter)` (24px) |
| Hero → first section head | 0. Flush, overlapping by 1px so the rules merge (`main.content` margin-top: -1px) |
| Section head inner padding | 12px vertical |
| Section body | 28px top, 48px bottom |
| Header padding | 56px top, 28px bottom |
| Hero frame body | 48px top, 36px bottom |
| Between rows | 10px |
| Between tags / chips | 8px |
| Inline gaps (dot→text, name→desc) | 10px |
| Timeline entry bottom | 22px |
| Footer | 20px top / 40px bottom |

## Type sizes
| Element | Font | Size / line-height / tracking |
|---|---|---|
| Body | sans | 15px / 1.6 |
| Statement | serif 400 | `clamp(22px, 4.6vw, 27px)` / 1.32 / -0.01em |
| Name, entry title | sans 500 | 15px |
| Role, row description | sans 400, `--muted` | 13–13.5px |
| Section title | sans 500, `--foreground`, sentence case | 16px / 1.5 / -0.01em |
| Status line | mono, uppercase, `--muted` | 11px / 0.12em |
| Tags | mono, uppercase, `--muted` | 10.5px / 0.1em |
| Dates, meta, footer | mono, `--faint` | 11px (footer uppercase, 0.08em) |
| Badge | mono, uppercase, `--primary` | 10px / 0.08em |

## Section title
```astro
<section id="projects">
  <SectionHead label="Projects" />
  <div class="column body">
    ...
  </div>
</section>
```
`SectionHead` renders the full-width separator band (static dithercn `hatched` fill, `--line` rules, corner marks) with the title inside the column. Titles are 16px sans, weight 500, `--foreground`, sentence case. Use `/` to combine ideas ("Changelog / Experience"). Keep them at this size: never a large display heading, and never tiny mono (it was unreadable).

## Text rows
```astro
<ul class="rows">
  <li>
    <a href="...">name</a>
    <span class="dim">one-line description</span>
    <span class="meta">meta</span>
  </li>
</ul>
```
- Name in `--foreground`, no underline, `--primary` on hover.
- Description is one line and truncates with an ellipsis. Don't wrap it.
- Meta is right-aligned via `margin-left: auto`.

## Changelog timeline
A 3-column grid: `92px` date | `20px` node | content. A 1px `--line` vertical rule connects the nodes. The current role gets `.latest`: a filled primary node with a halo, plus a `Latest` badge before the title. Title format: **Role** `· Company` (company in `--muted`). Below 520px, the date moves above the content.

## Tags
Small bordered mono chips that link to on-page anchors. Padding `4px 9px`, `1px solid var(--line)`, square. On hover, text becomes `--foreground` and the border becomes `--faint`.

## Status line
`● CURRENTLY BUILDING X ›`: a 6px primary dot with halo, uppercase mono, `--muted`. It goes above the hero statement, and there is only one per page.

## Hero frame
```
band (full width, NoiseField behind, 1px --line top/bottom)
└─ .column.frame (background fill, --line side borders, 4 corner squares)
   ├─ .frame-body: status line → statement (serif) → muted "Before that" statement → tags
   ├─ <Fire client:visible cell={4} height={0.8} style={{height: "150px"}} />
   └─ thin NoiseField strip (28px, top border)
```

## Footer
A single mono row, uppercase, `--faint`: `© YEAR NAME` on the left and `City, Country · UTC±N` on the right, with a `--line` rule above.
