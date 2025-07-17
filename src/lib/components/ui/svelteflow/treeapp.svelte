<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fetchTree } from '$lib/services/api';
  import { generateFlowData } from '$lib/components/ui/svelteflow/TransformNode';
  import { getElkLayout } from '$lib/components/ui/svelteflow/elk-layout';
  import {
    SvelteFlow,
    Background,
    Controls,
    MiniMap,
    type Node,
    type Edge,
    type ColorMode,
    type NodeEventWithPointer
  } from '@xyflow/svelte';
  import TextUpdaterNode from './TextUpdaterNode.svelte';
  import ContextMenu from './ContextMenu.svelte';
  import '@xyflow/svelte/dist/style.css';

  const nodeTypes = { textUpdater: TextUpdaterNode };

  // Local graph state
  let nodes: Node[] = [];
  let edges: Edge[] = [];

  // UI state
  let loading = false;
  let error: string | null = null;
  let colorMode: ColorMode = 'light';
  let menu: { id: string; top?: number; left?: number } | null = null;
  let clientWidth: number;
  let clientHeight: number;

  // Your API parameters
  const params = {
    session_id: '<your session id>',
    target_variable: 'is_high_income',
    numeric_strategy: 'threshold',
    cat_strategy: 'chi2',
    max_depth: 1,
    node_id: '<your node id>'
  };

  // Full fetch → transform → layout pipeline
  async function loadTreeData() {
    const raw = await fetchTree(params);
    const { nodes: flat, edges: rawEdges } = generateFlowData(raw);
    const laidOut = await getElkLayout(flat, rawEdges);
    return { nodes: laidOut, edges: rawEdges };
  }

  // Clear then re-assign with tick
  async function refreshTree() {
    loading = true;
    error = null;

    try {
      // 1) Clear existing nodes/edges
      nodes = [];
      edges = [];
      await tick(); // allow SvelteFlow to tear down

      // 2) Fetch & rebuild
      const { nodes: newNodes, edges: newEdges } = await loadTreeData();
      nodes = newNodes;
      edges = newEdges;
    } catch (e) {
      error = (e as Error).message;
    } finally {
      loading = false;
    }
  }

  onMount(refreshTree);

  // Context-menu handlers
  const handleContextMenu: NodeEventWithPointer = ({ event, node }) => {
    event.preventDefault();
    menu = { id: node.id, top: event.clientY, left: event.clientX };
  };
  function handlePaneClick() { menu = null; }
</script>

<style>
  .controls { padding:1rem; border-top:1px solid #ddd; }
  .error    { color:red; margin-top:0.5rem; }
  .loading  { opacity:0.6; }
</style>

<div class:loading={loading} style="display:flex;flex-direction:column;height:90vh;">
  <div style="flex:1" bind:clientWidth bind:clientHeight>
    <SvelteFlow
      bind:nodes
      bind:edges
      {nodeTypes}
      {colorMode}
      fitView
      minZoom={0.05}      
      maxZoom={4}        
      fitViewOptions={{ padding: 0.1, includeHiddenNodes: false }}
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

<div class="controls">
  <button on:click={refreshTree} disabled={loading}>
    {#if loading}
      ⏳ Loading…
    {:else}
      🔄 Refresh Tree
    {/if}
  </button>

  <select bind:value={colorMode}>
    <option value="light">light</option>
    <option value="dark">dark</option>
    <option value="system">system</option>
  </select>

  {#if error}
    <div class="error">Error: {error}</div>
  {/if}
</div>
