import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { db } from '@/app/lib/db';
import jwt from 'jsonwebtoken';
import { users } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { loadEnv } from '@/utils/configs/config_loader';
import { NextRequest, NextResponse } from 'next/server';

const jwtToken = loadEnv();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and Password are required' },
      { status: 400 }
    );
  }

  try {
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    const user = userResult[0];

    if (!user)
      return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid)
      return NextResponse.json(
        { error: 'Incorrect Password' },
        { status: 401 }
      );

    const token = jwt.sign(
      { id: user.id, role: user.role },
      jwtToken.secretKey,
      {
        expiresIn: '1d',
      }
    );

    return NextResponse.json({
      token,
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (err: any) {
    console.log(err);
    NextResponse.json({ error: 'Failure Trying to login' }, { status: 500 });
  }
}
