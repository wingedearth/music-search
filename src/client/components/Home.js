import React from 'react';
import Nav from './Nav';
import Information from './Information';
import Footer from './Footer';
import StoreConsumer from '../lib/StoreConsumer';
import '../../assets/images/music-bg.jpeg';
import '../css/home.scss';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Nav />
				<StoreConsumer>
					<Information />
				</StoreConsumer>
				<Footer />
			</div>
		);
	}
}
