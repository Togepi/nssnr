import { user } from './auth.schema';
import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core';

export const characters = pgTable('character', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	age: text('age').notNull(),
	species: text('species').notNull(),
	faction: text('faction').notNull(),
	story: json('story'),
	skills: json('skills'),
	equipment: json('equipment'),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' })
});
