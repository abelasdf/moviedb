

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.kuPtDtd_.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CEjQ7MFN.js"];
export const stylesheets = [];
export const fonts = [];
