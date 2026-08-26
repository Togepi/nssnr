<script lang="ts">
	import sidebarLink from '../sidebarLink.json';
	import discord from '$lib/assets/discord.svg';
	import { resolve } from '$app/paths';
</script>

<nav
	class="font-ui fixed top-0 left-0 flex h-screen w-60 flex-col justify-between overflow-y-scroll border-r border-r-stone-200 p-2 pl-8"
>
	<h1 class="font-black">NSSNR WIKI</h1>
	<ul>
		{#each sidebarLink as { name, subMenu }, i (i)}
			<h3 class=" my-2 mt-8 text-sm font-semibold text-stone-500">{name}</h3>
			<ul>
				{#each subMenu as { name, link, id } (id)}
					<li>
						<a class="  hover:underline" href={link} rel="external">{name}</a>
					</li>
				{/each}
			</ul>
		{/each}
	</ul>
	<ul class="space-y-2">
		<li>
			<a
				href={resolve('/account')}
				class="mr-5 flex items-center justify-between gap-5 rounded-full border border-stone-400 p-2 px-5"
				>Votre personnage</a
			>
		</li>
		<li>
			<a
				href="https://discord.gg/Kh5z3TpBr"
				rel="external"
				class="mr-5 flex items-center justify-between gap-5 rounded-full border border-stone-400 p-2 px-5"
				>Discord <img src={discord} alt="icone discord" class="h-6 w-6" /></a
			>
		</li>
	</ul>
</nav>
