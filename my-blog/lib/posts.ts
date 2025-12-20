import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      content,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    content,
  };
}
