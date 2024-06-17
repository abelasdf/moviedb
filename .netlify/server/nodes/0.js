

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.shjf85V7.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js"];
export const stylesheets = ["_app/immutable/assets/0.BfDSESxB.css"];
export const fonts = [];
