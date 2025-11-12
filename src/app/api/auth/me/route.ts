import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { loadEnv } from '@/utils/configs/config_loader';
import { db } from '@/app/lib/db';
import { users } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

const jwtToken = loadEnv();

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader)
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });

  const token = authHeader.split(' ')[1];

  try {
    const decoded: any = jwt.verify(token, jwtToken.secretKey);
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.id))
      .limit(1);

    const user = userResult[0];
    if (!user)
      return NextResponse.json({ error: 'User not found' }, { status: 404 });

    return NextResponse.json({
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
