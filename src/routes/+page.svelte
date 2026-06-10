<script lang="ts">
	import { resolve } from '$app/paths';
	import { MoveRight } from '@lucide/svelte';
</script>

<main class="md:flex">
	<img src="/landing_bg_mobile.webp" class=" object-cover object-right md:hidden" alt="" />
	<img
		src="/landing_bg_desktop.webp"
		class=" hidden object-cover object-right md:block md:max-w-xs xl:max-w-xl"
		alt=""
	/>
	<div
		class=" flex h-dvh w-full max-w-2xl flex-col border-l border-l-stone-200 p-12 pt-12 font-monocode md:pt-44"
	>
		<div class="space-y-4">
			<h1 class="text-2xl font-black md:text-5xl 2xl:text-9xl">NSSN REBORN</h1>
			<p>
				Jeu de rôle grandeur nature basé sur l'univers de Florian Seemuller : <a
					rel="external"
					target="_blank"
					href="https://nssn-jdr.com/">nssn jdr</a
				>
			</p>

			<p class="mt-12">Le monde est scindé en deux :</p>
			<p>
				D'un côté, une terre aride jonchée des débris de l'Ancien Monde, déchirée par le chaos
				constant
			</p>
			<p>
				De l'autre, une forêt magique infestée de créatures inconnues gagnant chaque jour un peu
				plus de terrain.
			</p>
		</div>
		<div class="mt-12 gap-5 space-y-2 *:border *:px-2 md:flex md:space-y-0">
			<p>19 Juillet</p>
			<p>Domaine de Monterey</p>
			<p>100chf</p>
		</div>

		<a class="btn icon mt-12" href={resolve('/wiki')}> Wiki <MoveRight /></a>
		<a class="btn icon mt-2" href={resolve('/account/better-auth')}>
			Infos Pratiques <MoveRight /></a
		>
		<a class="btn icon mt-2" rel="external" href="https://discord.gg/kGMnH6rHsq">
			Serveur Discord <MoveRight /></a
		>
		<a class="btn icon mt-2" href={resolve('/account/better-auth')}>
			Inscription / Connexion <MoveRight /></a
		>
	</div>
</main>
