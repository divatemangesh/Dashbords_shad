<script lang="ts">
  import {
    SvelteFlow,
    Background,
    type Node,
    type Edge,
    type NodeEventWithPointer,
    type ColorMode,
    MiniMap,
    Controls,Panel
  } from '@xyflow/svelte';
  import TextUpdaterNode from './TextUpdaterNode.svelte';
  const nodeTypes = { textUpdater: TextUpdaterNode };

  import ContextMenu from './ContextMenu.svelte';
  import { initialNodes, initialEdges } from './nodes-and-edges';
  import { getElkLayout } from './elk-layout.ts';
  import '@xyflow/svelte/dist/style.css';

  let colorMode: ColorMode = $state('light');
  let nodes = $state.raw<Node[]>(initialNodes);
  let edges = $state.raw<Edge[]>(initialEdges);

  let menu: {
    id: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  } | null = $state(null);
  let clientWidth: number = $state();
  let clientHeight: number = $state();

  // ELK layout integration
  async function layoutNodes() {
    // Use $state.raw to get plain arrays for ELKjs
   nodes = await getElkLayout(nodes, edges); // <-- pass plain arrays
  }

  // Run layout when nodes or edges change
$effect(() => {
  layoutNodes();
});
  const handleContextMenu: NodeEventWithPointer = ({ event, node }) => {
    event.preventDefault();
    menu = {
      id: node.id,
      top: event.clientY < clientHeight - 200 ? event.clientY : undefined,
      left: event.clientX < clientWidth - 200 ? event.clientX : undefined,
      right:
        event.clientX >= clientWidth - 200
          ? clientWidth - event.clientX
          : undefined,
      bottom:
        event.clientY >= clientHeight - 200
          ? clientHeight - event.clientY
          : undefined,
    };
  };

  function handlePaneClick() {
    menu = null;
  }
</script>

<div style="display: flex; flex-direction: column; height: 90vh;">
  <div style="flex: 1 1 auto;" bind:clientWidth bind:clientHeight>
    <SvelteFlow
      bind:nodes
      bind:edges
      onnodecontextmenu={handleContextMenu}
      onpaneclick={handlePaneClick}
      {nodeTypes}
      {colorMode}
      fitView
    >
      <Background />
      {#if menu}
        <ContextMenu
          onclick={handlePaneClick}
          id={menu.id}
          top={menu.top}
          left={menu.left}
          right={menu.right}
          bottom={menu.bottom}
        />
      {/if}

        <Controls />
    <MiniMap />
    </SvelteFlow>
  </div>
</div>
<Panel>
    <select bind:value={colorMode}>
      <option value="dark">dark</option>
      <option value="light">light</option>
      <option value="system">system</option>
    </select>
  </Panel>