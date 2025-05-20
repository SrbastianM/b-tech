import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { db } from '@/app/lib/db';
import jwt from 'jsonwebtoken';
import { users } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: `Email and password are required` });
  }

  try {
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    const user = userResult[0];

    if (!user) return res.status(404).json({ error: `User not found` });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: `Incorrect password` });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d',
    });
    res
      .status(200)
      .json({
        token,
        user: { id: user.id, username: user.username, role: user.role },
      });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: `Failure trying to login` });
  }
}
