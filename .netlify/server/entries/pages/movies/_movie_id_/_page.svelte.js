import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a href="/movies" data-svelte-h="svelte-2nzh0h">Back</a> <h1>${escape(data.movie.title)}</h1> <div class="row mt-3"><div class="col-3"><img${add_attribute("src", data.movie.poster, 0)}${add_attribute("alt", data.movie.title, 0)}></div> <div class="col"><p>Jahr: ${escape(data.movie.year)}</p> <p>Dauer: ${escape(data.movie.length)}</p> <ul>${each(data.movie.actors, (actors) => {
    return `<li>${escape(actors)}</li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
