
import { MongoClient, ObjectId } from 'mongodb'; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db('ScreenStackDB') // select database

//////////////////////////////////////////
// Movies
//////////////////////////////////////////

// Get all movies
async function getMovies() {
    let movies = [];
    try {
        const collection = db.collection('movies');

        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
        const query = {};

        // Get all objects that match the query
        movies = await collection.find(query).toArray();
        movies.forEach(movie => {
            movie._id = movie._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        console.log(error)
        // TODO: errorhandling
    }
    return movies;
}

// Get movie by id
async function getMovie(id) {
    let movie = null;
    try {
        const collection = db.collection('movies');
        const query = { _id: new ObjectId(id) }; // filter by id
        movie = await collection.findOne(query);

        if (!movie) {
            console.log("No movie with id " + id);
            // TODO: errorhandling
        } else {
            movie._id = movie._id.toString(); // convert ObjectId to String
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return movie;
}

// export all functions so that they can be used in other files
export default {
    getMovies,
    getMovie
}
