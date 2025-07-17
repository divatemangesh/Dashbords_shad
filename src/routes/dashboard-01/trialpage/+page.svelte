<script lang="ts">
  import { onMount } from 'svelte';
  import { apiData, apiError, apiStatus } from '$lib/stores/dataStore';
	import { flow } from '$lib/stores/flowStore';
  import { generateFlowData } from '$lib/components/ui/svelteflow/TransformNode';
  import { fetchTree, createSession } from '$lib/services/api';
  // import SvelteFlow from '@xyflow/svelte'; 
  let params = {
    session_id: '<session id  here if only http_cookie is not used >',
    target_variable: 'is_high_income',
    numeric_strategy: 'threshold',
    cat_strategy: 'chi2',
    max_depth: 1,
    node_id: 'dae390bd-c907-42ed-94bd-e977e9f7794d'
  };

  onMount(async () => {
    apiStatus.set({ code: 0, loading: true });
    apiError.set(null);
    try {
      const data = await fetchTree(params);
      apiData.set(data);
      apiStatus.set({ code: 200, loading: false });
    } catch (e) {
      apiError.set(e.message);
      apiStatus.set({ code: (e as any).status || 500, loading: false });
    }
  });

  async function handleCreateSession() {
    apiStatus.set({ code: 0, loading: true });
    apiError.set(null);
    try {
      const data = await createSession();
      // Optionally update params.session_id if you want to use it elsewhere
      params.session_id = data.session_id;
      apiStatus.set({ code: 200, loading: false });
      alert('Session created!'); // Optional: feedback for user
    } catch (e) {
      apiError.set(e.message);
      apiStatus.set({ code: (e as any).status || 500, loading: false });
    }
  }

  async function handleFetchTree() {
    apiStatus.set({ code: 0, loading: true });
    apiError.set(null);
    try {
      const data = await fetchTree(params);
      apiData.set(data);
      apiStatus.set({ code: 200, loading: false });
    } catch (e) {
      apiError.set(e.message);
      apiStatus.set({ code: (e as any).status || 500, loading: false });
    }
  }
</script>

<button on:click={handleCreateSession}>
  Create Session
</button>
<button on:click={handleFetchTree}>
  Fetch Tree
</button>

{#if $apiStatus.loading}
  <p>Loading…</p>
			{console.log("loader loaded")}

{:else if $apiError}
  <p class="error">{$apiError}</p>
{:else}
  <!-- Debug: Show raw apiData -->
  <pre>{$apiData ? JSON.stringify($apiData, null, 2) : 'No data'}</pre>
  {#if $apiData}
		{console.log("apidata present ")}
    {@const { nodes, edges } = generateFlowData($apiData)}
    <!-- <SvelteFlow {nodes} {edges} /> -->
  {/if}
{/if}


<pre style="color: green;">
  Edges: {JSON.stringify($flow.edges, null, 2)}
</pre>


<pre style="color: red;">
  Nodes: {JSON.stringify($flow.nodes, null, 2)}
</pre>






<!-- 
	<p>
	<strong>{$apiData}</strong>  </p>

	<p>
	<strong>{JSON.stringify($apiData, null, 2)}</strong>  </p> -->

