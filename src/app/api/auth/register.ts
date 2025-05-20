import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { db } from '@/app/lib/db';
import { users } from '@/app/lib/schema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await db.insert(users).values({
      username,
      email,
      passwordHash,
    });
    res.status(201).json({ message: `User successfully register` });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: `Error trying to register the user` });
  }
}
