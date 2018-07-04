import mongoose from 'mongoose';

const genreArtistSchema = new mongoose.Schema({
	name: String
});

const genreSchema = new mongoose.Schema({
	name: String,
	artists: [genreArtistSchema]
});

export default mongoose.model('Genre', genreSchema);
