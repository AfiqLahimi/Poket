# Poket design system (PWA)

## Colour tokens (CSS variables on `:root`)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | #F4F8FF | #101B2D | Page background |
| `--card` | #FFFFFF | #1A2B43 | Cards, sheets |
| `--ink` | #172B49 | #F4F7FC | Primary text |
| `--ink2` | #3A4D6B | #D3DEEC | Body text in cards |
| `--muted` | #718096 | #A7B8CF | Secondary text |
| `--line` | #E3EAF5 | #263B58 | Borders, dividers |
| `--soft` | #EDF2FA | #22354F | Tracks, chips, inputs |
| `--pri` | #2878E5 | #66A6FF | Primary actions, active states, charts |
| `--pri-deep` | #1554A5 | #3D86F0 | Pressed / emphasis |
| `--pri-soft` | #E6F0FD | #1F3A5E | Icon chips, ghost buttons, inactive bars |
| `--pos` / `--neg` / `--warn` | green / red / amber | brighter variants | Gains & income / expenses & losses / pending & warnings |
| `--hero-a` → `--hero-b` | #1554A5 → #2878E5 | #17427D → #2A65B8 | Overview hero gradient (darker in dark mode to avoid glare) |

Dark mode is not an inversion: cards sit lighter than the background, the blue is lifted to #66A6FF for contrast, shadows are removed in favour of borders, and the hero gradient is desaturated.

**Accessibility note:** `--muted` #718096 on #FFFFFF measures about 4.0:1, below WCAG AA (4.5:1) for small text. It is kept as specified. Recommended change: #66758C (about 4.6:1). Owner decision.

## Type
System font (SF Pro on iPhone), tabular numerals. Hero 34/700, section titles 17/700, widget value 19/700, labels 12/600, secondary 11.5/400.

## Layout
16px page gutter, 10px grid gap, 16px card radius, 22px hero radius. Two-column widget grid on all iPhones; tighter widget headers below 390px wide.

## Components
`hero2` (overview), `w` widget card (icon chip + title + value + subline + chart footer), `dsec` section header, `kvl` key/value rows in sheets, `expl` "How this is calculated" box, `est` / `est act` Estimate/Actual tags, `tog` switch, `cnt` count badge. Charts are inline SVG (`spark`, `bars`, `donut`, `stackBar`), so there are no dependencies and they work offline.

## Principles
Progressive disclosure: widgets show one number and one context line, and a tap opens the breakdown. Every derived figure explains its calculation. Estimates are always tagged.
