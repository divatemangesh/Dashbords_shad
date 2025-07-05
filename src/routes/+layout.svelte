<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	export const prerender = true;

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
