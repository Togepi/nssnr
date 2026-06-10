<script lang="ts">
	import { resolve } from '$app/paths';
	import { MoveRight } from '@lucide/svelte';
</script>

<main class="m-auto flex h-dvh max-w-md flex-col justify-center gap-2 p-12 font-monocode">
	<p class="mb-12">Vous prenez des tickets en tant que :</p>
	<a class="btn icon" href={resolve('/account/inscription/nbrDePersonne')}>PJ <MoveRight /></a>
	<a class="btn icon" href={resolve('/account/inscription/nbrDePersonne')}>PNJ <MoveRight /></a>
</main>
