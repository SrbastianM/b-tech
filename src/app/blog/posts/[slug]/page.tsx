import React from 'react';
import { db } from '@/app/lib/db';
import { posts } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

async function getPost(slug: string) {
  const result = await db.select().from(posts).where(eq(posts.slug, slug));

  return result[0];
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.create_at?.toString()}</p>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
