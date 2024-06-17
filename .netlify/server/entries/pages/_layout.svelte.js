import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" data-svelte-h="svelte-1d4kgih"><div class="container-fluid"><a class="navbar-brand" href="/">ScreenStack</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/movies">Movies</a></li></ul></div></div></nav> <div class="container mt-3">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
