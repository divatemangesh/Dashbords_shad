import type { Node, Edge } from '@xyflow/svelte';

export function apiTreeToNodesEdges(apiRoot: any): { nodes: Node[]; edges: Edge[] } {
	const nodes: Node[] = [];
	const edges: Edge[] = [];

	function traverse(node: any, parentId?: string) {
		// Convert target_distribution to categories array
		const categories = node.target_distribution
			? Object.entries(node.target_distribution).map(([key, value]: [string, any]) => ({
					name: key,
					count: value.count,
					percent: value.percent
				}))
			: [];

		// Node structure matching nodes-and-edges.ts
		nodes.push({
			id: node.id,
			position: { x: 175, y: 0 }, // ELK will layout later
			type: 'textUpdater',
			draggable: false,
			data: [
				{
					title: node.split_on_value ?? node.split_variable ?? 'Root',
					categories,
					meta: {
						nullRecords: null, // Not present in API, set to null or remove
						cardinality: categories.length,
						fValue: null, // Not present in API, set to null or remove
						pValue: node.p_value,
						informationValue: null, // Not present in API, set to null or remove
						percentOfRoot: null, // Not present in API, set to null or remove
						percentOfParent: null, // Not present in API, set to null or remove
						parentNodeId: node.parent_id,
						parentNodeVariable: node.parent_var_name,
						samples: node.samples,
						isTerminal: node.is_terminal,
						stopReason: node.stop_reason
					}
				}
			]
		});

		// Add edge if not root
		if (parentId) {
			edges.push({
				id: `e${parentId}-${node.id}`,
				source: parentId,
				target: node.id,
				type: 'step', // or 'default', as needed
				animated: false,
				style: { stroke: '#f6ab00', strokeWidth: 2 }
			});
		}

		// Recursively process children
		if (node.children && Array.isArray(node.children)) {
			node.children.forEach((child: any) => traverse(child, node.id));
		}
	}

	traverse(apiRoot);

	return { nodes, edges };
}
