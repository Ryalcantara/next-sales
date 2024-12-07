// import { config } from 'dotenv';
// import { defineConfig } from 'drizzle-kit';

// config({ path: '.env' });

// export default defineConfig({
//   schema: './src/db/schema.ts',
//   out: './migrations',
//   dialect: 'turso',
//   dbCredentials: {
//     url: process.env.TURSO_CONNECTION_URL!,
//     authToken: process.env.TURSO_AUTH_TOKEN!,
//   },
// });



// ! OFFLINE CONFIG
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Update the path to point to your .env.local file
config({ path: '.env.local' });

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});