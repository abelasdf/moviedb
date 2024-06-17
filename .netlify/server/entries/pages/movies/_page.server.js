import { d as db } from "../../../chunks/db.js";
async function load() {
  return {
    movies: await db.getMovies()
  };
}
export {
  load
};
