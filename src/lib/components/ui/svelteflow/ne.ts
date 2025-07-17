import type { Node, Edge } from '@xyflow/svelte';

export const localNodes: Node[] = [
	{
		id: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
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
	},
	{
		id: 'ae8464bd-282a-43a6-95e6-ba1b468e5f30',
		position: {
			x: 200,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Divorced',
				categories: [
					{
						name: '0',
						count: 48,
						percent: 48
					},
					{
						name: '1',
						count: 52,
						percent: 52
					}
				],
				meta: {
					parentNodeId: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
					parentNodeVariable: 'marital_status',
					pValue: null,
					percentOfRoot: 33.3,
					percentOfParent: 33.3
				}
			}
		]
	},
	{
		id: '11150d76-74e5-40ac-8732-a47f7d7c1846',
		position: {
			x: 200,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Single',
				categories: [
					{
						name: '0',
						count: 51,
						percent: 54.26
					},
					{
						name: '1',
						count: 43,
						percent: 45.74
					}
				],
				meta: {
					parentNodeId: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
					parentNodeVariable: 'marital_status',
					pValue: null,
					percentOfRoot: 31.3,
					percentOfParent: 31.3
				}
			}
		]
	},
	{
		id: '482f53a6-a335-4ee6-8975-e5bb815eb57a',
		position: {
			x: 200,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Married',
				categories: [
					{
						name: '0',
						count: 45,
						percent: 42.45
					},
					{
						name: '1',
						count: 61,
						percent: 57.55
					}
				],
				meta: {
					parentNodeId: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
					parentNodeVariable: 'marital_status',
					pValue: null,
					percentOfRoot: 35.3,
					percentOfParent: 35.3
				}
			}
		]
	}
];

export const localEdges: Edge[] = [
	{
		id: 'e70b374cc-4d47-47cb-81ce-ba4c5c42be3f-ae8464bd-282a-43a6-95e6-ba1b468e5f30',
		source: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
		target: 'ae8464bd-282a-43a6-95e6-ba1b468e5f30',
		type: 'step',
		animated: false
	},
	{
		id: 'e70b374cc-4d47-47cb-81ce-ba4c5c42be3f-11150d76-74e5-40ac-8732-a47f7d7c1846',
		source: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
		target: '11150d76-74e5-40ac-8732-a47f7d7c1846',
		type: 'step',
		animated: false
	},
	{
		id: 'e70b374cc-4d47-47cb-81ce-ba4c5c42be3f-482f53a6-a335-4ee6-8975-e5bb815eb57a',
		source: '70b374cc-4d47-47cb-81ce-ba4c5c42be3f',
		target: '482f53a6-a335-4ee6-8975-e5bb815eb57a',
		type: 'step',
		animated: false
	}
];
