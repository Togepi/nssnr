<script lang="ts">
	import { resolve } from '$app/paths';
	import sidebarLink from './sidebarLink.json';
	import type { Pathname } from '$app/types';
</script>

<nav
	class="fixed top-0 left-0 hidden min-h-screen w-80 flex-col justify-between border-r border-r-stone-200 p-2 pl-8 font-monocode xl:flex"
>
	<h1 class="font-black">NSSNR WIKI</h1>
	<ul>
		{#each sidebarLink as { name, subMenu }, i (i)}
			<h3 class="mt-8 font-black">{name}</h3>
			<ul>
				{#each subMenu as { name, link, id } (id)}
					<li><a class="pl-2 hover:underline" href={resolve(link as Pathname)}>{name}</a></li>
				{/each}
			</ul>
		{/each}
	</ul>
	<ul>
		<li><a href={resolve('/')}>Infos Pratiques</a></li>
		<li><a href={resolve('/')}>Mon compte</a></li>
	</ul>
</nav>
