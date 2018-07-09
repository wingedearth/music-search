import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

import './css/main.scss';

class App extends React.Component {
	render() {
		return (
			<div className="AppContainer">
				<Home />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));
