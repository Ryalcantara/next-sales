import { NextResponse } from 'next/server';
import { db } from '@/db';
import { postsTable } from '@/db/schema';
 
export async function GET() {
  try {
    const posts = await db.select().from(postsTable);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}