<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import Card from '$lib/components/ui/card/card.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	export let product: {
		title: string;
		category: string;
		images: string;
		image?: string;
		price: number;
		description: string;
	};
</script>

<Card class="m-4 flex w-[20%] p-1.5 p-4 dark:bg-gray-800 ">
	<h2 class="text-lg font-semibold text-amber-100">{product.title}</h2>
	<Badge class="mt-2">{product.category}</Badge>
	<img src={product.images} alt={product.image} class="mt-2 h-32 w-full object-cover" />
	<p class="mt-2 text-lg font-bold text-amber-500">${product.price.toFixed(2)}</p>

	<Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="item-1">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Product Information</Accordion.Trigger>
			<Accordion.Content class="flex flex-col gap-4 text-balance">
				<p>
					{product.description}
				</p>
				<p>
					Key features include advanced processing capabilities, and an intuitive user interface
					designed for both beginners and experts.
				</p>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</Card>
