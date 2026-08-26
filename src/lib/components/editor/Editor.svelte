<script lang="ts">
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Toolbar from './Toolbar.svelte';
	import { Composer, ContentEditable, RichTextPlugin } from 'svelte-lexical';

	let { initialContent = null }: { initialContent?: object | null } = $props();

	let composer: Composer;

	const initialConfig = {
		theme: theme,
		namespace: 'editoWriting',
		nodes: [],
		onError: (error: Error) => {
			throw error;
		}
	};

	export function getJSON(): string {
		const json = composer.getEditor().getEditorState().toJSON();
		return JSON.stringify(json);
	}

	$effect(() => {
		if (initialContent && composer) {
			const editor = composer.getEditor();
			editor.setEditorState(editor.parseEditorState(JSON.stringify(initialContent)));
		}
	});
</script>

<Composer {initialConfig} bind:this={composer}>
	<div class="editor-shell svelte-lexical">
		<Toolbar />
		<div class="editor-container">
			<div class="editor-scroller">
				<div class="editor">
					<ContentEditable />
				</div>
			</div>
			<RichTextPlugin />
		</div>
	</div>
</Composer>
