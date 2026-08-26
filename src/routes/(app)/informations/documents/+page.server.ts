// +page.server.ts
import { db } from '$lib/server/db';
import { documents } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const allDocuments = await db
		.select({
			id: documents.id,
			filename: documents.filename,
			mimeType: documents.mimeType,
			size: documents.size,
			key: documents.key,
			createdAt: documents.createdAt,
			userName: user.name
		})
		.from(documents)
		.leftJoin(user, eq(documents.userId, user.id));

	return {
		documents: allDocuments
	};
};
