<script lang="ts">
	import equipement from '$lib/assets/equipement.json';
</script>

<!-- MOBILE : cartes -->
<div class="grid grid-cols-1 gap-4 md:hidden">
	{#each equipement as item (item.id)}
		<div class="rounded border border-stone-200 p-4">
			<h3 class="text-lg font-semibold">
				{item.nom}
				<span class="text-sm text-stone-500">({item.pe} PE)</span>
			</h3>

			<p class="mt-1">{item.description}</p>

			{#if item.competence}
				<p class="mt-2 text-sm">
					<strong>Compétence requise :</strong>
					{item.competence}
				</p>
			{/if}
		</div>
	{/each}
</div>

<!-- DESKTOP : table -->
<div class="hidden overflow-x-auto md:block">
	<h2 class="mt-10 mb-3 text-xl font-bold">Équipement</h2>

	<table class="mb-10 min-w-full border border-l-0 border-stone-200">
		<thead class="bg-stone-100">
			<tr>
				<th class="border border-stone-200">PE</th>
				<th class="border border-l-0 border-stone-200 px-4 py-2 text-left">Nom</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Description</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Compétence requise</th>
			</tr>
		</thead>

		<tbody>
			{#each equipement as item (item.id)}
				<tr class="odd:bg-white even:bg-stone-50"
					><td class=" border border-stone-200 text-center">
						{item.pe}
					</td>
					<td class="border border-l-0 border-stone-200 px-4 py-2 font-semibold">
						{item.nom}
					</td>

					<td class="border border-stone-200 px-4 py-2">
						{item.description}
					</td>

					<td class="border border-stone-200 px-4 py-2">
						{#if item.competence}
							{item.competence}
						{:else}
							<span class="text-stone-400 italic">Aucune</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
