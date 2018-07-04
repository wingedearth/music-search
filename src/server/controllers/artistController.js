import _ from 'lodash';
import Artist from '../models/artist';

function addArtist(artistData) {
	const { name, popularity } = artistData;
	const spotifyId = artistData.id;
	const uri = artistData.href;
	const spotifyUri = artistData.external_urls.spotify;
	const imageUri = artistData.images[0].url;

	const genres = artistData.genres.map(genre => {
		return { genre };
	});

	if (name && spotifyId && genres.length > 0) {
		const artist = new Artist();

		_.merge(artist, { name, spotifyId, genres, uri, spotifyUri, imageUri, popularity });

		artist.save();
		console.log(`${artist.name} has been saved into the database.`);
		return artist;
	}
	console.log('insufficient data to add artist');
}

function verifyEmptyRecord(artistData) {
	return new Promise((resolve, reject) => {
		Artist.find({ spotifyId: artistData.id }, (err, records) => {
			if (err) throw err;
			if (!records || records.length < 1) {
				console.log(`Saving ${artistData.name} into the database.`);
				resolve(artistData);
			} else {
				reject(new ReferenceError('Artist record already exists'));
			}
		});
	});
}

export function newArtist(artistData) {
	verifyEmptyRecord(artistData)
		.then(addArtist)
		.catch(err => {
			console.log(err.message);
		});
}

export function getArtists(req, res) {
	const genre = _.get(req.query, 'genre');

	Artist.find({ genres: { $elemMatch: { genre } } }, (err, records) => {
		if (err) {
			res.status(500).send(new ReferenceError(`error searching for artists under genre: ${genre}`));
		} else if (records.length < 1) {
			res.status(204);
		}
		res.json(records);
	});
}
