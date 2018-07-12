import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/store';
import '../css/information.scss';

const CurrentArtistDetail = props => {
	const { currentArtist } = props;

	return !currentArtist.name ? (
		''
	) : (
		<div className="information__panel-artists">
			<img
				alt={currentArtist.name}
				className="information__artist-image"
				src={currentArtist.imageUri || currentArtist.images[0].url}
			/>
			<div>
				<a
					href={currentArtist.spotifyUri || currentArtist.external_urls.spotify}
					rel="noopener noreferrer"
					target="_blank"
				>
					Click to listen on Spotify
				</a>
			</div>
		</div>
	);
};
class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { store, actions } = this.props;
		const { artistStore } = store;
		const { artists, currentArtist, relatedArtists } = artistStore;

		return (
			<div className="information">
				<div className="information__panels-container">
					<div className="information__artists-container information__panel information__panel-column">
						<div className="information__panel-text">
							<p className="information__panel-title">
								{artists.length > 0 ? 'Search Results' : 'Find Your Favorite Artists'}
							</p>
							<div className="information__artists">
								{artists && Array.isArray(artists) && artists.length > 0 ? (
									artistStore.artists.map((artist, indx) => (
										<div
											className="information__artists-item"
											key={`artist-${indx}`}
											onClick={() => actions.updateCurrentArtist(artist)}
										>
											{artist.name}
										</div>
									))
								) : (
									<div className="information__artists-item">{artists}</div>
								)}
							</div>
						</div>
					</div>
					<div className="information__detail-panels information__panel-column">
						<div className="information__panel information__detail">
							<div className="information__panel-text">
								<p className="information__panel-title">
									{currentArtist.name ? currentArtist.name : 'Get artist profiles'}
								</p>
								<CurrentArtistDetail currentArtist={currentArtist} />
							</div>
						</div>
						<div className="information__panel information__related">
							<div className="information__panel-text">
								<p className="information__panel-title">Discover related artists</p>
								<div className="information__artists">
									{relatedArtists.length > 0
										? relatedArtists.map((band, indx) => (
											<div key={`related-${indx}`} className="information__artists-item">
												<div onClick={() => actions.updateCurrentArtist(band)}>
													{band.name}
												</div>
											</div>
										  ))
										: ''}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Information.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object
};

export default Information;
