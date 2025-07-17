import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
	{
		id: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
		position: {
			x: 0,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'is_high_income',
				categories: [
					{
						name: '0',
						count: 144,
						percent: 48
					},
					{
						name: '1',
						count: 156,
						percent: 52
					}
				],
				meta: {
					parentNodeId: null,
					parentNodeVariable: null,
					pValue: 0.24902623740769342,
					percentOfRoot: 100,
					percentOfParent: 100
				}
			}
		]
	}
];

export const initialEdges: Edge[] = [];
