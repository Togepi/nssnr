<script lang="ts">
	import { resolve } from '$app/paths';
	import CharacterSheet from '$lib/components/CharacterSheet.svelte';
	let { data } = $props();
</script>

<nav
	class="sticky top-0 z-10 flex items-center justify-between border-b border-stone-300 bg-white/90 px-6 py-3 backdrop-blur"
>
	<a href={resolve('/admin/PJ')} class="text-sm underline hover:text-stone-600"
		>← Retour à la liste</a
	>

	<div class="flex gap-3">
		{#if data.prevId}
			<a
				href={resolve('/admin/PJ/[id]', { id: data.prevId })}
				class="rounded-full border border-stone-300 px-4 py-1 text-sm hover:bg-stone-100"
				>← Précédent</a
			>
		{/if}
		{#if data.nextId}
			<a
				href={resolve('/admin/PJ/[id]', { id: data.nextId })}
				class="rounded-full border border-stone-300 px-4 py-1 text-sm hover:bg-stone-100"
				>Suivant →</a
			>
		{/if}
	</div>
</nav>

<CharacterSheet character={data.character} />
