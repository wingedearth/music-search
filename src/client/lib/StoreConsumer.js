import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

class StoreConsumer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children } = this.props;

		return (
			<Context.Consumer>
				{({ state, actions }) =>
					React.Children.map(children, child =>
						cloneElement(child, {
							state,
							actions
						})
					)
				}
			</Context.Consumer>
		);
	}
}

StoreConsumer.propTypes = {
	children: PropTypes.object
};

export default StoreConsumer;
