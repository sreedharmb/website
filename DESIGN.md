# Design: sreedharmb.com

The locked system. Every page shares it; change it on purpose, and this file is the rule.

## System
- Genre: editorial
- Shape of the first page: Split Studio (home), Long Document (Experience, About, posts), Index (Projects, Writing)
- Theme: Almanac's structure (ruled tables, mono figures, square corners), brightened: warm white paper, warm charcoal ink, a tangerine signal, one soft plum band (no blue or yellow: the owner's organisation uses that pairing)
- Axes: light / grotesk-sans / chromatic-tangerine · posture: full palette (paper, tangerine signal and contact band, plum band for the figures, charcoal ink)
- Modes: light and dark, from one token set (`data-theme` on `<html>`, saved in `localStorage.theme`)

## Tokens
`src/styles/tokens.css` is the source of truth; dark values and page roles live at the top of `src/styles/global.css`.
```css
:root {
  --color-paper: oklch(98.6% 0.008 80);  --color-paper-2: oklch(96% 0.016 70);  --color-paper-3: oklch(93% 0.022 70);
  --color-ink: oklch(22% 0.015 50);  --color-ink-2: oklch(30% 0.014 50);  --color-muted: oklch(45% 0.014 50);
  --color-rule: oklch(88% 0.012 70);  --color-rule-2: oklch(25% 0.015 50);  --color-sheet: oklch(99.6% 0.003 80);
  --color-accent: oklch(71% 0.185 50);  --color-accent-ink: oklch(20% 0.015 50);  /* tangerine fill, charcoal text on it */
  --color-accent-text: oklch(52% 0.165 42);  --color-focus: oklch(54% 0.170 42);  /* burnt orange where orange is text */
  --color-feature: oklch(80% 0.085 320);  --color-feature-ink: oklch(20% 0.015 50);  /* soft plum band */
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
- One plum band (the four figures) and one tangerine band (the contact close) a page at most; `--color-paper-2` for quieter bands.
- Photographs: natural colour, square plates with an inset hairline and a caption that states a fact.

## Controls
- Primary: tangerine fill, charcoal text, 2px radius, 48px tall. One a page.
- Secondary: 1px ink outline, same radius and height.
- Links: ink with a tangerine underline (the band's own colour on the tangerine band) that thickens on hover.

## Motion
- Still. Only state moves: hover colour, underline weight, a 1px press. Under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks can be added here on request.
