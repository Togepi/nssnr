<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	onMount(() => {
		const timer = setTimeout(() => {
			goto(resolve('/account/creationPersonnage'));
		}, 3000);

		return () => clearTimeout(timer);
	});
</script>

<div class="m-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center text-green-400">
	<div class="mb-6 text-6xl">✓</div>
	<h1 class="mb-4 text-4xl font-bold">Modification validé !</h1>
	<p class="text-stone-600">Redirection en cours...</p>
</div>
