<script lang="ts">
	import especeJouables from '$lib/assets/espece.json';
	import competences from '$lib/assets/competences.json';
	import equipement from '$lib/assets/equipement.json';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { data } = $props();

	type Skill = { id: string; name: string };

	const especeMap = new Map<string, string>(especeJouables.map((e) => [String(e.id), e.nom]));

	const skillMap = new Map<string, string>(
		(Object.values(competences).flat() as Skill[]).map((s) => [s.id, s.name])
	);

	const equipmentMap = new Map<string, string>(
		equipement.map((item) => [String(item.id), item.nom])
	);

	function speciesName(id: string | null) {
		return id ? (especeMap.get(id) ?? id) : '—';
	}

	function skillsLabel(skills: Record<string, number> | null) {
		if (!skills || Object.keys(skills).length === 0) return '—';
		return Object.entries(skills)
			.map(([id, qty]) => {
				const name = skillMap.get(id) ?? id;
				return qty > 1 ? `${name} (x${qty})` : name;
			})
			.join(', ');
	}

	function equipmentLabel(equipment: Record<string, number> | null) {
		if (!equipment || Object.keys(equipment).length === 0) return '—';
		return Object.entries(equipment)
			.map(([id, qty]) => {
				const name = equipmentMap.get(id) ?? id;
				return `${name} x${qty}`;
			})
			.join(', ');
	}

	type LexicalNode = {
		type?: string;
		text?: string;
		children?: LexicalNode[];
	};

	function walkLexical(node: LexicalNode | undefined): string {
		if (!node) return '';
		if (node.type === 'text') return node.text ?? '';
		if (Array.isArray(node.children)) {
			return node.children.map(walkLexical).join(' ');
		}
		return '';
	}

	function storyPreview(story: unknown, maxLength = 80): string {
		if (!story || typeof story !== 'object') return '—';

		const root = (story as { root?: LexicalNode }).root;
		const text = walkLexical(root).trim();

		if (!text) return '—';
		return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
	}

	function formatDate(date: Date | string) {
		return new Date(date).toLocaleDateString('fr-CH', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}
</script>

<h1 class="p-8 text-3xl font-bold">Personnages ({data.characters.length})</h1>

<div class="overflow-x-auto px-8 pb-12">
	<table class="w-full border-collapse text-sm">
		<thead>
			<tr class="border-b border-stone-300 text-left">
				<th class="p-2">Nom PJ</th>
				<th class="p-2">Joueur</th>
				<th class="p-2">Pronom</th>
				<th class="p-2">Âge</th>
				<th class="p-2">Espèce</th>
				<th class="p-2">Faction</th>
				<th class="p-2">Compétences</th>
				<th class="p-2">Équipement</th>
				<th class="p-2">Histoire</th>
				<th class="p-2">Créé le</th>
			</tr>
		</thead>
		<tbody>
			{#each data.characters as char (char.id)}
				<tr
					class="cursor-pointer border-b border-stone-200 hover:bg-stone-50"
					onclick={() => goto(resolve('/admin/PJ/[id]', { id: char.id }))}
				>
					<td class="p-2 font-semibold">{char.name}</td>
					<td class="p-2">{char.playerName}</td>
					<td class="p-2">{char.pronom ?? '—'}</td>
					<td class="p-2">{char.age ?? '—'}</td>
					<td class="p-2">{speciesName(char.species)}</td>
					<td class="p-2">{char.faction ?? '—'}</td>
					<td class="p-2">{skillsLabel(char.skills)}</td>
					<td class="p-2">{equipmentLabel(char.equipment)}</td>
					<td class=" p-2 text-stone-600">{storyPreview(char.story)}</td>
					<td class="p-2 whitespace-nowrap text-stone-500">{formatDate(char.createdAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
