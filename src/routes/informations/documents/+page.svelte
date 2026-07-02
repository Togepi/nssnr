<script lang="ts">
	import { Download } from '@lucide/svelte';
	let { data } = $props();

	async function download(key: string) {
		const res = await fetch(`/api/download/${key}`);
		const { url } = await res.json();

		window.location.href = url;
	}
</script>

<main class="m-auto max-w-2xl">
	<section class=" my-24 flex justify-between">
		<h1 class="title">Documents</h1>
	</section>
	<section class="space-y-6 px-5 md:px-0">
		{#each data.documents as { filename, key }, i (i)}
			<section
				class="flex flex-col items-center justify-between rounded-lg border border-stone-300 bg-white p-5 md:flex-row"
			>
				<h2 class=" max-w-xs truncate text-xl font-bold">{filename}</h2>

				<p class="flex items-center justify-end gap-8">
					<button class=" btn flex items-center justify-between gap-2" onclick={() => download(encodeURIComponent(key))}
						>Télécharger <Download size={16} /></button
					>
				</p>
			</section>
		{/each}
	</section>
</main>
