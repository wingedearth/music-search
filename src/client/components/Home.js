import React from 'react';
import Nav from './Nav';
import Information from './Information';
import Footer from './Footer';
import '../css/home.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<Nav />
				<Information />
				<Footer />
			</div>
		);
	}
}
