# Poket — project guide for Claude Code

Poket ("Your money. Your clarity.") is a personal finance command centre for iPhone users in Malaysia (MYR, EN + BM).

## What this repo actually is
- A **Progressive Web App** (vanilla HTML/CSS/JS, no build step, no dependencies), installed on iPhone via Safari → Add to Home Screen.
- It is **not** a SwiftUI project. A native SwiftUI app is a planned later phase (see `docs/ROADMAP.md`) and requires a Mac with Xcode.
- Deployed as static files (GitHub Pages from `main`). **Pushing to `main` updates the user's live app** — work on branches.

## Files
| File | Role |
|---|---|
| `index.html` | Shell + all CSS (design tokens at top, dashboard styles at bottom) |
| `app.js` | Core: icons, i18n (`L.en`/`L.ms`), state `S`, persistence, calculations, all tabs, sheets, actions (`ACT`), import, backup/restore, boot |
| `dash.js` | Home dashboard ("Financial Command Centre"): widgets, SVG charts, detail sheets, customisation. Loaded **after** `app.js`; extends `IP` and `ACT` |
| `sw.js` | Offline cache. **Bump `VERSION` whenever any shipped file changes** and list new files in `FILES` |
| `manifest.webmanifest`, `icon-*.png` | PWA metadata |
| `docs/` | Assessment, roadmap, architecture/data model, design system |

## Rules
- **Single source of truth:** balances are always *derived* (`computeBalances()` = opening balance + non-pending transactions). Never store a computed balance. Transfers (`t:'trf'`) are never income or spending.
- Data lives in `localStorage` under the `poket:` prefix (`accounts`, `settings`, `plan`, `m-YYYY-MM`). Changing the shape requires a step in `migrate()` and must keep old backups restorable.
- Every user-facing string needs **both** EN and BM (`L` in app.js, `DL` in dash.js).
- Clearly label estimates vs actuals (`.est` / `.est.act` tags). Never present a projection as fact.
- Money formatting goes through `RM()` / `RM0()` (they honour the "Hide amounts" privacy setting).
- Colours only via CSS variables; light and dark are tuned separately (see `docs/DESIGN_SYSTEM.md`).
- Do not mark a screen done until it has been screenshotted (light + dark, iPhone 15 Pro and iPhone SE) and reviewed.

## Visual QA
Serve the folder (`python3 -m http.server 8123`) and drive it with Playwright using the iPhone device profiles. Seed **clearly labelled sample data** into the test browser's localStorage only — never ship sample data.
