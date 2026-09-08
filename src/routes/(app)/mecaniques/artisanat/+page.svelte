<script lang="ts">
	import bricolage from '$lib/assets/artisanat/bricolage.json';
	import artificier from '$lib/assets/artisanat/artificer.json';
	import forgeronne from '$lib/assets/artisanat/forgeronne.json';
	import prothesiste from '$lib/assets/artisanat/prothesiste.json';
	import savantfou from '$lib/assets/artisanat/savantfou.json';
	import tanneuse from '$lib/assets/artisanat/tanneuse.json';
	import maitressemunition from '$lib/assets/artisanat/maitressemunition.json';
	import pharmacie from '$lib/assets/artisanat/pharmacie.json';
	import geneticienne from '$lib/assets/artisanat/geneticienne.json';
	import psychonaute from '$lib/assets/artisanat/psychonaute.json';

	type Recette = {
		id: number;
		nom: string;
		composants: Record<string, number | string | undefined>;
		effet: string;
		lieu: string;
	};
</script>

<main class="mx-auto max-w-480">
	<h1 class="mb-8 pt-24 text-center text-4xl font-bold">Artisanat</h1>
	<div class="prose">
		<p>
			Si vous avez pris des points de compétences dans un domaine d’artisanats.Vous pouvez choisir 3
			recettes que votre personnage connait dès le début du jeu dans ce domaine. À l’exception du
			bricolage, qui commence avec 5 recettes.
		</p>
		<p>
			Pour fabriquer les objets vous avez besoin de quatre éléments : un lieu, 3 minutes, votre
			personnage possède la recette et il possède les composants.
		</p>
		<p>
			Vous devez déposer les composants dans la boite composant de l’atelier, de l’infirmerie ou du
			magasin. Puis pendant 3 minutes, vous imitez la fabrication de l’objet. À la fin, vous
			produisez l’effet décrit dans la recette.
		</p>
		<h2>Le lieu</h2>
		<p>
			Si un lieu est indiqué, alors vous devez être sur ce lieu pour pouvoir fabriquer cet objet. Si
			le lieu est “partout”, cela veut dire que vous pouvez fabriquer l’objet n’importe où. Par
			contre, les objets fabricables partout ne vous laisse pas l’opportunité d’apprendre une
			nouvelle recette.
		</p>
		<h2>Apprendre une recette</h2>
		<p>
			À chaque que vous terminez une recette, vous tirez une carte du deck correspondant à votre
			spécialisation. Si la carte que vous tirez est la recette de l’objet fabriqué, vous pouvez
			apprendre une nouvelle recette. Il arrive, au cours du jeu, qu’une quête ou un objet vous
			donne comme récompense, “gagnez un niveau d’artisanat”. Dans ce cas, vous choisissez la
			recette que vous souhaitez apprendre, mais il faut avoir la compétence. Si un objet où une
			quête vous donne une recette que vous connaissez déjà, vous ne gagnez pas de nouvelle recette.
		</p>
	</div>
	{#snippet artisanat(domaine: Recette[])}
		<section class="pt-12">
			<!-- Version mobile : cartes -->
			<div class="block space-y-4 md:hidden">
				{#each domaine as { id, nom, composants, effet, lieu } (id)}
					<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
						<div class="mb-2 flex items-start justify-between border-b border-gray-200 pb-2">
							<h3 class="text-lg font-bold text-gray-900">{nom}</h3>
							{#if lieu && lieu !== ''}
								<span
									class="inline-flex shrink-0 items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium"
								>
									{lieu}
								</span>
							{:else}
								<span class="text-sm text-gray-400">—</span>
							{/if}
						</div>

						<div class="mb-2 border-b border-gray-200 pb-2">
							<span class="text-sm font-medium text-gray-500">Composants :</span>
							<div class="mt-1 flex flex-wrap gap-1">
								{#each Object.entries(composants) as [ressource, quantite], i (i)}
									<span
										class="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-xs font-medium"
									>
										{ressource} : {quantite}
									</span>
								{/each}
								{#if Object.keys(composants).length === 0}
									<span class="text-sm text-gray-400">—</span>
								{/if}
							</div>
						</div>

						<div>
							<span class="text-sm font-medium text-gray-500">Effet :</span>
							<p class="mt-1 text-sm text-gray-700">{effet}</p>
						</div>
					</div>
				{/each}
			</div>

			<!-- Version desktop : tableau -->
			<div class="hidden overflow-x-auto border border-gray-200 md:block">
				<table class="min-w-full divide-y divide-gray-200">
					<thead>
						<tr>
							<th
								class="border-r border-gray-200 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>
								Nom
							</th>
							<th
								class="border-r border-gray-200 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>
								Lieu
							</th>
							<th
								class="border-r border-gray-200 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>
								Composants
							</th>
							<th
								class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>
								Effet
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200 bg-white">
						{#each domaine as { id, nom, composants, effet, lieu } (id)}
							<tr class="hover:bg-gray-50">
								<td
									class="border-r border-r-gray-200 px-6 py-4 font-semibold whitespace-nowrap text-gray-900"
								>
									{nom}
								</td>
								<td class="border-r border-r-gray-200 px-6 py-4 whitespace-nowrap">
									{#if lieu && lieu !== ''}
										<span
											class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
										>
											{lieu}
										</span>
									{:else}
										<span class="text-sm text-gray-400">—</span>
									{/if}
								</td>
								<td class="border-r border-r-gray-200 px-6 py-4">
									<div class="flex flex-wrap gap-1">
										{#each Object.entries(composants) as [ressource, quantite], i (i)}
											<span
												class="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-xs font-medium"
											>
												{ressource} : {quantite}
											</span>
										{/each}
										{#if Object.keys(composants).length === 0}
											<span class="text-sm text-gray-400">—</span>
										{/if}
									</div>
								</td>
								<td class="px-6 py-4 text-sm text-gray-700">
									{effet}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	{/snippet}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Bricolage</h2>
	{@render artisanat(bricolage)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Artificière</h2>
	{@render artisanat(artificier)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Forgeronne</h2>
	{@render artisanat(forgeronne)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Prothésiste</h2>
	{@render artisanat(prothesiste)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Savante folle</h2>
	<p class="p-2 md:pl-12">
		Le deck d’invention folle contient des cartes “booms”, qui vous donne des effets négatifs.
	</p>
	{@render artisanat(savantfou)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Tanneuse</h2>
	{@render artisanat(tanneuse)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Maitresse munition</h2>
	<p class="p-2 md:pl-12">La maîtresse de la munition connait toutes les recettes dès le départ.</p>
	{@render artisanat(maitressemunition)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Pharmacie</h2>
	{@render artisanat(pharmacie)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Généticienne</h2>
	<p class="p-2 md:pl-12">
		Toutes les modifications génétiques coûtent 5x Chimiques et une opération de 10min. Il y a 5
		groupes de gènes modifiables : le groupe 01, 02, 03, 04, et 05. Pour chacun de ces groupes, il
		est possible de donner un pouvoir au personnage. Chaque altération est une opération qui prend
		10 min et qui coûte 5x Chimiques. À la fin de l'opération, vous pouvez faire une note sur le
		rôle du personnage de son nouveau pouvoir. Si un groupe de gènes qui donnaient un pouvoir est
		modifié, l'ancien pouvoir est perdu.
	</p>
	{@render artisanat(geneticienne)}
	<h2 class=" mt-12 p-2 text-4xl font-bold md:p-12">Psychonaute</h2>
	<p class="p-2 md:pl-12">
		Vous concoctez des drogues altérant votre état mental. Pendant l'effet, vous ne pouvez pas être
		soigné ou ignorer l'effet par une compétence. Une fois l'effet dissipé (“après le trip”), vous
		obtenez généralement un bonus, malus ou pouvoir, cumulable ou non, soignable/ignorable.
	</p>
	{@render artisanat(psychonaute)}
</main>
