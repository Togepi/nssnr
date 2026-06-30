import type { Pathname } from '$app/types';

export const subMenu: Array<{ name: string; link: Pathname; id: number }> = [
	{ name: 'Wiki', link: '/wiki/securite/physique', id: 1 },
	{ name: 'Infos Pratiques', link: '/wiki/securite/emotionelle', id: 2 }
];
