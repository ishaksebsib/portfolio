# Adding a dithercn component

dithercn (https://dithercn.dev) is a shadcn-style registry. Components are copied into the repo as source code. This project has no Tailwind and doesn't use the shadcn CLI, so install components by hand.

## Install
1. Find the component name in the catalog (https://dithercn.dev). Each item's JSON is at `https://dithercn.dev/r/<name>.json`, and the full list is at `https://dithercn.dev/r/registry.json`.
2. Check its `registryDependencies`. Most only need `dither-core`, which is already installed in `src/lib/dither/`. Install any other dependency the same way.
3. Copy each file's `content` into `src/` using its `path`. For example, `components/dithercn/fire.tsx` goes to `src/components/dithercn/fire.tsx`:
   ```sh
   curl -sL https://dithercn.dev/r/<name>.json | jq -r '.files[0].content' > src/components/dithercn/<name>.tsx
   ```
4. If the component uses Tailwind classes that `src/styles/global.css` doesn't cover (the `.group\/dither` stand-ins at the end of that file), add a plain-CSS equivalent there. Don't add Tailwind.
5. Run `pnpm check`.

## Use
```astro
---
import { Fire } from "@/components/dithercn/fire";
---
<Fire client:visible cell={4} height={0.8} style={{ height: "150px" }} />
```
- Always use `client:visible`, so the canvas loads only when it's on screen.
- Size it with `style`. For a full-bleed layer, use `style={{ position: "absolute", inset: 0 }}` with a `position: relative` parent.
- `cell={4}` keeps the chunky pixel look used across the site.
- Colors: the default ink is `--dither-ink` (which is `--primary`). For quiet background textures, pass `color="--line"`. Don't pass raw color values.
- The engine re-colors itself when the theme changes. Check both themes anyway.

## Choosing a component
- **Signature moment** (hero, maybe one other place): an expressive component in the accent color, such as `Fire`.
- **Texture** (bands, strips, empty space): `NoiseField` in `--line`, at low contrast, so it stays behind the content.
- Keep it to about 3 canvases per page. Don't put a dither behind body text unless it uses a mask (`mask` prop) or low `intensity`.
- Remove component files that are no longer used.
