import { writable } from 'svelte/store';
import { apiData } from './dataStore';
import {
	generateFlowData,
	type FlowNode,
	type FlowEdge
} from '$lib/components/ui/svelteflow/TransformNode';
import { getElkLayout } from '$lib/components/ui/svelteflow/elk-layout';

export interface Flow {
	nodes: FlowNode[];
	edges: FlowEdge[];
}

// 1) The writable store your UI binds to
export const flow = writable<Flow>({ nodes: [], edges: [] });

// 2) Subscribe to API changes (do NOT clear on null!)
apiData.subscribe(async ($apiData) => {
	console.log('[flowStore] apiData changed:', $apiData);
	if (!$apiData) {
		console.log('[flowStore] no apiData, skipping update');
		return;
	}

	// a) transform
	const { nodes: flatNodes, edges } = generateFlowData($apiData);
	console.log('[flowStore] flatNodes:', flatNodes);

	// b) layout
	const laidOutNodes = await getElkLayout(flatNodes, edges);
	console.log('[flowStore] laidOutNodes:', laidOutNodes);

	// c) publish
	flow.set({ nodes: laidOutNodes, edges });
});
