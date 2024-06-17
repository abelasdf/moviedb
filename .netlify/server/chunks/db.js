import { MongoClient, ObjectId } from "mongodb";
const DB_URI = "mongodb+srv://admin:AgUmrPGpIhBTAILi@cluster0.csarzgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("ScreenStackDB");
async function getMovies() {
  let movies = [];
  try {
    const collection = db.collection("movies");
    const query = {};
    movies = await collection.find(query).toArray();
    movies.forEach((movie) => {
      movie._id = movie._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return movies;
}
async function getMovie(id) {
  let movie = null;
  try {
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) };
    movie = await collection.findOne(query);
    if (!movie) {
      console.log("No movie with id " + id);
    } else {
      movie._id = movie._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return movie;
}
const db$1 = {
  getMovies,
  getMovie
};
export {
  db$1 as d
};
