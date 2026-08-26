<script lang="ts">
	import type { PageServerData } from './$types';
	import { resolve } from '$app/paths';
	import { MoveRight } from '@lucide/svelte';
	import { authClient } from '$lib/auth';

	let { data }: { data: PageServerData } = $props();

	let signOut = async () => {
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					window.location.href = '/';
				}
			}
		});
	};
</script>

<main class="mx-auto grid max-w-480 grid-cols-1 xl:min-h-dvh xl:grid-cols-2">
	<section class=" font-monocode max-w-2xl space-y-6 border-l border-l-stone-200 p-12">
		<h1>Bonjour, {data.user.name}</h1>
		<button class="cursor-pointer underline hover:text-blue-500" onclick={signOut}
			>Se Déconnecter</button
		>
		<a class="btn icon" href={resolve('/account/creationPersonnage')}
			>Ajouter / modifier mon personnage <MoveRight /></a
		>
	</section>
</main>
