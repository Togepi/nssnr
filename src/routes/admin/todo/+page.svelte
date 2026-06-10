<script lang="ts">
	import type { PageProps } from './$types';
	import { Dot } from '@lucide/svelte';
	let { data }: PageProps = $props();
</script>

<form
	method="POST"
	action="?/addTodo"
	class="mb-24 flex justify-between gap-1 rounded-lg border border-stone-300 bg-white p-2"
>
	<input
		type="text"
		name="titre"
		placeholder="Titre"
		required
		class="  border border-stone-200 p-1"
	/>

	<textarea name="description" placeholder="Description" class=" w-full border border-stone-200 p-1"
	></textarea>

	<input type="date" name="dueDate" class=" border border-stone-200" />

	<input
		type="text"
		name="assignedTo"
		placeholder="Assignée à"
		class=" border border-stone-200 p-1"
	/>

	<button type="submit" name="action" class="btn-admin"> Ajouter </button>
</form>

<div class="flex flex-col gap-2">
	{#each data.todos as { titre, dueDate, assignedTo, description }, i (i)}
		<form
			class="flex items-center justify-between gap-2 rounded border border-stone-200 bg-white p-2"
		>
			<section class="flex gap-2">
				<p>
					<input type="submit" value="" class="mr-2 aspect-square h-4 w-4 rounded border" />
				</p>
				<p>{titre}</p>
				<Dot />
				<p>{description}</p>
			</section>

			<section class="flex gap-2">
				<p>{assignedTo}</p>
				<Dot />
				<p>
					{dueDate
						? new Date(dueDate).toLocaleDateString('fr-FR', {
								day: '2-digit',
								month: 'long',
								year: 'numeric'
							})
						: '—'}
				</p>
			</section>
		</form>
	{/each}
</div>
