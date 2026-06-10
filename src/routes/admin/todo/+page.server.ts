import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { todos } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	// Récupère toutes les todos
	const allTodos = await db.select().from(todos).orderBy(todos.createdAt);

	return {
		todos: allTodos
	};
};

export const actions: Actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData();

		const titre = formData.get('titre')?.toString();
		const description = formData.get('description')?.toString() ?? null;
		const dueDate = formData.get('dueDate')?.toString() ?? null;
		const assignedTo = formData.get('assignedTo')?.toString() ?? null;

		// Validation simple
		if (!titre || titre.length < 2) {
			return fail(400, { error: 'Le titre est obligatoire.' });
		}

		// Conversion date
		const parsedDate = dueDate ? new Date(dueDate) : null;

		// Insertion dans la DB
		await db.insert(todos).values({
			titre,
			description,
			dueDate: parsedDate,
			assignedTo
		});
	}
};
