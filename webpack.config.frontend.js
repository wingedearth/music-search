const _ = require('lodash');
const config = require('./webpack/config');

const frontend = _.merge({}, config, {
	name: 'frontend',
	entry: {
		main: './src/client/app.js'
	},
	target: 'web'
});

module.exports = frontend;
