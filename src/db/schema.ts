import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { todos } from './schema';

const tursoClient = createClient({
  // For development, you can use local SQLite file
  url: process.env.DATABASE_URL || 'file:local.db',
  // Add auth token for production Turso database
  authToken: process.env.DATABASE_AUTH_TOKEN,
  // Enable sync for offline capability
  syncUrl: process.env.DATABASE_SYNC_URL,
});

export const db = drizzle(tursoClient);