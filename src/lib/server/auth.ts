import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { env } from '$env/dynamic/private';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';

export const auth = betterAuth({
	secret: env.BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: 'pg' }),
	emailAndPassword: { enabled: true },
	plugins: [
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	],
	socialProviders: {
		discord: {
			clientId: env.DISCORD_CLIENT_ID as string,
			clientSecret: env.DISCORD_SECRET_KEY as string
		}
	},
	user: {
		additionalFields: {
			role: {
				type: ['pj', 'pnj', 'orga'],
				required: true,
				defaultValue: 'pj'
			}
		}
	}
});
