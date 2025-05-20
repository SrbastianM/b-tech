import { createPost, getAllPost } from '@/app/lib/queries/queries';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const post = await getAllPost();
  return NextResponse.json(post);
}

export async function POST(request: NextRequest) {
  const { title, content, tag } = await request.json();
  const res = await createPost(title, content, tag);
  return NextResponse.json(res);
}