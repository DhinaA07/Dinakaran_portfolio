# Dinakaran A — Portfolio (Dark / Bento)

A modern dark-mode portfolio in the trending "bento grid + glassmorphism" style:
frosted-glass cards, an animated mesh-gradient glow, and a cursor-following spotlight.
No build step, no framework — just HTML, CSS, and a little JavaScript.

## Files

| File         | Purpose                                                     |
|--------------|-------------------------------------------------------------|
| `index.html` | Page structure and all content                              |
| `styles.css` | All styling (colors & accent gradient are CSS variables)    |
| `script.js`  | Scroll-reveal + cursor-spotlight glow on cards              |

Fonts (Sora, Manrope, JetBrains Mono) load from Google Fonts via the `<link>` tags
in `index.html`, so an internet connection is needed on first load.

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Customize

All theming is in `:root` at the top of `styles.css`:

- `--grad` — the accent gradient (currently cyan → emerald). Swap to e.g.
  `linear-gradient(120deg,#6366f1,#a855f7,#ec4899)` for violet/pink, etc.
- `--bg` / `--bg-2` — background darkness.
- The mesh glow colors live in `body::before` if you want to match a new accent.
- Content lives in `index.html` — edit the text directly.
- The hero "Available for opportunities" badge can be removed if not needed.

## Deploy

Push the folder to any static host:

- **GitHub Pages** — push to a repo, enable Pages on `main`.
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo.
- **Any web server** — copy the three files into the web root.

## Notes

- Confirm the LinkedIn URL (`linkedin.com/in/dinakaran07`) before sharing.
- Update the footer year if needed.
