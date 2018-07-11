import React, { Component, createContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

const { Provider } = Context;

class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = window.__INITIAL_STATE;
	}

	render() {
		const self = this;
		const { children } = this.props;

		return (
			<Provider
				value={{
					store: this.state,
					actions: {
						loghello: () => {
							console.log('Hi Friend!');
						},
						updateVenture: venture => {
							const { mainStore } = this.state;
							const newMainStore = Object.assign({}, mainStore, { venture });
							self.setState({ mainStore: newMainStore });
						},

						/**
						 * Replaces artists array in artistStore with array passed in as argument
						 * @param {array} artists - list of artist objects
						 */
						updateArtists: artists => {
							const { artistStore } = this.state;
							const newArtistStore = Object.assign({}, artistStore, { artists });
							this.setState({ artistStore: newArtistStore });
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
