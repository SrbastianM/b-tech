import { posts } from '@/app/lib/schema';
import { db } from '../db';
import { eq, sql } from 'drizzle-orm';

export async function getAllPost() {
  return await db.select().from(posts).orderBy(posts.create_at);
}

export async function getPostById(id: number) {
  return db.select().from(posts).where(eq(posts.id, id));
}

export async function createPost(title: string, content: string, tag: string) {
  const res = await db.insert(posts).values({
    title,
    content,
    tag,
  });

  return res;
}
