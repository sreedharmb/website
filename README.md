# sreedharmb.com

Personal website of Sreedhar M B, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

- **Profile, experience, projects, skills:** `src/data/profile.ts`
- **Blog posts:** add a Markdown file to `src/pages/blog/` with this frontmatter:

  ```md
  ---
  layout: ../../layouts/Post.astro
  title: My post
  date: 2026-11-01
  description: One-line summary.
  ---
  ```

  Add `draft: true` to hide a post.
- **Colours and typography:** `src/styles/global.css`

## Deployment

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
The custom domain `sreedharmb.com` is set in **Settings → Pages**.
