const _ = require('lodash');
const config = require('./webpack/config');

const backend = _.merge({}, config, {
	name: 'backend',
	entry: {
		server: './src/server/server.js'
	},
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false
	}
});

module.exports = backend;
