const _ = require('lodash');
const config = require('./webpack/config');

const frontend = _.merge({}, config, {
	name: 'frontend',
	entry: {
		app: './src/client/app.js'
	},
	target: 'web'
});

module.exports = frontend;
