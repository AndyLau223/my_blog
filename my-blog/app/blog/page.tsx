import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog | My Blog",
  description: "All blogs posts and technical notes",
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="underline">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-gray-500">
              {post.date} ·{" "}
              <Link
                href={`/category/${post.category}`}
                className="underline"
              >
                {post.category}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
