const _ = require('lodash');
const config = require('./webpack/config');
const plugins = require('./webpack/plugins');

const frontend = _.merge({}, config, {
	name: 'frontend',
	entry: {
		app: ['./src/client/app.js', './src/client/css/main.scss']
	},
	target: 'web',
	resolve: {
		fallback: {
			fs: false,
			net: false,
			tls: false,
			path: false,
			crypto: false,
			stream: false,
			buffer: false
		}
	},
	plugins: plugins
});

module.exports = frontend;
