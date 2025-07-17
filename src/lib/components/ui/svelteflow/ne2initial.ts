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
	},
	{
		id: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
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
					parentNodeId: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
					parentNodeVariable: 'marital_status',
					pValue: 0.0831357439687091,
					percentOfRoot: 33.3,
					percentOfParent: 33.3
				}
			}
		]
	},
	{
		id: '4f8e134b-a17f-4c0e-ab6d-ccb0802b4b07',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Artist',
				categories: [
					{
						name: '0',
						count: 12,
						percent: 37.5
					},
					{
						name: '1',
						count: 20,
						percent: 62.5
					}
				],
				meta: {
					parentNodeId: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
					parentNodeVariable: 'occupation',
					pValue: null,
					percentOfRoot: 10.7,
					percentOfParent: 32
				}
			}
		]
	},
	{
		id: 'b9f7b1f9-1c69-4e36-b795-742826b4a598',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Teacher',
				categories: [
					{
						name: '0',
						count: 8,
						percent: 34.78
					},
					{
						name: '1',
						count: 15,
						percent: 65.22
					}
				],
				meta: {
					parentNodeId: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
					parentNodeVariable: 'occupation',
					pValue: null,
					percentOfRoot: 7.7,
					percentOfParent: 23
				}
			}
		]
	},
	{
		id: '4bb85b25-ee3f-464d-93aa-934d26e640c7',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Doctor',
				categories: [
					{
						name: '0',
						count: 13,
						percent: 61.9
					},
					{
						name: '1',
						count: 8,
						percent: 38.1
					}
				],
				meta: {
					parentNodeId: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
					parentNodeVariable: 'occupation',
					pValue: null,
					percentOfRoot: 7,
					percentOfParent: 21
				}
			}
		]
	},
	{
		id: '9d32dcb2-1fdc-426e-b17a-7fd4cbb4c76c',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'Engineer',
				categories: [
					{
						name: '0',
						count: 15,
						percent: 62.5
					},
					{
						name: '1',
						count: 9,
						percent: 37.5
					}
				],
				meta: {
					parentNodeId: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
					parentNodeVariable: 'occupation',
					pValue: null,
					percentOfRoot: 8,
					percentOfParent: 24
				}
			}
		]
	},
	{
		id: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
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
					parentNodeId: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
					parentNodeVariable: 'marital_status',
					pValue: 0.3445817862792292,
					percentOfRoot: 31.3,
					percentOfParent: 31.3
				}
			}
		]
	},
	{
		id: 'fc94db78-37f7-4e40-a303-6c3736238ef3',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: '<= 56.00',
				categories: [
					{
						name: '0',
						count: 40,
						percent: 51.95
					},
					{
						name: '1',
						count: 37,
						percent: 48.05
					}
				],
				meta: {
					parentNodeId: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
					parentNodeVariable: 'age',
					pValue: null,
					percentOfRoot: 25.7,
					percentOfParent: 81.9
				}
			}
		]
	},
	{
		id: 'fd7baa02-9833-496c-b8fc-1c7745ba6dfa',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: '> 56.00',
				categories: [
					{
						name: '0',
						count: 11,
						percent: 64.71
					},
					{
						name: '1',
						count: 6,
						percent: 35.29
					}
				],
				meta: {
					parentNodeId: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
					parentNodeVariable: 'age',
					pValue: null,
					percentOfRoot: 5.7,
					percentOfParent: 18.1
				}
			}
		]
	},
	{
		id: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
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
					parentNodeId: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
					parentNodeVariable: 'marital_status',
					pValue: 0.21051949690441918,
					percentOfRoot: 35.3,
					percentOfParent: 35.3
				}
			}
		]
	},
	{
		id: '2de79c2c-f10b-4244-a3cb-42e11babea7c',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'South',
				categories: [
					{
						name: '0',
						count: 8,
						percent: 32
					},
					{
						name: '1',
						count: 17,
						percent: 68
					}
				],
				meta: {
					parentNodeId: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
					parentNodeVariable: 'region',
					pValue: null,
					percentOfRoot: 8.3,
					percentOfParent: 23.6
				}
			}
		]
	},
	{
		id: '04b9e815-facf-4007-8419-cd415b71587c',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'West',
				categories: [
					{
						name: '0',
						count: 7,
						percent: 30.43
					},
					{
						name: '1',
						count: 16,
						percent: 69.57
					}
				],
				meta: {
					parentNodeId: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
					parentNodeVariable: 'region',
					pValue: null,
					percentOfRoot: 7.7,
					percentOfParent: 21.7
				}
			}
		]
	},
	{
		id: 'fe81161f-dc55-4953-81b1-29b4d49f152c',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'East',
				categories: [
					{
						name: '0',
						count: 17,
						percent: 51.52
					},
					{
						name: '1',
						count: 16,
						percent: 48.48
					}
				],
				meta: {
					parentNodeId: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
					parentNodeVariable: 'region',
					pValue: null,
					percentOfRoot: 11,
					percentOfParent: 31.1
				}
			}
		]
	},
	{
		id: '6bcbc9d6-b82f-440b-a2c2-e7c441ff49b5',
		position: {
			x: 400,
			y: 0
		},
		draggable: false,
		type: 'textUpdater',
		data: [
			{
				title: 'North',
				categories: [
					{
						name: '0',
						count: 13,
						percent: 52
					},
					{
						name: '1',
						count: 12,
						percent: 48
					}
				],
				meta: {
					parentNodeId: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
					parentNodeVariable: 'region',
					pValue: null,
					percentOfRoot: 8.3,
					percentOfParent: 23.6
				}
			}
		]
	}
];

