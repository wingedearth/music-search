import React, { Component, createContext } from 'react';
import axios from 'axios';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

const { Provider } = Context;
const config = { headers: { 'content-type': 'application/json' } };

/**
 * send an axios GET request with content-type: application/json header
 * @param {string} url - must include query param for genre
 */
function callAxios(genre) {
	const url = `/genre?genre=${encodeURIComponent(genre)}`;

	return axios.get(url, config);
}
class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = window.__INITIAL_STATE;
	}

	render() {
		const { children } = this.props;

		return (
			<Provider
				value={{
					store: this.state,
					actions: {
						/**
						 * Replaces searchText in searchStore with latest searchString
						 * @param {string} searchString - from search form
						 */
						updateSearchText: searchString => {
							const { searchStore } = this.state;
							const newSearchStore = Object.assign({}, searchStore, { searchText: searchString });

							this.setState({ searchStore: newSearchStore });
						},

						/**
						 * Replaces artists array in artistStore with array passed in as argument
						 * @param {array} artists - list of artist objects
						 */
						updateArtists: artists => {
							const { artistStore } = this.state;
							const newArtistStore = Object.assign({}, artistStore, { artists });
							this.setState({ artistStore: newArtistStore });
						},

						/**
						 * Replaces currentArtist in artistStore
						 * @param {obj} currentArtist - selected by mouse click
						 */
						updateCurrentArtist: currentArtist => {
							const self = this;
							const { artistStore } = this.state;
							const { genres } = currentArtist;
							const updatedGenres = genres.map(genre => {
								return typeof genre === 'object' ? genre.genre : genre;
							});
							const relatedArtists = [];

							console.log('currentArtist:', currentArtist);

							// Send a GET request for each genre to retrieve artists matching the genre
							axios.all(updatedGenres.map(callAxios)).then(responses => {
								responses.forEach(response => {
									response.data.forEach(relatedArtist => {
										relatedArtists.push(relatedArtist);
									});
								});

								// remove duplicates
								const uniqueRelatedArtists = _.uniqBy(relatedArtists, 'spotifyId');

								// sort by popularity
								const orderedRelatedArtists = _.orderBy(uniqueRelatedArtists, 'popularity', 'desc');

								// limit related artists to no more than the 50 most popular
								const limitedRelatedArtists = orderedRelatedArtists.length >= 50
									? _.slice(orderedRelatedArtists, 0, 50)
									: orderedRelatedArtists;

								// prepare updates to artistStore (currentArtist, relatedArtist)
								const newArtistStore = Object.assign({}, artistStore, {
									currentArtist,
									relatedArtists: limitedRelatedArtists
								});

								// update artistStore
								self.setState({ artistStore: newArtistStore });
							});
						}
					}
				}}
			>
				{children}
			</Provider>
		);
	}
}

StoreProvider.propTypes = {
	children: PropTypes.object
};

export default StoreProvider;
