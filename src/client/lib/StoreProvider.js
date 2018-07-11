import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

const { Provider } = Context;

class StoreProvider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, initialState } = this.props;

		return (
			<Provider
				value={{
					state: initialState,
					actions: {
						loghello: () => {
							console.log('Hi Friend!');
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
	children: PropTypes.object,
	initialState: PropTypes.object
};

export default StoreProvider;
