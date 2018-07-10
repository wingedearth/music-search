import React from 'react';
import Nav from './Nav';
import Information from './Information';
import Footer from './Footer';
import '../css/home.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			artists: [],
			currentArtist: {},
			relatedArtists: []
		};
	}

	render() {
		const { artists, currentArtist, relatedArtists } = this.state;

		return (
			<div className="home">
				<Nav />
				<Information artists={artists} currentArtist={currentArtist} relatedArtists={relatedArtists} />
				<Footer />
			</div>
		);
	}
}
