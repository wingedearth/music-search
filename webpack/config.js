const path = require('path');
const helpers = require('./helpers');
const rules = require('./rules');

const config = {
	mode: helpers.isProd() ? 'production' : 'development',
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'build')
	},
	resolve: {
		modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
		extensions: ['.js', '.es6', '.json', '.css']
	},
	module: {
		rules: rules
	}
};

module.exports = config;
