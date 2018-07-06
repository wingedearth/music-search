import React from 'react';
import { MAIN_TITLE } from '../../assets/constants';
// import '../../client/css/main.css';

export class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Home">
				<div className="content">{MAIN_TITLE}</div>
				<div>This is from the Home component.</div>
			</div>
		);
	}
}

export default Home;
