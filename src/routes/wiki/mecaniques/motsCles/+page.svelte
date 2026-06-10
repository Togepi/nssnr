<script lang="ts">
	import motscles from '$lib/assets/motscles.json';
	import alterationsEtat from '$lib/assets/alterationsEtat.json';
</script>

<main class="mx-auto max-w-2xl">
	<h1>Mots-clés</h1>
	<p class="tagline">
		Le système de jeu se sert de certains mots-clés pour indiquer des effets. Les voici :
	</p>
	<section class="border border-stone-200">
		{#each motscles as { annonce, effet, id } (id)}
			<section class="border-b border-b-stone-200 pb-4">
				<section class="e divide-x p-5 font-bold">
					{#each annonce as mot, i (i)}
						<span class="pr-2 not-first:pl-2"> {mot} </span>
					{/each}
				</section>
				<section class="px-5 pb-5">{effet}</section>
			</section>
		{/each}
	</section>

	<h2 class="pt-12 text-3xl">Altérations d'état</h2>
	<p class="tagline">
		Les altérations d'état sont des effets que l'on peut retrouver dans plusieurs potions ou sorts.
		Elles peuvent être soignées par la médecine, ou par la magie. Il en existe six:
	</p>
	<section class="border border-stone-200">
		{#each alterationsEtat as { annonce, effet, id } (id)}
			<section class="border-b border-b-stone-200 pb-4">
				<section class="divide-x p-5 font-bold">
					{#each annonce as mot, i (i)}
						<span class="pr-2 not-first:pl-2"> {mot} </span>
					{/each}
				</section>
				<section class="px-5 pb-5">{effet}</section>
			</section>
		{/each}
	</section>
</main>