export const initialEdges: Edge[] = [
	{
		id: 'e10236ad8-88d3-4fd4-b686-43e1b29ef5d3-301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		source: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
		target: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		type: 'step',
		animated: false
	},
	{
		id: 'e301e974c-d5bb-4cf4-b1bd-b95b240d05b5-4f8e134b-a17f-4c0e-ab6d-ccb0802b4b07',
		source: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		target: '4f8e134b-a17f-4c0e-ab6d-ccb0802b4b07',
		type: 'step',
		animated: false
	},
	{
		id: 'e301e974c-d5bb-4cf4-b1bd-b95b240d05b5-b9f7b1f9-1c69-4e36-b795-742826b4a598',
		source: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		target: 'b9f7b1f9-1c69-4e36-b795-742826b4a598',
		type: 'step',
		animated: false
	},
	{
		id: 'e301e974c-d5bb-4cf4-b1bd-b95b240d05b5-4bb85b25-ee3f-464d-93aa-934d26e640c7',
		source: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		target: '4bb85b25-ee3f-464d-93aa-934d26e640c7',
		type: 'step',
		animated: false
	},
	{
		id: 'e301e974c-d5bb-4cf4-b1bd-b95b240d05b5-9d32dcb2-1fdc-426e-b17a-7fd4cbb4c76c',
		source: '301e974c-d5bb-4cf4-b1bd-b95b240d05b5',
		target: '9d32dcb2-1fdc-426e-b17a-7fd4cbb4c76c',
		type: 'step',
		animated: false
	},
	{
		id: 'e10236ad8-88d3-4fd4-b686-43e1b29ef5d3-25845488-91cc-477c-9bf4-1e04f2fd50fa',
		source: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
		target: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
		type: 'step',
		animated: false
	},
	{
		id: 'e25845488-91cc-477c-9bf4-1e04f2fd50fa-fc94db78-37f7-4e40-a303-6c3736238ef3',
		source: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
		target: 'fc94db78-37f7-4e40-a303-6c3736238ef3',
		type: 'step',
		animated: false
	},
	{
		id: 'e25845488-91cc-477c-9bf4-1e04f2fd50fa-fd7baa02-9833-496c-b8fc-1c7745ba6dfa',
		source: '25845488-91cc-477c-9bf4-1e04f2fd50fa',
		target: 'fd7baa02-9833-496c-b8fc-1c7745ba6dfa',
		type: 'step',
		animated: false
	},
	{
		id: 'e10236ad8-88d3-4fd4-b686-43e1b29ef5d3-4aa99be4-dd3e-4dce-8396-094d05b550bd',
		source: '10236ad8-88d3-4fd4-b686-43e1b29ef5d3',
		target: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
		type: 'step',
		animated: false
	},
	{
		id: 'e4aa99be4-dd3e-4dce-8396-094d05b550bd-2de79c2c-f10b-4244-a3cb-42e11babea7c',
		source: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
		target: '2de79c2c-f10b-4244-a3cb-42e11babea7c',
		type: 'step',
		animated: false
	},
	{
		id: 'e4aa99be4-dd3e-4dce-8396-094d05b550bd-04b9e815-facf-4007-8419-cd415b71587c',
		source: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
		target: '04b9e815-facf-4007-8419-cd415b71587c',
		type: 'step',
		animated: false
	},
	{
		id: 'e4aa99be4-dd3e-4dce-8396-094d05b550bd-fe81161f-dc55-4953-81b1-29b4d49f152c',
		source: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
		target: 'fe81161f-dc55-4953-81b1-29b4d49f152c',
		type: 'step',
		animated: false
	},
	{
		id: 'e4aa99be4-dd3e-4dce-8396-094d05b550bd-6bcbc9d6-b82f-440b-a2c2-e7c441ff49b5',
		source: '4aa99be4-dd3e-4dce-8396-094d05b550bd',
		target: '6bcbc9d6-b82f-440b-a2c2-e7c441ff49b5',
		type: 'step',
		animated: false
	}
];
