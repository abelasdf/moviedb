import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: ".movie-card.svelte-5fu9wu{border:1px solid #555;height:100%;background-color:#444;color:white}.details.svelte-5fu9wu{padding:0.5em}.title.svelte-5fu9wu{font-weight:bold;color:grey}a.svelte-5fu9wu{color:lightgrey}",
  map: '{"version":3,"file":"MovieCard.svelte","sources":["MovieCard.svelte"],"sourcesContent":["<script>\\r\\n  export let movie;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"movie-card\\">\\r\\n  <div>\\r\\n    <img class=\\"img-fluid\\" src={movie.poster} alt=\\"\\" />\\r\\n  </div>\\r\\n  <div class=\\"details\\">\\r\\n    <div class=\\"title\\">\\r\\n      <a href={\\"/movies/\\"+ movie._id}>{movie.title}</a>\\r\\n    </div>\\r\\n    <div>\\r\\n      Jahr: {movie.year}\\r\\n    </div>\\r\\n    <div>\\r\\n      Dauer: {movie.length}\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .movie-card {\\r\\n    border: 1px solid #555;\\r\\n    height: 100%;\\r\\n    background-color: #444;\\r\\n    color: white;\\r\\n  }\\r\\n  .details {\\r\\n    padding: 0.5em;\\r\\n  }\\r\\n  .title {\\r\\n    font-weight: bold;\\r\\n    color: grey; \\r\\n  }\\r\\n  a {\\r\\n    color: lightgrey;\\r\\n    \\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsBE,yBAAY,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,KACT,CACA,sBAAS,CACP,OAAO,CAAE,KACX,CACA,oBAAO,CACL,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACT,CACA,eAAE,CACA,KAAK,CAAE,SAET"}'
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="movie-card svelte-5fu9wu"><div><img class="img-fluid"${add_attribute("src", movie.poster, 0)} alt=""></div> <div class="details svelte-5fu9wu"><div class="title svelte-5fu9wu"><a${add_attribute("href", "/movies/" + movie._id, 0)} class="svelte-5fu9wu">${escape(movie.title)}</a></div> <div>Jahr: ${escape(movie.year)}</div> <div>Dauer: ${escape(movie.length)}</div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-2u5tl4"><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p> <div class="row">${each(data.movies, (movie) => {
    return `<div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})} </div>`;
  })}</div>`;
});
export {
  Page as default
};
