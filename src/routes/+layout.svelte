<script lang="ts">
	import './layout.css';
	import SideBar from './SideBar.svelte';
	import sidebarLink from './sidebarLink.json';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { MoveLeft, MoveRight } from '@lucide/svelte';
	import WikiMobileMenu from './WikiMobileMenu.svelte';
	let { children } = $props();

	let flattenArray = sidebarLink.map((x) => x.subMenu);
	let finalArray = flattenArray.flat();
	let actualPage = $state(
		finalArray.find((x) => x.link === page.url.pathname) ?? {
			name: 'Sécurité Physique',
			link: '/wiki/securite/physique',
			id: 1
		}
	);
	let linkToNextPage = $state(finalArray.find((x) => x.id === actualPage?.id + 1));
	let linkToPrevPage = $state(
		finalArray.find((x) => x.id === actualPage?.id - 1) ?? {
			name: 'Sécurité Physique',
			link: '/wiki/securite/physique',
			id: 1
		}
	);

	afterNavigate(() => {
		actualPage = finalArray.find((x) => x.link === page.url.pathname) ?? {
			name: 'Sécurité Physique',
			link: '/wiki/securite/physique',
			id: 1
		};
		linkToNextPage = finalArray.find((x) => x.id === actualPage?.id + 1) ?? {
			name: 'Univers',
			link: '/univers',
			id: 16
		};

		linkToPrevPage = finalArray.find((x) => x.id === actualPage?.id - 1) ?? {
			name: 'Univers',
			link: '/univers',
			id: 16
		};
	});
</script>

<WikiMobileMenu />
<main class="flex">
	<nav class="hidden w-60 h-screen shrink-0 md:block overflow-y-scroll">
		<SideBar />
	</nav>

	<section class="w-full pb-12">
		<section>
			{@render children()}

			<div class="mx-auto mt-24 flex max-w-2xl justify-between border-t border-t-stone-200 pt-4">
				{#if actualPage.id === 1}
					<div></div>
				{:else}
					<a
						class="flex items-center gap-6 hover:underline"
						href={linkToPrevPage?.link}
						rel="external"
					>
						<MoveLeft />
						<div>
							<p class="text-xs">Page précédente</p>
							<p>{linkToPrevPage.name}</p>
						</div>
					</a>
				{/if}

				<a
					class="flex items-center gap-6 text-right hover:underline"
					href={linkToNextPage?.link}
					rel="external"
				>
					<div>
						<p class="text-xs">Page suivante</p>
						<p>{linkToNextPage?.name}</p>
					</div>
					<MoveRight />
				</a>
			</div>
		</section>
	</section>
</main>
