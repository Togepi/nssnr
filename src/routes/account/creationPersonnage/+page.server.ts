import { db } from '$lib/server/db';
import { character } from '$lib/server/db/schema';
import { error, fail, redirect } from '@sveltejs/kit';
import equipement from '$lib/assets/equipement.json';
import competences from '$lib/assets/competences.json';
import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';
import z from 'zod';

const characterSchema = z.object({
	name: z.string().trim().min(1, 'Le nom est requis'),
	playerName: z.string().trim().min(1, 'Le nom est requis'),
	age: z.string().trim().optional(),
	pronom: z.string().trim().optional(),
	species: z.string().trim().optional(),
	faction: z.string().trim().optional(),
	skills: z.record(z.string(), z.coerce.number()).optional(),
	equipment: z.record(z.string(), z.coerce.number()).optional(),
	story: z.string().transform((val) => JSON.parse(val))
});

export const load = async ({ locals }) => {
	if (!locals.user) {
		return error(404, { message: 'Non authentifié' });
	}
	const existing = await db.query.character.findFirst({
		where: eq(character.userId, locals.user.id)
	});

	return { character: existing ?? null };
};

export const actions = {
	default: async ({ request, locals }) => {
		if (!locals.user) {
			return error(404, { message: 'Non authentifié' });
		}
		const formData = await request.formData();

		const equipmentEntries = (equipement as { id: number }[])
			.map((item) => {
				const qty = formData.get(`equipment[${item.id}]`);
				return qty && Number(qty) > 0 ? [item.id, Number(qty)] : null;
			})
			.filter((entry): entry is [number, number] => entry !== null);

		const allSkills = Object.values(competences).flat() as { id: string; unique: 'yes' | 'no' }[];

		const skillsEntries = allSkills
			.map((skill) => {
				const val = formData.get(`skills[${skill.id}]`);
				if (skill.unique === 'yes') {
					return val ? [skill.id, 1] : null;
				}
				const qty = val ? Number(val) : 0;
				return qty > 0 ? [skill.id, qty] : null;
			})
			.filter((entry): entry is [string: number] => entry !== null);
		console.log(skillsEntries);
		const raw = {
			...Object.fromEntries(formData),
			equipment: Object.fromEntries(equipmentEntries),
			skills: Object.fromEntries(skillsEntries)
		} as Record<string, unknown>;

		const parsed = characterSchema.safeParse(raw);
		if (!parsed.success) {
			return fail(422, { error, values: raw, errors: z.flattenError(parsed.error).fieldErrors });
		}
		const existing = await db.query.character.findFirst({
			where: eq(character.userId, locals.user.id)
		});
		if (existing) {
			await db.update(character).set(parsed.data).where(eq(character.userId, locals.user.id));
		}

		if (!existing) {
			await db
				.insert(character)
				.values({
					id: randomUUID(),
					...parsed.data,
					userId: locals.user.id
				})
				.onConflictDoUpdate({
					target: character.userId,
					set: parsed.data
				});
		}

		redirect(303, '/account/creationPersonnageSuccess');
	}
};
