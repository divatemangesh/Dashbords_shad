import ELK from 'elkjs/lib/elk.bundled.js';
import type { Node, Edge } from '@xyflow/svelte';

export async function getElkLayout(nodes: Node[], edges: Edge[]) {
	const elk = new ELK();
	const graph = {
		id: 'root',
		layoutOptions: { 'elk.algorithm': 'layered' },
		children: nodes.map((n) => ({
			id: n.id,
			width: n.width ?? 180,
			height: n.height ?? 60
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
