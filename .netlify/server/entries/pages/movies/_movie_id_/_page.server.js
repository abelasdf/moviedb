import { d as db } from "../../../../chunks/db.js";
async function load({ params }) {
  return {
    movie: await db.getMovie(params.movie_id)
  };
}
export {
  load
};
