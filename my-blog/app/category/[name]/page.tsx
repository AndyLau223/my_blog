import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
    const posts = getAllPosts()
    const categories = Array.from(
        new Set(posts.map((p) => p.category))
    );

    return categories.map((name) => ({ name }));
}


export default async function CategoryPage({
    params,
}: { params: Promise<{ name: string }> }) {
    const { name } = await params;

    const posts = getAllPosts().filter(
        (post) => post.category === name
    );

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">
                Category: {name}
            </h1>

            {posts.length === 0 && (
                <p className="text-gray-500">
                    No posts found in this category.
                </p>
            )}

            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}