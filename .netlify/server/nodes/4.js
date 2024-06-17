import * as server from '../entries/pages/movies/_movie_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_movie_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/movies/[movie_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.VcTacB7j.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
