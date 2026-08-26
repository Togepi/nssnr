import type { character } from '$lib/server/db/schema';
import type { InferSelectModel } from 'drizzle-orm';

export type Character = InferSelectModel<typeof character>;
