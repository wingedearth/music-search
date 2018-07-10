import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import '../css/search-form.scss';

export default class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.sendQuery = event => {
			event.preventDefault();

			const searchString = this.input.value.trim();

			if (searchString.length < 1) return;

			console.log('searchString:', searchString);

			// send query to server
			axios
				.post('/search', {
					searchString
				})
				.then(response => {
					console.log('response:', _.get(response.data, 'matches'));
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
