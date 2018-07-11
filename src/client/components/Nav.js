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
			<div className="nav">
				<div className="nav__content">
					<div className="nav__search">
						<StoreConsumer>
							<SearchForm placeholder="Search for Artist" />
						</StoreConsumer>
					</div>
					<div className="nav__title">
						<div className="nav__title-text">{MAIN_TITLE}</div>
					</div>
				</div>
			</div>
		);
	}
}
