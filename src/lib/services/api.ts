// src/lib/services/api.ts

export interface TreeParams {
	session_id: string;
	target_variable: string;
	numeric_strategy: string;
	cat_strategy: string;
	max_depth?: number;
	node_id?: string;
}

export async function fetchTree(params: TreeParams) {
	const qs = new URLSearchParams({
		session_id: params.session_id,
		target_variable: params.target_variable,
		numeric_strategy: params.numeric_strategy,
		cat_strategy: params.cat_strategy,
		...(params.max_depth !== undefined ? { max_depth: String(params.max_depth) } : {}),
		...(params.node_id ? { node_id: params.node_id } : {})
	});

	// const res = await fetch(`http://localhost:8000/api/tree/${params.session_id}?${qs}`, {
	// 	method: 'GET',
	// 	// headers: { 'Content-Type': 'application/json' }
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		Cookie: 'session_id=0dbb98e5-4058-4ec3-9f12-0f7def66bb62'
	// 	}
	// });
	const res = await fetch(`http://localhost:8000/api/ctree`, {
		method: 'GET',
		// headers: { 'Content-Type': 'application/json' }
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	});

	if (!res.ok) {
		throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	}
	console.log('fetchTree response:', res);
	return res.json();
}

export async function createSession() {
	const res = await fetch('http://localhost:8000/api/create_session', {
		method: 'GET',
		credentials: 'include' // Important: ensures cookies are set in the browser
	});
	if (!res.ok) {
		throw new Error(`HTTP ${res.status}: ${res.statusText}`);
	}
	return res.json(); // { message: "Session created", session_id: "..." }
}
