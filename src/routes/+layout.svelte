<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import { flow } from '$lib/stores/flowStore'; // or your store
	    import { onMount } from 'svelte';


// Expose the store to the window for debugging

  onMount(() => {
        (window as any).flow = flow;
    });

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
