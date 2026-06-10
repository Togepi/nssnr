<script lang="ts">
	import { createAuthClient } from 'better-auth/client';
	import { resolve } from '$app/paths';
	import { MoveRight, MoveLeft } from '@lucide/svelte';
	const authClient = createAuthClient();

	const signIn = async () => {
		await authClient.signIn.social({
			provider: 'discord',
			callbackURL: '/account/better-auth'
		});
	};
</script>

<main
	class="m-auto flex h-dvh w-full max-w-2xl flex-col gap-y-12 border-l border-l-stone-200 p-12 pt-44"
>
	<a class="flex items-end gap-2 font-monocode hover:underline" href={resolve('/')}
		><MoveLeft class="translate-y-0.5" strokeWidth={1.2} /> Retour sur le site</a
	>
	<p>
		La première chose à faire est de <a href="https://discord.gg/kGMnH6rHsq"
			>rejoindre le serveur discord</a
		>
		Celui ci nous garanti que nous pouvons communiquer avec vous. Une fois connecté au site, vous pouvez
		procéder à l'inscription. Le site web fournira aussi le formulaire pour créeer votre personnage.
	</p>
	<button class="btn icon" onclick={() => signIn()}>Connexion avec discord <MoveRight /> </button>
</main>
