# Design: sreedharmb.com

The locked system. Every page shares it; change it on purpose, and this file is the rule.

## System
- Genre: editorial
- Shape of the first page: Split Studio (home), Long Document (Experience, About, posts), Index (Projects, Writing)
- Theme: Almanac, the register of a reference book: cool slate stock, blue-black ink, ruled tables, mono figures, one deep magenta
- Axes: mid / grotesk-sans / chromatic-magenta · posture: restrained (magenta under 5% of any screen)
- Modes: light and dark, from one token set (`data-theme` on `<html>`, saved in `localStorage.theme`)

## Tokens
`src/styles/tokens.css` is the source of truth; dark values and page roles live at the top of `src/styles/global.css`.
```css
:root {
  --color-paper: oklch(84% 0.012 245);  --color-paper-2: oklch(81% 0.012 245);  --color-paper-3: oklch(77% 0.012 245);
  --color-ink: oklch(16% 0.020 245);  --color-ink-2: oklch(24% 0.018 245);  --color-muted: oklch(38% 0.016 245);
  --color-rule: oklch(73% 0.013 240);  --color-rule-2: oklch(32% 0.018 240);  --color-sheet: oklch(93.5% 0.008 245);
  --color-accent: oklch(45% 0.180 350);  --color-accent-ink: oklch(97% 0.006 245);  --color-focus: oklch(46% 0.190 350);
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
- One `--color-paper-2` band and one ink band (the contact close) a page at most.
- Photographs: square plates with an inset hairline and a caption that states a fact.

## Controls
- Primary: magenta fill, accent-ink text, 2px radius, 48px tall. One a page.
- Secondary: 1px ink outline, same radius and height.
- Links: ink with a magenta underline that thickens on hover.

## Motion
- Still. Only state moves: hover colour, underline weight, a 1px press. Under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks can be added here on request.
