<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import { resolve } from '$app/paths';
	import { MoveRight } from '@lucide/svelte';
	let { data }: { data: PageServerData } = $props();
</script>

<main class="mx-auto grid max-w-480 grid-cols-1 xl:min-h-dvh xl:grid-cols-2">
	<secion class=" max-w-2xl space-y-6 border-l border-l-stone-200 p-12 font-monocode">
		<h1>Bonjour, {data.user.name}</h1>
		<p>Email : {data.user.email}</p>
		<p>Tickets : {data.user.userId}</p>

		<a class="btn icon" href={resolve('/account/inscription')}>Billetterie <MoveRight /></a>
		<form method="post" action="?/signOut" use:enhance>
			<button class="btn">Déconnecter</button>
		</form>
		<a href={resolve('/')}>Retour sur le site</a>
	</secion>
	<section class="border-l border-l-stone-200 p-12">
		<p class=" font-monocode">Mes Personnages:</p>
		<p>Pas de personnage. Une fois inscrit, vous pourrez ajouter votre personnage.</p>
		<a class="btn icon" href={resolve('/')}>Ajouter un personnage <MoveRight /></a>
	</section>
</main>
