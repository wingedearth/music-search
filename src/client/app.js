import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './lib/StoreProvider';
import StoreConsumer from './lib/StoreConsumer';
import Home from './components/Home';
import './css/main.scss';

/**
 * @param  {func} fn callback to run when DOM is ready
 */
function whenDOMIsReady(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', () => {
			if (document.readyState !== 'loading') {
				fn();
			}
		});
	}
}

class App extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="AppContainer">
				<Home />
			</div>
		);
	}
}

/**
 * start app when DOM is loaded
 */
function startApp() {
	const mainElement = document.getElementById('main');
	const initialState = window.__INITIAL_STATE;
	const renderElement = (
		<StoreProvider initialState={initialState}>
			<StoreConsumer>
				<App />
			</StoreConsumer>
		</StoreProvider>
	);

	ReactDOM.render(renderElement, mainElement);
}

whenDOMIsReady(startApp);
