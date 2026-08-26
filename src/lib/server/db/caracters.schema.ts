import { user } from './auth.schema';
import { jsonb, pgTable, text, timestamp, unique } from 'drizzle-orm/pg-core';

export const character = pgTable(
	'character',
	{
		id: text('id').primaryKey(),
		name: text('name').notNull(),
		playerName: text('playerName').notNull(),
		pronom: text('pronom'),
		age: text('age'),
		species: text('species'),
		faction: text('faction'),
		story: jsonb('story'),
		skills: jsonb('skills').$type<Record<string, number>>(),
		equipment: jsonb('equipment').$type<Record<string, number>>(),
		createdAt: timestamp('created_at').notNull().defaultNow(),
		updatedAt: timestamp('updated_at').notNull().defaultNow(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' })
	},
	(table) => [unique('character_user_id_unique').on(table.userId)]
);
