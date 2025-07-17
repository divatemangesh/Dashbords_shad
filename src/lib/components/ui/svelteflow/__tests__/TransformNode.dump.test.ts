// src/lib/components/ui/svelteflow/__tests__/TransformNode.apiDump.test.ts
import { generateFlowData } from '$lib/components/ui/svelteflow/TransformNode';
import { fetchTree } from '$lib/services/api';

describe('live API → generateFlowData dump', () => {
	let apiData: any;

	beforeAll(async () => {
		const params = {
			session_id: '<session id  here if only http_cookie is not used >',
			target_variable: 'is_high_income',
			numeric_strategy: 'threshold',
			cat_strategy: 'chi2',
			max_depth: 1,
			node_id: 'dae390bd-c907-42ed-94bd-e977e9f7794d'
		};
		apiData = await fetchTree(params);
	});

	it('logs nodes & edges from live API', () => {
		const { nodes, edges } = generateFlowData(apiData);
		console.log('\n=== NODES ===\n', JSON.stringify(nodes, null, 2));
		console.log('\n=== EDGES ===\n', JSON.stringify(edges, null, 2));
		expect(nodes.length).toBeGreaterThan(0);
		expect(edges.length).toBeGreaterThanOrEqual(0);
	});
});
