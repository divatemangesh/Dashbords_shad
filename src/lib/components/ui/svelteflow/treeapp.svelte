<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchTree } from '$lib/services/api';
  import { apiData, apiError, apiStatus } from '$lib/stores/dataStore';
  import { flow } from '$lib/stores/flowStore';

  import {
    SvelteFlow,
    Background,
    Controls,
    MiniMap,
    type ColorMode,
    type NodeEventWithPointer
  } from '@xyflow/svelte';
  import TextUpdaterNode from './TextUpdaterNode.svelte';
  import ContextMenu from './ContextMenu.svelte';
  import '@xyflow/svelte/dist/style.css';

  const nodeTypes = { textUpdater: TextUpdaterNode };

  let colorMode: ColorMode = 'light';
  let menu: { id: string; top?: number; left?: number } | null = null;
  let clientWidth: number;
  let clientHeight: number;

  const params = {
    session_id: '<your session id>',
    target_variable: 'is_high_income',
    numeric_strategy: 'threshold',
    cat_strategy: 'chi2',
    max_depth: 1,
    node_id: '<your node id>'
  };

  async function handleFetchTree() {
    apiStatus.set({ code: 0, loading: true });
    apiError.set(null);

    try {
      const data = await fetchTree(params);
      apiData.set(data);           // triggers the derived
      apiStatus.set({ code: 200, loading: false });
    } catch (e) {
      apiError.set((e as Error).message);
      apiStatus.set({ code: 500, loading: false });
    }
  }

  // onMount(handleFetchTree);

  const handleContextMenu: NodeEventWithPointer = ({ event, node }) => {
    event.preventDefault();
    menu = { id: node.id, top: event.clientY, left: event.clientX };
  };
  function handlePaneClick() { menu = null; }
</script>

<div style="display:flex;flex-direction:column;height:90vh;">
  <div style="flex:1" bind:clientWidth bind:clientHeight>
    <!-- ONE‑WAY props here: -->
    <SvelteFlow
      bind:nodes={$flow.nodes}
      bind:edges={$flow.edges}
      {nodeTypes}
      {colorMode}
      fitView
      onnodecontextmenu={handleContextMenu}
      onpaneclick={handlePaneClick}
    >
      <Background />
      {#if menu}
        <ContextMenu {menu} on:close={handlePaneClick} />
      {/if}
      <Controls />
      <MiniMap />
    </SvelteFlow>
  </div>
</div>

<div style="padding:1rem;border-top:1px solid #ddd;">
  <button on:click={handleFetchTree}>Refresh Tree</button>
  <select bind:value={colorMode}>
    <option value="light">light</option>
    <option value="dark">dark</option>
    <option value="system">system</option>
  </select>
</div>
