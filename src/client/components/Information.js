import React, { Component } from 'react';
import '../css/information.scss';

export default class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="information">
				<div className="information__container">
					<p>This is the Information section.</p>
					<p>Search results will go here.</p>
				</div>
			</div>
		);
	}
}
