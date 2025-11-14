import { NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { posts } from '@/app/lib/schema';
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const post = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  if (post.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(post[0]);
}
