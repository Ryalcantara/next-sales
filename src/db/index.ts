// import { config } from 'dotenv';
// import { drizzle } from 'drizzle-orm/libsql';
// import * as schema from '@/db/schema'

// config({ path: '.env' });

// export const db = drizzle({ connection: {
//   url: process.env.TURSO_CONNECTION_URL!,
//   authToken: process.env.TURSO_AUTH_TOKEN!,
// }, schema});


// ! ONLINE CONFIG
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
const client = createClient({ url: process.env.DB_FILE_NAME! });
export const db = drizzle({ client });