# Design: sreedharmb.com

The locked system. Every page shares it; change it on purpose, and this file is the rule.

## System
- Genre: editorial
- Shape of the first page: Split Studio (home), Long Document (Experience, About, posts), Index (Projects, Writing)
- Theme: Almanac's structure (ruled tables, mono figures, square corners), brightened: warm white paper, deep navy ink, a vivid cobalt signal, one sunny yellow band
- Axes: light / grotesk-sans / chromatic-cobalt · posture: full palette (paper, cobalt signal and contact band, sun band for the figures, navy ink)
- Modes: light and dark, from one token set (`data-theme` on `<html>`, saved in `localStorage.theme`)

## Tokens
`src/styles/tokens.css` is the source of truth; dark values and page roles live at the top of `src/styles/global.css`.
```css
:root {
  --color-paper: oklch(98.6% 0.008 95);  --color-paper-2: oklch(96% 0.022 95);  --color-paper-3: oklch(93% 0.03 95);
  --color-ink: oklch(21% 0.035 265);  --color-ink-2: oklch(29% 0.03 265);  --color-muted: oklch(44% 0.025 265);
  --color-rule: oklch(88% 0.012 95);  --color-rule-2: oklch(26% 0.035 265);  --color-sheet: oklch(99.6% 0.003 95);
  --color-accent: oklch(52% 0.230 264);  --color-accent-ink: oklch(98.5% 0.006 95);  --color-focus: oklch(54% 0.230 264);
  --color-sun: oklch(89% 0.165 95);  --color-sun-ink: oklch(21% 0.035 265);
  --font-display: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Newsreader", ui-serif, Georgia, serif;
  --font-outlier: "IBM Plex Mono", ui-monospace, monospace;   /* dates and figures only */
  --radius-card: 0;  --radius-pill: 2px;  --rule-hair: 1px;  --rule-bar: 2px;  --shadow-card: none;
}
```
Spacing, type scale, easings and durations are the scaffold's and live in `tokens.css`. Twelve columns, 1440px container, 64px gutters.

## Type
- Headings: Hanken Grotesk 600, sentence case, tight tracking. The serif never sets a heading.
- Text, labels, captions: Newsreader 400/500. Labels are a step smaller, sentence case, muted, never capitals.
- Dates and figures: IBM Plex Mono with tabular numerals, right-aligned in columns.

## Surfaces
- Two rule weights: a 1px hairline between rows, a 2px firm line under a head or a table head. No cards, no shadows.
- The sheet (`--color-sheet` with a 2px ink rule at its head) holds a printed table: the career record.
- One sun band (the four figures) and one cobalt band (the contact close) a page at most; `--color-paper-2` for quieter bands.
- Photographs: natural colour, square plates with an inset hairline and a caption that states a fact.

## Controls
- Primary: cobalt fill, accent-ink text, 2px radius, 48px tall. One a page.
- Secondary: 1px ink outline, same radius and height.
- Links: ink with a cobalt underline (the band's own colour on the cobalt band) that thickens on hover.

## Motion
- Still. Only state moves: hover colour, underline weight, a 1px press. Under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks can be added here on request.
