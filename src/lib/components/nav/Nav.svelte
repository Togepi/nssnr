<script lang="ts">
	import { subMenu } from './nav';
	import { resolve } from '$app/paths';
	import discord from '$lib/assets/discord.svg';
</script>

<nav class="fixed z-30 h-16 w-full bg-stone-100">
	<section class="m-auto flex h-16 max-w-6xl items-center justify-between">
		<ul class="flex items-center gap-8 pl-6">
			<h1 class="  text-xl font-bold">NSSN REBORN</h1>
			{#each subMenu as { name, link }, i (i)}
				<li><a href={link} rel="external">{name}</a></li>
			{/each}
		</ul>
		<ul class="flex items-center justify-end gap-4 pr-6">
			<li>
				<a href="https://discord.gg/kGMnH6rHsq" rel="external"
					><img src={discord} alt="logo discord" class="mr-2 h-7 w-7" /></a
				>
			</li>

			<li><a class="btn" href={resolve('/account/better-auth/login')}>Inscription</a></li>
			<li><a class="btn-secondary" href={resolve('/account/better-auth/login')}>Connexion</a></li>
		</ul>
	</section>
</nav>
<div class="h-16"></div>
