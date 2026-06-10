import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
	id: serial('id').primaryKey(),

	titre: text('titre').notNull(),
	description: text('description'),

	// Date d'échéance
	dueDate: timestamp('due_date', { withTimezone: false }),

	// Personne assignée (string pour le moment)
	assignedTo: text('assigned_to'),

	// Statut (optionnel mais utile)
	completed: boolean('completed').default(false).notNull(),

	// Date de création
	createdAt: timestamp('created_at').defaultNow().notNull()
});
