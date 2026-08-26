import { db } from '$lib/server/db';
import { character } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { asc, eq } from 'drizzle-orm';

export const load = async ({ params }) => {
    const current = await db.query.character.findFirst({
        where: eq(character.id, params.id)
    });

    if (!current) {
        error(404, { message: 'Personnage introuvable' });
    }

    // Liste ordonnée des ids pour déterminer précédent/suivant
    const all = await db
        .select({ id: character.id })
        .from(character)
        .orderBy(asc(character.createdAt));

    const index = all.findIndex((c) => c.id === params.id);
    const prevId = index > 0 ? all[index - 1].id : null;
    const nextId = index < all.length - 1 ? all[index + 1].id : null;

    return { character: current, prevId, nextId };
};