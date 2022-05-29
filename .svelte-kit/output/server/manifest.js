export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","Nicholas_Kreitz_resume.pdf","favicon.png","img/blackjack_1.png","img/blackjack_2.png","img/closeup.png","img/crazy-crypto.png","img/daisyui.jpeg","img/egoh-site.png","img/fridge_1.png","img/fridge_2.png","img/nick-color.jpeg","img/nmi-logo.jpeg","img/sveltekit.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-55f2827d.js","js":["start-55f2827d.js","chunks/index-faf28bcd.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "nmi",
				pattern: /^\/nmi\/?$/,
				names: [],
				types: [],
				path: "/nmi",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "resume",
				pattern: /^\/resume\/?$/,
				names: [],
				types: [],
				path: "/resume",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
