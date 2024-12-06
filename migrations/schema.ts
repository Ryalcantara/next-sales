import { sqliteTable, AnySQLiteColumn, foreignKey, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const posts = sqliteTable("posts", {
	id: integer().primaryKey().notNull(),
	title: text().notNull(),
	content: text().notNull(),
	userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: integer("updated_at"),
});

export const users = sqliteTable("users", {
	id: integer().primaryKey().notNull(),
	name: text().notNull(),
	age: integer().notNull(),
	email: text().notNull(),
},
(table) => {
	return {
		emailUnique: uniqueIndex("users_email_unique").on(table.email),
	}
});

