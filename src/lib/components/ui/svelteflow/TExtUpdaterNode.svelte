<script lang="ts">
  import { Handle, Position, useSvelteFlow, type NodeProps } from '@xyflow/svelte';
  let { id, data }: NodeProps = $props();
  import { Card } from '$lib/components/ui/card/index.ts';

  let { updateNodeData } = useSvelteFlow();

  console.log('data:', data);
  // log data which is passed as props or data field is empty 
  if (!data || Object.keys(data).length === 0) {
    console.log('No data passed as props or data field is empty');
  } else {
    console.log('Data passed as props:', data);
  }

  // Normalize data if it's an array
  if (Array.isArray(data)) {
    data = data[0];
  }
  if (!data.categories) {
    data.categories = [
      { name: 'abc', count: 120 },
      { name: 'lmn B', count: 90 },
      { name: 'xyz C', count: 90 },
      { name: 'abc D', count: 90 },
    ];
  }


  // Example: Simulate fetching category data from server
  // You could fetch this from an API and assign to `data`
  /*
  // Sample JSON file: categories.json
  [
    {
      "title": "Sample Node",
      "categories": [
        { "name": "Category A", "count": 120 },
        { "name": "Category B", "count": 80 },
        { "name": "Category C", "count": 50 }
      ],
      "meta": {
        "nullRecords": 2,
        "cardinality": 3,
        "fValue": 4.56,
        "pValue": 0.03,
        "informationValue": 0.78,
        "percentOfRoot": 25,
        "percentOfParent": 60,
        "parentNodeId": "node-123",
        "parentNodeVariable": "age"
      }
    }
  ]
  */

  // Example assignment (simulate fetch):
  // import categories from './categories.json';
  // data = categories[0];

  // Calculate percentages based on counts
  const totalCount = data.categories.reduce((sum, cat) => sum + cat.count, 0);
  data.categories = data.categories.map(cat => ({
    ...cat,
    percentage: totalCount ? Math.round((cat.count / totalCount) * 100) : 0
  }));
</script>

<style>
  .node-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .node-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .node-title {
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .info-btn {
    background: #f5f5f5;
    border: none;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    font-size: 1rem;
    color: #555;
    transition: background 0.2s;
    margin-left: 0.5rem;
  }
  .info-btn:hover {
    background: #e0e0e0;
  }
  .info-popup {
    position: absolute;
    top: 28px;
    left: 0;
    z-index: 10;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 0.75rem 1rem;
    min-width: 220px;
    font-size: 0.95em;
    color: #333;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .info-btn:hover .info-popup,
  .info-btn:focus .info-popup {
    opacity: 1;
    pointer-events: auto;
  }
  .category-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 8px;
    margin-bottom: 0.5rem;
  }
  .category-bar {
    width: 100%;
    height: 18px;
    background: #eee;
    border-radius: 9px;
    position: relative;
    overflow: hidden;
    display: flex;
    margin-bottom: 0.25rem;
  }
  .category-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.1em;
    margin-top: 0;
  }
</style>

<div class="node-container">
  <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  <Card style="padding: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-radius: 8px;">

    

    <div class="node-header">
      <div class="node-title">
        {data?.title ?? 'Node Title'}
      </div>
      <button class="info-btn" tabindex="0" aria-label="Show metadata">
        i
        <div class="info-popup">
          <div><strong>Meta Data</strong></div>
          <div>Null Records: {data?.meta?.nullRecords ?? 0}</div>
          <div>Cardinality: {data?.meta?.cardinality ?? 'N/A'}</div>
          <div>F Value: {data?.meta?.fValue ?? 'N/A'}</div>
          <div>P Value: {data?.meta?.pValue ?? 'N/A'}</div>
          <div>Information Value: {data?.meta?.informationValue ?? 'N/A'}</div>
          <div>% of Root: {data?.meta?.percentOfRoot ?? 'N/A'}</div>
          <div>% of Parent: {data?.meta?.percentOfParent ?? 'N/A'}</div>
          <div>Parent Node ID: {data?.meta?.parentNodeId ?? 'N/A'}</div>
          <div>Parent Node Variable: {data?.meta?.parentNodeVariable ?? 'N/A'}</div>
        </div>
      </button>
    </div>

    {#if data?.categories && data.categories.length}
      <table class="category-table">
        <thead>
          <tr style="text-align: left; background: #f5f5f5;">
            <th style="padding: 8px;">Category</th>
            <th style="padding: 8px;">% Local</th>
            <th style="padding: 8px;">Count</th>
          </tr>
        </thead>
        <tbody>
          {#each data.categories as cat, i}
            <tr style="background: {['#ffebee', '#e8f5e9', '#f3e5f5', '#fffde7', '#fce4ec'][i % 5]};">
              <td style="padding: 8px;">{cat.name}</td>
              <td style="padding: 8px;">{cat.percentage}%</td>
              <td style="padding: 8px;">{cat.count}</td>
            </tr>
          {/each}
        </tbody>
        <tfoot>
          <tr style="font-weight: bold; background: #f9f9f9;">
            <td style="padding: 8px;">Total</td>
            <td style="padding: 8px;">
              {data.categories.reduce((sum, cat) => sum + cat.percentage, 0)}%
            </td>
            <td style="padding: 8px;">
              {data.categories.reduce((sum, cat) => sum + cat.count, 0)}
            </td>
          </tr>
        </tfoot>
      </table>

      <div>
        <div class="category-bar">
          {#each data.categories as cat, i}
            <div style="
              height: 100%;
              width: {cat.percentage}%;
              background: {['#43a047', '#e53935', '#8e24aa', '#fbc02d', '#1e88e5'][i % 5]};
              transition: width 0.3s;
            "></div>
          {/each}
        </div>
        <div class="category-labels">
          {#each data.categories as cat, i}
            <span style="color: {['#43a047', '#e53935', '#8e24aa', '#fbc02d', '#1e88e5'][i % 5]};">
              {cat.name}: {cat.percentage}%
            </span>
          {/each}
        </div>
      </div>
    {:else}
      <p style="margin: 0;">No category data available.</p>
    {/if}
  </Card>
</div>
