type TreeNode = {
	id: string;
	depth_level: number;
	parent_id: string | null;
	parent_var_name: string | null;
	split_on_value: string | null;
	target: string;
	samples: number;
	p_value: number | null;
	target_distribution: Record<string, { count: number; percent: number }>;
	children: TreeNode[];
};

type Category = { name: string; count: number; percent: number };

type Meta = {
	parentNodeId: string | null;
	parentNodeVariable: string | null;
	pValue: number | null;
	percentOfRoot: number;
	percentOfParent: number;
};

export type FlowNode = {
	id: string;
	position: { x: number; y: number };
	draggable: boolean;
	type: 'textUpdater';
	data: Array<{
		title: string;
		categories: Category[];
		meta: Meta;
	}>;
};

export type FlowEdge = {
	id: string;
	source: string;
	target: string;
	type: string;
	animated: boolean;
};

export function generateFlowData(tree: TreeNode): { nodes: FlowNode[]; edges: FlowEdge[] } {
	// 1) build a map for quick sample lookups
	const sampleMap = new Map<string, number>();
	function indexSamples(node: TreeNode) {
		sampleMap.set(node.id, node.samples);
		node.children.forEach(indexSamples);
	}
	indexSamples(tree);

	const rootSamples = tree.samples;
	const nodes: FlowNode[] = [];
	const edges: FlowEdge[] = [];

	function visit(node: TreeNode) {
		// compute percents
		const percentOfRoot = +((100 * node.samples) / rootSamples).toFixed(1);

		let percentOfParent: number;
		if (!node.parent_id) {
			percentOfParent = 100;
		} else {
			const parentSamples = sampleMap.get(node.parent_id) || 0;
			percentOfParent = parentSamples > 0 ? +((100 * node.samples) / parentSamples).toFixed(1) : 0;
		}

		// build categories from target_distribution
		const categories: Category[] = Object.entries(node.target_distribution).map(([name, dist]) => ({
			name,
			count: dist.count,
			percent: dist.percent
		}));

		// assemble the FlowNode
		nodes.push({
			id: node.id,
			position: { x: node.depth_level * 200, y: 0 },
			draggable: false,
			type: 'textUpdater',
			data: [
				{
					title: node.depth_level === 0 ? node.target : (node.split_on_value as string),
					categories,
					meta: {
						parentNodeId: node.parent_id,
						parentNodeVariable: node.parent_var_name,
						pValue: node.p_value,
						percentOfRoot,
						percentOfParent
					}
				}
			]
		});

		// edges out to each child
		for (const child of node.children) {
			edges.push({
				id: `e${node.id}-${child.id}`,
				source: node.id,
				target: child.id,
				type: 'step',
				animated: false
			});
			visit(child);
		}
	}

	visit(tree);
	return { nodes, edges };
}
