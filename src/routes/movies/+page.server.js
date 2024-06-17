import db from "$lib/server/db.js";

// see https://kit.svelte.dev/docs/load
export async function load() {
  return {
    movies: await db.getMovies()
  };
}
