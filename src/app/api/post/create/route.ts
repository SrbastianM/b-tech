// app/api/posts/create/route.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { loadEnv } from "@/utils/configs/config_loader";
import { db } from "@/app/lib/db";
import { posts } from "@/app/lib/schema"; 
import { eq } from "drizzle-orm";

const jwtToken = loadEnv();

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded: any = jwt.verify(token, jwtToken.secretKey);
    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const { title, slug, content, tag} = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existing = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 }
      );
    }

    const newPost = await db
      .insert(posts)
      .values({
        title,
        slug,
        content,
        tag,
        authorId: decoded.userId,
        create_at: new Date(),   
      })
      .returning();

    return NextResponse.json(newPost[0], { status: 201 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
