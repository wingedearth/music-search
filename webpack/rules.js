const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRule = {
	use: {
		loader: 'babel-loader'
	},
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/]
};

const scssRule = {
	test: /\.scss$/,
	use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};

const rules = [jsRule, scssRule];

module.exports = rules;
