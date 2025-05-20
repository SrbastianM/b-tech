import { createPost, getAllPost } from '@/app/lib/queries/queries';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET() {
  const post = await getAllPost();
  return NextResponse.json(post);
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized', status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const { title, content, tag } = await request.json();
    const res = await createPost(title, content, tag);
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token', status: 403 });
  }
}
