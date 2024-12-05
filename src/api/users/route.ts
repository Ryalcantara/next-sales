import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
 
export async function GET() {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}