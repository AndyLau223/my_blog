import { getPostBySlug, getAllPosts } from "@/lib/posts";
import GiscusComments from "@/components/GiscusComments";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound()
  }

  const processed = await remark()
    .use(html)
    .process(post.content);
  return (
    <article className="prose prose-neutral">
      <h1>{post.title}</h1>

      <p className="text-sm text-gray-500">
        {post.date} ·{" "}
        <a
          href={`/category/${post.category}`}
          className="underline"
        >
          {post.category}
        </a>
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: processed.toString(),
        }}
      />
      <hr className="my-8" />
      <GiscusComments />
    </article>
  );

}
