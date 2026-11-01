// Writing = local Markdown posts in src/pages/blog/ plus external articles
// listed in profile.ts. Local posts need `title`, `date` and `description` in
// their frontmatter; `draft: true` hides one.
import { externalArticles } from './profile';

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
  date?: Date;
  dateLabel?: string;
  url: string;
  /** Set for articles hosted elsewhere, e.g. "LinkedIn". */
  source?: string;
};

const modules = import.meta.glob<MarkdownModule>('../pages/blog/*.md', { eager: true });

const label = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export function getPosts(): Post[] {
  const local: Post[] = Object.values(modules)
    .filter((m) => !m.frontmatter.draft && m.url)
    .map((m) => {
      const date = new Date(m.frontmatter.date);
      return {
        title: m.frontmatter.title,
        description: m.frontmatter.description,
        date,
        dateLabel: label(date),
        url: `${m.url}/`,
      };
    });

  const external: Post[] = externalArticles.map((a) => {
    const date = a.date ? new Date(a.date) : undefined;
    return {
      title: a.title,
      description: a.description,
      date,
      dateLabel: date && label(date),
      url: a.url,
      source: a.source,
    };
  });

  return [...local, ...external].sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}
