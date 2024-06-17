import * as server from '../entries/pages/movies/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movies/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/movies/+page.server.js";
export const imports = ["_app/immutable/nodes/3.CGTuAZSS.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.DgHkB4O5.css"];
export const fonts = [];
