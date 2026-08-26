<script lang="ts">
	import { resolve } from '$app/paths';
	import especeJouables from '$lib/assets/espece.json';
	import competences from '$lib/assets/competences.json';
	import equipement from '$lib/assets/equipement.json';
	import Editor from '$lib/components/editor/Editor.svelte';

	let { data } = $props();
	let submitting = $state(1);

	let initiale = $derived(data.character);

	let editorRef: ReturnType<typeof Editor> | undefined = $state();

	let storyValue = $derived(data.character?.story ? JSON.stringify(data.character.story) : '');

	function handleSubmit() {
		console.log('handleSubmit appelé, editorRef =', editorRef);
		if (editorRef) {
			storyValue = editorRef.getJSON();
			console.log('storyValue mis à jour =', storyValue);
		} else {
			console.log('❌ editorRef est undefined !');
		}
	}
</script>

<div class="p-2">
	<a class="m-5 p-2 underline hover:text-stone-600" href={resolve('/')}>Retour sur le site </a>
</div>

<h1 class="m-auto flex justify-center p-12 text-5xl font-bold">Création de personnage</h1>

<form
	method="POST"
	onsubmit={handleSubmit}
	class="m-auto mb-24 flex max-w-275 flex-col px-5 lg:px-0"
>
	<label for="name" class="mt-4 font-semibold">Votre nom de PJ</label>
	<input type="text" name="name" id="name" required value={initiale?.name ?? ''} />
	<label for="playerName" class="mt-4 font-semibold">Votre nom de personnage</label>
	<input
		type="text"
		name="playerName"
		id="playerName"
		required
		value={initiale?.playerName ?? ''}
	/>
	<label for="pronom" class="mt-4 font-semibold">Le pronom de votre personnage</label>
	<input type="text" name="pronom" id="pronom" value={initiale?.pronom ?? ''} />
	<label for="age" class="mt-4 font-semibold">L'âge de votre personnage</label>
	<input type="text" name="age" id="age" value={initiale?.age ?? ''} />
	<label for="faction" class="mt-4 font-semibold">La faction de votre personnage</label>
	<input type="text" name="faction" id="faction" value={initiale?.faction ?? ''} />
	<label for="species" class="mt-12 font-semibold">L'espèce de votre personnage</label>
	<div class="flex flex-wrap">
		{#each especeJouables as { nom, id } (id)}
			<label
				class="m-2 cursor-pointer rounded border border-stone-300 p-1 px-2 hover:border-stone-500 hover:bg-white has-checked:border-stone-500 has-checked:bg-white"
			>
				<input type="radio" name="species" value={nom} checked={initiale?.species == nom} />
				{nom}
			</label>
		{/each}
	</div>
	<label for="skills" class="mt-12 font-semibold">Les compétences de votre personnage</label>
	<div>
		{#each Object.entries(competences) as [categorie, liste] (categorie)}
			<div class="my-2 text-sm font-semibold">{categorie}</div>
			<div class="flex flex-col gap-2 lg:grid lg:grid-cols-3">
				{#each liste as { name, cost, unique, id } (id)}
					<label
						class=" flex cursor-pointer justify-between rounded border border-stone-300 p-1 px-2 hover:border-stone-500 hover:bg-white has-checked:border-stone-500 has-checked:bg-white {(initiale
							?.skills?.[id] ?? 0) > 0
							? 'bg-white'
							: ''}"
					>
						{#if unique === 'yes'}
							<input
								type="checkbox"
								name="skills[{id}]"
								checked={(initiale?.skills?.[id] ?? 0) > 0}
							/>
							{name}
							<span class="opacity-50">({cost})</span>
						{/if}
						{#if unique === 'no'}
							<input
								type="number"
								name="skills[{id}]"
								value={initiale?.skills?.[id] ?? 0}
								class="max-w-16"
							/>
							{name}
							<span class="opacity-50">({cost})</span>
						{/if}
					</label>
				{/each}
			</div>
		{/each}
	</div>
	<label for="equipment" class="mt-12 font-semibold">Les équipements de votre personnage</label>
	<div class="lg:grid lg:grid-cols-2">
		{#each equipement as item (item.id)}
			<label
				class="m-2 flex cursor-pointer justify-between rounded border border-stone-300 p-1 px-2 hover:border-stone-500 hover:bg-white has-checked:border-stone-500 has-checked:bg-white"
			>
				<div>
					{item.nom}
					<span class="text-sm text-stone-500">({item.pe} PE)</span>

					{#if item.competence}
						<span class="text-xs"
							>*
							{item.competence}</span
						>
					{/if}
				</div>

				<input
					type="number"
					name="equipment[{item.id}]"
					min="0"
					value={initiale?.equipment?.[item.id] ?? 0}
				/>
			</label>
		{/each}
	</div>
	<label for="equipement" class="mt-12 font-semibold">L'histoire de votre personnage</label>
	<div class="mb-12 w-full">
		<Editor bind:this={editorRef} initialContent={data.character?.story ?? null} />
		<input type="hidden" name="story" value={storyValue} />
	</div>

	<button
		type="submit"
		class=" flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-2 text-center hover:bg-stone-800 {submitting ===
		2
			? 'opacity-50'
			: ''} {submitting === 3 ? 'bg-green-700 text-green-200' : 'bg-stone-950 text-stone-50'}"
		>Valider
	</button>
</form>

<style>
	input {
		background-color: white;
		border: 1px solid #cccccc;
		border-radius: 4px;
		padding: 1px 1px 1px 4px;
		margin-top: 2px;
		box-shadow: 0 0 5px rgb(235, 233, 233);
	}
</style>
