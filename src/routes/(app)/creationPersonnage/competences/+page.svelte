<script lang="ts">
	import competences from '$lib/assets/competences.json';
</script>

<header class="p-5">
	<h1 class="mb-6 text-2xl font-bold">Compétences</h1>
	<p class="tagline hidden md:block">
		Les compétences marquées d'un * peuvent être prises plusieurs fois:
	</p>
</header>

<!-- MOBILE : cartes -->
<div class="grid grid-cols-1 gap-4 md:hidden">
	{#each Object.entries(competences) as [categorie, liste] (categorie)}
		<div class="rounded border border-stone-300 p-4">
			<h2 class="mb-2 text-xl font-bold">{categorie}</h2>

			{#each liste as liste, i (i)}
				<div class="mb-3 rounded border border-stone-200 p-3">
					<h3 class="text-lg font-semibold">
						{liste.name} <span class="text-sm text-stone-500">({liste.cost} PC)</span>
					</h3>

					<p class="mt-1">{liste.description}</p>

					{#if liste.prerequisites.length > 0}
						<p class="mt-2 text-sm">
							<strong>Prérequis :</strong>
							{liste.prerequisites.join(', ')}
						</p>
					{/if}

					{#if 'notes' in liste}
						<p class="mt-2 text-sm text-stone-600 italic">{liste.notes}</p>
					{/if}

					{#if 'specializations' in liste}
						<p class="mt-2 text-sm">
							<strong>Spécialisations :</strong>
							{liste.specializations?.join(', ')}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<!-- DESKTOP : table -->
<div class="hidden overflow-x-auto md:block">
	{#each Object.entries(competences) as [categorie, liste], i (i)}
		<h3 class="mt-10 mb-3 p-5 text-3xl font-bold">{categorie}</h3>

		<table class="mb-10 min-w-full border border-l-0 border-stone-200">
			{#if i == 0}
				<thead class="bg-stone-100">
					<tr>
						<th class="border border-l-0 border-stone-200 px-4 py-2 text-left">Nom</th>
						<th class="border border-stone-200 px-4 py-2 text-left">Coût</th>
						<th class="border border-stone-200 px-4 py-2 text-left">Description</th>
						<th class="border border-stone-200 px-4 py-2 text-left">Prérequis</th>
						<th class="border border-stone-200 px-4 py-2 text-left">Spécialisations</th>
					</tr>
				</thead>
			{/if}

			<tbody>
				{#each liste as item, i (i)}
					<tr class="odd:bg-white even:bg-stone-50">
						<td class="border border-l-0 border-stone-200 px-4 py-2 font-semibold">
							{item.name}
							{#if 'notes' in item}
								*
							{/if}
						</td>

						<td class="border border-stone-200 px-4 py-2">
							{item.cost}
						</td>

						<td class="border border-stone-200 px-4 py-2">
							{item.description}
						</td>

						<td class="border border-stone-200 px-4 py-2">
							{#if item.prerequisites.length > 0}
								{item.prerequisites.join(', ')}
							{:else}
								<span class="text-stone-400 italic">Aucun</span>
							{/if}
						</td>

						<td class="border border-stone-200 px-4 py-2">
							{#if 'specializations' in item}
								{item.specializations?.join(', ')}
							{:else}
								<span class="text-stone-400 italic">—</span>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/each}
</div>
