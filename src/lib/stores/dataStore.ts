import { writable } from 'svelte/store';

// src/lib/stores/dataStore.ts
export const apiData = writable(null as any);
export const apiError = writable<string | null>(null);
export const apiStatus = writable<{ code: number; loading: boolean }>({
	code: 0,
	loading: false
});
