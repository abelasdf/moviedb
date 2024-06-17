export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Altura.png","images/Chroniken.png","images/Ebene.png","images/Echo.png","images/Medusa.png","images/Nebel.png","images/Schatten.png","images/Sternenwanderer.png","images/Traum.png","images/Waechter.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C0NXkHly.js","app":"_app/immutable/entry/app.JogeK_Tx.js","imports":["_app/immutable/entry/start.C0NXkHly.js","_app/immutable/chunks/entry.u9S2Gaup.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/entry/app.JogeK_Tx.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/movies",
				pattern: /^\/movies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/movies/[movie_id]",
				pattern: /^\/movies\/([^/]+?)\/?$/,
				params: [{"name":"movie_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
