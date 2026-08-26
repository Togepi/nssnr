type LexicalTextNode = {
	type: 'text';
	text: string;
	format?: number; // bitmask : 1=bold, 2=italic, 8=underline, 4=strikethrough
};

type LexicalElementNode = {
	type: string;
	children?: LexicalNode[];
	tag?: string; // pour heading : h1, h2...
	listType?: string; // pour list : bullet, number
};

type LexicalNode = LexicalTextNode | LexicalElementNode;

function escapeHtml(text: string): string {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderTextNode(node: LexicalTextNode): string {
	let html = escapeHtml(node.text);
	const format = node.format ?? 0;
	if (format & 1) html = `<strong>${html}</strong>`;
	if (format & 2) html = `<em>${html}</em>`;
	if (format & 8) html = `<u>${html}</u>`;
	if (format & 4) html = `<s>${html}</s>`;
	return html;
}

function renderNode(node: LexicalNode): string {
	if (node.type === 'text') {
		return renderTextNode(node as LexicalTextNode);
	}

	const el = node as LexicalElementNode;
	const children = (el.children ?? []).map(renderNode).join('');

	switch (el.type) {
		case 'paragraph':
			return `<p>${children || '<br>'}</p>`;
		case 'heading':
			return `<${el.tag ?? 'h3'}>${children}</${el.tag ?? 'h3'}>`;
		case 'quote':
			return `<blockquote>${children}</blockquote>`;
		case 'list': {
			const tag = el.listType === 'number' ? 'ol' : 'ul';
			return `<${tag}>${children}</${tag}>`;
		}
		case 'listitem':
			return `<li>${children}</li>`;
		case 'linebreak':
			return '<br>';
		case 'root':
			return children;
		default:
			return children;
	}
}

export function lexicalToHtml(story: unknown): string {
	if (!story || typeof story !== 'object') return '<p class="text-stone-400">Aucune histoire.</p>';

	const root = (story as { root?: LexicalElementNode }).root;
	if (!root) return '<p class="text-stone-400">Aucune histoire.</p>';

	const html = renderNode(root);
	return html || '<p class="text-stone-400">Aucune histoire.</p>';
}
