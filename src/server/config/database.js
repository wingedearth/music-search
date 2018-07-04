import mongoose from 'mongoose';
import dotenv from 'dotenv';
import net from 'net';

dotenv.load();

// if not production env, use local MongoDB. Otherwise used hosted MongoDB.
const databasePath =
	process.env.ENVIRONMENT !== 'production' ? `mongodb://localhost:27017/musicsearch` : process.env.DATABASE_URL;

// If using local MongoDB, make sure it's turned on.
if (process.env.ENVIRONMENT !== 'production') {
	net.connect(
		27017,
		'localhost'
	).on('error', () => {
		console.log('BOW BEFORE THE MONGOD, FOOL!');
		console.log(
			'That is to say, enter "mongod" in the command line to start local MongoDB, then restart this server'
		);
		process.exit(0);
	});
}

// connect to MongoDB
mongoose
	.connect(databasePath)
	.then(data => {
		console.log('Connected to MongoDB.');
		return data;
	})
	.catch(err => {
		console.log('Error connecting to MongoDB');
		console.log(err.message);
	});

// export the connection
export default mongoose;
