import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/store';
import '../css/information.scss';

class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { store } = this.props;
		const { artistStore } = store;

		return (
			<div className="information">
				<div className="information__panels-container">
					<div className="information__artists-container information__panel">
						<div className="information__panel-text">
							<p className="information__panel-title">
								{this.props.store.artistStore.artists.length > 0
									? 'Search Results'
									: 'Find Your Favorite Artists'}
							</p>
							<div className="information-artists">
								{artistStore.artists && artistStore.artists.length
									? artistStore.artists.map((artist, indx) => (
										<div className="information__artists-item" key={`artist-${indx}`}>
											{artist.name}
										</div>
									  ))
									: ''}
							</div>
						</div>
					</div>
					<div className="related-container information__panel">
						<div className="information__panel-text">
							<p className="information__panel-title">Related artists will go here.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Information.propTypes = {
	store: PropTypes.object
};

export default Information;
