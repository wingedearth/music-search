import React, { Component } from 'react';
import TextInput from './TextInput';
import { MAIN_TITLE } from '../../assets/constants';
import '../css/nav.scss';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.sendQuery = event => {
			event.preventDefault();

			const searchString = this.text.value.trim();

			if (searchString.length < 1) return;

			console.log('searchString:', searchString);
			this.text.value = '';
		};
	}

	render() {
		return (
			<div className="nav">
				<div className="nav__content">
					<div className="nav__search">
						<form className="nav__form" onSubmit={this.sendQuery}>
							<TextInput
								className="nav__input"
								ref={input => {
									this.text = input;
								}}
								placeholder="Search for Artist"
							/>
							<input className="nav__submit" type="submit" value="Search" />
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
