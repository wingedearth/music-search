import base64 from 'base-64';
import request from 'superagent';
import { spotifyClientLoginUri, spotifySearchUri } from '../../assets/constants';
import { newArtist } from './artistController';

/**
 * Authenticates client application with Spotify API
 * @returns {Promise} - return access token upon completion.
 */
function auth() {
	const pre = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
	const loginAuth = base64.encode(pre);
	const loginHeader = `Basic ${loginAuth}`;

	return request
		.post(spotifyClientLoginUri)
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.set('Authorization', loginHeader)
		.send({ grant_type: 'client_credentials' })
		.then(resp => resp.body.access_token)
		.catch(err => {
			console.log('client login authorization failed');
			throw err;
		});
}

/**
 * Ensure each matched artist is stored in database
 * @param {array} matchedArtists - search result artists having one or more genres
 */
function storeArtistsInDb(matchedArtists) {
	matchedArtists.forEach(artist => {
		if (artist.name && artist.id) {
			newArtist(artist);
		}
	});
}

export default (req, res) => {
	const { searchString } = req.body;

	auth().then(token => {
		request
			.get(spotifySearchUri)
			.query({ type: 'artist', q: searchString })
			.set('Authorization', `Bearer ${token}`)
			.then(resp => {
				const searchResults = JSON.parse(resp.text);

				// strip out artists without genres
				const matchedArtists = searchResults.artists.items.filter(artist => artist.genres.length > 0);

				storeArtistsInDb(matchedArtists);

				res.send({
					searchString,
					matches: matchedArtists
				});
			})
			.catch(err => {
				console.log('search request error');
				console.log(err.message);
				return err;
			});
	});
};
