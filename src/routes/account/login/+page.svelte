<script lang="ts">
	import { authClient } from '$lib/auth';
	const signIn = async () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const data = await authClient.signIn.social({
			provider: 'discord',
			callbackURL: '/account'
		});
	};
</script>

<div class="flex h-screen w-screen">
	<div class="m-auto max-w-xl">
		<button onclick={signIn} class="btn">Connexion avec Discord</button>
	</div>
</div>
