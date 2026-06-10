<script lang="ts">
	import { Plus, Download, Trash } from '@lucide/svelte';
	import AjouterDocument from './ajouterDocument.svelte';
	let { data } = $props();
	let afficheAddDocument = $state(false);
</script>

<AjouterDocument bind:afficheAddDocument />
<main>
	<section class=" my-24 flex justify-between">
		<h1 class="title">Documents</h1>
		<button
			onclick={() => {
				afficheAddDocument = !afficheAddDocument;
			}}
			class="btn-admin icon gap-8"
		>
			Ajouter un document <Plus size={16} /></button
		>
	</section>
	<section class="space-y-6">
		{#each data.documents as { filename, createdAt, userName }, i (i)}
			<section
				class="flex items-center justify-between rounded-lg border border-stone-300 bg-white p-5"
			>
				<h2 class=" max-w-xs truncate text-xl font-bold">{filename}</h2>
				<p>Ajouter par : <span>{userName}</span></p>
				<p class="w-52 truncate">Date: <span>{createdAt}</span></p>

				<div class="flex items-center justify-end gap-8">
					<button class=" icon btn-admin-sm">Télécharger <Download size={16} /></button>
					<button class=" icon btn-admin-sm">Supprimer <Trash size={16} /></button>
				</div>
			</section>
		{/each}
	</section>
</main>
