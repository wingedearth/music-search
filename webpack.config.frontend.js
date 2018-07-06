const _ = require('lodash');
const config = require('./webpack/config');
const plugins = require('./webpack/plugins');

const frontend = _.merge({}, config, {
	name: 'frontend',
	entry: {
		app: './src/client/app.js'
	},
	target: 'web',
	plugins: plugins
});

module.exports = frontend;
