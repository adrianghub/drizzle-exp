import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;