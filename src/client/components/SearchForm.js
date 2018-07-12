import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';
import '../css/search-form.scss';

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.sendQuery = event => {
			event.preventDefault();

			const searchString = this.input.value.trim();

			if (searchString.length < 1) return;

			props.actions.updateSearchText(searchString);
			props.actions.updateArtists(`Searching for ${searchString}`);

			// send query to server
			axios
				.post('/search', {
					searchString
				})
				.then(response => {
					const responseData = _.get(response.data, 'matches');
					const responseFound = Array.isArray(responseData) && responseData.length > 0;
					const artists = responseFound ? responseData : 'No results found';

					setTimeout(() => {
						props.actions.updateArtists(artists);
					}, 500);
				})
				.catch(err => {
					console.log('error:', err);
				});

			this.input.value = '';
		};
	}

	get value() {
		return this.input.value;
	}

	set value(value) {
		this.input.value = value;
	}

	render() {
		const { props } = this;
		return (
			<form className="searchform" onSubmit={this.sendQuery}>
				<input
					type="text"
					className="searchform__input"
					placeholder={props.placeholder}
					ref={input => {
						this.input = input;
					}}
				/>
				<input className="searchform__submit" type="submit" value="Search" />
			</form>
		);
	}
}

SearchForm.propTypes = {
	actions: PropTypes.object
};

export default SearchForm;
