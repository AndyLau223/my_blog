import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Blog</h1>

      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {post.date} · {post.category}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
