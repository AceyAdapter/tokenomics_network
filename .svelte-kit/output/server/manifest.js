export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","img/daisyui.jpeg","img/sveltekit.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
<<<<<<< HEAD
		entry: {"file":"start-17435f3d.js","js":["start-17435f3d.js","chunks/index-b6926417.js"],"css":[]},
=======
		entry: {"file":"start-86367193.js","js":["start-86367193.js","chunks/index-b6926417.js"],"css":[]},
>>>>>>> working
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
