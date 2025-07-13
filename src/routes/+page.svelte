<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import ProductCard from '$lib/components/ product_card.svelte';
	import { Slider } from '$lib/components/ui/slider/index.js';
	import Card from '$lib/components/ui/card/card.svelte';
	import ContextProductCard from '$lib/components/context_product_card.svelte';
	import { goto } from '$app/navigation';
 

	let showBookmarks = $state(false);
	let showFullURLs = $state(true);

	let value = $state('pedro');


let stream;
let videoRef;

    async function getStream() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            videoRef.srcObject = stream;
        } catch (err) {
            console.error(err);
        }
        console.log(stream.getTracks()[0])
    }

    async function stopStream() {
        stream.getTracks().forEach(track => track.stop());
        videoRef.srcObject = null;}



	// export let data;
	const { data } = $props();
	console.log('Data from server:', data);
	const { products } = data;
	console.log('Deconst:', products);

	for (const product of products) {
		console.log('Product:', product.title);
	}

	// let value = $state(50);
	let pvalue = $state([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
</script>

<div class="flex items-center justify-center gap-4 p-4">
	<span class="text-sm">Slider Value: {pvalue}</span>
	<!-- <Slider type="single" bind:value max={100} step={1} /> -->
	<Slider type="multiple" orientation="horizontal" bind:value={pvalue} max={100} step={1} />
</div>

<div class="flex flex-wrap justify-center gap-4 p-4">
	{#each [...pvalue].reverse() as val, index}
		<Card>
			<h2>s{index + 1}: {val}</h2>
		</Card>
	{/each}
</div>

<Button onclick={toggleMode} variant="outline" size="icon">
	<SunIcon class="h-3 w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-0" />
	<MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>


<Button onclick={() => goto('/dashboard-01')}>shacn...</Button>

<section class="container mx-auto px-4">
    <h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
    <button class="rounded-sm bg-slate-600 text-white px-4 py-2" on:click={getStream}>Start Stream</button>
    <button class="rounded-sm bg-red-600 text-white px-4 py-2" on:click={stopStream}>Stop Stream</button>

    <video class="mt-4 rounded-sm " width="640" height="480" autoplay={true} bind:this={videoRef} />

</section>

<h1 class="text-2xl font-bold">Products</h1>
<div class="flex flex-wrap justify-center">
	{#each products as product}
		<ProductCard {product} />
	{/each}

	

</div>
