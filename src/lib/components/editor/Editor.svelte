<script lang="ts">
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Toolbar from './Toolbar.svelte';
	import { Composer, ContentEditable, RichTextPlugin } from 'svelte-lexical';

	const initialConfig = {
		theme: theme,
		namespace: 'editoWriting',
		nodes: [],
		onError: (error: Error) => {
			throw error;
		}
	};
</script>

<Composer {initialConfig}>
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
