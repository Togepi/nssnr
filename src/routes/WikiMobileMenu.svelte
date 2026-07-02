<script lang="ts">
	import { MenuIcon, MoveRight, X } from '@lucide/svelte';
	import sidebarLink from './sidebarLink.json';
	import discord from '$lib/assets/discord.svg';
	let isMenuOpen = $state(false);
</script>

<main class="z-40 md:hidden">
	<button
		onclick={() => {
			isMenuOpen = true;
		}}
		class="fixed top-2 left-2 z-30 rounded bg-stone-900 p-2 text-stone-200"
	>
		<MenuIcon size={44} />
	</button>
</main>

{#if isMenuOpen}
	<nav class="fixed inset-0 top-0 left-0 z-40 flex flex-col overflow-y-scroll bg-stone-100">
		<button
			onclick={() => {
				isMenuOpen = false;
			}}><X size={44} class="m-5" /></button
		>
		<div class="space-y-5 px-12">
			<a href="https://discord.gg/Kh5z3TpBr" rel="external" class="btn-secondary flex items-center gap-2"
				>Serveur discord <img src={discord} alt="icone discord" class="h-6 w-6" />
			</a>
		</div>

		<ul>
			{#each sidebarLink as { name, subMenu }, i (i)}
				<h3 class="mt-8 p-5 font-semibold">{name}</h3>
				<ul class="flex flex-col divide-y divide-dotted border-y border-dotted">
					{#each subMenu as { name, link, id } (id)}
						<a
							class=" bg flex items-center justify-between px-5 py-2 hover:underline"
							href={link}
							rel="external">{name} <MoveRight class="text-stone-500" /></a
						>
					{/each}
				</ul>
			{/each}
		</ul>
	</nav>
{/if}
