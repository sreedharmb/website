// Blog posts are Markdown files in src/pages/blog/. Each needs `title`, `date`
// and `description` in its frontmatter, and `draft: true` hides it.

type Frontmatter = {
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
};

type MarkdownModule = { frontmatter: Frontmatter; url?: string };

export type Post = {
  title: string;
  description?: string;
  date: Date;
  dateLabel: string;
  url: string;
};

const modules = import.meta.glob<MarkdownModule>('../pages/blog/*.md', { eager: true });

export function getPosts(): Post[] {
  return Object.values(modules)
    .filter((m) => !m.frontmatter.draft && m.url)
    .map((m) => {
      const date = new Date(m.frontmatter.date);
      return {
        title: m.frontmatter.title,
        description: m.frontmatter.description,
        date,
        dateLabel: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        url: `${m.url}/`,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
