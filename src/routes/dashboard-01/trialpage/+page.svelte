<script lang="ts">
	import { onMount } from "svelte";
	import { apiData } from '$lib/stores/dataStore';
	import { apiTreeToNodesEdges } from '$lib/components/ui/svelteflow/api_call.ts';

	const apiResponse =  apiData;

	const { nodes, edges } = apiTreeToNodesEdges(apiResponse);


	let code = "3a679666-ad40-4e33-a69d-aaae7c7874e6";
	let target_variable = "is_high_income";
	let numeric_strategy = "threshold";
	let cat_strategy = "chi2";
	let max_depth: number | null = 1;
	let node_id = "dae390bd-c907-42ed-94bd-e977e9f7794d"; // Default node_id
	let result: any = null;
	let responseCode: number | null = null;
	let error: string | null = null;

	const numericOptions = ["threshold"];
	const catOptions = ["chi2", "gini", "entropy"];

	async function callApi() {
		error = null;
		responseCode = null;
		try {
			const params = new URLSearchParams({
				session_id: code,
				numeric_strategy,
				cat_strategy,
				target_variable,
				max_depth: max_depth !== null ? String(max_depth) : "",
				node_id
			});
			const response = await fetch(`http://localhost:8000/api/tree/${code}?${params.toString()}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" }
			});
			responseCode = response.status;
			if (!response.ok) {
				error = `Error: ${response.status} ${response.statusText}`;
				result = null;
			} else {
				result = await response.json();
				apiData.set(result);

			}
		} catch (e) {
			error = `Fetch error: ${e}`;
			result = null;
		}
	}
</script>

{#if responseCode && responseCode !== 200}
	<p style="color: red;">Response code: {responseCode}</p>
{/if}
{#if error}
	<p style="color: red;">{error}</p>
{/if}

<div class="flex flex-col gap-2">
	<input
		type="text"
		bind:value={code}
		placeholder="Enter session code"
		class="input input-bordered"
	/>
	<input
		type="text"
		bind:value={target_variable}
		placeholder="Enter target variable"
		class="input input-bordered"
	/>
	<input
		type="number"
		bind:value={max_depth}
		placeholder="Enter max depth"
		class="input input-bordered"
	/>
	<input
		type="text"
		bind:value={node_id}
		placeholder="Enter node id"
		class="input input-bordered"
	/>
	<select bind:value={numeric_strategy} class="select select-bordered">
		<option value="" disabled selected>Select numeric strategy</option>
		{#each numericOptions as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<select bind:value={cat_strategy} class="select select-bordered">
		<option value="" disabled selected>Select categorical strategy</option>
		{#each catOptions as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<button class="btn btn-primary" on:click={callApi}>
		Fetch Data
	</button>
</div>

{#if result}
	<!-- <p>{JSON.stringify(result)}</p> -->

	<p style="color: red;">{JSON.stringify($apiData)}</p>
	<p style="color: green;">Nodes: {JSON.stringify(nodes)}</p>
	<p tyle="color: blue;">Edges: {JSON.stringify(edges)}</p>



{/if}



