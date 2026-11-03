import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are visible only in dev. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body = ''): string {
  const words = body.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function getTags(posts: Post[]): Map<string, number> {
  const tags = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) tags.set(tag, (tags.get(tag) ?? 0) + 1);
  }
  return new Map([...tags].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}
