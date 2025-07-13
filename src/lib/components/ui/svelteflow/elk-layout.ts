import ELK from 'elkjs/lib/elk.bundled.js';
import type { Node, Edge } from '@xyflow/svelte';

export async function getElkLayout(nodes: Node[], edges: Edge[]) {
	const elk = new ELK();
	const graph = {
		id: 'root',
		layoutOptions: {
			'elk.algorithm': 'layered', // Good for decision trees and CHAID trees; arranges nodes in layers, emphasizing hierarchy.
			'elk.direction': 'DOWN', // Top-to-bottom layout, typical for trees.
			'elk.spacing.nodeNode': '10',
			'elk.layered.spacing.nodeNodeBetweenLayers': '200',
			// Node placement strategies:
			// - BRANDES_KOEPF: Default, balances compactness and readability. Good for most trees.
			// - LINEAR_SEGMENTS: Keeps nodes aligned, useful for very regular trees.
			// - SIMPLE: Fast, less optimal for complex trees.
			'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
			// Crossing minimization strategies:
			// - INTERACTIVE: Good for small/medium trees, interactive adjustment.
			// - LAYER_SWEEP: Fast, less optimal for complex trees.
			'elk.layered.crossingMinimization.strategy': 'INTERACTIVE',
			'elk.layered.considerModelOrder': 'false'
		},
		children: nodes.map((n) => ({
			id: n.id,
			width: n.width ?? 300,
			height: n.height ?? 350
		})),
		edges: edges.map((e) => ({
			id: e.id,
			sources: [e.source],
			targets: [e.target]
		}))
	};
	const layout = await elk.layout(graph);
	return nodes.map((n) => {
		const layoutNode = layout.children.find((c) => c.id === n.id);
		return {
			...n,
			position: { x: layoutNode?.x ?? 0, y: layoutNode?.y ?? 0 }
		};
	});
}
