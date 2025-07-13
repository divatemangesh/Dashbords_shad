import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
	{
		id: '1',
		position: { x: 175, y: 0 },
		type: 'textUpdater',
		data: [
			{
				title: 'Category one',
				categories: [
					{ name: 'Category A', count: 120 },
					{ name: 'Category B', count: 80 }
					// { name: 'Category C', count: 50 }
				],
				meta: {
					nullRecords: 2,
					cardinality: 3,
					fValue: 4.56,
					pValue: 0.03,
					informationValue: 0.78,
					percentOfRoot: 25,
					percentOfParent: 60,
					parentNodeId: 'node-123',
					parentNodeVariable: 'age'
				}
			}
		]
	},

	{
		id: '2',
		position: { x: 175, y: 0 },
		type: 'textUpdater',
		data: [
			{
				title: 'Category one',
				categories: [
					{ name: 'Category A', count: 120 },
					{ name: 'Category B', count: 80 },
					{ name: 'Category C', count: 50 }
				],
				meta: {
					nullRecords: 2,
					cardinality: 3,
					fValue: 4.56,
					pValue: 0.03,
					informationValue: 0.78,
					percentOfRoot: 25,
					percentOfParent: 60,
					parentNodeId: 'node-123',
					parentNodeVariable: 'age'
				}
			}
		]
	},

	{
		id: '3',
		position: { x: 175, y: 0 },
		type: 'textUpdater',
		data: [
			{
				title: 'Category one',
				categories: [
					{ name: 'Category A', count: 120 },
					{ name: 'Category B', count: 80 },
					{ name: 'Category C', count: 50 }
				],
				meta: {
					nullRecords: 2,
					cardinality: 3,
					fValue: 4.56,
					pValue: 0.03,
					informationValue: 0.78,
					percentOfRoot: 25,
					percentOfParent: 60,
					parentNodeId: 'node-123',
					parentNodeVariable: 'age'
				}
			}
		]
	},

	{
		id: '4',
		position: { x: 175, y: 0 },
		type: 'textUpdater',
		data: [
			{
				title: 'Category one',
				categories: [
					{ name: 'Category A', count: 120 },
					{ name: 'Category B', count: 80 },
					{ name: 'Category C', count: 50 }
				],
				meta: {
					nullRecords: 2,
					cardinality: 3,
					fValue: 4.56,
					pValue: 0.03,
					informationValue: 0.78,
					percentOfRoot: 25,
					percentOfParent: 60,
					parentNodeId: 'node-123',
					parentNodeVariable: 'age'
				}
			}
		]
	}
];

export const initialEdges: Edge[] = [
	{
		id: 'e1-2',
		source: '1',
		target: '2'
	},
	{
		id: 'e1-3',
		source: '1',
		target: '3'
	},
	{
		id: 'e1-4',
		source: '1',
		target: '4'
	}
];
