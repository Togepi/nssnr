<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
</script>

<Nav />
<section
	class=" relative my-12 max-w-480 bg-cover bg-right py-52 text-center"
	style="background-image: url(/images/bg/landing_hero_bg_desktop.jpg)"
>
	<div class="m-auto max-w-5xl">
		<p class=" my-12 flex items-center justify-center gap-2 font-medium">
			Basé sur l'univers de Florian Seemuller : <a
				class="flex items-center rounded-full border border-stone-800 px-4 py-1 text-sm no-underline"
				rel="external"
				target="_blank"
				href="https://nssn-jdr.com/"
			>
				<span class=" no-underline">nssn jdr</span>

				<ArrowUpRight size={12} />
			</a>
		</p>
		<h1 class="text-6xl font-semibold tracking-tighter text-balance">
			Nssn Reborn, le jeu de rôle grandeur nature
		</h1>

		<div class="font-futur mt-6 space-y-2 text-4xl font-semibold">
			<p class="text-center">31 octobre - Genève - 100chf</p>
		</div>

		<div class="mt-6 flex items-center justify-center gap-6">
			<p class="btn">Pré-Inscription ouverte dès le 1er juillet</p>
		</div>
	</div>
</section>
<main class="m-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-44 *:px-5 md:grid-cols-2">
	<article class="pr-24">
		<img
			src="/images/bg/landing_intention_bg.jpg"
			class="h-full w-full rounded-2xl object-cover object-right"
			alt=""
		/>
	</article>

	<article class="  text-stone-950">
		<div class="max-w-2xl">
			<h2 class="  text-6xl font-semibold tracking-tighter">Note d'intention</h2>
			<div class="font-futur mt-12 gap-12 space-y-2 text-xl font-semibold">
				<p>
					D'un côté, une terre aride jonchée des débris de l'Ancien Monde, déchirée par le chaos
					constant.
				</p>
				<p>
					De l'autre, une forêt magique infestée de créatures inconnues gagnant chaque jour un peu
					plus de terrain.
				</p>
			</div>
			<div class="mt-12 space-y-6">
				<h2 class="font-futur text-3xl font-bold">Synopsis</h2>
				<p class="italic">
					Il y deux semaines, une comète écarlate a traversé le ciel du Petit Monde. Elle a appontée
					le Sanctuaire de L'Éveil.
				</p>
				<p>
					La Vieille Prophétie est en marche. Tous les peuples du Petit Monde ont constaté la voûte
					céleste se draper d’un rouge sanguin. L'avènement de la Lune Rouge débute. Le retour de la
					magie s’affirme imminent. Le pèlerinage du Sanctuaire de L’Éveil anime toute la région.
					Les foules affluent, mais rares sont les personnes qui sont acceptées dans l’enceinte du
					lieu sacré.
				</p>
				<p>
					Vous habitez le sanctuaire ou vous avez réussi à obtenir un accès, peut-être illicite. Il
					va falloir respecter les règles du lieu, sinon Crépuscule Sanglant se montrera sans pitié.
					Azal Araki, prophétesse et maîtresse ultime du culte, garde jalousement l’accès à la
					comète sacrée. L'interprétation de la Prophétie divise, mais une chose est sûre, son
					accomplissement dictera le futur de la région.
				</p>
			</div>
		</div>
		<div class="flex">
			<a href="/" rel="external" class="btn mt-12">Note d'intention complète</a>
		</div>
	</article>
	<section class=" t mx-auto max-w-7xl bg-cover bg-right">
		<div class=" max-w-2xl space-y-6">
			<h2 class="font-futur text-5xl font-bold">Disclaimers</h2>

			<p>
				Ce GN n’est pas la suite des précédents GN qui s'inscrivent dans l’univers de NSSN. Nous
				avons décidé de faire table rase du passé afin de permettre à tout le monde de s’y retrouver
				après les nombreux évènements des GN I à V. Par ailleurs, nous nous permettons de vous
				rappeler ici que Florian Seemüller, créateur du JDR et organisateurs des précédents GN,
				n’est plus organisateur du GN et que nous écrivons celui-ci avec son accord. De ceci va
				découler plusieurs conséquences :
			</p>
			<p>
				- La structure et/ou les mécaniques peuvent avoir changé et/ou évloué en fonction de ce que
				nous voulons raconter.
			</p>
			<p>
				- Notre méthode de travail n’est pas la même que celle de Florian donc il y aura des
				chagements fondamentaux entre les précédentes éditions et celle-ci.
			</p>
			<p>
				Malgré tout, nous essayons au maximum de garder l’identité “bac à sable” du GN qui plait
				tant à son public.
			</p>
		</div>
	</section>
	<section class=" t mx-auto max-w-7xl bg-cover bg-right">
		<div class=" max-w-2xl space-y-6">
			<h2 class="font-futur text-5xl font-bold">Trigger Warnings</h2>

			<p>
				Dans ce jeu, il est possible, d’une manière ou d’une autre que vos personnages soient en
				contact avec les thèmes suivants
			</p>
			<ul class="list-disc">
				<li>Violence et agression (pouvant mener à la mort)</li>
				<li>Visuel gore (sang, organe)</li>
				<li>Maladie léthale</li>
				<li>Famine</li>
				<li>Génocide</li>
				<li>Paralysie / claustrophobie</li>
				<li>Mort-vivant</li>
				<li>Suicide</li>
				<li>Trouble psychique (schizophrénie, paranoïa,…)</li>
				<li>Désastre naturel</li>
				<li>Violence spéciste</li>
				<li>Nudité</li>
				<li>Sonorité forte (explosion, alarme)</li>
				<li>Lumière stroboscopique</li>
			</ul>
		</div>
	</section>

	<h2 class="font-futur col-span-2 text-5xl font-bold">Les factions jouables</h2>
	<article><img src="./images/bg/landing_bgCrepuscule.jpg" alt="" class=" rounded-2xl" /></article>

	<a href="/" rel="external" class=" flex flex-col justify-between">
		<div class="flex h-1/3 items-center justify-center">
			<img src="./images/logo_crepuscule.png" alt="roue dentée" class="h-44 w-44" />
		</div>

		<div>
			<h2 class="text-3xl font-bold uppercase">Crépuscule sanglant</h2>
			<p>
				La faction armée du culte. Elle veille à la protection du sanctuaire et de ses principes.
				Intransigeant mais juste, le Crépuscule bénéficie d’un soutien financier conséquent et d’un
				sens de la hiérarchie très développé. Il ne possède aucune velléité expansionniste et est
				obsédé par le combat final que leur promet la Lune Rouge. Ses membres d’exceptions, les
				Shamans, promulguent de puissantes prophéties qui transcendent le morale des troupes. Chaque
				membre devient alors une arme de destruction massive inarrêtable, guidée seulement par sa
				prophétie.
			</p>
		</div>

		<p class="   text-lg font-medium group-hover:block">
			<strong>Objectif:</strong> <br /> Garantir la sécurité du sanctuaire
		</p>

		<p class=" btn-secondary">
			Page wiki <ArrowUpRight size={12} />
		</p>
	</a>
	<a href="/" rel="external" class=" flex flex-col justify-between">
		<div class="flex h-1/3 items-center justify-center">
			<img src="./images/logo_aube.png" alt="roue dentée" class="h-44 w-44" />
		</div>

		<div>
			<h2 class="text-3xl font-bold uppercase">Aube Écarlate</h2>
			<p>
				La faction marchante du culte. Plus pragmatique que le Crépuscule, l'Aube saisit chaque
				opportunité d’enrichir le Culte. Elle finance aussi la propagation du Culte en dehors de ses
				frontières. Elle a su utiliser le récent pèlerinage pour gagner un maximum d’influence et de
				ressources. Il est habituel aujourd’hui de tomber sur un comptoir de l’Aube dans chaque
				village de la région Si vous êtes en mesure de financer le Culte à sa juste valeur, l’Aube
				saura vous ouvrir bien des portes.
			</p>
		</div>

		<p class="   text-lg font-medium group-hover:block">
			<strong>Objectif:</strong> <br /> Financer le culte
		</p>

		<p class=" btn-secondary">
			Page wiki <ArrowUpRight size={12} />
		</p>
	</a>
	<article><img src="./images/bg/landing_bg_aube.jpg" alt="" class=" rounded-2xl" /></article>
	<article><img src="./images/bg/landing_bg_science.jpg" alt="" class=" rounded-2xl" /></article>
	<a href="/" rel="external" class=" flex flex-col justify-between">
		<div class="flex h-1/3 items-center justify-center">
			<img src="./images/logo_science.png" alt="roue dentée" class="h-44 w-44" />
		</div>

		<div>
			<h2 class="text-3xl font-bold uppercase">Scientifiques de Drnk’ha</h2>
			<p>
				La science sait reconnaître ses opportunités, et cette comète est une aubaine.
				Malencontreusement, elle a atterri dans un village d'écervelés fanatiques. La connaissance
				n’a pas de prix, il va falloir trouver un moyen d’étudier cet astre. Les anthropologues
				trouveront aussi une matière intéressante dans la Prophétie. Mais le culte est
				très..conservateur sur ses documents originels. La raison ne suffira pas, il va falloir
				ruser.
			</p>
		</div>

		<p class="   text-lg font-medium group-hover:block">
			<strong>Objectif:</strong> <br /> Obtenir des données sur la comète
		</p>

		<p class=" btn-secondary">
			Page wiki <ArrowUpRight size={12} />
		</p>
	</a>
	<a href="/" rel="external" class=" flex flex-col justify-between">
		<div class="flex h-1/3 items-center justify-center">
			<img src="./images/logo_tresor.png" alt="roue dentée" class="h-44 w-44" />
		</div>

		<div>
			<h2 class="text-3xl font-bold uppercase">Chasseuses de trésors</h2>
			<p>
				L’argent, voilà une motivation bien plus pragmatique que ce que peuvent vous vendre les
				autres factions. Un esprit d’aventure peut habiter certaines chasseuses, mais l’âge les
				calmera. Malotrus, roublard ou pillard,nous redoublons d’ingéniosité quand nous rencontrons
				une nouvelle motivation (souvent matérielle, hehe). Sait-on jamais, Un petit morceau de
				comète est si vite tombé dans la poche
			</p>
		</div>

		<p class="   text-lg font-medium group-hover:block">
			<strong>Objectif:</strong> <br /> Voler la comète (et tout ce qui a l’air d’avoir de la valeur)
		</p>

		<p class=" btn-secondary">
			Page wiki <ArrowUpRight size={12} />
		</p>
	</a>
	<article><img src="./images/bg/landing_bg_tresor.jpg" alt="" class=" rounded-2xl" /></article>

	<section class=" col-span-2 space-y-6 text-center">
		<h2 class="font-futur text-5xl font-bold">Votre faction</h2>

		<p class="m-auto max-w-3xl text-xl">
			Vous n’avez aucune obligation de rejoindre l’une des factions déjà créés. Nous vous
			encourageons même à créer votre propre clan. Je vous conseille de vous focaliser en priorité
			sur vos objectifs de clan, car cela dictera les quêtes que nous vous créerons. Si vous
			souhaitez créer un clan, merci de nous prévenir le plus tôt possible. Et de nous fournir ou
			moins une ébauche avant le 1er août.
		</p>
	</section>

	<section class=" font-futur bg-center">
		<article class="mx-auto max-w-7xl">
			<div>
				<h2 class="font-futur py-24 text-5xl font-bold">La Prophétie</h2>
			</div>
			<div class="  bg-cover bg-center">
				<div class=" space-y-6 text-xl font-bold text-red-900">
					<div class="space-y-6">
						<p>
							Quand l’astre ultime reviendra à sa source. L’enfer s'apparaîtra à nouveau, pour un
							jugement nouveau.
						</p>
						<p>
							Pour tester les coeurs braves, et les coeurs lâches. Les sachants seront récompensés,
							les ignares disparaîtront.
						</p>
						<p>Les fidèles seront récompensées, les hérétiques disparaîtront.</p>
						<p>
							Quand le ciel adoptera le sang, déchiré par la Lune Rouge.Ciel et terre, paradis et
							enfer, montagnes et mers seront unis, en une seule route, éternelle et ultime, pavés
							des cadavres d’ignorants.
						</p>
						<p>Et en son arrivée, la Lune Rouge, demeura de votre salut.</p>
					</div>
				</div>
			</div>
		</article>
	</section>
	<article class="pr-24">
		<img
			src="/images/bg/landing_prophetie.webp"
			class="h-full w-full rounded-2xl object-cover object-center"
			alt=""
		/>
	</article>
</main>
