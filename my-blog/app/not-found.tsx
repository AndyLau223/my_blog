import Link from "next/link";

export default function NotFound() {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold mb-4">
          Post not found
        </h1>
        <p className="text-gray-500 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/blog" className="underline">
          ← Back to Blog 
        </Link>
      </div>
    );
  }