import { db } from '$lib/server/db';
import { character } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const load = async () => {
	const characters = await db.query.character.findMany({
		orderBy: desc(character.createdAt)
	});

	return { characters };
};
