export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects.svelte"),
	() => import("../../src/routes/team.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"contact": [[0, 2], [1]],
	"projects": [[0, 4], [1]],
	"team": [[0, 5], [1]]
};