import mongoose from 'mongoose';

const artistGenreSchema = new mongoose.Schema({
	genre: String
});

const artistSchema = new mongoose.Schema({
	name: String,
	spotifyId: String,
	genres: [artistGenreSchema],
	uri: String,
	spotifyUri: String,
	imageUri: String,
	popularity: Number
});

export default mongoose.model('Artist', artistSchema);
