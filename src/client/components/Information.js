import React, { Component } from 'react';
import { Context } from '../store/store';
import '../css/information.scss';

export default class Information extends Component {
	render() {
		return (
			<div className="information">
				<div className="information__panels-container">
					<div className="information__artists-container information__panel">
						<p className="information__panel-text">Search results:</p>
						<ul>
							<Context.Consumer>
								{({ state }) => {
									const { mainStore } = state;

									return mainStore.venture && mainStore.venture.length
										? mainStore.venture.map((person, indx) => (
											<li key={`venture-${indx}`}>{person}</li>
										  ))
										: '';
								}}
							</Context.Consumer>
						</ul>
					</div>
					<div className="related-container information__panel">
						<p className="information__panel-text">Related artists will go here.</p>
					</div>
				</div>
			</div>
		);
	}
}
