import { getAllCategories, getAllPosts, getCategoryStats } from "@/lib/posts";
import Link from "next/link";

export default function CategoryIndexPage() {

    const stats = getCategoryStats();

    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Categories</h1>


            {stats.length === 0 && (
                <p className="text-gray-500">
                    No categories yet.
                </p>
            )}

            <ul className="space-y-4">
                {stats.map((stat) => (
                    <li key={stat.name}>
                        <Link href={`/category/${stat.name}`} className="underline">{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</Link>
                        <span className="text-sm text-gray-500 ml-2">({stat.count})</span>
                    </li>
                ))}
            </ul>
        </>
    );
}