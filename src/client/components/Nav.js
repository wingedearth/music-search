import React from 'react';
import { MAIN_TITLE } from '../../assets/constants';
import '../css/nav.scss';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	artistSearch() {
		const self = this;
	}

	render() {
		return (
			<div className="nav">
				<div className="nav__content">
					<div className="nav__search">
						<form onSubmit={this.artistSearch}>
							<input className="nav__input" placeholder="Search for Artist" />
						</form>
					</div>
					<div className="nav__title">
						<div className="nav__title-text">{MAIN_TITLE}</div>
					</div>
				</div>
			</div>
		);
	}
}