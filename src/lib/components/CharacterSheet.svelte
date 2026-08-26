<script lang="ts">
	import especeJouables from '$lib/assets/espece.json';
	import competences from '$lib/assets/competences.json';
	import equipement from '$lib/assets/equipement.json';
	import { lexicalToHtml } from '$lib/utils/lexicalToHtml';

	import type { Character } from '$lib/types';

	let { character }: { character: Character } = $props();

	type Skill = { id: string; name: string; cost: number };

	const especeMap = new Map<string, string>(especeJouables.map((e) => [String(e.id), e.nom]));
	const skillList = Object.values(competences).flat() as Skill[];
	const skillMap = new Map<string, Skill>(skillList.map((s) => [s.id, s]));
	const equipmentMap = new Map<string, string>(
		equipement.map((item) => [String(item.id), item.nom])
	);

	const speciesName = $derived(
		character.species ? (especeMap.get(character.species) ?? character.species) : null
	);

	const skillsEntries = $derived(
		Object.entries((character.skills ?? {}) as Record<string, number>).map(([id, qty]) => ({
			id,
			name: skillMap.get(id)?.name ?? id,
			cost: skillMap.get(id)?.cost ?? 0,
			qty
		}))
	);

	const equipmentEntries = $derived(
		Object.entries((character.equipment ?? {}) as Record<string, number>).map(([id, qty]) => ({
			id,
			name: equipmentMap.get(id) ?? id,
			qty
		}))
	);

	const storyHtml = $derived(lexicalToHtml(character.story));
</script>

<div class="mx-auto px-6 py-12">
	<header class="mb-10 border-stone-300 pb-6">
		<h1 class="text-5xl font-bold">{character.name}</h1>
		<p class="mt-2 text-stone-500">Joué par {character.playerName}</p>

		<dl
			class="mt-6 grid grid-cols-2 gap-4 *:rounded *:border *:border-stone-300 *:p-2 sm:grid-cols-4"
		>
			<div>
				<dt class="font-semibold text-stone-500">Pronom</dt>
				<dd>{character.pronom ?? '—'}</dd>
			</div>
			<div>
				<dt class="font-semibold text-stone-500">Âge</dt>
				<dd>{character.age ?? '—'}</dd>
			</div>
			<div>
				<dt class="font-semibold text-stone-500">Espèce</dt>
				<dd>{speciesName ?? '—'}</dd>
			</div>
			<div>
				<dt class="font-semibold text-stone-500">Faction</dt>
				<dd>{character.faction ?? '—'}</dd>
			</div>
		</dl>
	</header>

	{#if skillsEntries.length > 0}
		<section class="mb-10">
			<h2 class="mb-3 text-xl font-semibold">Compétences</h2>
			<ul class="flex flex-wrap gap-2">
				{#each skillsEntries as skill (skill.id)}
					<li class="rounded-full border border-stone-300 px-3 py-1 text-sm">
						{skill.name}{skill.qty > 1 ? ` (x${skill.qty})` : ''}
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if equipmentEntries.length > 0}
		<section class="mb-10">
			<h2 class="mb-3 text-xl font-semibold">Équipement</h2>
			<ul class="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
				{#each equipmentEntries as item (item.id)}
					<li class="flex gap-2 border-b border-stone-100 py-1">
						<span>{item.name}</span>
						<span class="text-stone-500">x{item.qty}</span>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<section>
		<h2 class="mb-3 text-xl font-semibold">Histoire</h2>
		<div class=" max-w-none">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html storyHtml}
		</div>
	</section>
</div>
