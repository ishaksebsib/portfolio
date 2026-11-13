# Adding a dithercn component

dithercn (https://dithercn.dev) is a shadcn-style registry. Components are copied into the repo as source code. This project has no Tailwind and doesn't use the shadcn CLI, so install components by hand.

## Install
1. Find the component in the catalog. Each item's JSON is at `https://dithercn.dev/r/<name>.json`, and the full list is at `https://dithercn.dev/r/registry.json`.
2. Check its `registryDependencies`. Most only need `dither-core`, which is already in `src/lib/dither/`. Install any others the same way.
3. Copy each file's `content` into `src/` using its `path` (for example, `components/dithercn/fire.tsx` goes to `src/components/dithercn/fire.tsx`):
   ```sh
   curl -sL https://dithercn.dev/r/<name>.json | jq -r '.files[0].content' > src/components/dithercn/<name>.tsx
   ```
4. If it relies on Tailwind classes that `global.css` doesn't already cover, add plain-CSS equivalents next to the existing dither stand-ins. Never add Tailwind.
5. Run `pnpm check`.

## Use
- **Animated** components (WebGL) hydrate only when visible (`client:visible`). They're sized by their container and colored with tokens, never raw colors.
- **Static** pieces (`fillStyle()` fills, `Avatar`) render on the server with no `client:` directive and no JavaScript. Prefer them for anything repeated.
- Match the chunky pixel look of the existing dithers: copy the props from a component already on the site.
- The engine re-colors itself when the theme changes. Check both themes anyway.

## Choosing
- **Signature moment:** an expressive animated component in the accent color, rarely, usually only in the hero.
- **Texture:** a quiet component in the line color that stays behind the content.
- Never put a dither behind body text unless it's masked or very faint.
- Delete component files once nothing uses them.
