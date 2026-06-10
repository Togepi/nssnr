<script>
	import { enhance } from '$app/forms';
	import { X } from '@lucide/svelte';

	let { afficheAddDocument = $bindable() } = $props();

	let uploading = false;
</script>

{#if afficheAddDocument}
	<form
		class="fixed top-1/2 left-1/2 flex max-w-7xl -translate-1/2 flex-col justify-between gap-12 rounded border bg-white p-12"
		method="POST"
		enctype="multipart/form-data"
		action="/api/upload"
		use:enhance={() => {
			afficheAddDocument = false;
		}}
	>
		<button
			class="cursor-pointer"
			onclick={() => {
				afficheAddDocument = false;
			}}
			><X />
		</button>

		<h2 class="text-2xl font-bold">Ajouter votre document</h2>
		<input type="file" name="file" />
		<button type="submit" disabled={uploading} class="btn-admin">Valider</button>
	</form>
{/if}
