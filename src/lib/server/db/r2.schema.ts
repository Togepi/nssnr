import { pgTable, text, varchar, timestamp, integer } from 'drizzle-orm/pg-core';

export const documents = pgTable('documents', {
	id: varchar('id').primaryKey(),
	userId: varchar('user_id').notNull(),
	filename: text('filename').notNull(),
	mimeType: text('mime_type').notNull(),
	size: integer('size').notNull(),
	key: text('key').notNull(),
	createdAt: timestamp('created_at').defaultNow()
});
