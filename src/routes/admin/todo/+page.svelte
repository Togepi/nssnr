<script lang="ts">
	import type { PageProps } from './$types';
	import { Check, Dot } from '@lucide/svelte';
	let { data }: PageProps = $props();
	import { enhance } from '$app/forms';
</script>

<form
	use:enhance
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
	<div class="flex"><button type="submit" name="action" class="btn"> Ajouter </button></div>
</form>

<div class="flex flex-col gap-2">
	{#each data.todos as { id, titre, dueDate, assignedTo, description, completed } (id)}
		{#if !completed}
			<form
				use:enhance
				method="POST"
				action="?/completeTodo"
				class="flex items-center justify-between gap-2 rounded border border-stone-200 bg-white p-2"
			>
				<input type="hidden" name="id" value={id} />
				<section class="flex gap-2">
					<p>
						<button
							type="submit"
							aria-label="validation tâche"
							value=""
							class="group mr-2 aspect-square h-4 w-4 cursor-pointer rounded border"
						>
							<Check size={14} stroke-width={5} class="opacity-0 group-hover:opacity-100" />
						</button>
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
		{/if}
	{/each}
	{#each data.todos as { id, titre, dueDate, assignedTo, description, completed } (id)}
		{#if completed}
			<form
				use:enhance
				method="POST"
				action="?/completeTodo"
				class="flex items-center justify-between gap-2 rounded border border-green-200 bg-green-100 p-2 opacity-50"
			>
				<input type="hidden" name="id" value={id} />
				<section class="flex gap-2">
					<p>
						<button
							type="submit"
							aria-label="validation tâche"
							value=""
							class="mr-2 aspect-square h-4 w-4 rounded border"
							><Check size={14} stroke-width={5} /></button
						>
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
		{/if}
	{/each}
</div>
