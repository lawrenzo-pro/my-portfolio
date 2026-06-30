/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module 'svelte-icons/*' {
	import { SvelteComponent } from 'svelte';
	export default class extends SvelteComponent {}
}
