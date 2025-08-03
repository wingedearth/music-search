import React, { Component } from 'react';
import SearchForm from './SearchForm';
import StoreConsumer from '../lib/StoreConsumer';
import { MAIN_TITLE } from '../../assets/constants';
import '../css/nav.scss';

export default class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="nav">
				<div className="nav__container">
					<div className="nav__brand">
						<h1 className="nav__title">
							<span className="nav__icon">🎵</span>
							{MAIN_TITLE}
						</h1>
						<p className="nav__subtitle">Discover your next favorite artist</p>
					</div>
					<div className="nav__search">
						<StoreConsumer>
							<SearchForm placeholder="Search for artists..." />
						</StoreConsumer>
					</div>
				</div>
			</nav>
		);
	}
}
