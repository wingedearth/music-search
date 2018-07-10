import React, { Component } from 'react';
import '../css/information.scss';

export default class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="information">
				<div className="information__panels-container">
					<div className="information__artists-container information__panel">
						<p className="information__panel-text">Search results will go here.</p>
					</div>
					<div className="related-container information__panel">
						<p className="information__panel-text">Related artists will go here.</p>
					</div>
				</div>
			</div>
		);
	}
}
