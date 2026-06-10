<script lang="ts">
	import { resolve } from '$app/paths';
	import { Plus } from '@lucide/svelte';
</script>

<main>
	<section class=" my-24 flex justify-between">
		<h1 class="title">Quêtes</h1>
		<a class="btn-admin icon gap-8" href={resolve('/admin/quetes/ajouterQuete')}>
			Ajouter une quête <Plus size={16} /></a
		>
	</section>
	<section class="space-y-6">
		<section class="space-y-6 rounded-lg border border-stone-300 bg-white p-5">
			<h2 class=" text-xl font-bold">Le sanglant phacophère</h2>
			<h3 class="font-bold">Etape 1</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
			<h3 class="font-bold">Etape 2</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
			<h3 class="font-bold">Récompense</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
		</section>
		<section class="space-y-6 rounded-lg border border-stone-300 bg-white p-5">
			<h2 class=" text-xl font-bold">Le sanglant phacophère</h2>
			<h3 class="font-bold">Etape 1</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
			<h3 class="font-bold">Etape 2</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
			<h3 class="font-bold">Récompense</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius repudiandae placeat
				eum! Ab accusamus repudiandae libero dolore quibusdam, voluptatibus distinctio perferendis
				laudantium aspernatur! Possimus voluptatibus error quos exercitationem cum.
			</p>
		</section>
	</section>
</main>
