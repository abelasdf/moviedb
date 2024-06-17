

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BOuWhgIs.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js","_app/immutable/chunks/entry.u9S2Gaup.js"];
export const stylesheets = [];
export const fonts = [];
