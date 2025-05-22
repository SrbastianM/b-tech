import bcrypt from 'bcrypt';
import { db } from '@/app/lib/db';
import { users } from '@/app/lib/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await db.insert(users).values({
      username,
      email,
      passwordHash,
    });
    return NextResponse.json(
      { message: 'User successfully register' },
      { status: 201 }
    );
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { error: 'Error trying to register the user' },
      { status: 500 }
    );
  }
}
