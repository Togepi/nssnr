<script lang="ts">
	import especesJouables from '$lib/assets/espece.json';
</script>

<h1 class="mb-6 p-5 text-2xl font-bold">Espèces jouables</h1>

<!-- Version mobile : cartes -->
<div class="grid grid-cols-1 gap-4 xl:hidden">
	{#each especesJouables as { nom, population, taille, maquillage, id, capacites } (id)}
		<div class="rounded border border-stone-200 p-4">
			<h2 class="text-xl font-bold">{nom}</h2>

			<p><strong>Population :</strong> {population}</p>
			<p><strong>Taille :</strong> {taille}</p>
			<p><strong>Maquillage :</strong> {maquillage}</p>

			<h3 class="mt-3 font-semibold">Capacités positives</h3>
			<ul class="ml-5 list-disc">
				{#each capacites.positif as { nom, description, id } (id)}
					<li>
						<strong>{nom}</strong> — {description}
					</li>
				{/each}
			</ul>

			{#if capacites.negatif && capacites.negatif.length > 0}
				<h3 class="mt-3 font-semibold">Capacités négatives</h3>
				<ul class="ml-5 list-disc">
					{#each capacites.negatif as { nom, description, id } (id)}
						<li>
							<strong>{nom}</strong> — {description}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>

<!-- Version desktop : table -->
<div class="hidden overflow-x-auto xl:block">
	<table class="min-w-full border border-stone-300">
		<thead class="bg-stone-100">
			<tr>
				<th class="border border-stone-200 px-4 py-2 text-left">Nom</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Population</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Taille</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Maquillage</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Capacités positives</th>
				<th class="border border-stone-200 px-4 py-2 text-left">Capacités négatives</th>
			</tr>
		</thead>

		<tbody>
			{#each especesJouables as { nom, population, taille, maquillage, id, capacites } (id)}
				<tr class="odd:bg-white even:bg-stone-50">
					<td class="border border-stone-200 px-4 py-2 font-semibold">{nom}</td>
					<td class="border border-stone-200 px-4 py-2">{population}</td>
					<td class="border border-stone-200 px-4 py-2">{taille}</td>
					<td class="border border-stone-200 px-4 py-2">{maquillage}</td>

					<td class="border border-stone-200 px-4 py-2">
						<ul class="ml-5 list-disc">
							{#each capacites.positif as { nom, description, id } (id)}
								<li><strong>{nom}</strong> — {description}</li>
							{/each}
						</ul>
					</td>

					<td class="border border-stone-200 px-4 py-2">
						{#if capacites.negatif && capacites.negatif.length > 0}
							<ul class="ml-5 list-disc">
								{#each capacites.negatif as { nom, description, id } (id)}
									<li><strong>{nom}</strong> — {description}</li>
								{/each}
							</ul>
						{:else}
							<span class="text-stone-400 italic">Aucun</span>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
