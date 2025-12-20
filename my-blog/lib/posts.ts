import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content/posts");

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(postsDir, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${filename}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.title || !data.date || !data.category) {
    throw new Error(`Missing frontmatter in ${filename}`);
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    content,
  };
}

export function getAllPosts(): Post[] {
  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"));

  return files
    .map(parsePost)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parsePost(`${slug}.md`);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category == category
  );
}

export function getCategoryStats(): {
  name: string;
  count: number;
}[] {
  const posts = getAllPosts();
  const map = new Map<string, number>();

  for (const post of posts){
      map.set(post.category, (map.get(post.category) || 0) + 1);
  }


  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
}